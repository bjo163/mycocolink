"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, User, MapPin } from "lucide-react"
import { useState, useEffect } from "react"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Budi Santoso",
      location: "Kemang, Jakarta Selatan",
      rating: 5,
      text: "Sejak pakai Mycocolink, streaming Netflix 4K lancar jaya! Gaming online juga zero lag. Tim support sangat responsif, masalah langsung ditangani dalam hitungan menit. Recommended banget!",
      package: "Paket Lightning 100 Mbps",
    },
    {
      name: "Sarah Wijaya",
      location: "Pondok Indah, Jakarta Selatan",
      rating: 5,
      text: "Work from home jadi lebih produktif dengan internet super stabil dari Mycocolink. Video conference HD tanpa putus-putus, upload file besar cepat banget. Worth every penny!",
      package: "Paket Thunder 200 Mbps",
    },
    {
      name: "Ahmad Rizki",
      location: "Cilandak, Jakarta Selatan",
      rating: 5,
      text: "Sebagai content creator, kecepatan upload yang konsisten itu penting banget. Mycocolink memberikan exactly what I need. Upload video 4K ke YouTube cuma butuh 10 menit!",
      package: "Paket Storm 500 Mbps",
    },
    {
      name: "Lisa Chen",
      location: "Lebak Bulus, Jakarta Selatan",
      rating: 5,
      text: "Keluarga besar dengan 6 device aktif bersamaan, tapi internet tetap kencang untuk semua. Anak-anak bisa belajar online sambil saya meeting, suami gaming. Perfect!",
      package: "Paket Lightning 100 Mbps",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      <div className="floating-orb absolute top-10 left-20 w-16 h-16 bg-accent/10 glow-accent animate-pulse-glow"></div>
      <div className="floating-orb absolute bottom-20 right-20 w-12 h-12 bg-primary/10 glow-primary animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk text-foreground mb-6">
            Apa Kata <span className="text-primary glow-primary">Pelanggan</span> Kami?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            🌟 Lebih dari 10,000+ pelanggan puas telah merasakan pengalaman internet terbaik bersama Mycocolink
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="glass-card-hover border-primary/30 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/20 rounded-full">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg">{testimonials[currentTestimonial].name}</h3>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{testimonials[currentTestimonial].location}</span>
                      </div>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-accent/50" />
                </div>

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                  "{testimonials[currentTestimonial].text}"
                </p>

                <div className="glass-card px-4 py-2 rounded-full inline-block">
                  <span className="text-sm text-primary font-semibold">
                    📦 {testimonials[currentTestimonial].package}
                  </span>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? "bg-primary glow-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card-hover p-6 rounded-2xl text-center group">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  4.9/5
                </div>
                <div className="flex justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">Rating Google</div>
              </div>
              <div className="glass-card-hover p-6 rounded-2xl text-center group">
                <div className="text-3xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
                  98%
                </div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>

            <Card className="glass-card-hover border-accent/30">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-4 text-lg">🏆 Penghargaan & Sertifikasi</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">ISO 9001:2015 Quality Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Best ISP Jakarta Selatan 2023</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-muted-foreground">Customer Choice Award 2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card-hover border-primary/30">
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-4 text-lg">📊 Statistik Kepuasan</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Kecepatan Internet</span>
                      <span className="text-sm font-semibold text-primary">99%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-[99%] glow-primary"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Layanan Pelanggan</span>
                      <span className="text-sm font-semibold text-accent">97%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full w-[97%] glow-accent"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Stabilitas Jaringan</span>
                      <span className="text-sm font-semibold text-destructive">98%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-destructive h-2 rounded-full w-[98%]"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
