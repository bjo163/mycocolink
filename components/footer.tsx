"use client"

import { Wifi, Shield, Zap, Phone, Mail, MapPin, Clock, Star } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-8 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-destructive/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-4 gap-4 mb-6 pb-4 border-b border-primary-foreground/20">
          <div className="text-center">
            <div className="text-xl font-bold text-accent mb-1">10K+</div>
            <div className="text-xs text-primary-foreground/80">Pelanggan</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-accent mb-1">99.9%</div>
            <div className="text-xs text-primary-foreground/80">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-accent mb-1">24/7</div>
            <div className="text-xs text-primary-foreground/80">Support</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="text-accent fill-current" />
              ))}
            </div>
            <div className="text-xs text-primary-foreground/80">Rating</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Brand & Features */}
          <div>
            <h3 className="text-2xl font-bold font-space-grotesk mb-3 glow-primary flex items-center space-x-2">
              <Wifi className="text-accent" size={20} />
              <span>Mycocolink</span>
            </h3>
            <p className="text-primary-foreground/80 mb-4 text-sm leading-relaxed">
              PT Lentera Abadi Solusinet - Penyedia layanan internet fiber optik terpercaya dengan teknologi terdepan
              dan layanan 24/7.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="flex items-center space-x-1 text-xs">
                <Zap size={12} className="text-accent" />
                <span>Kecepatan Tinggi</span>
              </div>
              <div className="flex items-center space-x-1 text-xs">
                <Shield size={12} className="text-accent" />
                <span>Keamanan Terjamin</span>
              </div>
              <div className="flex items-center space-x-1 text-xs">
                <Clock size={12} className="text-accent" />
                <span>Support 24/7</span>
              </div>
            </div>
          </div>

          {/* Contact & Links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-3 text-sm flex items-center space-x-2">
                <div className="w-1 h-4 bg-accent rounded"></div>
                <span>Tautan</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("paket")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    Paket Internet
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("kontak")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    Kontak
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm flex items-center space-x-2">
                <div className="w-1 h-4 bg-accent rounded"></div>
                <span>Kontak</span>
              </h4>
              <div className="space-y-2 text-primary-foreground/80 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone size={14} className="text-accent flex-shrink-0" />
                  <a href="tel:08118488847" className="hover:text-accent transition-colors">
                    08118488847
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={14} className="text-accent flex-shrink-0" />
                  <a href="mailto:lentera@mycocolink.com" className="hover:text-accent transition-colors text-xs">
                    lentera@mycocolink.com
                  </a>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin size={14} className="text-accent mt-0.5 flex-shrink-0" />
                  <div className="text-xs">
                    <p>Jl. H. Muhctar Raya, Jl. H.Tohir No.11</p>
                    <p>Jakarta Selatan 15156</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-primary-foreground/60 text-xs text-center md:text-left">
              © 2024 PT Lentera Abadi Solusinet. Semua hak dilindungi.
            </p>
            <div className="flex items-center space-x-2 text-xs text-primary-foreground/60">
              <span>Powered by Fiber Optic</span>
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
