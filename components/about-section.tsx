import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Users, Award, Zap, Shield, Star } from "lucide-react"

export function AboutSection() {
  return (
    <section id="tentang" className="py-24 bg-gradient-to-b from-muted/20 to-muted/40 relative overflow-hidden">
      <div className="floating-orb absolute top-20 right-10 w-20 h-20 bg-primary/10 glow-primary animate-pulse-glow"></div>
      <div className="floating-orb absolute bottom-20 left-10 w-16 h-16 bg-accent/10 glow-accent animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk text-foreground mb-6 leading-tight">
            Mengapa Pilih <span className="text-primary glow-primary">Mycocolink</span>?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              PT Lentera Abadi Solusinet bukan sekadar penyedia internet biasa. Kami adalah{" "}
              <span className="text-primary font-bold">partner digital</span> yang memahami kebutuhan internet modern
              Anda dengan teknologi fiber optik terdepan dan layanan premium.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="glass-card-hover p-8 rounded-2xl text-center group">
            <div className="mb-4">
              <Users className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-3xl md:text-4xl font-bold text-primary">10K+</div>
            </div>
            <div className="text-sm text-muted-foreground font-medium">Pelanggan Aktif</div>
          </div>
          <div className="glass-card-hover p-8 rounded-2xl text-center group">
            <div className="mb-4">
              <Shield className="w-8 h-8 text-accent mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-3xl md:text-4xl font-bold text-accent">99.9%</div>
            </div>
            <div className="text-sm text-muted-foreground font-medium">Network Uptime</div>
          </div>
          <div className="glass-card-hover p-8 rounded-2xl text-center group">
            <div className="mb-4">
              <Zap className="w-8 h-8 text-destructive mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-3xl md:text-4xl font-bold text-destructive">24/7</div>
            </div>
            <div className="text-sm text-muted-foreground font-medium">Technical Support</div>
          </div>
          <div className="glass-card-hover p-8 rounded-2xl text-center group">
            <div className="mb-4">
              <Star className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-3xl md:text-4xl font-bold text-primary">5+</div>
            </div>
            <div className="text-sm text-muted-foreground font-medium">Tahun Pengalaman</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Card className="glass-card-hover border-primary/30 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-3 bg-primary/20 rounded-2xl group-hover:bg-primary/30 transition-colors">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">🏆 Teknologi Terdepan</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Menggunakan infrastruktur fiber optik premium dengan teknologi GPON terbaru untuk memberikan
                      kecepatan internet yang konsisten dan stabil 24/7 tanpa gangguan.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card-hover border-accent/30 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-3 bg-accent/20 rounded-2xl group-hover:bg-accent/30 transition-colors">
                    <MapPin className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">📍 Lokasi Strategis Jakarta Selatan</h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                      Jl. H. Muhctar Raya, Jl. H.Tohir No.11
                      <br />
                      Kota Jakarta Selatan, DKI Jakarta 15156
                    </p>
                    <p className="text-muted-foreground mb-4">
                      🚀 <span className="text-accent font-semibold">Coverage area:</span> Jakarta Selatan, Depok, dan
                      sekitarnya
                    </p>
                    <a
                      href="https://maps.app.goo.gl/jSy8SkGQsgdqnRYS9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
                    >
                      📍 Lihat di Google Maps →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card-hover border-primary/30 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-3 bg-primary/20 rounded-2xl group-hover:bg-primary/30 transition-colors">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">👨‍💼 Kepemimpinan Berpengalaman</h3>
                    <div className="space-y-2">
                      <p className="text-foreground font-semibold text-lg">Muhamad Agus Rahman</p>
                      <p className="text-primary font-medium">President Direktur Operasional</p>
                      <p className="text-muted-foreground">💼 15+ tahun pengalaman di industri telekomunikasi</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="glass-card-hover p-10 rounded-3xl relative overflow-hidden">
              <img
                src="/fiber-optic-network.png"
                alt="Infrastruktur Jaringan Fiber Optik Mycocolink"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass-card p-6 rounded-2xl text-center">
                  <div className="p-4 bg-accent/20 rounded-full inline-block mb-4">
                    <Zap className="w-10 h-10 text-accent" />
                  </div>
                  <p className="text-lg font-bold text-foreground mb-2">Jaringan Fiber Optik</p>
                  <p className="text-muted-foreground">Teknologi GPON Premium</p>
                </div>
              </div>
            </div>
            {/* Enhanced decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent rounded-full glow-accent animate-pulse-glow"></div>
            <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-primary rounded-full glow-primary animate-pulse-glow"></div>
            <div className="absolute top-1/2 -left-4 w-6 h-6 bg-destructive rounded-full animate-pulse-glow"></div>
          </div>
        </div>
      </div>

      <div className="section-divider"></div>
    </section>
  )
}
