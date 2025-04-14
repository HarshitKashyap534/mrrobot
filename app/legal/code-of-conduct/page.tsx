"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Shield, Users, Heart, AlertTriangle, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackgroundGrid } from "@/components/background-grid"

export default function CodeOfConductPage() {
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
            <h1 className="text-4xl font-bold tracking-tight mb-4">Code of Conduct</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Our commitment to fostering a respectful, inclusive, and professional environment for all members.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="size-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Respect</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Treat all members with dignity and respect, regardless of their background, experience, or role.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="size-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Inclusivity</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Create an environment where everyone feels welcome and valued, embracing diverse perspectives.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Handshake className="size-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Collaboration</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Work together constructively, share knowledge, and support each other's growth.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Our Commitment</h2>
              <p className="text-lg text-muted-foreground">
                The Robotics & AI Club is dedicated to providing a harassment-free experience for everyone, regardless of
                gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body
                size, race, ethnicity, religion (or lack thereof), or technology choices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Expected Behavior</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">01</Badge>
                  <span className="text-muted-foreground">
                    Be respectful and considerate of differing viewpoints and experiences
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">02</Badge>
                  <span className="text-muted-foreground">
                    Accept constructive criticism gracefully and provide it thoughtfully
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">03</Badge>
                  <span className="text-muted-foreground">
                    Focus on what is best for the community and its members
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">04</Badge>
                  <span className="text-muted-foreground">
                    Show empathy and kindness towards other community members
                  </span>
                </li>
            </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Unacceptable Behavior</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Badge variant="destructive" className="mt-1">01</Badge>
                  <span className="text-muted-foreground">
                    Harassment, discrimination, or intimidation in any form
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Badge variant="destructive" className="mt-1">02</Badge>
                  <span className="text-muted-foreground">
                    Violence, threats of violence, or violent language
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Badge variant="destructive" className="mt-1">03</Badge>
                  <span className="text-muted-foreground">
                    Inappropriate or unprofessional communication
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Badge variant="destructive" className="mt-1">04</Badge>
                  <span className="text-muted-foreground">
                    Disruption of meetings, events, or discussions
                  </span>
                </li>
            </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Reporting & Enforcement</h2>
              <p className="text-lg text-muted-foreground">
                If you experience or witness unacceptable behavior, or have any other concerns, please notify a club
                officer or faculty advisor as soon as possible. All reports will be handled confidentially and will be
                investigated promptly.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button variant="outline" className="rounded-full" asChild>
                  <Link href="/contact">
                    Contact Club Officers
                  </Link>
                </Button>
                <Button variant="outline" className="rounded-full" asChild>
                  <Link href="mailto:roboticsclub@marwadiuniversity.ac.in">
                    Email Faculty Advisor
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Consequences</h2>
              <p className="text-lg text-muted-foreground">
                Unacceptable behavior from any community member, including sponsors and those with decision-making
                authority, will not be tolerated. Anyone asked to stop unacceptable behavior is expected to comply
                immediately.
            </p>
              <p className="text-lg text-muted-foreground">
                If a community member engages in unacceptable behavior, the club officers may take any action they deem
                appropriate, up to and including a temporary ban or permanent expulsion from the club without warning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Scope</h2>
              <p className="text-lg text-muted-foreground">
                This Code of Conduct applies to all club activities, including meetings, workshops, competitions, and
                online interactions. It also applies when an individual is representing the club in public spaces.
            </p>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Attribution</h2>
              <p className="text-lg text-muted-foreground">
                This Code of Conduct is adapted from the Contributor Covenant, version 2.0, available at{" "}
                <Link
                  href="https://www.contributor-covenant.org/version/2/0/code_of_conduct.html"
                  target="_blank"
                  className="text-primary hover:text-primary/80"
                >
                  https://www.contributor-covenant.org/version/2/0/code_of_conduct.html
                </Link>
            </p>
          </motion.div> */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

