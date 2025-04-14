"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackgroundGrid } from "@/components/background-grid"

export default function ContactPage() {
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
            <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Have questions or want to get involved? Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>

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
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <Card className="overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                <CardContent className="p-6">
                  <div className="space-y-6">
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
                        <Mail className="size-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-muted-foreground">roboticsclub@marwadiuniversity.ac.in</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="size-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-muted-foreground">+91-7990127305</p>
                        {/* <p className="text-muted-foreground">(123) 456-7891</p> */}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Club Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>24 Hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span>24 Hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Yes, The club is open 24x7!</span>
                      {/* <span>Closed</span> */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">How can I join the Robotics & AI Club?</h3>
                  <p className="text-muted-foreground">
                    Joining is easy! Simply fill out the membership form on our website and attend our next general
                    meeting. We welcome students from all majors and experience levels.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Do I need prior experience with robotics or AI?</h3>
                  <p className="text-muted-foreground">
                    Not at all! We welcome members of all skill levels, from complete beginners to experienced
                    enthusiasts. We offer workshops and mentorship to help you learn and grow.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">How much does membership cost?</h3>
                  <p className="text-muted-foreground">
                    Annual membership costs $20, which helps cover the cost of materials, equipment, and events.
                    However, we offer fee waivers for students with financial need.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Can I propose my own project ideas?</h3>
                  <p className="text-muted-foreground">
                    We encourage members to propose their own project ideas. We have a project proposal process at the
                    beginning of each semester where you can pitch your ideas and form teams.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">How can I become a club officer?</h3>
                  <p className="text-muted-foreground">
                    Officer elections are held at the end of each academic year. Active members who have demonstrated
                    commitment and leadership can be nominated or self-nominate for officer positions.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Does the club provide access to equipment?</h3>
                  <p className="text-muted-foreground">
                    Yes, club members have access to our robotics lab, computing resources, and various equipment. We
                    also provide components and materials for approved club projects.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <Footer pathname="/contact" />
    </div>
  )
}

