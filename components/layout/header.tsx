"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Menu, Moon, Sun, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { RoboticsLogo } from "@/components/logo"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  // Add the handleInternalLinkClick function at the top of the Header component
  const handleInternalLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const isActive = (path) => {
    return pathname === path
  }

  return (
    <header
      className={`sticky top-0 z-40 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold">
          <RoboticsLogo size="md" />
          <span>Robotics & AI Club</span>
        </div>
        <nav className="hidden md:flex gap-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-foreground ${isActive("/") ? "text-foreground" : "text-muted-foreground"}`}
            style={{ color: isActive("/") ? "var(--foreground)" : "var(--muted-foreground)" }}
            onClick={handleInternalLinkClick}
          >
            Home
          </Link>
          <Link
            href="/events"
            className={`text-sm font-medium transition-colors hover:text-foreground ${isActive("/events") ? "text-foreground" : "text-muted-foreground"}`}
            style={{ color: isActive("/events") ? "var(--foreground)" : "var(--muted-foreground)" }}
            onClick={handleInternalLinkClick}
          >
            Events
          </Link>
          <Link
            href="/projects"
            className={`text-sm font-medium transition-colors hover:text-foreground ${isActive("/projects") ? "text-foreground" : "text-muted-foreground"}`}
            style={{ color: isActive("/projects") ? "var(--foreground)" : "var(--muted-foreground)" }}
            onClick={handleInternalLinkClick}
          >
            Projects
          </Link>
          {/* <Link
            href="https://store.roboticsaiclub.org" // Replace with your actual external store URL
            className={`text-sm font-medium transition-colors hover:text-foreground ${isActive("/store") ? "text-foreground" : "text-muted-foreground"}`}
            style={{ color: isActive("/store") ? "var(--foreground)" : "var(--muted-foreground)" }}
          >
            Store
          </Link> */}
          <Link
            href="/achievements"
            className={`text-sm font-medium transition-colors hover:text-foreground ${isActive("/achievements") ? "text-foreground" : "text-muted-foreground"}`}
            style={{ color: isActive("/achievements") ? "var(--foreground)" : "var(--muted-foreground)" }}
            onClick={handleInternalLinkClick}
          >
            Achievements
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-foreground ${isActive("/about") ? "text-foreground" : "text-muted-foreground"}`}
            style={{ color: isActive("/about") ? "var(--foreground)" : "var(--muted-foreground)" }}
            onClick={handleInternalLinkClick}
          >
            About Us
          </Link>
          
        </nav>
        <div className="hidden md:flex gap-4 items-center">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link href="https://login.marwadiuniversity.ac.in:553" target="_blank">
              Join Us
              <ChevronRight className="ml-1 size-4" />
            </Link>
          </Button>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
        >
          <div className="container py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="py-2 text-sm font-medium"
              onClick={() => {
                setMobileMenuOpen(false)
                handleInternalLinkClick()
              }}
            >
              Home
            </Link>
            <Link
              href="/events"
              className="py-2 text-sm font-medium"
              onClick={() => {
                setMobileMenuOpen(false)
                handleInternalLinkClick()
              }}
            >
              Events
            </Link>
            <Link
              href="/projects"
              className="py-2 text-sm font-medium"
              onClick={() => {
                setMobileMenuOpen(false)
                handleInternalLinkClick()
              }}
            >
              Projects
            </Link>
            <Link
              href="/achievements"
              className="py-2 text-sm font-medium"
              onClick={() => {
                setMobileMenuOpen(false)
                handleInternalLinkClick()
              }}
            >
              Achievements
            </Link>
            <Link
              href="/about"
              className="py-2 text-sm font-medium"
              onClick={() => {
                setMobileMenuOpen(false)
                handleInternalLinkClick()
              }}
            >
              About Us
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Button className="rounded-full" asChild>
                <Link href="https://login.marwadiuniversity.ac.in:553" target="_blank">
                  Join Us
                  <ChevronRight className="ml-1 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

