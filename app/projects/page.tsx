"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ChevronRight, Code, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackgroundGrid } from "@/components/background-grid"

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [mounted, setMounted] = useState(false)
  const [expandedProject, setExpandedProject] = useState(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      id: 1,
      title: "Smart Water Cleaning Boat",
      description:"Autonomous, solar-powered water cleaning boat designed to collect floating waste and help clean water bodies efficiently.",
      detailedDescription: "This innovative project aims to tackle water pollution through a sustainable and tech-driven solution. The boat is equipped with solar panels to power its motors and onboard systems, making it energy-efficient and eco-friendly. It autonomously navigates across water surfaces using GPS and ultrasonic sensors, detecting and collecting floating waste such as plastic, leaves, and other debris through a front-mounted conveyor mechanism. The design prioritizes low maintenance, continuous operation during daylight, and adaptability to various types of water bodies like lakes, ponds, and rivers. The control system integrates obstacle avoidance algorithms and route optimization techniques, enabling the boat to operate safely and effectively without human intervention. A modular waste collection unit ensures easy removal and disposal of accumulated waste. Additionally, the boat features real-time monitoring capabilities using IoT, allowing users to track its location, waste collection status, and system health remotely. This project not only contributes to cleaner aquatic environments but also serves as a scalable solution for urban and rural water bodies facing pollution challenges.",
      image: "/images/jalmitr.jpg",
      organizedBy: "Smart India Hackathon",
      achievement: "SIH Finalist",
      contributors: ["Shashank Agarwal", "Kirtan Pal Singh", "Vikas Singh", "Rokhiya Khanam", "Jaineel Chhatraliya"],
    },
    {
      id: 2,
      title: "AI-Driven Smart Home Automation System",
      description:
        "Seamless control of appliances through voice commands and mobile apps, designed for convenience, energy efficiency, and modern living.",
      detailedDescription:
        "This project presents a fully integrated smart home automation system that allows users to control lights, fans, and appliances using voice assistants (like Google Assistant/Alexa) or a dedicated mobile app. Built using NodeMCU, sensors, and IoT protocols, the system brings intelligence to everyday devices, enabling remote access, scheduling, and energy-saving features. The architecture supports real-time status updates, customizable automation routines (like night mode or vacation mode), and advanced safety mechanisms including smoke detection and overload protection. With modularity at its core, the system is scalable to include smart door locks, security cameras, and environment monitoring—creating a truly connected and futuristic home ecosystem.",
      image: "/images/smarthome.jpg",
      organizedBy: "D.Y Patil - Elephant Tank",
      achievement: "Winner - 1st Position",
      contributors: ["Satwik Kishore", "Niharikha Joshi"],
    },
    {
      id: 4,
      title: "Water Contamination Detection",
      description:
        "A smart system to detect impurities and hazardous substances in water. Real-time water quality monitoring using sensors and ML-based analysis",
      detailedDescription:
        "This project focuses on developing a real-time water contamination detection system using IoT and sensor networks. It employs sensors to monitor parameters like pH, turbidity, TDS (Total Dissolved Solids), and temperature. The data is transmitted to a cloud-based dashboard where contamination levels are analyzed. To improve accuracy, machine learning models are trained to classify water as potable or contaminated based on collected datasets. The system aims to provide a low-cost, portable solution for communities and industries to ensure safe water consumption and environmental protection.",
      image: "/images/ssip.jpg",
      organizedBy: "SSIP & New India Vibrant Hackathon",
      achievement: "Winner - 1st Position",
      contributors: ["Hardik Kashyap", "Darshit Anadkat", "Keval Vora", "Ravi Kumar", "Prince Khunt", "Dhruv Gangdev"],
    },
    {
      id: 5,
      title: "Flipkart Smart Inventory Management System",
      description: "Computer vision-based system for real-time inventory tracking and shelf management. Automates stock detection, damage recognition, and misplaced item alerts.",
      detailedDescription:
        "Designed for large warehouses like Flipkart, this system uses AI-powered cameras to monitor shelves and stock levels in real-time. Using object detection algorithms (like YOLO or SSD), the system identifies empty spots, misplaced items, and damaged products. The project also uses barcode/QR recognition for inventory logging and integrates with warehouse management systems to streamline operations. This minimizes human error, reduces operational costs, and ensures faster item retrieval and dispatch.",
      image: "/images/grid6.jpg",
      organizedBy: "Flipkart",
      achievement: "Under AIR 50 from 20k Teams Nationwide",
      contributors: ["Harshit Kashyap", "Ankur Mani", "Khanjan Damani", "Suabhagya Vishwakarma"],
    },
    {
      id: 6,
      title: "Autonomous Drone Navigation",
      description: "System that enables drones to navigate complex environments without GPS using computer vision.",
      detailedDescription:
        "This project addresses the challenge of drone navigation in GPS-denied environments such as indoor spaces, dense urban areas, and remote locations. The system uses a combination of visual SLAM (Simultaneous Localization and Mapping), depth sensing, and reinforcement learning to enable drones to create maps of their environment and navigate safely without GPS signals. The team has developed custom algorithms that allow for real-time obstacle avoidance and path planning, even in dynamic environments with moving obstacles.",
      image: "/images/atmiya.jpg",
      organizedBy: "Atmiya University & GDSC",
      achievement: "Top 15 & Finalist",
      contributors: ["Harshit Kashyap", "Hardik Kashyap", "Darshit Anadkat", "Jayrajsinh Gohil"],
    },  
    {
      id: 7,
      title: "AI-Based Itinerary Generator",
      description:
        "A GenAI-powered travel planner that creates real-time, personalized itineraries. Plans trips based on preferences, budget, duration, and interests using dynamic data.",
      detailedDescription:
        "This project leverages large language models (LLMs) and real-time APIs (like Google Maps, TripAdvisor, etc.) to generate custom travel itineraries. Users input their preferences—location, budget, number of days, and type of experience—and the AI instantly crafts a day-wise plan including stays, activities, and routes. The system uses machine learning to refine suggestions based on feedback and integrates price tracking, weather updates, and travel modes. It solves the problem of generic travel packages by offering personalized, optimized experiences for solo travelers, couples, and groups alike.",
      image: "/images/postman.jpg",
      organizedBy: "POSTMAN API Hackathon",
      achievement: "Winner of Most Innovative Idea",
      contributors: ["Harshit Kashyap", "Mitanshu Vadnagra", "Ankur Mani"],
    },
    {
      id: 8,
      title: "Autonomous Delivery Car",
      description: "Self-driving indoor robot designed to deliver items with precision and safety. Uses computer vision, LIDAR, and path planning algorithms for navigation and obstacle avoidance.",
      detailedDescription:
        "This robot car autonomously delivers objects in structured environments like hospitals, offices, or campuses. It uses sensors such as ultrasonic, LIDAR, and camera modules to perceive the environment and detect obstacles. It relies on SLAM and A* algorithm for mapping and optimal path planning. An onboard microcontroller processes the data, communicates with the cloud (for remote updates), and uses computer vision to identify drop-off zones. The project highlights efficient indoor navigation, autonomous decision-making, and safe delivery in dynamic environments.",
      image: "/images/grid3.png",
      organizedBy: "Flipkart",
      achievement: "Top 50 from 10k Teams Nationwide",
      contributors: ["Bhavdeep Singh Krishnawat", "Raj Panjwani", "Rishab Sharma", "Nikita Daredi", "Smriti Chudasama", "Janhavi Dudala"],
    },
    {
      id: 9,
      title: "Smart Stick for Blind People",
      description: "AI-powered walking stick that detects obstacles and provides navigation assistance. Uses ultrasonic sensors, GPS, and voice feedback to aid visually impaired users.",
      detailedDescription:
        "The smart stick is designed to assist the visually impaired in navigating unfamiliar environments safely. It uses ultrasonic sensors to detect obstacles in the path and alerts the user via vibrations or voice feedback. It can also include a GPS module to provide directions through audio prompts. Additional features include water detection sensors, emergency SOS buttons, and fall detection. The entire system is powered by a lightweight battery and housed in an ergonomic stick design, making it user-friendly and highly impactful.",
      image: "/images/ssip2.png",
      organizedBy: "SSIP 2.0 Hackathon",
      achievement: "Runner Up",
      contributors: ["Khushagra Pandya", "Disha Parmar", "Tushar Thoriya"],
    },
    {
      id: 10,
      title: "YouTube Data Extractor",
      description:
        "Tool to extract insights from YouTube videos, channels, and engagement data automatically. Scrapes video titles, views, likes, keywords, and comment sentiment for research or analysis.",
      detailedDescription:
        "The YouTube Data Extractor is a Python-based automation tool that uses the YouTube Data API to collect video metadata like views, comments, likes, tags, and publish dates. It enables users to analyze audience engagement, track trends, and extract SEO-related insights. Additional features include sentiment analysis on comments using NLP models, CSV export for visualization, and batch processing of multiple channels. This tool is valuable for content creators, researchers, and marketers seeking to optimize content strategies.",
      image: "/images/sih.png",
      organizedBy: "Smart India Hackathon",
      achievement: "SIH 2022 Winners",
      contributors: ["Teesha Kshatriya", "Neel Dholakia", "Aksj Pilani", "Vatsal Ved"],
    },
    {
      id: 3,
      title: "Robotic Prosthetic Hand",
      description: "Low-cost, 3D-printed prosthetic hand with advanced grip detection and natural movement.",
      detailedDescription:
        "This project focuses on creating affordable prosthetic hands using 3D printing technology and advanced control systems. The prosthetic hand features embedded sensors that detect muscle movements in the user's residual limb, allowing for intuitive control of different grip patterns. The design prioritizes both functionality and aesthetics, with a natural appearance and movement patterns that mimic a human hand. The team has worked closely with medical professionals to ensure the prosthetic meets real-world needs.",
      image: "/images/bionichand.jpg",
      organizedBy: "Smart India Hackathon 2023",
      achievement: "Patent & Research Paper",
      contributors: ["Harshit Kashyap", "Ankur Mani"],
    },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
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
              style={{ color: "var(--muted-foreground)" }}
            >
              <ArrowLeft className="mr-1 size-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold tracking-tight mb-4">Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Explore innovative projects created by our club members in robotics, AI, and related technologies.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="relative w-full sm:w-[300px]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  className="pl-10 rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, i) => (
                  <motion.div key={i} variants={item} whileHover={{ y: -5 }} className="group">
                    <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg">
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          width={500}
                          height={300}
                          alt={project.title}
                          className="w-full h-56 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-start gap-2">
                            <span className="font-medium text-sm">Organized by:</span>
                            <span className="text-sm text-muted-foreground">{project.organizedBy}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="font-medium text-sm">Achievement:</span>
                            <span className="text-sm text-muted-foreground">{project.achievement}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Contributors:</p>
                          <div className="flex flex-wrap gap-2">
                            {project.contributors.map((member, j) => (
                              <Badge key={j} variant="secondary" className="bg-secondary/50">
                                {member}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="px-6 pb-6 pt-0">
                        <Button
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
                          onClick={() => {
                            setExpandedProject(project)
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }}
                        >
                          View Project Details
                          <ChevronRight className="ml-1 size-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                  <div className="size-16 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Code className="size-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">No projects found</h3>
                  <p className="text-muted-foreground max-w-md">
                    We couldn't find any projects matching your search criteria. Try adjusting your search or check back
                    later.
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          <div className="mt-16 pt-8 border-t border-border/40">
            <h2 className="text-2xl font-bold mb-8">Additional Projects</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mb-8">
              Explore more projects created by our members that showcase their creativity and technical skills.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Automatic Obstacle Avoidance Car",
                  description: "This project introduces an autonomous car that detects and avoids obstacles using sensors. It demonstrates the application of real-time data processing and control algorithms for efficient navigation.",
                  organizedBy: "Robotics Club",
                },
                {
                  title: "Robotics Arm",
                  description: "A programmable robotic arm designed for precise movements and tasks. It showcases motor control, sensor integration, and mechanical design to automate repetitive or delicate operations.",
                  organizedBy: "Robotics Club",
                },
                {
                  title: "Gesture Control Car",
                  description: "This car can be steered using hand gestures instead of traditional controls. The system uses sensors to interpret motions, emphasizing intuitive human-machine interaction.",
                  organizedBy: "Robotics Club",
                },
                {
                  title: "Anti-theft Detection",
                  description: "A system that identifies unauthorized entry or tampering by monitoring changes in environment or device status. It combines sensors and alerts to ensure safety and prevent theft.",
                  organizedBy: "Robotics Club",
                },
                {
                  title: "Smart Traffic Management System",
                  description: "This solution regulates traffic flow using real-time data and automated control of signals. It aims to reduce congestion and improve overall road safety and efficiency.",
                  organizedBy: "Robotics Club",
                },
                {
                  title: "Women Safety Device",
                  description: "A personal safety gadget equipped with sensors and communication features. It can send alerts and location information in emergencies, enhancing security for women.",
                  organizedBy: "Robotics Club",
                },
              ].map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-start gap-2">
                          <span className="font-medium text-sm">Organized by:</span>
                          <span className="text-sm text-muted-foreground">{project.organizedBy}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center py-8 text-center border-t border-border/40">
            <h3 className="text-xl font-medium mb-4">Have a project idea?</h3>
            <p className="text-muted-foreground max-w-lg mb-6">
              We're always looking for new project ideas. If you have an innovative concept for a robotics or AI
              project, we'd love to hear about it!
            </p>
            <Button asChild className="rounded-full">
              <Link href="mailto:roboticsclub@marwadiuniversity.ac.in?subject=Project%20Proposal&body=Hello%20Robotics%20%26%20AI%20Club%2C%0A%0AI%20would%20like%20to%20submit%20a%20project%20proposal%3A%0A%0AProject%20Title%3A%0A%0AProject%20Description%3A%0A%0ARequired%20Resources%3A%0A%0ATeam%20Members%20(if%20any)%3A%0A%0AThank%20you%2C%0A%5BYour%20Name%5D">
                Submit Project Proposal
                <ChevronRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {expandedProject && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-background border border-border rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{expandedProject.title}</h2>
                <Button variant="ghost" size="sm" className="rounded-full" onClick={() => setExpandedProject(null)}>
                  <X className="size-5" />
                </Button>
              </div>

              <div className="mb-6">
                <Image
                  src={expandedProject.image || "/placeholder.svg"}
                  width={800}
                  height={450}
                  alt={expandedProject.title}
                  className="w-full h-auto rounded-lg object-cover object-top"
                />
              </div>

              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Organized by</h3>
                    <p>{expandedProject.organizedBy}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Achievement</h3>
                    <p>{expandedProject.achievement}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-medium">Project Description</h3>
                <p className="text-muted-foreground">{expandedProject.detailedDescription}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Contributors</h3>
                <div className="flex flex-wrap gap-2">
                  {expandedProject.contributors.map((member, i) => (
                    <Badge key={i} className="bg-primary/10 text-primary hover:bg-primary/20">
                      {member}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border">
                <Button className="w-full" onClick={() => setExpandedProject(null)}>
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <Footer pathname="/projects" />
    </div>
  )
}

