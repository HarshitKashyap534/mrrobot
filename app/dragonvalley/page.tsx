"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  BarChart3,
  Box,
  ChevronRight,
  Download,
  Home,
  Package,
  Search,
  X,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { createClient } from "@/lib/supabase/client"
import { BackgroundGrid } from "@/components/background-grid"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [components, setComponents] = useState([])
  const [issues, setIssues] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [editingComponent, setEditingComponent] = useState(null)
  const [newComponentData, setNewComponentData] = useState({
    name: "",
    description: "",
    use_case: "",
    category: "",
    available_quantity: 0,
  })
  const { toast } = useToast()
  const supabase = createClient()
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = () => {
      const adminAuthenticated = localStorage.getItem("adminAuthenticated")
      if (adminAuthenticated !== "true") {
        router.push("/dragonvalley/login")
      } else {
        setIsAuthenticated(true)
        fetchData()
      }
    }

    checkAuth()
  }, [router])

  const fetchData = async () => {
    setLoading(true)
    try {
      // Fetch components
      const { data: componentsData, error: componentsError } = await supabase
        .from("components")
        .select("*")
        .order("name")

      if (componentsError) {
        console.error("Components fetch error:", componentsError)
        throw new Error("Failed to fetch components")
      }

      // Fetch issues with related items
      const { data: issuesData, error: issuesError } = await supabase
        .from("issues")
        .select(`
        *,
        issue_items:issue_items(
          *,
          component:components(name)
        )
      `)
        .order("issue_date", { ascending: false })

      if (issuesError) {
        console.error("Issues fetch error:", issuesError)
        throw new Error("Failed to fetch issues")
      }

      // Normalize department names to prevent case sensitivity issues
      const normalizedIssuesData =
        issuesData?.map((issue) => ({
          ...issue,
          department: issue.department ? issue.department.toUpperCase() : issue.department,
        })) || []

      setComponents(componentsData || [])
      setIssues(normalizedIssuesData)
    } catch (error) {
      console.error("Error fetching data:", error)
      toast({
        title: "Error",
        description: "Failed to load data. Using demo data instead.",
        variant: "destructive",
      })

      // Use mock data for demo
      setComponents(mockComponents)

      // Normalize department names in mock data
      const normalizedMockIssues = mockIssues.map((issue) => ({
        ...issue,
        department: issue.department ? issue.department.toUpperCase() : issue.department,
      }))

      setIssues(normalizedMockIssues)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated")
    router.push("/dragonvalley/login")
  }

  const handleAddComponent = async () => {
    try {
      const { data, error } = await supabase
        .from("components")
        .insert([
          {
            name: newComponentData.name,
            description: newComponentData.description,
            use_case: newComponentData.use_case,
            category: newComponentData.category,
            available_quantity: newComponentData.available_quantity,
            created_at: new Date().toISOString(),
          },
        ])
        .select()

      if (error) throw error

      toast({
        title: "Success",
        description: "Component added successfully",
      })

      // Reset form and refresh data
      setNewComponentData({
        name: "",
        description: "",
        use_case: "",
        category: "",
        available_quantity: 0,
      })

      fetchData()
    } catch (error) {
      console.error("Error adding component:", error)
      toast({
        title: "Error",
        description: "Failed to add component. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleUpdateComponent = async () => {
    if (!editingComponent) return

    try {
      const { error } = await supabase
        .from("components")
        .update({
          name: editingComponent.name,
          description: editingComponent.description,
          use_case: editingComponent.use_case,
          category: editingComponent.category,
          available_quantity: editingComponent.available_quantity,
        })
        .eq("id", editingComponent.id)

      if (error) throw error

      toast({
        title: "Success",
        description: "Component updated successfully",
      })

      setEditingComponent(null)
      fetchData()
    } catch (error) {
      console.error("Error updating component:", error)
      toast({
        title: "Error",
        description: "Failed to update component. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleDeleteComponent = async (id) => {
    if (!confirm("Are you sure you want to delete this component?")) return

    try {
      // Check if component is used in any issues
      const { data, error: checkError } = await supabase
        .from("issue_items")
        .select("id")
        .eq("component_id", id)
        .limit(1)

      if (checkError) throw checkError

      if (data && data.length > 0) {
        toast({
          title: "Cannot Delete",
          description: "This component has been issued and cannot be deleted.",
          variant: "destructive",
        })
        return
      }

      const { error } = await supabase.from("components").delete().eq("id", id)

      if (error) throw error

      toast({
        title: "Success",
        description: "Component deleted successfully",
      })

      fetchData()
    } catch (error) {
      console.error("Error deleting component:", error)
      toast({
        title: "Error",
        description: "Failed to delete component. Please try again.",
        variant: "destructive",
      })
    }
  }

  const exportToCSV = (data, filename) => {
    // Convert data to CSV format
    const headers = Object.keys(data[0]).join(",")
    const rows = data.map((item) => Object.values(item).join(","))
    const csv = [headers, ...rows].join("\n")

    // Create a download link
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${filename}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // Calculate days since issue
  const calculateDaysSince = (dateString) => {
    const issueDate = new Date(dateString)
    const currentDate = new Date()
    const diffTime = Math.abs(currentDate - issueDate)
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60))

    if (diffHours < 24) {
      return { value: diffHours, unit: "hour" }
    } else {
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return { value: diffDays, unit: "day" }
    }
  }

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString() + " " + date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  if (!isAuthenticated) {
    return null // Don't render anything until authentication check is complete
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:flex w-64 flex-col fixed inset-y-0 bg-muted/30 border-r">
          <div className="flex items-center h-16 px-4 border-b">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span>Admin Console</span>
            </Link>
          </div>
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              <Button
                variant={activeTab === "dashboard" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("dashboard")}
              >
                <Home className="mr-2 size-4" />
                Dashboard
              </Button>
              <Button
                variant={activeTab === "inventory" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("inventory")}
              >
                <Package className="mr-2 size-4" />
                Inventory
              </Button>
              <Button
                variant={activeTab === "stocks" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("stocks")}
              >
                <AlertTriangle className="mr-2 size-4" />
                My Stocks
              </Button>
              <Button
                variant={activeTab === "issues" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("issues")}
              >
                <Box className="mr-2 size-4" />
                Issue Records
              </Button>
              <Button
                variant={activeTab === "analytics" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveTab("analytics")}
              >
                <BarChart3 className="mr-2 size-4" />
                Analytics
              </Button>
            </div>
          </nav>
          <div className="p-4 border-t space-y-2">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 size-4" />
                Back to Site
              </Link>
            </Button>
            <Button variant="destructive" className="w-full" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 md:ml-64 flex flex-col">
          <header className="h-16 border-b flex items-center px-6">
            <h1 className="text-xl font-bold">
              {activeTab === "dashboard"
                ? "Dashboard"
                : activeTab === "inventory"
                  ? "Inventory Management"
                  : activeTab === "stocks"
                    ? "My Stocks"
                    : activeTab === "issues"
                      ? "Issue Records"
                      : activeTab === "analytics"
                        ? "Analytics"
                        : "Settings"}
            </h1>
          </header>

          <main className="flex-1 overflow-y-auto p-6">
            <BackgroundGrid />

            {/* Dashboard Tab */}
            {activeTab === "dashboard" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Total Components</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{components.length}</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {components.filter(c => c.available_quantity === 0).length} out of stock
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Total Issues</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">{issues.length}</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        {issues.filter(i => i.status === "issued").length} active issues
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">This Month</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">
                        {issues.filter(i => new Date(i.issue_date).getMonth() === new Date().getMonth()).length}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">New issues this month</p>
                    </CardContent>
                  </Card>
                  
                  <Card
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setActiveTab("stocks")}
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Low Stock Alert</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">
                        {components.filter(c => c.available_quantity > 0 && c.available_quantity < 5).length}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Components with less than 5 units</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Overdue Issues */}
                {issues
                  .filter(
                    issue => 
                      issue.status === "issued" && 
                      calculateDaysSince(issue.issue_date).value > 15 && 
                      calculateDaysSince(issue.issue_date).unit === "day"
                  )
                  .length > 0 && (
                  <Card className="border-amber-200 bg-amber-50/50 dark:bg-amber-950/10 dark:border-amber-900">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-amber-800 dark:text-amber-400 flex items-center gap-2">
                        <AlertTriangle className="size-5" />
                        Overdue Issues
                      </CardTitle>
                      <CardDescription>
                        The following issues have been outstanding for more than 15 days
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {issues
                          .filter(
                            issue => 
                              issue.status === "issued" && 
                              calculateDaysSince(issue.issue_date).value > 15 && 
                              calculateDaysSince(issue.issue_date).unit === "day"
                          )
                          .map((issue, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between border-b border-amber-200 dark:border-amber-900/50 pb-3 last:border-0 last:pb-0"
                            >
                              <div>
                                <p className="font-medium">{issue.issuer_name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {issue.issue_items
                                    ?.map((item) => item.component?.name || `Component #${item.component_id}`)
                                    .join(", ")}
                                </p>
                                <div className="flex items-center gap-2 mt-1">
                                  <p className="text-xs text-muted-foreground">{formatDate(issue.issue_date)}</p>
                                  <Badge
                                    variant="outline"
                                    className="text-amber-700 border-amber-300 bg-amber-100 dark:text-amber-400 dark:border-amber-900 dark:bg-amber-950/50"
                                  >
                                    {calculateDaysSince(issue.issue_date).value} {calculateDaysSince(issue.issue_date).unit}
                                    {calculateDaysSince(issue.issue_date).value === 1 ? "" : "s"} ago
                                  </Badge>
                                </div>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-amber-300 hover:bg-amber-100 dark:border-amber-900 dark:hover:bg-amber-950"
                                onClick={() => {
                                  const modalElement = document.getElementById(`issue-details-${issue.id}`)
                                  if (modalElement) {
                                    modalElement.showModal()
                                  }
                                }}
                              >
                                View Details
                              </Button>
                            </div>
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="col-span-1">
                    <CardHeader>
                      <CardTitle>Out of Stock Components</CardTitle>
                      <CardDescription>Components that need to be restocked</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {components.filter((c) => c.available_quantity === 0).length > 0 ? (
                          <div className="border border-border rounded-lg divide-y divide-border">
                            {components
                              .filter((c) => c.available_quantity === 0)
                              .map((component, i) => (
                                <div key={i} className="p-4 flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">
                                      <Package className="size-4" />
                                    </div>
                                    <div>
                                      <p className="font-medium">{component.name}</p>
                                      <p className="text-xs text-muted-foreground">{component.category}</p>
                                    </div>
                                  </div>
                                  <Badge variant="destructive">Out of Stock</Badge>
                                </div>
                              ))}
                          </div>
                        ) : (
                          <div className="text-center py-8 text-muted-foreground">
                            <p>All components are currently in stock</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" onClick={() => setActiveTab("inventory")}>
                        View Inventory
                        <ChevronRight className="ml-1 size-4" />
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="col-span-1">
                    <CardHeader>
                      <CardTitle>Recent Issues</CardTitle>
                      <CardDescription>Latest component issues</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {issues.slice(0, 5).map((issue, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0"
                          >
                            <div>
                              <p className="font-medium">{issue.issuer_name}</p>
                              <p className="text-sm text-muted-foreground">
                                {issue.issue_items
                                  ?.map((item) => item.component?.name || `Component #${item.component_id}`)
                                  .join(", ")}
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                <p className="text-xs text-muted-foreground">{formatDate(issue.issue_date)}</p>
                                <Badge variant="outline" className="text-xs">
                                  {calculateDaysSince(issue.issue_date).value}{" "}
                                  {calculateDaysSince(issue.issue_date).unit}
                                  {calculateDaysSince(issue.issue_date).value === 1 ? "" : "s"} ago
                                </Badge>
                              </div>
                            </div>
                            <Badge variant={issue.status === "issued" ? "default" : "secondary"}>{issue.status}</Badge>
                          </div>
                        ))}

                        {issues.length === 0 && (
                          <div className="text-center py-8 text-muted-foreground">No recent issues</div>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" onClick={() => setActiveTab("issues")}>
                        View All Issues
                        <ChevronRight className="ml-1 size-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            )}

            {/* Inventory Tab */}
            {activeTab === "inventory" && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative w-full sm:w-[300px]">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
                      <Input
                        placeholder="Search components..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {[...new Set(components.map(c => c.category))].map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => exportToCSV(components, "inventory-export")}>
                      <Download className="mr-2 size-4" />
                      Export
                    </Button>
                    <Button
                      onClick={() => {
                        setEditingComponent(null)
                        const addComponentModal = document.getElementById("add-component-modal")
                        if (addComponentModal) {
                          addComponentModal.showModal()
                        }
                      }}
                    >
                      Add Component
                    </Button>
                  </div>
                </div>

                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead className="text-right">Available</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {loading ? (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center py-8">
                              <div className="flex flex-col items-center justify-center">
                                <div className="size-8 rounded-full border-4 border-primary border-t-transparent animate-spin mb-2"></div>
                                <p className="text-muted-foreground">Loading components...</p>
                              </div>
                            </TableCell>
                          </TableRow>
                        ) : components
                            .filter(c => {
                              const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                                     c.description.toLowerCase().includes(searchQuery.toLowerCase());
                              const matchesCategory = selectedCategory === "all" || c.category === selectedCategory;
                              return matchesSearch && matchesCategory;
                            })
                            .length > 0 ? (
                          components
                            .filter(c => {
                              const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                                     c.description.toLowerCase().includes(searchQuery.toLowerCase());
                              const matchesCategory = selectedCategory === "all" || c.category === selectedCategory;
                              return matchesSearch && matchesCategory;
                            })
                            .map((component) => (
                              <TableRow key={component.id}>
                                <TableCell className="font-medium">{component.name}</TableCell>
                                <TableCell>{component.category}</TableCell>
                                <TableCell className="max-w-[300px] truncate">{component.description}</TableCell>
                                <TableCell className="text-right">
                                  <Badge variant={component.available_quantity > 0 ? "outline" : "destructive"}>
                                    {component.available_quantity}
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                  <div className="flex justify-end gap-2">
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      onClick={() => {
                                        setEditingComponent(component)
                                        const editComponentModal = document.getElementById("edit-component-modal")
                                        if (editComponentModal) {
                                          editComponentModal.showModal()
                                        }
                                      }}
                                    >
                                      Edit
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="text-red-500 hover:text-red-700"
                                      onClick={() => handleDeleteComponent(component.id)}
                                    >
                                      Delete
                                    </Button>
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center py-8">
                              <p className="text-muted-foreground">No components found</p>
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* Add Component Modal */}
                <dialog id="add-component-modal" className="modal bg-background/80 backdrop-blur-sm">
                  <div className="bg-background border border-border rounded-lg shadow-lg max-w-md w-full p-6">
                    <h2 className="text-xl font-bold mb-4">Add New Component</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Name</label>
                        <Input
                          value={newComponentData.name}
                          onChange={(e) => setNewComponentData({ ...newComponentData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Category</label>
                        <Input
                          value={newComponentData.category}
                          onChange={(e) => setNewComponentData({ ...newComponentData, category: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Description</label>
                        <Input
                          value={newComponentData.description}
                          onChange={(e) => setNewComponentData({ ...newComponentData, description: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Use Case</label>
                        <Input
                          value={newComponentData.use_case}
                          onChange={(e) => setNewComponentData({ ...newComponentData, use_case: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Available Quantity</label>
                        <Input
                          type="number"
                          min="0"
                          value={newComponentData.available_quantity}
                          onChange={(e) =>
                            setNewComponentData({
                              ...newComponentData,
                              available_quantity: Number.parseInt(e.target.value) || 0,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-6">
                      <Button
                        variant="outline"
                        onClick={() => {
                          const addComponentModal = document.getElementById("add-component-modal")
                          if (addComponentModal) {
                            addComponentModal.close()
                          }
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={() => {
                          handleAddComponent()
                          const addComponentModal = document.getElementById("add-component-modal")
                          if (addComponentModal) {
                            addComponentModal.close()
                          }
                        }}
                        disabled={!newComponentData.name || !newComponentData.category}
                      >
                        Add Component
                      </Button>
                    </div>
                  </div>
                </dialog>

                {/* Edit Component Modal */}
                <dialog id="edit-component-modal" className="modal bg-background/80 backdrop-blur-sm">
                  {editingComponent && (
                    <div className="bg-background border border-border rounded-lg shadow-lg max-w-md w-full p-6">
                      <h2 className="text-xl font-bold mb-4">Edit Component</h2>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium">Name</label>
                          <Input
                            value={editingComponent.name}
                            onChange={(e) => setEditingComponent({ ...editingComponent, name: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Category</label>
                          <Input
                            value={editingComponent.category}
                            onChange={(e) => setEditingComponent({ ...editingComponent, category: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Description</label>
                          <Input
                            value={editingComponent.description}
                            onChange={(e) => setEditingComponent({ ...editingComponent, description: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Use Case</label>
                          <Input
                            value={editingComponent.use_case}
                            onChange={(e) => setEditingComponent({ ...editingComponent, use_case: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium">Available Quantity</label>
                          <Input
                            type="number"
                            min="0"
                            value={editingComponent.available_quantity}
                            onChange={(e) =>
                              setEditingComponent({
                                ...editingComponent,
                                available_quantity: Number.parseInt(e.target.value) || 0,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="flex justify-end gap-2 mt-6">
                        <Button
                          variant="outline"
                          onClick={() => {
                            const editComponentModal = document.getElementById("edit-component-modal")
                            if (editComponentModal) {
                              editComponentModal.close()
                            }
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={() => {
                            handleUpdateComponent()
                            const editComponentModal = document.getElementById("edit-component-modal")
                            if (editComponentModal) {
                              editComponentModal.close()
                            }
                          }}
                        >
                          Update Component
                        </Button>
                      </div>
                    </div>
                  )}
                </dialog>
              </div>
            )}

            {/* Stocks Tab */}
            {activeTab === "stocks" && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative w-full sm:w-[300px]">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
                      <Input
                        placeholder="Search low stock components..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {[...new Set(components.map(c => c.category))].map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button variant="outline" onClick={() => exportToCSV(
                    components.filter(c => c.available_quantity > 0 && c.available_quantity < 5), 
                    "low-stock-export"
                  )}>
                    <Download className="mr-2 size-4" />
                    Export
                  </Button>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="text-amber-500 size-5" />
                      Low Stock Components
                    </CardTitle>
                    <CardDescription>Components with less than 5 units available that need attention</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead className="text-right">Available</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {loading ? (
                          <TableRow>
                            <TableCell colSpan={4} className="text-center py-8">
                              <div className="flex flex-col items-center justify-center">
                                <div className="size-8 rounded-full border-4 border-primary border-t-transparent animate-spin mb-2"></div>
                                <p className="text-muted-foreground">Loading components...</p>
                              </div>
                            </TableCell>
                          </TableRow>
                        ) : (
                          components
                            .filter(c => {
                              const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                                    c.description.toLowerCase().includes(searchQuery.toLowerCase());
                              const matchesCategory = selectedCategory === "all" || c.category === selectedCategory;
                              const isLowStock = c.available_quantity > 0 && c.available_quantity < 5;
                              return matchesSearch && matchesCategory && isLowStock;
                            })
                            .map((component) => (
                              <TableRow key={component.id}>
                                <TableCell className="font-medium">{component.name}</TableCell>
                                <TableCell>{component.category}</TableCell>
                                <TableCell className="max-w-[300px] truncate">{component.description}</TableCell>
                                <TableCell className="text-right">
                                  <Badge
                                    variant="outline"
                                    className="bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-700"
                                  >
                                    {component.available_quantity}
                                  </Badge>
                                </TableCell>
                              </TableRow>
                            ))
                        )}

                        {components.filter(c => c.available_quantity > 0 && c.available_quantity < 5).length === 0 && (
                          <TableRow>
                            <TableCell colSpan={4} className="text-center py-8">
                              <p className="text-muted-foreground">No low stock components found</p>
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="text-destructive size-5" />
                      Out of Stock Components
                    </CardTitle>
                    <CardDescription>Components that need to be restocked</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {loading ? (
                          <TableRow>
                            <TableCell colSpan={4} className="text-center py-8">
                              <div className="flex flex-col items-center justify-center">
                                <div className="size-8 rounded-full border-4 border-primary border-t-transparent animate-spin mb-2"></div>
                                <p className="text-muted-foreground">Loading components...</p>
                              </div>
                            </TableCell>
                          </TableRow>
                        ) : (
                          components
                            .filter(c => {
                              const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                                    c.description.toLowerCase().includes(searchQuery.toLowerCase());
                              const matchesCategory = selectedCategory === "all" || c.category === selectedCategory;
                              const isOutOfStock = c.available_quantity === 0;
                              return matchesSearch && matchesCategory && isOutOfStock;
                            })
                            .map((component) => (
                              <TableRow key={component.id}>
                                <TableCell className="font-medium">{component.name}</TableCell>
                                <TableCell>{component.category}</TableCell>
                                <TableCell className="max-w-[300px] truncate">{component.description}</TableCell>
                                <TableCell className="text-right">
                                  <Badge variant="destructive">Out of Stock</Badge>
                                </TableCell>
                              </TableRow>
                            ))
                        )}

                        {components.filter(c => c.available_quantity === 0).length === 0 && (
                          <TableRow>
                            <TableCell colSpan={4} className="text-center py-8">
                              <p className="text-muted-foreground">No out of stock components found</p>
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Issues Tab */}
            {activeTab === "issues" && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative w-full sm:w-[300px]">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
                      <Input
                        placeholder="Search by name or GR number..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                      <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="issued">Issued</SelectItem>
                        <SelectItem value="returned">Returned</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button variant="outline" onClick={() => exportToCSV(issues, "issues-export")}>
                    <Download className="mr-2 size-4" />
                    Export
                  </Button>
                </div>

                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Issuer</TableHead>
                          <TableHead>Components</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {loading ? (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center py-8">
                              <div className="flex flex-col items-center justify-center">
                                <div className="size-8 rounded-full border-4 border-primary border-t-transparent animate-spin mb-2"></div>
                                <p className="text-muted-foreground">Loading issues...</p>
                              </div>
                            </TableCell>
                          </TableRow>
                        ) : issues
                            .filter(issue => {
                              const matchesSearch = 
                                (issue.issuer_name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  issue.gr_number?.includes(searchQuery));
                              const matchesStatus = selectedStatus === "all" || issue.status === selectedStatus;
                              return matchesSearch && matchesStatus;
                            })
                            .length > 0 ? (
                          issues
                            .filter(issue => {
                              const matchesSearch = 
                                (issue.issuer_name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  issue.gr_number?.includes(searchQuery));
                              const matchesStatus = selectedStatus === "all" || issue.status === selectedStatus;
                              return matchesSearch && matchesStatus;
                            })
                            .map((issue) => (
                              <TableRow key={issue.id}>
                                <TableCell>
                                  <div>
                                    <p className="font-medium">{issue.issuer_name}</p>
                                    <p className="text-xs text-muted-foreground">GR: {issue.gr_number}</p>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div className="flex flex-wrap gap-1">
                                    {issue.issue_items?.map((item, i) => (
                                      <Badge key={i} variant="outline" className="whitespace-nowrap">
                                        {item.component?.name || `Component #${item.component_id}`} ({item.quantity})
                                      </Badge>
                                    ))}
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div>
                                    {formatDate(issue.issue_date)}
                                    <div className="mt-1">
                                      <Badge variant="outline" className="text-xs">
                                        {calculateDaysSince(issue.issue_date).value}{" "}
                                        {calculateDaysSince(issue.issue_date).unit}
                                        {calculateDaysSince(issue.issue_date).value === 1 ? "" : "s"} ago
                                      </Badge>
                                    </div>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <Badge
                                    variant={issue.status === "issued" ? "default" : "secondary"}
                                    className={
                                      calculateDaysSince(issue.issue_date).value > 15 &&
                                      calculateDaysSince(issue.issue_date).unit === "day" &&
                                      issue.status === "issued"
                                        ? "bg-amber-500"
                                        : ""
                                    }
                                  >
                                    {issue.status}
                                  </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => {
                                      // View issue details
                                      const issueDetailsModal = document.getElementById(`issue-details-${issue.id}`)
                                      if (issueDetailsModal) {
                                        issueDetailsModal.showModal()
                                      }
                                    }}
                                  >
                                    View Details
                                  </Button>

                                  {/* Issue Details Modal */}
                                  <dialog
                                    id={`issue-details-${issue.id}`}
                                    className="modal bg-background/80 backdrop-blur-sm"
                                  >
                                    <div className="bg-background border border-border rounded-lg shadow-lg max-w-2xl w-full p-6">
                                      <div className="flex justify-between items-start mb-6">
                                        <h2 className="text-xl font-bold">Issue Details</h2>
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          className="rounded-full"
                                          onClick={() => {
                                            const closeIssueDetailsModal = document.getElementById(
                                              `issue-details-${issue.id}`,
                                            )
                                            if (closeIssueDetailsModal) {
                                              closeIssueDetailsModal.close()
                                            }
                                          }}
                                        >
                                          <X className="size-4" />
                                        </Button>
                                      </div>

                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                          <h3 className="text-sm font-medium text-muted-foreground mb-2">
                                            Issuer Information
                                          </h3>
                                          <div className="space-y-2">
                                            <div>
                                              <p className="text-sm font-medium">Name</p>
                                              <p>{issue.issuer_name}</p>
                                            </div>
                                            <div>
                                              <p className="text-sm font-medium">Department</p>
                                              <p>{issue.department}</p>
                                            </div>
                                            <div>
                                              <p className="text-sm font-medium">GR Number</p>
                                              <p>{issue.gr_number}</p>
                                            </div>
                                            <div>
                                              <p className="text-sm font-medium">Phone</p>
                                              <p>{issue.phone}</p>
                                            </div>
                                          </div>
                                        </div>

                                        <div>
                                          <h3 className="text-sm font-medium text-muted-foreground mb-2">
                                            Issue Details
                                          </h3>
                                          <div className="space-y-2">
                                            <div>
                                              <p className="text-sm font-medium">Date</p>
                                              <div className="flex items-center gap-2">
                                                <p>{formatDate(issue.issue_date)}</p>
                                                <Badge variant="outline" className="text-xs">
                                                  {calculateDaysSince(issue.issue_date).value}{" "}
                                                  {calculateDaysSince(issue.issue_date).unit}
                                                  {calculateDaysSince(issue.issue_date).value === 1 ? "" : "s"} ago
                                                </Badge>
                                              </div>
                                            </div>
                                            <div>
                                              <p className="text-sm font-medium">Status</p>
                                              <Badge variant={issue.status === "issued" ? "default" : "secondary"}>
                                                {issue.status}
                                              </Badge>
                                            </div>
                                            <div>
                                              <p className="text-sm font-medium">Reason</p>
                                              <p className="text-sm">{issue.reason}</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="mt-6">
                                        <h3 className="text-sm font-medium text-muted-foreground mb-2">Components</h3>
                                        <Table>
                                          <TableHeader>
                                            <TableRow>
                                              <TableHead>Component</TableHead>
                                              <TableHead className="text-right">Quantity</TableHead>
                                            </TableRow>
                                          </TableHeader>
                                          <TableBody>
                                            {issue.issue_items?.map((item, i) => (
                                              <TableRow key={i}>
                                                <TableCell>
                                                  {item.component?.name || `Component #${item.component_id}`}
                                                </TableCell>
                                                <TableCell className="text-right">{item.quantity}</TableCell>
                                              </TableRow>
                                            ))}
                                          </TableBody>
                                        </Table>
                                      </div>

                                      <div className="flex justify-end mt-6">
                                        {issue.status === "issued" && (
                                          <Button
                                            onClick={async () => {
                                              try {
                                                const { error } = await supabase
                                                  .from("issues")
                                                  .update({ status: "returned" })
                                                  .eq("id", issue.id)

                                                if (error) throw error

                                                // Update component quantities
                                                for (const item of issue.issue_items) {
                                                  const component = components.find(c => c.id === item.component_id)
                                                  if (component) {
                                                    const { error: updateError } = await supabase
                                                      .from("components")
                                                      .update({
                                                        available_quantity: component.available_quantity + item.quantity,
                                                      })
                                                      .eq("id", item.component_id)

                                                    if (updateError) throw updateError
                                                  }
                                                }

                                                toast({
                                                  title: "Success",
                                                  description: "Components marked as returned",
                                                })

                                                const issueDetailsModal = document.getElementById(
                                                  `issue-details-${issue.id}`,
                                                )
                                                if (issueDetailsModal) {
                                                  issueDetailsModal.close()
                                                }
                                                fetchData()
                                              } catch (error) {
                                                console.error("Error updating issue:", error)
                                                toast({
                                                  title: "Error",
                                                  description: "Failed to update issue status",
                                                  variant: "destructive",
                                                })
                                              }
                                            }}
                                          >
                                            Mark as Returned
                                          </Button>
                                        )}
                                      </div>
                                    </div>
                                  </dialog>
                                </TableCell>
                              </TableRow>
                            ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center py-8">
                              <p className="text-muted-foreground">No issues found</p>
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === "analytics" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Component Usage</CardTitle>
                    <CardDescription>Most frequently issued components</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      {issues.length > 0 ? (
                        <div className="w-full h-full">
                          <div className="flex flex-col h-full">
                            {/* Calculate component usage from issues */}
                            {Object.entries(
                              issues.reduce((acc, issue) => {
                                issue.issue_items?.forEach((item) => {
                                  const componentName = item.component?.name || `Component #${item.component_id}`
                                  if (acc[componentName]) {
                                    acc[componentName] += item.quantity
                                  } else {
                                    acc[componentName] = item.quantity
                                  }
                                })
                                return acc
                              }, {})
                            )
                              .map(([name, count]) => ({ name, count }))
                              .sort((a, b) => b.count - a.count)
                              .slice(0, 5)
                              .map((item, i) => (
                                <div key={i} className="mb-4">
                                  <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm font-medium">{item.name}</span>
                                    <span className="text-sm text-muted-foreground">{item.count} issues</span>
                                  </div>
                                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                                    <div
                                      className="h-full bg-primary rounded-full"
                                      style={{
                                        width: `${
                                          Math.min(
                                            100,
                                            (item.count /
                                              (Object.entries(
                                                issues.reduce((acc, issue) => {
                                                  issue.issue_items?.forEach((item) => {
                                                    const componentName =
                                                      item.component?.name || `Component #${item.component_id}`
                                                    if (acc[componentName]) {
                                                      acc[componentName] += item.quantity
                                                    } else {
                                                      acc[componentName] = item.quantity
                                                    }
                                                  })
                                                  return acc
                                                }, {})
                                              )
                                                .map(([name, count]) => ({ name, count }))
                                                .sort((a, b) => b.count - a.count)[0]?.count || 1)) *
                                              100
                                          )
                                        }%`,
                                      }}
                                    ></div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <p className="text-muted-foreground">No usage data available</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Department Analysis</CardTitle>
                      <CardDescription>Component usage by department</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {issues.length > 0 ? (
                          Object.entries(
                            issues.reduce((acc, issue) => {
                              if (issue.department) {
                                if (!acc[issue.department]) {
                                  acc[issue.department] = {
                                    issueCount: 0,
                                    componentCount: 0,
                                  }
                                }

                                acc[issue.department].issueCount++

                                // Count components
                                issue.issue_items?.forEach((item) => {
                                  acc[issue.department].componentCount += item.quantity
                                })
                              }
                              return acc
                            }, {})
                          )
                            .map(([name, stats]) => ({ name, ...stats }))
                            .sort((a, b) => b.componentCount - a.componentCount)
                            .map((dept, i) => (
                              <div key={i}>
                                <div className="flex justify-between items-center mb-1">
                                  <span className="text-sm font-medium">{dept.name}</span>
                                  <span className="text-sm text-muted-foreground">{dept.componentCount} components</span>
                                </div>
                                <div className="h-2 bg-muted rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-primary rounded-full"
                                    style={{
                                      width: `${
                                        Math.min(
                                          100,
                                          (dept.componentCount /
                                            (Object.entries(
                                              issues.reduce((acc, issue) => {
                                                if (issue.department) {
                                                  if (!acc[issue.department]) {
                                                    acc[issue.department] = {
                                                      issueCount: 0,
                                                      componentCount: 0,
                                                    }
                                                  }

                                                  acc[issue.department].issueCount++

                                                  // Count components
                                                  issue.issue_items?.forEach((item) => {
                                                    acc[issue.department].componentCount += item.quantity
                                                  })
                                                }
                                                return acc
                                              }, {})
                                            )
                                              .map(([name, stats]) => ({ name, ...stats }))
                                              .sort((a, b) => b.componentCount - a.componentCount)[0]?.componentCount ||
                                              1)) *
                                            100
                                        )
                                      }%`,
                                    }}
                                  ></div>
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">{dept.issueCount} issues</p>
                              </div>
                            ))
                        ) : (
                          <div className="flex items-center justify-center h-[200px]">
                            <p className="text-muted-foreground">No department data available</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Top Students</CardTitle>
                      <CardDescription>Students with most component issues</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {issues.length > 0 ? (
                          Object.entries(
                            issues.reduce((acc, issue) => {
                              if (issue.issuer_name) {
                                if (!acc[issue.issuer_name]) {
                                  acc[issue.issuer_name] = {
                                    department: issue.department,
                                    gr_number: issue.gr_number,
                                    issueCount: 0,
                                    componentCount: 0,
                                  }
                                }

                                acc[issue.issuer_name].issueCount++

                                // Count components
                                issue.issue_items?.forEach((item) => {
                                  acc[issue.issuer_name].componentCount += item.quantity
                                })
                              }
                              return acc
                            }, {})
                          )
                            .map(([name, stats]) => ({ name, ...stats }))
                            .sort((a, b) => b.componentCount - a.componentCount)
                            .slice(0, 5)
                            .map((student, i) => (
                              <div key={i} className="flex items-center justify-between">
                                <div>
                                  <p className="font-medium">{student.name}</p>
                                  <p className="text-xs text-muted-foreground">
                                    {student.department} • GR: {student.gr_number}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="font-medium">{student.componentCount}</p>
                                  <p className="text-xs text-muted-foreground">components</p>
                                </div>
                              </div>
                            ))
                        ) : (
                          <div className="flex items-center justify-center h-[200px]">
                            <p className="text-muted-foreground">No student data available</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

// Mock data for fallback
const mockComponents = [
  {
    id: 1,
    name: "Arduino Uno",
    description: "Microcontroller board based on the ATmega328P",
    use_case: "Prototyping, automation, robotics",
    category: "Microcontroller",
    available_quantity: 15,
    created_at: "2023-01-15T00:00:00.000Z",
  },
  {
    id: 2,
    name: "Raspberry Pi 4",
    description: "Single-board computer with 4GB RAM",
    use_case: "Computing projects requiring Linux",
    category: "Microcontroller",
    available_quantity: 2,
    created_at: "2023-02-15T00:00:00.000Z",
  },
  {
    id: 3,
    name: "Servo Motor",
    description: "Small servo motor for robotics",
    use_case: "Movement control in robotics",
    category: "Motors",
    available_quantity: 8,
    created_at: "2023-03-15T00:00:00.000Z",
  },
  {
    id: 4,
    name: "Ultrasonic Sensor",
    description: "Distance measuring sensor",
    use_case: "Object detection and distance measurement",
    category: "Sensors",
    available_quantity: 4,
    created_at: "2023-04-15T00:00:00.000Z",
  },
  {
    id: 5,
    name: "LED Matrix",
    description: "8x8 LED display matrix",
    use_case: "Visual output for projects",
    category: "Displays",
    available_quantity: 0,
    created_at: "2023-05-15T00:00:00.000Z",
  }
]

const mockIssues = [
  {
    id: 1,
    student_id: "MU12345",
    student_name: "John Doe",
    issuer_name: "John Doe",
    department: "CSE",
    gr_number: "MU12345",
    phone: "9876543210",
    reason: "For robotics project",
    issue_date: "2023-03-10T00:00:00.000Z",
    expected_return_date: "2023-03-17T00:00:00.000Z",
    return_date: null,
    status: "issued",
    issue_items: [
      {
        id: 1,
        component: { name: "Arduino Uno" },
        quantity: 1,
        component_id: 1
      },
      {
        id: 2,
        component: { name: "Servo Motor" },
        quantity: 2,
        component_id: 3
      },
    ],
  },
  {
    id: 2,
    student_id: "MU67890",
    student_name: "Jane Smith",
    issuer_name: "Jane Smith",
    department: "ECE",
    gr_number: "MU67890",
    phone: "9876543211",
    reason: "For IoT project",
    issue_date: "2023-04-15T00:00:00.000Z",
    expected_return_date: "2023-04-22T00:00:00.000Z",
    return_date: "2023-04-20T00:00:00.000Z",
    status: "returned",
    issue_items: [
      {
        id: 3,
        component: { name: "Raspberry Pi 4" },
        quantity: 1,
        component_id: 2
      },
      {
        id: 4,
        component: { name: "Ultrasonic Sensor" },
        quantity: 1,
        component_id: 4
      }
    ],
  }
] 