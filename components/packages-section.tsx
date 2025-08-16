"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Radio, Crown, Package } from "lucide-react"
import PackageComparison from "@/components/package-comparison"

export function PackagesSection() {
  const packages = [
    {
      name: "Paket Keluarga",
      subtitle: "Perfect untuk rumah tangga",
      speed: "30 Mbps",
      price: "199.000",
      originalPrice: "299.000",
      registration: "0",
      savings: "100K",
      features: [
        "◈ Kecepatan download hingga 30 Mbps",
        "◇ Unlimited kuota internet",
        "◆ Gratis instalasi dan modem WiFi 6",
        "◈ Support teknis 24/7 via WhatsApp",
        "◇ Cocok untuk 3-4 perangkat",
        "◆ Streaming HD lancar jaya",
        "◈ Gaming online tanpa lag",
      ],
      popular: false,
      badge: "Hemat 33%",
    },
    {
      name: "Paket Premium",
      subtitle: "Pilihan terbaik untuk keluarga modern",
      speed: "50 Mbps",
      price: "135.000",
      originalPrice: "270.000",
      registration: "0",
      savings: "135K",
      features: [
        "◈ Kecepatan download hingga 50 Mbps",
        "◇ Unlimited kuota internet",
        "◆ Gratis instalasi dan modem WiFi 6 Premium",
        "◈ Priority support 24/7 + teknisi on-call",
        "◇ Cocok untuk 5-8 perangkat",
        "◆ Streaming 4K tanpa buffering",
        "◈ Gaming pro dengan ping rendah",
        "◇ Bonus cloud storage 100GB",
      ],
      popular: true,
      badge: "Hemat 50% - Terlaris!",
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("kontak")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="paket" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-foreground mb-4">
            Paket <span className="text-primary">Super Hemat</span>{" "}
            <span className="inline-flex items-center ml-2">
              <span className="w-3 h-3 bg-gradient-to-t from-destructive to-orange-400 rounded-full animate-pulse"></span>
              <span className="w-2 h-2 bg-gradient-to-t from-orange-400 to-yellow-400 rounded-full animate-bounce ml-1"></span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            Dapatkan internet super cepat dengan harga yang tidak akan Anda temukan di tempat lain!
            <span className="text-destructive font-semibold"> Promo terbatas</span> - hemat hingga 50%!
          </p>
          <div className="inline-flex items-center space-x-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium">
            <Package className="w-4 h-4" />
            <span>
              <span className="inline-flex items-center mr-1">
                <span className="w-1 h-1 bg-destructive rounded-full animate-ping"></span>
              </span>
              Promo berakhir dalam 7 hari! Daftar sekarang sebelum terlambat
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`glass-card relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                pkg.popular
                  ? "border-accent/50 glow-accent ring-2 ring-accent/20"
                  : "border-primary/20 hover:border-primary/40"
              }`}
            >
              <div
                className={`absolute top-0 right-0 ${pkg.popular ? "bg-accent" : "bg-primary"} text-white px-4 py-2 text-sm font-bold rounded-bl-lg`}
              >
                {pkg.badge}
              </div>

              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {pkg.popular ? (
                    <Crown className="w-12 h-12 text-accent" />
                  ) : (
                    <Radio className="w-12 h-12 text-primary" />
                  )}
                </div>
                <CardTitle className="text-2xl font-space-grotesk text-foreground">{pkg.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{pkg.subtitle}</p>
                <div className="text-4xl font-bold text-primary mt-2">{pkg.speed}</div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground line-through">Rp {pkg.originalPrice}/bulan</div>
                    <div className="text-3xl font-bold text-foreground">
                      Rp {pkg.price}
                      <span className="text-lg font-normal text-muted-foreground">/bulan</span>
                    </div>
                    <div className="text-sm text-accent font-bold">
                      <span className="inline-flex items-center mr-1">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        <span className="w-1.5 h-1.5 bg-accent/70 rounded-full ml-0.5"></span>
                      </span>
                      Hemat Rp {pkg.savings}/bulan!
                    </div>
                  </div>
                  <div className="text-sm text-accent font-medium mt-2">
                    <span className="inline-flex items-center mr-1">
                      <span className="w-2 h-2 bg-accent border border-accent rounded-sm"></span>
                    </span>
                    Biaya registrasi: <span className="font-bold">GRATIS</span> (hemat Rp 150K)
                  </div>
                </div>

                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full text-lg py-6 ${
                    pkg.popular
                      ? "bg-accent hover:bg-accent/90 text-accent-foreground glow-accent"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  } transform hover:scale-105 transition-all duration-200`}
                  onClick={scrollToContact}
                >
                  {pkg.popular ? (
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full animate-bounce mr-2"></span>
                      Pilih Paket Terbaik!
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></span>
                      Langganan Sekarang
                    </span>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  <span className="inline-flex items-center mr-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-1"></span>
                    Garansi 30 hari uang kembali
                  </span>
                  •
                  <span className="inline-flex items-center ml-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-1"></span>
                    Instalasi dalam 24 jam
                  </span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <PackageComparison />
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            <span className="inline-flex items-center mr-2">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              <span className="w-2 h-2 bg-primary/70 rounded-full ml-1"></span>
            </span>
            Apa Kata Pelanggan Kami?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-4 rounded-lg">
              <div className="flex justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="w-2 h-2 bg-accent rounded-full"></span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                "Internet super cepat, harga terjangkau. Streaming Netflix 4K lancar jaya!"
              </p>
              <p className="text-xs text-primary font-medium mt-2">- Budi, Kemang</p>
            </div>
            <div className="glass-card p-4 rounded-lg">
              <div className="flex justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="w-2 h-2 bg-accent rounded-full"></span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                "Work from home jadi nyaman, video call HD tidak pernah putus. Recommended!"
              </p>
              <p className="text-xs text-primary font-medium mt-2">- Sarah, Pondok Indah</p>
            </div>
            <div className="glass-card p-4 rounded-lg">
              <div className="flex justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="w-2 h-2 bg-accent rounded-full"></span>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                "Gaming online tanpa lag, customer service responsif 24/7. Top!"
              </p>
              <p className="text-xs text-primary font-medium mt-2">- Andi, Fatmawati</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
