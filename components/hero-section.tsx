"use client"

import { Button } from "@/components/ui/button"
import { Activity, Cpu, Orbit, Network, Timer, Globe2 } from "lucide-react"
import SpeedTest from "@/components/speed-test"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("kontak")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 sci-fi-grid opacity-20"></div>

      {/* Floating orbs for enhanced sci-fi atmosphere */}
      <div className="floating-orb absolute top-20 left-10 w-4 h-4 bg-accent glow-accent animate-pulse-glow"></div>
      <div className="floating-orb absolute top-40 right-20 w-6 h-6 bg-primary glow-primary animate-pulse-glow"></div>
      <div className="floating-orb absolute bottom-40 left-20 w-3 h-3 bg-accent glow-accent animate-pulse-glow"></div>
      <div className="floating-orb absolute top-60 left-1/3 w-2 h-2 bg-destructive animate-pulse-glow"></div>
      <div className="floating-orb absolute bottom-60 right-1/3 w-5 h-5 bg-primary glow-primary animate-pulse-glow"></div>

      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent via-accent/5 to-destructive/5"></div>

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-background/50 to-background/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-10">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-space-grotesk text-foreground leading-[0.9] tracking-tight">
              Rasakan Internet
              <br />
              <span className="text-primary glow-primary inline-block transform hover:scale-105 transition-transform">
                Super Cepat
              </span>
              <br />
              Tanpa <span className="text-accent">Batas</span> & <span className="text-destructive">Gangguan</span>
            </h1>

            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-4">
                <span className="inline-flex items-center bg-gradient-to-r from-primary/20 to-accent/20 px-3 py-1 rounded-full text-primary font-semibold mr-2">
                  <Orbit className="w-4 h-4 mr-1" />
                  TURBO MODE
                </span>
                Streaming 4K tanpa buffering • Gaming online tanpa lag • Work from home lancar jaya
              </p>
              <p className="text-lg md:text-xl text-foreground">
                <span className="text-primary font-bold glow-primary">Fiber optik premium</span> dengan teknologi
                terdepan untuk pengalaman internet terbaik di Indonesia!
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12">
            <div className="glass-card-hover px-6 py-4 rounded-2xl group">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-accent/20 rounded-full group-hover:bg-accent/30 transition-colors">
                  <Activity className="w-5 h-5 text-accent" />
                </div>
                <span className="font-semibold">
                  Kecepatan Lightning{" "}
                  <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse ml-1"></span>
                </span>
              </div>
            </div>
            <div className="glass-card-hover px-6 py-4 rounded-2xl group">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-colors">
                  <Cpu className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold">
                  99.9% Uptime{" "}
                  <span className="inline-flex items-center ml-1">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping"></span>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full ml-1"></span>
                  </span>
                </span>
              </div>
            </div>
            <div className="glass-card-hover px-6 py-4 rounded-2xl group">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-accent/20 rounded-full group-hover:bg-accent/30 transition-colors">
                  <Timer className="w-5 h-5 text-accent" />
                </div>
                <span className="font-semibold">
                  Support 24/7 <span className="inline-block w-2 h-2 bg-accent rounded-full animate-bounce ml-1"></span>
                </span>
              </div>
            </div>
            <div className="glass-card-hover px-6 py-4 rounded-2xl group">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-destructive/20 rounded-full group-hover:bg-destructive/30 transition-colors">
                  <div className="flex space-x-0.5">
                    <div className="w-1 h-1 bg-destructive rounded-full"></div>
                    <div className="w-1 h-1 bg-destructive rounded-full"></div>
                    <div className="w-1 h-1 bg-destructive rounded-full"></div>
                    <div className="w-1 h-1 bg-destructive rounded-full"></div>
                    <div className="w-1 h-1 bg-destructive rounded-full"></div>
                  </div>
                </div>
                <span className="font-semibold">
                  Rating 4.9/5 <span className="inline-block text-destructive animate-pulse">◆</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <SpeedTest />
          </div>

          <div className="glass-card-hover p-8 rounded-3xl max-w-2xl mx-auto mt-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Network className="w-6 h-6 text-primary" />
                  <span className="text-3xl font-bold text-primary">10,000+</span>
                </div>
                <span className="text-muted-foreground">Pelanggan Puas</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Globe2 className="w-6 h-6 text-accent" />
                  <span className="text-3xl font-bold text-accent">5 Tahun</span>
                </div>
                <span className="text-muted-foreground">Pengalaman</span>
              </div>
            </div>
          </div>

          <div className="pt-12 space-y-6">
            <Button
              size="lg"
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground text-xl px-12 py-6 rounded-2xl glow-accent transform hover:scale-105 transition-all duration-300 shadow-2xl"
              onClick={scrollToContact}
            >
              <span className="inline-flex items-center mr-2">
                <span className="w-2 h-2 bg-white rounded-full animate-ping mr-1"></span>
                <span className="w-2 h-2 bg-white rounded-full"></span>
              </span>
              Daftar Sekarang - Gratis Instalasi!
            </Button>
            <div className="glass-card px-6 py-3 rounded-full inline-block">
              <p className="text-sm text-muted-foreground">
                <span className="inline-flex items-center mr-2">
                  <span className="w-1.5 h-1.5 bg-destructive rounded-full animate-pulse"></span>
                  <span
                    className="w-1.5 h-1.5 bg-destructive rounded-full animate-pulse ml-0.5"
                    style={{ animationDelay: "0.5s" }}
                  ></span>
                </span>
                <span className="text-destructive font-bold">Promo terbatas!</span> Hemat hingga 50% untuk 3 bulan
                pertama
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-primary/20 via-primary/10 to-transparent"></div>
      <div className="section-divider absolute bottom-0 left-0 right-0"></div>
    </section>
  )
}
