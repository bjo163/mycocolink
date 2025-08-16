"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Wifi, Zap, Shield } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card border-b backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <img
              src="https://portal.mycocolink.com/web/image/website/5/logo/portal.mycocolink.com?unique=1da2f47"
              alt="Mycocolink Logo"
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
            <div className="hidden sm:flex items-center space-x-1 text-xs text-accent">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span>Online</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="group flex items-center space-x-1 text-foreground hover:text-primary transition-all duration-200 relative"
              >
                <Zap size={16} className="group-hover:text-accent transition-colors" />
                <span>Home</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection("tentang")}
                className="group flex items-center space-x-1 text-foreground hover:text-primary transition-all duration-200 relative"
              >
                <Shield size={16} className="group-hover:text-accent transition-colors" />
                <span>Tentang</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection("paket")}
                className="group flex items-center space-x-1 text-foreground hover:text-primary transition-all duration-200 relative"
              >
                <Wifi size={16} className="group-hover:text-accent transition-colors" />
                <span>Paket</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></div>
              </button>
              <button
                onClick={() => scrollToSection("kontak")}
                className="group flex items-center space-x-1 text-foreground hover:text-primary transition-all duration-200 relative"
              >
                <span>Kontak</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></div>
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground glow-accent relative overflow-hidden group"
              onClick={() => scrollToSection("kontak")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative">Daftar Sekarang</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-card mt-2 rounded-lg">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("tentang")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
              >
                Tentang
              </button>
              <button
                onClick={() => scrollToSection("paket")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
              >
                Paket
              </button>
              <button
                onClick={() => scrollToSection("kontak")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 w-full text-left"
              >
                Kontak
              </button>
              <div className="px-3 py-2">
                <Button
                  className="bg-destructive hover:bg-destructive/90 text-destructive-foreground w-full"
                  onClick={() => scrollToSection("kontak")}
                >
                  Daftar Sekarang
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
