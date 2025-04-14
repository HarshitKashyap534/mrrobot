"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, FileText, Shield, AlertTriangle, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackgroundGrid } from "@/components/background-grid"

export default function TermsOfServicePage() {
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
            <h1 className="text-4xl font-bold tracking-tight mb-4">Terms of Service</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Please read these terms carefully before using our services. By using our services, you agree to these terms.
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
                      <FileText className="size-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Agreement</h3>
                  </div>
                  <p className="text-muted-foreground">
                    By accessing our services, you agree to be bound by these terms and all applicable laws and regulations.
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
                      <Shield className="size-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Responsibilities</h3>
                  </div>
                  <p className="text-muted-foreground">
                    You are responsible for maintaining the confidentiality of your account and for all activities under your account.
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
                      <AlertTriangle className="size-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Prohibited Uses</h3>
                  </div>
                  <p className="text-muted-foreground">
                    You may not use our services for any illegal purpose or in any manner inconsistent with these terms.
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
              <h2 className="text-2xl font-bold">Acceptable Use</h2>
              <p className="text-lg text-muted-foreground">
                You agree to use our services only for lawful purposes and in accordance with these Terms of Service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">What You Can Do</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">01</Badge>
                  <span className="text-muted-foreground">
                    Participate in club activities and events
                  </span>
              </li>
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">02</Badge>
                  <span className="text-muted-foreground">
                    Access and use club resources for educational purposes
                  </span>
              </li>
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">03</Badge>
                  <span className="text-muted-foreground">
                    Share knowledge and collaborate with other members
                  </span>
              </li>
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">04</Badge>
                  <span className="text-muted-foreground">
                    Contribute to club projects and initiatives
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
              <h2 className="text-2xl font-bold">What You Cannot Do</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Badge variant="destructive" className="mt-1">01</Badge>
                  <span className="text-muted-foreground">
                    Use club resources for commercial purposes without permission
                  </span>
              </li>
                <li className="flex items-start gap-3">
                  <Badge variant="destructive" className="mt-1">02</Badge>
                  <span className="text-muted-foreground">
                    Share confidential club information with non-members
                  </span>
              </li>
                <li className="flex items-start gap-3">
                  <Badge variant="destructive" className="mt-1">03</Badge>
                  <span className="text-muted-foreground">
                    Engage in any form of harassment or discrimination
                  </span>
              </li>
                <li className="flex items-start gap-3">
                  <Badge variant="destructive" className="mt-1">04</Badge>
                  <span className="text-muted-foreground">
                    Damage or misuse club equipment and resources
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
              <h2 className="text-2xl font-bold">Intellectual Property</h2>
              <p className="text-lg text-muted-foreground">
                All content and materials available through our services are protected by intellectual property rights.
                You may not use, reproduce, or distribute any content without our express written permission.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Termination</h2>
              <p className="text-lg text-muted-foreground">
                We reserve the right to terminate or suspend your access to our services immediately, without prior notice
                or liability, for any reason whatsoever, including without limitation if you breach these Terms of Service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-6"
            >
              {/* <h2 className="text-2xl font-bold">Contact Us</h2>
              <p className="text-lg text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button variant="outline" className="rounded-full" asChild>
                  <Link href="/contact">
                    Contact Form
                  </Link>
                </Button>
                <Button variant="outline" className="rounded-full" asChild>
                  <Link href="mailto:roboticsclub@marwadiuniversity.ac.in">
                    Email Us
                  </Link>
                </Button>
              </div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Changes to Terms</h2>
              <p className="text-lg text-muted-foreground">
                We reserve the right to modify these terms at any time. We will notify you of any changes by posting the
                new Terms of Service on this page and updating the "Last Updated" date.
            </p>
          </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

