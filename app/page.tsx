"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Check,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  BotIcon as Robot,
  Cpu,
  Users,
  Code,
  Rocket,
  Layers,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Linkedin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackgroundGrid } from "@/components/background-grid"
import { ImageSlideshow } from "@/components/image-slideshow"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

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

  const facilities = [
    {
      title: "Advanced Robotics Lab",
      description: "Access cutting-edge robotics equipment and tools for building and testing your innovations.",
      icon: <Robot className="size-5" />,
    },
    {
      title: "AI Computing Resources",
      description: "Utilize our high-performance computing infrastructure for training and deploying AI models.",
      icon: <Cpu className="size-5" />,
    },
    {
      title: "Collaborative Workspace",
      description: "Work together in our dedicated spaces designed for teamwork and innovation.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Technical Workshops",
      description: "Learn from industry experts through regular workshops and training sessions.",
      icon: <Code className="size-5" />,
    },
    {
      title: "Project Funding",
      description: "Apply for funding to bring your innovative robotics and AI ideas to life.",
      icon: <Rocket className="size-5" />,
    },
    {
      title: "Industry Connections",
      description: "Connect with leading companies and potential employers in the tech industry.",
      icon: <Layers className="size-5" />,
    },
  ]

  const featuredEvents = [
    {
      title: "Intellify 3.0",
      date: "August 30-31, 2025",
      location: "Marwadi University",
      description:
        "A 48-hour hackathon where teams compete to build innovative robotics solutions to real-world problems.",
      image: "images/Intellify.jpg",
      category: "Hackathon",
    },
    {
      title: "Robotics Workshop Series",
      date: "Every Friday, April 2025",
      location: "Main Building, MB414",
      description: "Hands-on workshops covering everything from basic robotics to advanced autonomous systems.",
      image: "/images/roboticsworkshop1.jpg",
      category: "Workshop",
    },
    {
      title: "Intellify 2.0 / HTM 5.0",
      date: "14th-15th September, 2024",
      location: "Main Building, 6th Floor Library",
      description: "We conducted an intense 30-hour international hackathon, bringing together innovators from around the globe to build real-world tech solutions.",
      image: "/images/hackmountains.jpg",
      category: "Hackathon",
    },
  ]

  const featuredProjects = [
    {
      title: "Smart Water Cleaning Boat",
      description: "Autonomous, solar-powered water cleaning boat designed to collect floating waste and help clean water bodies efficiently.",
      image: "/images/jalmitr.jpg",
      organizedBy: "Smart India Hackathon",
      achievement: "SIH 2024 Finalist",
      contributors: ["Shashank Agarwal", "Kirtan Pal Singh", "Vikas Singh", "Rokhiya Khanam", "Jaineel Chhatraliya"],
    },
    {
      title: "Smart Home Automation",
      description:
        "Seamless control of appliances through voice commands and mobile apps, designed for convenience, energy efficiency, and modern living.",
      image: "/images/smarthome.jpg",
      organizedBy: "National Hackathon and Robotics & AI Club",
      achievement: "Published Research Paper, Launched Startup & Secured a Granted Patent",
      contributors: ["Satwik Kishore", "Niharika Joshi"],
    },
    {
      title: "Robotic Prosthetic Hand",
      description: "Low-cost, 3D-printed prosthetic hand with advanced grip detection and natural movement. Designed for amputees to regain functional control using EMG signals and gesture recognition.",
      image: "/images/bionichand.jpg",
      organizedBy: "National Hackathon and Robotics & AI Club",
      achievement: "Published Research Paper & Secured a Granted Patent",
      contributors: ["Harshit Kashyap", "Ankur Mani"],
    },
  ]

  const coreTeam = [
    {
      name: "Dinesh Yadav",
      role: "President",
      image: "/images/DineshYadav.jpg",
      bio: "Leading the club with a vision for innovation & overseeing the club's strategic growth and operations",
      instagram: "https://www.instagram.com/ydvv.dinesh/",
      linkedin: "https://www.linkedin.com/in/dinesh-yadav-1b462831a/",
    },
    {
      name: "Yashrajsinh Jadeja",
      role: "Secretary",
      image: "/images/yashraj1.jpg",
      bio: "Overseeing coordination and internal communication to ensure smooth execution of the club's initiatives",
      instagram: "https://www.instagram.com/yashrajsinh._.jadeja/",
      linkedin: "https://www.linkedin.com/in/yashrajsinh-jadeja-4097bb309/",
    },
    {
      name: "Rayan Ishani",
      role: "Treasurer",
      image: "images/Rayan.jpg",
      bio: "Managing the club's finances with transparency and precision, ensuring smooth execution of all activities",
      instagram: "https://www.instagram.com/rayanishani/",
      linkedin: "https://www.linkedin.com/in/rayan-ishani-008528320/",
    },
    {
      name: "Harshit Kashyap",
      role: "Core Team",
      image: "/images/Harshit.jpg",
      bio: "Lead in AI driven Research & Development to drive innovation in robotics applications",
      instagram: "https://www.instagram.com/haarshit.kashyap/",
      linkedin: "https://www.linkedin.com/in/harshit-kashyap-501b20300/",
    },
    {
      name: "Ankur Mani",
      role: "Core Team",
      image: "/images/Ankur.jpg",
      bio: "Works on microcontroller programming and hardware-software interfacing to bring the club's robotic creations to life",
      instagram: "https://www.instagram.com/_ankur_mani_/",
      linkedin: "https://www.linkedin.com/in/ankur-mani-71b855266/",
    },
    {
      name: "Khanjan Damani",
      role: "Core Team",
      image: "/images/Khanjan.jpg",
      bio: "Facilitates communication and actively assists teams in troubleshooting, coordination, and project execution",
      instagram: "https://www.instagram.com/khanjan___21/",
      linkedin: "https://www.linkedin.com/in/khanjan-damani-1358a2286/",
    },
    {
      name: "Prof. Akshay Ranpariya",
      role: "Administrator",
      image: "/images/AkshayBhai.jpg",
      bio: "Serving as the guiding force of the club, the Administrator oversees all functions, ensuring alignment with the club's vision, goals, and institutional values",
      instagram: "https://www.instagram.com/akrishay351995/",
      linkedin: "https://www.linkedin.com/in/akshay-r-86885b192/",
    },
    {
      name: "Kapil Ranpariya",
      role: "Lab Assistant",
      image: "/images/KapilBhai.jpg",
      bio: "Responsible for aligning teams and resources, the Coordinator ensures timely execution of events and smooth collaboration across all club activities",
      instagram: "https://www.instagram.com/kapilranpariya/",
      linkedin: "https://www.linkedin.com/in/kapil-ranpariya-277a4a329/",
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col relative">
      {/* Custom cursor */}

      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section ref={heroRef} className="w-full py-20 md:py-32 lg:py-40 overflow-hidden relative">
          <BackgroundGrid />

          <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Innovate • Create • Collaborate
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Robotics & AI Club
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Beyond Code. Beyond Limits. The Blueprint for Tomorrow's Technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full h-12 px-8 text-base group bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <Link href="https://unstop.com/hackathons/intellify-national-level-hackathon-30-marwadi-university-mu-gujarat-1465258?lb=r6xqGNLB&utm_medium=Share&utm_source=shortUrl" target="_blank">
                    New drop: Intellify 3.0! Join now
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base border-primary text-primary hover:bg-primary/10"
                  asChild
                >
                  <Link href="/projects" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    Explore Projects
                  </Link>
                </Button>
              </div>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>Workshops</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>Hands-on Projects</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>Industry Connections</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                <Image
                  src="images/cover.jpeg"
                  width={1280}
                  height={720}
                  alt="Futuristic robot with glowing elements in a high-tech environment"
                  className="w-full h-auto object-cover aspect-[16/9]"
                  priority
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-10 -right-10 size-20 bg-primary/10 backdrop-blur-md rounded-full flex items-center justify-center"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Robot className="size-10 text-primary" />
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 size-16 bg-secondary/10 backdrop-blur-md rounded-full flex items-center justify-center"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <Cpu className="size-8 text-secondary" />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="size-8 text-muted-foreground" />
          </motion.div>
        </section>

        {/* About Us Section */}
        <section className="w-full py-20 md:py-28 bg-muted/30 relative">
          <BackgroundGrid />
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                About Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Who We Are</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                We're a community of innovators, creators, and problem-solvers passionate about robotics and artificial
                intelligence.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <p className="text-lg">
                  Founded in 2018, the Robotics & AI Club brings together students from diverse backgrounds who share a
                  passion for cutting-edge technology. Our mission is to foster innovation, provide hands-on learning
                  experiences, and build a collaborative community.
                </p>
                <p className="text-lg">
                  Through workshops, hackathons, research projects, and industry partnerships, we provide our members
                  with the resources and opportunities they need to excel in the fields of robotics and artificial
                  intelligence.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="size-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-2xl">500+</p>
                      <p className="text-sm text-muted-foreground">Active Members</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Code className="size-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-2xl">50+</p>
                      <p className="text-sm text-muted-foreground">Projects Completed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Rocket className="size-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-2xl">20+</p>
                      <p className="text-sm text-muted-foreground">Events Per Year</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <ImageSlideshow
                  images={[
                    {
                      src: "/images/ss1.jpg",
                      alt: "Robotics team collaborating on a project",
                    },
                    {
                      src: "/images/ss2.jpg",
                      alt: "Students working with robotics equipment",
                    },
                    {
                      src: "/images/ss3.jpg",
                      alt: "AI programming session",
                    },
                    {
                      src: "/images/ss8.jpg",
                      alt: "Team building a robot",
                    },
                    {
                      src: "/images/ss5.jpg",
                      alt: "Team building a bot",
                    },
                    {
                      src: "/images/ss6.jpg",
                      alt: "Team building a robot",
                    },
                    // {
                    //   src: "/images/ss7.jpg",
                    //   alt: "Team building a robot",
                    // },
                  ]}
                  interval={2000}
                />
                <div className="absolute -bottom-6 -right-6 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Events Section */}
        <section className="w-full py-20 md:py-28 relative">
          <BackgroundGrid />
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Featured Events
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What's Happening</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Join us for these exciting events and expand your knowledge, skills, and network.
              </p>
              <div className="mt-2">
                <Button variant="outline" className="rounded-full" asChild>
                  <Link href="/events" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    View All Events
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredEvents.map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group h-full"
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg">
                    <div className="relative overflow-hidden">
                      <Image
                        src={event.image}
                        width={600}
                        height={400}
                        alt={event.title}
                        className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-105"
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
                        <Clock className="size-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <MapPin className="size-4" />
                        <span>{event.location}</span>
                      </div>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                    <CardFooter className="px-6 pb-6 pt-0">
                      <Button variant="outline" className="w-full rounded-full" asChild>
                        <Link href="/events" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                          Learn More
                          <ChevronRight className="ml-1 size-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="w-full py-20 md:py-28 bg-muted/30 relative overflow-hidden">
          <BackgroundGrid />

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Featured Projects
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Innovation in Action</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Explore some of our most exciting projects created by our talented members.
              </p>
              <div className="mt-2">
                <Button variant="outline" className="rounded-full" asChild>
                  <Link href="/projects" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    View All Projects
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              {featuredProjects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image}
                        width={500}
                        height={300}
                        alt={project.title}
                        className="w-full h-56 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full">
                          <div className="flex justify-between items-center">
                            <Badge
                              variant="outline"
                              className="bg-background/20 backdrop-blur-sm text-white border-white/20"
                            >
                              Project
                            </Badge>
                          </div>
                        </div>
                      </div>
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
                      <Button className="w-full rounded-full" asChild>
                        <Link href="/projects" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                          View Project Details
                          <ChevronRight className="ml-1 size-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Team Section */}
        <section className="w-full py-20 md:py-28 relative">
          <BackgroundGrid />
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Core Team
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Meet Our Leaders</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                The dedicated individuals who guide our club's vision and activities.
              </p>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {coreTeam.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg">
                    <div className="relative overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        width={200}
                        height={200}
                        alt={member.name}
                        className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm mb-3">{member.bio}</p>
                      <div className="flex justify-center gap-3">
                        <Link
                          href={member.instagram}
                          target="_blank"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Instagram className="size-4" />
                        </Link>
                        <Link
                          href={member.linkedin}
                          target="_blank"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Linkedin className="size-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section id="facilities" className="w-full py-20 md:py-28 relative">
          <BackgroundGrid />
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Facilities
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything You Need to Succeed</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Our club provides access to cutting-edge resources and support to help you bring your ideas to life.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {facilities.map((facility, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                        {facility.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                      <p className="text-muted-foreground">{facility.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-20 md:py-28 bg-muted/30 relative overflow-hidden">
          <BackgroundGrid />

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Get In Touch
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Have an Idea? Let's Connect</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Reach out to us with your questions, project ideas, or partnership opportunities.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center items-center text-center"
              >
                <div className="max-w-md space-y-6">
                  <h3 className="text-2xl font-bold">We'd love to hear from you</h3>
                  <p className="text-muted-foreground">
                    Have questions about joining the club, our projects, or how to get involved? We're here to help!
                  </p>
                  <Button size="lg" className="rounded-full" asChild>
                    <Link href="mailto:roboticsclub@marwadiuniversity.ac.in?subject=Inquiry%20from%20Website&body=Hello%20Robotics%20%26%20AI%20Club%2C%0A%0AI%20would%20like%20to%20inquire%20about%3A%0A%0A%0AThank%20you%2C%0A%5BYour%20Name%5D">
                      Contact Us
                      <Mail className="ml-2 size-5" />
                    </Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col justify-center"
              >
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Contact Information</h3>
                    <p className="text-muted-foreground">
                      We're always eager to hear from you. Reach out through any of these channels.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="size-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-muted-foreground">roboticsclub@marwadiuniversity.ac.in</p>
                        {/* <p className="text-muted-foreground">support@roboticsaiclub.org</p> */}
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="size-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-muted-foreground">Main Building, MB106</p>
                        <p className="text-muted-foreground">University Campus, Marwadi University</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="size-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Club Hours</h4>
                        <p className="text-muted-foreground">Monday - Friday: 24 Hours</p>
                        <p className="text-muted-foreground">Saturday - Sunday: 24 Hours</p>
                        <p className="text-muted-foreground">Yes, The Club is open 24x7!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 md:py-28 relative">
          <BackgroundGrid />
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Find answers to common questions about our club and activities.
              </p>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How can I join the Robotics & AI Club?",
                    answer:
                      "You can easily join the Robotics Club by applying directly through your Marwadi University portal.",
                  },
                  {
                    question: "Do I need prior experience with robotics or AI?",
                    answer:
                      "Not at all! We welcome members of all skill levels, from complete beginners to experienced enthusiasts. We offer workshops and mentorship to help you learn and grow.",
                  },
                  {
                    question: "How much time commitment is expected?",
                    answer:
                      "The time commitment is flexible and depends on your level of involvement. General members can participate in weekly meetings and occasional events, while project team members typically dedicate 3-5 hours per week.",
                  },
                  {
                    question: "Can I propose my own project ideas?",
                    answer:
                      "We encourage members to propose their own project ideas. We have a project proposal process at the beginning of each semester where you can pitch your ideas and form teams.",
                  },
                  {
                    question: "Does the club provide access to equipment and resources?",
                    answer:
                      "Yes, club members have access to our robotics lab, computing resources, and various equipment. We also provide components and materials for approved club projects.",
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem value={`item-${i}`} className="border-b border-border/40 py-2">
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-28 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Ready to Build the Future?</h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Join our community of innovators and problem-solvers. Together, we can create technology that changes
                the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" variant="secondary" className="rounded-full h-12 px-8 text-base" asChild>
                  <Link href="https://login.marwadiuniversity.ac.in:553" target="_blank">
                    Join Our Club
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-black text-black hover:bg-white/10 hover:text-white hover:border-white"
                  asChild
                >
                  <Link href="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    Learn More
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer pathname="/" />
    </div>
  )
}

