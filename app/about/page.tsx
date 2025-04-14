"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ChevronRight, MapPin, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackgroundGrid } from "@/components/background-grid"

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)

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
      image: "/images/Yashraj1.jpg",
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

  const achievements = [
    {
      year: "0001",
      title: "Hackathons",
      description: "We organize thrilling hackathons that challenge students to develop real-world tech solutions within a limited time.",
    },
    {
      year: "0002",
      title: "IP Filing (Patents)",
      description: "We guide and support students in filing patents to protect their innovative hardware and AI-based solutions.",
    },
    {
      year: "0003",
      title: "AI Workshop Series",
      description: "Our workshops offer practical exposure to robotics, AI, IoT, and more—bridging the gap between theory and application.",
    },
    {
      year: "0004",
      title: "Keynotes from Industry Experts",
      description:
        "We host talks and sessions with top professionals to give students valuable insights into cutting-edge technologies and industry trends.",
    },
    {
      year: "0005",
      title: "Exhibitions",
      description: "We provide a platform for students to exhibit their projects at university and public events, gaining exposure and feedback.",
    },
    {
      year: "0006",
      title: "Research Publication",
      description: "Students get mentorship and support to publish their research work in reputed journals and conferences.",
    },
    {
      year: "0007",
      title: "Startup Support",
      description:
        "We help student innovators build startups by providing guidance, resources, and exposure to entrepreneurship networks.",
    },
  ]

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
            <h1 className="text-4xl font-bold tracking-tight mb-4">About Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Learn more about the Robotics & AI Club, our mission, and the people who make it all possible.
            </p>
          </div>

          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-lg">
                  The Robotics & AI Club is dedicated to fostering innovation, collaboration, and learning in the fields
                  of robotics and artificial intelligence. We aim to provide students with hands-on experience, industry
                  connections, and the resources they need to turn their ideas into reality.
                </p>
                <p className="text-lg">Our core values include:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Badge className="mt-1 mr-2">01</Badge>
                    <span>
                      <strong>Innovation:</strong> Encouraging creative solutions to complex problems
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="mt-1 mr-2">02</Badge>
                    <span>
                      <strong>Inclusivity:</strong> Welcoming members from all backgrounds and skill levels
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="mt-1 mr-2">03</Badge>
                    <span>
                      <strong>Collaboration:</strong> Promoting teamwork and knowledge sharing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="mt-1 mr-2">04</Badge>
                    <span>
                      <strong>Education:</strong> Providing learning opportunities and resources
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge className="mt-1 mr-2">05</Badge>
                    <span>
                      <strong>Impact:</strong> Creating technology that makes a positive difference
                    </span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden border border-border/40 shadow-xl">
                  <Image
                    src="/images/roboticsclub.jpg"
                    width={800}
                    height={600}
                    alt="Club members collaborating"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl"></div>
              </motion.div>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Thrust Areas</h2>
              <p className="text-lg text-muted-foreground">
                Since our founding in 2018, we've grown from a small group of enthusiasts to one of the most active
                technical clubs on campus. This is what drives us.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

              <div className="space-y-12 relative">
                {achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`flex items-center gap-16 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"} relative`}
                  >
                    <div className={`w-1/2 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                      <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div className="size-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                        {achievement.year.slice(3)}
                      </div>
                    </div>

                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground">
                Our dedicated team of students and faculty work together to make the Robotics & AI Club a vibrant
                community of innovation and learning.
              </p>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              {coreTeam.map((member, i) => (
                <motion.div key={i} variants={item} whileHover={{ y: -5 }} className="group">
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg">
                    <div className="relative overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        width={200}
                        height={200}
                        alt={member.name}
                        className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        style={{ objectPosition: "top" }}
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
            </motion.div>
          </div>

          <div className="mb-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Visit Us</h2>
              <p className="text-lg text-muted-foreground">
                Our club is located on campus in the Main Building. Stop by during our open hours to learn more
                about what we do!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-xl overflow-hidden border border-border/40 h-[400px] bg-muted">
                {/* This would be a map component in a real implementation */}
                <div className="w-full h-full flex items-center justify-center bg-muted">
                  <MapPin className="size-16 text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Location</h3>
                  <p className="text-muted-foreground">
                    Main Building, MB106
                    <br />
                    University Campus
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Club Hours</h3>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>24 Hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span>24 Hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Yes, The Club is open 24x7!</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Contact</h3>
                  <p className="text-muted-foreground">
                    Email: roboticsclub@marwadiuniversity.ac.in
                    <br />
                    Phone: +91-7990127305
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center border-t border-border/40 pt-12">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Ready to be part of something innovative? Join the Robotics & AI Club today and start your journey into
              the exciting world of robotics and artificial intelligence.
            </p>
            <Button
              size="lg"
              className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <Link href="https://login.marwadiuniversity.ac.in:553" target="_blank">
                Become a Member
                <ChevronRight className="ml-1 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}