"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle, User } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Telepon",
      value: "08118488847",
      href: "tel:08118488847",
      color: "text-primary",
    },
    {
      icon: Mail,
      label: "Email",
      value: "lentera@mycocolink.com",
      href: "mailto:lentera@mycocolink.com",
      color: "text-accent",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+62 8118488847",
      href: "https://wa.me/628118488847",
      color: "text-accent",
    },
    {
      icon: User,
      label: "Pimpinan",
      value: "Muhamad Agus Rahman",
      subtitle: "President Direktur Operasional",
      color: "text-primary",
    },
  ]

  return (
    <section id="kontak" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-foreground mb-4">
            Hubungi <span className="text-primary">Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Siap membantu Anda 24/7. Hubungi tim customer service kami untuk konsultasi dan pendaftaran paket internet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon

            return (
              <Card
                key={index}
                className="glass-card border-primary/20 hover:border-accent/40 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <IconComponent className={`w-8 h-8 ${contact.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{contact.label}</h3>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 block"
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <div>
                      <div className="text-muted-foreground">{contact.value}</div>
                      {contact.subtitle && (
                        <div className="text-sm text-muted-foreground/70 mt-1">{contact.subtitle}</div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="glass-card border-accent/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-space-grotesk text-foreground mb-4">Siap Berlangganan?</h3>
              <p className="text-muted-foreground mb-6">
                Dapatkan internet cepat dan stabil hari ini juga. Tim kami akan membantu proses instalasi dengan cepat
                dan profesional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                  onClick={() => window.open("https://wa.me/628118488847", "_blank")}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  onClick={() => window.open("tel:08118488847")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Telepon Sekarang
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
