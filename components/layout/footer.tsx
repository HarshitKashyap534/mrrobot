"use client"

import Link from "next/link"
import { Instagram, Linkedin, Heart } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { RoboticsLogo } from "@/components/logo"

export function Footer({ pathname = "" }) {
  const handleInternalLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
      <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold">
              <RoboticsLogo size="sm" />
              <span>Robotics & AI Club</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Beyond Code. Beyond Limits. The Blueprint for Tomorrow's Technology.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://chat.whatsapp.com/IQ6BCtw42PP4uFqkg0XGig"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaWhatsapp className="size-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link
                href="https://www.instagram.com/robotics_club_/"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="size-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/ce-ai-marwadi-university/posts/?feedView=all"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="size-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={handleInternalLinkClick}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={handleInternalLinkClick}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={handleInternalLinkClick}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/achievements"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={handleInternalLinkClick}
                >
                  Achievements
                </Link>
              </li>
              {/* <li>
                <Link
                  href="https://store.roboticsaiclub.org"
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Store
                </Link>
              </li> */}
              <li>
                {/* This link was removed for security */}
              </li>
              <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={handleInternalLinkClick}
                >
                  About Us
                </Link>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={handleInternalLinkClick}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/sponsorship"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={handleInternalLinkClick}
                >
                  Sponsorship
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-border/40 pt-8">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Robotics & AI Club. All rights reserved.
            </p>
          </div>
          <p className="text-sm text-muted-foreground flex items-center my-4 md:my-0">
            Made with <Heart className="mx-1 size-4 text-yellow-500 fill-yellow-500" /> by&nbsp;
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Red Hawk Consultancy
            </Link>
          </p>
          <div className="flex gap-4">
            <Link
              href="/legal/privacy-policy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              onClick={handleInternalLinkClick}
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms-of-service"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              onClick={handleInternalLinkClick}
            >
              Terms of Service
            </Link>
            <Link
              href="/legal/code-of-conduct"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              onClick={handleInternalLinkClick}
            >
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

