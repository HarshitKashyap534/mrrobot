"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Check, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackgroundGrid } from "@/components/background-grid"

export default function SponsorshipPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1 relative">
        <BackgroundGrid />
        <div className="container px-4 py-16 md:px-6 md:py-24">
          <div className="mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-4"
            >
              <ArrowLeft className="mr-1 size-4" />
              Back to Contact
            </Link>
            <h1 className="text-4xl font-bold tracking-tight mb-4">Sponsorship Opportunities</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Partner with the Robotics & AI Club to support the next generation of innovators and gain access to top
              talent.
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
                <h2 className="text-3xl font-bold">Why Sponsor Us?</h2>
                <p className="text-lg">
                  By sponsoring the Robotics & AI Club, you're investing in the future of technology and innovation. Our
                  members are passionate, talented students who will become the next generation of leaders in robotics
                  and artificial intelligence.
                </p>
                <p className="text-lg">
                  Your support enables us to provide cutting-edge resources, host competitions, and create hands-on
                  learning opportunities that prepare students for careers in technology.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="size-5 text-primary mt-0.5" />
                    <p>
                      <span className="font-medium">Access to Top Talent:</span> Connect with skilled students for
                      internships and recruitment.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="size-5 text-primary mt-0.5" />
                    <p>
                      <span className="font-medium">Brand Visibility:</span> Showcase your company to a tech-savvy
                      audience.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="size-5 text-primary mt-0.5" />
                    <p>
                      <span className="font-medium">Collaborative Projects:</span> Work with students on innovative
                      solutions to real-world problems.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="size-5 text-primary mt-0.5" />
                    <p>
                      <span className="font-medium">Community Impact:</span> Support STEM education and technological
                      advancement.
                    </p>
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
                <div className="rounded-2xl overflow-hidden border border-border/40 shadow-xl">
                  <Image
                    src="/images/sponsership.jpg"
                    width={800}
                    height={600}
                    alt="Students working on robotics project"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 -z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl"></div>
              </motion.div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Interested in Becoming a Sponsor?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Contact us to discuss sponsorship opportunities and customize a package that meets your organization's
              goals.
            </p>
            <Button size="lg" className="rounded-full" asChild>
              <Link href="mailto:roboticsclub@marwadiuniversity.ac.in?subject=Sponsorship%20Inquiry&body=Hello%20Robotics%20%26%20AI%20Club%2C%0A%0AI%20am%20interested%20in%20sponsoring%20your%20club.%20Here%20are%20some%20details%20about%20our%20organization%3A%0A%0AOrganization%20Name%3A%0A%0AType%20of%20Sponsorship%20Interested%20In%3A%0A%0AContact%20Person%3A%0A%0APhone%3A%0A%0AThank%20you%2C%0A%5BYour%20Name%5D">
                Contact Sponsorship Team
                <Mail className="ml-2 size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer pathname="/contact/sponsorship" />
    </div>
  )
}

