"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Shield, Lock, Eye, Database, Mail, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackgroundGrid } from "@/components/background-grid"

export default function PrivacyPolicyPage() {
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
            <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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
                      <Lock className="size-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Data Protection</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We implement industry-standard security measures to protect your personal information.
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
                      <Eye className="size-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Transparency</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We are clear about what data we collect and how we use it to improve your experience.
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
                      <Database className="size-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Data Control</h3>
                  </div>
                  <p className="text-muted-foreground">
                    You have control over your personal information and can request its deletion at any time.
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
              <h2 className="text-2xl font-bold">Information We Collect</h2>
              <p className="text-lg text-muted-foreground">
                We collect information that you provide directly to us, such as when you create an account, register for
                events, or contact us. This may include your name, email address, phone number, and other contact
                information.
            </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">How We Use Your Information</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">01</Badge>
                  <span className="text-muted-foreground">
                    To provide and maintain our services
                  </span>
              </li>
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">02</Badge>
                  <span className="text-muted-foreground">
                    To communicate with you about club activities and events
                  </span>
              </li>
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">03</Badge>
                  <span className="text-muted-foreground">
                    To improve and personalize your experience
                  </span>
              </li>
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">04</Badge>
                  <span className="text-muted-foreground">
                    To ensure the security of our services
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
              <h2 className="text-2xl font-bold">Data Sharing</h2>
              <p className="text-lg text-muted-foreground">
                We do not sell or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">01</Badge>
                  <span className="text-muted-foreground">
                    Service providers who assist in our operations
                  </span>
              </li>
                <li className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">02</Badge>
                  <span className="text-muted-foreground">
                    Law enforcement when required by law
                  </span>
              </li>
                <li className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-1">03</Badge>
                  <span className="text-muted-foreground">
                    Other club members for event coordination
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
              <h2 className="text-2xl font-bold">Your Rights</h2>
              <p className="text-lg text-muted-foreground">
                You have the right to:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">01</Badge>
                  <span className="text-muted-foreground">
                    Access your personal information
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">02</Badge>
                  <span className="text-muted-foreground">
                    Correct inaccurate information
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">03</Badge>
                  <span className="text-muted-foreground">
                    Request deletion of your data
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="mt-1">04</Badge>
                  <span className="text-muted-foreground">
                    Opt-out of communications
                  </span>
              </li>
            </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              {/* <h2 className="text-2xl font-bold">Contact Us</h2>
              <p className="text-lg text-muted-foreground">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Updates to This Policy</h2>
              <p className="text-lg text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

