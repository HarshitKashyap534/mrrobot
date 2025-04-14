"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, ChevronRight, MapPin, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackgroundGrid } from "@/components/background-grid"

interface Event {
  id: number
  title: string
  date: string
  location: string
  description: string
  detailedDescription: string
  image: string
  category: string
}

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [mounted, setMounted] = useState(false)
  const [expandedEvent, setExpandedEvent] = useState<Event | null>(null)

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

  const events: Event[] = [
    {
      id: 1,
      title: "Intellify 3.0",
      date: "Coming Soon!",
      location: "Marwadi University",
      description: "A 48-hour hackathon where teams compete to build innovative robotics solutions to real-world problems.",
      detailedDescription:
        "Intellify 3.0 is an upcoming 48-hour hackathon where teams will compete to build innovative robotics solutions addressing real-world problems. Designed to ignite creativity and hands-on innovation, the event invites tech enthusiasts, engineers, and problem-solvers to brainstorm, prototype, and present groundbreaking ideas. With mentorship from industry experts, exciting challenges, and a dynamic environment, Intellify 3.0 promises to be a platform where imagination meets impact. Get ready to code, create, and compete in one of the most awaited robotics hackathons of the year!",
      image: "/images/Intellify.jpg",
      category: "Hackathon",
    },
    {
      id: 2,
      title: "Intellify 2.0 / HTM 5.0",
      date: "September 14-15, 2024",
      location: "Main Building",
      description:
        "A 30-hour international hackathon, bringing together innovators from around the globe to build real-world tech solutions.",
      detailedDescription:
        "Intellify 2.0 /HTM 5.0 was designed as an intensive hackathon that brought together 350 enrolled students to address complex real-world problems. Far from a lecture or workshop, the event required teams to interpret open-ended challenges and devise practical solutions that could have real community or industry impact. Participants were provided with problem statements that spanned various domains—from improving local infrastructure to enhancing sustainable practices—with the goal of generating actionable prototypes. The hackathon fostered an atmosphere of creative urgency, where students worked under tight deadlines, engaging in continuous iterations and testing their ideas against real-world constraints. Regular progress updates, peer reviews, and mentor feedback sessions enabled teams to refine their strategies and overcome obstacles collaboratively. The outcome was evident in the innovative solutions that emerged from the intense, hands-on problem-solving process, leaving participants with a deeper understanding of how to translate ideas into real-world applications and a strengthened capability for teamwork under pressure.",
      image: "/images/hackmountains.jpg",
      category: "Hackathon",
    },
    {
      id: 3,
      title: "Robotics Workshop Series",
      date: "Every Friday, April 2025",
      location: "MB414, Main Building",
      description: "Hands-on workshops covering everything from basic robotics to advanced autonomous systems.",
      detailedDescription:
        "Our popular Robotics Workshop Series returns for the Spring semester! This comprehensive series consists of 4 weekly workshops held every Friday for the month of April. Each workshop is designed to build upon the previous one, taking participants from the basics of robotics to advanced concepts in autonomous systems.\n\nThe workshops are hands-on and project-based, with participants working in small groups to build increasingly complex robotic systems. All necessary equipment and materials will be provided. No prior experience is required for the introductory workshops, while the advanced sessions are designed for those with some background in robotics or programming.\n\nParticipants can register for individual workshops or the entire series at a discounted rate. Club members receive priority registration and additional discounts.",
      image: "/images/roboticsworkshop1.jpg",
      category: "Workshop",
    },
    {
      id: 4,
      title: "RoboComp & GoDrone",
      date: "March 4th & 5th, 2025",
      location: "Football Ground",
      description: "A race where 45 students competed in a timed challenge using a custom- built Bluetooth car.",
      detailedDescription:
        "The March 2025 edition of RoboComp & GoDrone saw 60+ enrolled teams engage in an exhilarating race-against-time event. Participants did not work on technical construction; instead, they focused on strategy and rapid decision-making to navigate a challenging race track using a small Bluetooth car developed by the organizers. Multiple rounds of timed races allowed teams to experiment with different tactics, adapt quickly to course challenges, and refine their strategies between heats. The event emphasized teamwork, speed, and precision, creating an energetic atmosphere where sportsmanship and creative strategies took center stage. The outcome was a vibrant display of coordinated teamwork and quick thinking, with participants leaving the event both energized and more adept at planning under pressure.",
      image: "/images/robocomp.jpg",
      category: "Competition",
    },
    {
      id: 5,
      title: "Introduction to Jetson Nano",
      date: "August 12, 2024",
      location: "Robotics Club",
      description: "A session designed for edge computing enthusiasts, introducing NVIDIA's Jetson Nano. It showcased how to deploy AI models on a compact device.",
      detailedDescription:
        "The Introduction to Jetson Nano event featured 95 enrolled students exploring the potential of edge computing through a hands-on approach. The session began with an explanation of the Jetson Nano's architecture and its relevance in deploying lightweight AI models. Detailed tutorials covered initial setup, environment configuration, and installation of essential libraries, bridging theoretical concepts with practical implementation. Students were then engaged in a series of labs that included object detection, image classification, and real-time data processing. Step-by-step instructions allowed each participant to build, test, and optimize AI-powered applications on the Jetson Nano. The atmosphere was highly interactive, with the coordinator providing in-depth explanations of each configuration step and encouraging peer-to-peer troubleshooting. The comprehensive format ensured that the outcome was not only an increased familiarity with edge computing but also a renewed enthusiasm for developing autonomous applications on resource-constrained platforms.",
      image: "/images/jetson.jpg",
      category: "Workshop",
    },
    {
      id: 6,
      title: "How to build a Drone",
      date: "February 15, 2024",
      location: "Robotics Club",
      description: "A step-by-step guide on constructing a fully functional drone, covering mechanical assemblyto firmware calibration. It provided actionable insights for beginners.",
      detailedDescription:
        "The drone-building workshop welcomed 53 enrolled students for a comprehensive, hands-on experience. The event began with a detailed breakdown of the essential drone components—from selecting appropriate motors and propellers to understanding the intricacies of wiring and power management. Through a series of guided demonstrations, participants learned how to assemble the mechanical components with precision while integrating the necessary electronic systems. The workshop then moved on to cover crucial aspects of firmware configuration and flight stabilization. Students received individual guidance as they encountered and resolved challenges such as balancing the drone and calibrating sensors accurately. Extensive group discussions and follow-up Q&A sessions enriched the session, ensuring that every student could follow and replicate the steps independently. The resultant outcome was a tangible improvement in technical skills and confidence, as each participant emerged with the foundational knowledge needed to not only build but also troubleshoot and pilot their own drone.",
      image: "/images/drone.jpg",
      category: "Workshop",
    },
    {
      id: 7,
      title: "Image Processing Workshop",
      date: "July 15, 2023",
      location: "MB414, Main Building",
      description:
        "A focused workshop on computer vision, teaching how to capture, process, and analyze digital images. Key techniques were demonstrated through practical exercises.",
      detailedDescription:
        "The Image Processing Workshop drew 80+ enrolled students into the expansive field of computer vision. The workshop began with an in-depth discussion of the principles behind image capture, processing methods, and techniques for edge detection and noise reduction. Interactive modules enabled participants to visualizethe transformation of raw images into processed outputs using popular libraries. Hands-on exercises provided opportunities for students to engage with various filtering techniques and experiment with image segmentation algorithms. The structured lab sessions allowed learners to manipulate images, optimize parameters, and compare outcomes in real time. Frequent assessments and collaborative troubleshooting sessions enriched the learning process. The conclusive outcome was a deepened practical understanding of image processing methodologies, preparing students to apply these techniques in research or industry projects that rely on advanced computer vision capabilities.",
      image: "/images/imageprocessing.png",
      category: "Workshop",
    },
    {
      id: 8,
      title: "Intellify 1.0",
      date: "April 14-15, 2023",
      location: "Main Building",
      description: "A hackathon challenging students to solve real-world problems through innovative, technology-driven prototypes within a competitive, deadline-focused format.",
      detailedDescription:
        "Intelify 1.0 gathered 250 enrolled students for a dynamic hackathon where the focus was on addressing practical challenges in areas such as sustainability, urban development, and community improvement. Participants worked inteams, received a concise brief outlining a real-world problem, and were tasked to ideate and develop prototypes that offered tangible, implementable solutions. The competitive atmosphere encouraged rapid brainstorming, creative resourcefulness, and collaborative problem solving. Throughout the event, periodic checkpoints allowed teams to present their progress, share insights, and receive guidance from mentors and the coordinator. This structured feedback loop, combined with the pressure of a tight timeline, pushed the students to think critically and act decisively. The outcome was a series of innovative projects that demonstrated the potential of technology to address everyday challenges, equipping participants with valuable skills in rapid prototyping and real-world problem solving.",
      image: "/images/Intellify.jpg",
      category: "Hackathon",
    },
    {
      id: 9,
      title: "AI Unleashed Dawn & Dreams",
      date: "February 23-24, 2025",
      location: "Seminar Hall, PG Building",
      description: "A seminar-series presenting the transformative potential of AI through foundational modelsand real-world case studies.",
      detailedDescription:
        "This event attracted 180 enrolled students who gathered to explore the expansive realm of artificial intelligence. The series commenced with engaging lectures that introduced core AI principles, including machine learning fundamentals and neural network design. Expert speakers illustrated the technology's impact across industries such as healthcare, finance, and transportation, while attendees participated ininteractive discussions to better understand AI's evolving capabilities. Throughout the day, sessions delved into detailed case studies and hands-on exercises that showcased the practical applications of AI. Students had the opportunity to experiment with data sets and witness live demonstrations of algorithmic processing and predictive modeling. This comprehensive approach not only deepened participants' theoretical knowledge but also provided actionable insights into deploying AI in real-world projects. The session's outcome was a broadened perspective on modern technological challenges, empowering students to envision and initiate innovative AI-driven solutions in their future endeavors.",
      image: "/images/unleashed.jpg",
      category: "Workshop",
    },
    {
      id: 10,
      title: "Getting Started with 3D Printing",
      date: "December 12, 2022",
      location: "Robotics Club, MB106",
      description: "A deep dive into 3D printing technology that covered the printing process, design software, andmaterial selection. Participants saw real-life applications of additive manufacturing.",
      detailedDescription:
        "The 3D Printing event attracted 70+ enrolled students eager to learn about rapid prototyping through additive manufacturing. The workshopstarted with a comprehensive review of the hardware components of a 3D printer and thevarious materials available for printing. In addition, attendees were introduced to slicing software and the steps required for converting digital designs into printable instructions. Detailed live demonstrations allowed participants to witness the transformation of digital designs into physical objects. The event provided multiple hands-on sessions where students calibrated printers, addressed common printing issues, and experimented with various design adjustments. Through interactive feedback and real-time problem-solving, attendees learned best practices and innovative techniques in 3D printing. The improved understanding of the process resulted in a highly practical outcome: students left with the skills necessary to create prototypes and refine designs independently, ready to face real-world manufacturing challenges.",
      image: "/images/im4.jpg",
      category: "Workshop",
    },
    {
      id: 11,
      title: "Build Using Arduino",
      date: "January 23, 2023",
      location: "Robotics Club, MB106",
      description: "A workshop that advanced basic Arduino skills into a project-based application. Participants planned and built projects while troubleshooting real-time issues.",
      detailedDescription:
        "The Build using Arduino workshop provided an immersive experience for 80+ enrolled students. The day began with a review of fundamental Arduino programming concepts, followed by brainstorming sessions where students conceptualized their own project ideas. Throughout the workshop, teams worked in a supportive environment to design and prototype projects that incorporated both sensor inputs and motor controls. Detailed troubleshooting sessions were integral, as they allowed participants to identify and correct issues on the fly. In the subsequent sessions, the coordinator offered targeted advice and hands-on guidance on integrating various modules and managing power supplies, ensuring that each project met its intended goals. The multifaceted approach fostered a comprehensive learning environment where theoretical knowledge was directly applied to practical challenges. Ultimately, the outcome was a collection of innovative projects that not only demonstrated technical prowess but also boosted each student's confidence in their ability to handle complex engineering tasks, preparing them for advanced technological challenges",
      image: "/images/arduino.jpg",
      category: "Workshop",
    },
  ]

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  // Format date for display
  const formatDate = (dateString: string): string => {
    return dateString
  }

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
            <h1 className="text-4xl font-bold tracking-tight mb-4">Events</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Discover upcoming workshops, competitions, and conferences hosted by the Robotics & AI Club.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="relative w-full sm:w-[300px]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  placeholder="Search events..."
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
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, i) => (
                  <motion.div key={i} variants={item} whileHover={{ y: -5 }} className="group h-full">
                    <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg">
                      <div className="relative overflow-hidden">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          width={600}
                          height={400}
                          alt={event.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <Badge className="absolute top-3 right-3 bg-primary/90 text-primary-foreground">
                          {event.category}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                          <Calendar className="size-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                          <MapPin className="size-4" />
                          <span>{event.location}</span>
                        </div>
                        <p className="text-muted-foreground">{event.description}</p>
                      </CardContent>
                      <CardFooter className="px-6 pb-6 pt-0">
                        <Button
                          variant="outline"
                          className="w-full border-primary text-primary hover:bg-primary/10 rounded-full"
                          onClick={() => {
                            setExpandedEvent(event)
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }}
                        >
                          View Details
                          <ChevronRight className="ml-1 size-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                  <div className="size-16 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Calendar className="size-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">No events found</h3>
                  <p className="text-muted-foreground max-w-md">
                    We couldn't find any events matching your search criteria. Try adjusting your search or check back
                    later.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Event Details Modal */}
      {expandedEvent && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-background border border-border rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold">{expandedEvent.title}</h2>
                <Button variant="ghost" size="sm" className="rounded-full" onClick={() => setExpandedEvent(null)}>
                  <X className="size-5" />
                </Button>
              </div>

              <div className="mb-6">
                <Image
                  src={expandedEvent.image || "/placeholder.svg"}
                  width={800}
                  height={450}
                  alt={expandedEvent.title}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Date</h3>
                    <p className="flex items-center gap-2">
                      <Calendar className="size-4 text-primary" />
                      {expandedEvent.date}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
                    <p className="flex items-center gap-2">
                      <MapPin className="size-4 text-primary" />
                      {expandedEvent.location}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Event Description</h3>
                  <p className="text-muted-foreground whitespace-pre-line">{expandedEvent.detailedDescription}</p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border">
                <Button className="w-full rounded-full" onClick={() => setExpandedEvent(null)}>
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  )
}

