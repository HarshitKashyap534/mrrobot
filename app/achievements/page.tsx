"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Search, Trophy, Filter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackgroundGrid } from "@/components/background-grid"

interface Achievement {
  id: number
  contributors: string[]
  year: string
  eventName: string
  achievement: string
}

export default function AchievementsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [yearFilter, setYearFilter] = useState("all")

  // Achievements data from the provided table
  const achievements: Achievement[] = [
    {
      id: 1,
      contributors: ["Akash Mohanty", "Prateeksha Nair", "Nishal Shah"],
      year: "2023",
      eventName: "Forensic Hackathon 2023 - NFSU Gandhinagar",
      achievement: "1st Rank",
    },
    {
      id: 2,
      contributors: ["Harshit Kashyap", "Hardik Kashyap", "Darshit Anadkat", "Jayrajsinh Gohil"],
      year: "2024",
      eventName: "Code Carnival - Atmiya University",
      achievement: "Top 15 & Finalist",
    },
    {
      id: 3,
      contributors: ["Darshit Anadkat","Hardik Kashyap", "Ravi Kumar", "Prince Khunt", "Keval Vora", "Dhruv Gangdev"],
      year: "2023",
      eventName: "New India Vibrant Hackathon 2023",
      achievement: "1st Rank",
    },
    {
      id: 4,
      contributors: ["Mr. Devang Chudasama"],
      year: "2024",
      eventName: "Finnovate Hack 2024 - IIEC, IIT Gandhinagar",
      achievement: "3rd Rank",
    },
    {
      id: 5,
      contributors: ["Deepani V. S", "Nandigama Subramanyam"],
      year: "2024",
      eventName: "IdeaThon - Women in CyberSecurity (WiCyS) chapter at Atmiya University",
      achievement: "1st Rank",
    },
    {
      id: 6,
      contributors: ["Dev Tanna", "Naishadh Gohil", "Jayrajsinh Gohil"],
      year: "2024",
      eventName: "Web Horizons: Exploring the Digital Landscape - Computer Engineering Department, Marwadi University",
      achievement: "3rd Rank",
    },
    {
      id: 7,
      contributors: ["Foram Kundalia"],
      year: "2023",
      eventName: "SIF (Science Innovation Festival) - MANIT, Bhopal",
      achievement: "Top 100",
    },
    {
      id: 8,
      contributors: ["Khushal Kaldare"],
      year: "2023",
      eventName: "SIF (Science Innovation Festival) - MANIT, Bhopal",
      achievement: "Top 100",
    },
    {
      id: 9,
      contributors: ["Foram Kundalia"],
      year: "2023",
      eventName: "SmartIdeathon - GITAM",
      achievement: "Top 32",
    },
    {
      id: 10,
      contributors: ["Khushal Kaldare"],
      year: "2023",
      eventName: "SmartIdeathon - GITAM",
      achievement: "Top 32",
    },
    {
      id: 11,
      contributors: ["Adolphus MN Gaye", "Walden Blessing Dorr"],
      year: "2024",
      eventName: "IdeaThon - Women in CyberSecurity (WiCyS) chapter at Atmiya University",
      achievement: "2nd Rank",
    },
    {
      id: 12,
      contributors: ["Ms. Ruchita Rathod"],
      year: "2023",
      eventName: "SmartIdeathon - GITAM",
      achievement: "Top 32",
    },
    {
      id: 13,
      contributors: ["Ms. Ruchita Rathod"],
      year: "2023",
      eventName: "Azadi ka Amrit Mahotsav Hackathon 2023 - SSIP (Gujrat Government)",
      achievement: "Final Round",
    },
    {
      id: 14,
      contributors: ["Teesha Kshatriya", "Neel Dholakia", "Aksha Pilani", "Vatsal Ved"],
      year: "2022",
      eventName: "Smart India Hackathon - Ministry of Education, Gov. Of India",
      achievement: "1st Rank",
    },
    {
      id: 15,
      contributors: ["Reet Jain", "Vignesh Sai", "Ananya Aditya", "Tanya Sharma", "Mahek Morzaria"],
      year: "2023",
      eventName: "Smart India Hackathon - Ministry of Education, Gov. Of India",
      achievement: "Finalist",
    },
    {
      id: 16,
      contributors: ["Shashank Agrawal", "Jaineeel Chatralia", "Shaubhgya Vishwakarma", "Kirtan Singh", "Vikas Kumar", "Raukaj"],
      year: "2024",
      eventName: "Smart India Hackathon - Ministry of Education, Gov. Of India",
      achievement: "Finalist",
    },
    {
      id: 17,
      contributors: ["Bhavdeep Singh Krishnawat", "Raj Panjawani"],
      year: "2022",
      eventName: "Flipkart Grid 3.0",
      achievement: "Top 10 among 10000 Team",
    },
    {
      id: 18,
      contributors: ["Harshit Kashyap", "Ankur Mani", "Shaubhgya Vishwakarma", "Khanjan Damani"],
      year: "2024",
      eventName: "Flipkart Grid 6.0",
      achievement: "Top 50 among 20000 Team",
    },
    {
      id: 19,
      contributors: ["Khushagra Pandya", "Disha Parmar", "Tushar Thoriya"],
      year: "2023",
      eventName: "SSIP 1.0 - Gov. OF Gujarat",
      achievement: "1st Runner-up",
    },
    {
      id: 20,
      contributors: ["Satwik Kishore", "Yash Sekhar", "Dipak"],
      year: "2023",
      eventName: "Intellify - Marwadi University",
      achievement: "1st Rank",
    },
    {
      id: 21,
      contributors: ["Harshit Kashyap", "Mitanshu Vadnagra", "Ankur Mani"],
      year: "2024",
      eventName: "Postman API Challenge - POSTMAN",
      achievement: "1st Rank",
    },
    {
      id: 22,
      contributors: ["Satwik Kishore", "Niharika Joshi"],
      year: "2025",
      eventName: "Elephant Tank - D.Y Patil",
      achievement: "1st rank",
    },
  ]

  // Get unique years for filtering
  const years = ["all", ...new Set(achievements.map((achievement) => achievement.year))].sort().reverse()

  // Filter achievements based on search query and year filter
  const filteredAchievements = achievements.filter((achievement) => {
    const matchesSearch =
      achievement.contributors.some((contributor) => contributor.toLowerCase().includes(searchQuery.toLowerCase())) ||
      achievement.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      achievement.achievement.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesYear = yearFilter === "all" || achievement.year === yearFilter

    return matchesSearch && matchesYear
  })

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1 relative">
        <BackgroundGrid />
        <div className="container px-4 py-16 md:px-6 md:py-24">
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-4"
            >
              <ArrowLeft className="mr-1 size-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold tracking-tight mb-4">Achievements</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Celebrating the innovative accomplishments of our talented students and club members.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="relative w-full sm:w-[300px]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  placeholder="Search achievements..."
                  className="pl-10 rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Filter className="mr-2 size-4" />
                    {yearFilter === "all" ? "All Years" : `Year: ${yearFilter}`}
                    <ChevronDown className="ml-2 size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {years.map((year) => (
                    <DropdownMenuItem key={year} onClick={() => setYearFilter(year)}>
                      {year === "all" ? "All Years" : year}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {filteredAchievements.length > 0 ? (
            <>
              {/* Mobile/Tablet View - Cards */}
              <div className="block md:hidden space-y-4">
                {filteredAchievements.map((achievement, i) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card className="border-border/40 bg-background/95 backdrop-blur">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                            <Trophy className="size-5" />
                          </div>
                          <div className="space-y-2 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{achievement.achievement}</span>
                              <Badge variant="outline" className="ml-auto">{achievement.year}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{achievement.eventName}</p>
                            <div className="flex flex-wrap gap-2">
                              {achievement.contributors.map((contributor, j) => (
                                <Badge key={j} variant="secondary" className="bg-secondary/50">
                                  {contributor}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Desktop View - Table */}
              <div className="hidden md:block rounded-lg border border-border/40 bg-background/95 backdrop-blur">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border/40">
                        <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Achievement</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Event Name</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Contributors</th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredAchievements.map((achievement, i) => (
                        <motion.tr
                          key={achievement.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="border-b border-border/40 last:border-0 hover:bg-muted/50"
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <Trophy className="size-4 text-primary" />
                              <span className="font-medium">{achievement.achievement}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">{achievement.eventName}</td>
                          <td className="px-6 py-4">
                            <div className="flex flex-wrap gap-2">
                              {achievement.contributors.map((contributor, j) => (
                                <Badge key={j} variant="secondary" className="bg-secondary/50">
                                  {contributor}
                                </Badge>
                              ))}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <Badge variant="outline">{achievement.year}</Badge>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="size-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <Trophy className="size-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-2">No achievements found</h3>
              <p className="text-muted-foreground max-w-md">
                We couldn't find any achievements matching your search criteria. Try adjusting your search or filter.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

