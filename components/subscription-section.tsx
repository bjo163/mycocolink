"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { User, Home, CreditCard, Wifi, CheckCircle, ChevronDown, ChevronUp } from "lucide-react"

interface SubscriptionSectionProps {
  isOpen?: boolean
  onToggle?: () => void
}

export function SubscriptionSection({ isOpen = false, onToggle }: SubscriptionSectionProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    idNumber: "",
    selectedPackage: "",
    installationType: "",
    preferredDate: "",
    additionalServices: [] as string[],
    paymentMethod: "",
    notes: "",
    agreeTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const packages = [
    { id: "home-25", name: "Home 25 Mbps", price: "Rp 299.000/bulan" },
    { id: "home-50", name: "Home 50 Mbps", price: "Rp 399.000/bulan" },
    { id: "home-100", name: "Home 100 Mbps", price: "Rp 599.000/bulan" },
    { id: "business-200", name: "Business 200 Mbps", price: "Rp 999.000/bulan" },
    { id: "enterprise-500", name: "Enterprise 500 Mbps", price: "Rp 1.999.000/bulan" },
  ]

  const additionalServices = [
    { id: "static-ip", name: "Static IP Address", price: "+Rp 50.000/bulan" },
    { id: "wifi-extender", name: "WiFi Extender", price: "+Rp 25.000/bulan" },
    { id: "priority-support", name: "Priority Support", price: "+Rp 75.000/bulan" },
    { id: "backup-connection", name: "Backup Connection", price: "+Rp 150.000/bulan" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      additionalServices: checked
        ? [...prev.additionalServices, serviceId]
        : prev.additionalServices.filter((id) => id !== serviceId),
    }))
  }

  if (isSubmitted) {
    return (
      <section id="berlangganan" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(32,78,147,0.1),transparent_50%)]" />

        <div className="max-w-2xl mx-auto relative z-10">
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Pendaftaran Berhasil!</h3>
              <p className="text-muted-foreground mb-6">
                Terima kasih telah mendaftar layanan Mycocolink. Tim kami akan menghubungi Anda dalam 1x24 jam untuk
                konfirmasi dan penjadwalan instalasi.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📧 Email konfirmasi telah dikirim</p>
                <p>📞 Tim sales akan menghubungi segera</p>
                <p>🔧 Instalasi dijadwalkan sesuai permintaan</p>
              </div>
              <Button onClick={() => setIsSubmitted(false)} className="mt-6" variant="outline">
                Daftar Lagi
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="berlangganan" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(90,181,57,0.1),transparent_50%)]" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(32,78,147,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(32,78,147,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Daftar Sekarang</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bergabunglah dengan ribuan pelanggan yang telah merasakan kecepatan internet fiber optic terdepan
          </p>

          {!isOpen && (
            <Button
              onClick={onToggle}
              size="lg"
              className="mt-8 px-12 py-6 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
            >
              Mulai Pendaftaran
              <ChevronDown className="w-5 h-5 ml-2" />
            </Button>
          )}
        </div>

        {isOpen && (
          <div className="space-y-4">
            <div className="flex justify-center mb-8">
              <Button onClick={onToggle} variant="outline" size="sm" className="border-primary/20 bg-transparent">
                Tutup Form
                <ChevronUp className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Informasi Pribadi
                  </CardTitle>
                  <CardDescription>Lengkapi data diri Anda untuk proses pendaftaran</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Nama Lengkap *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                        placeholder="Masukkan nama lengkap"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="idNumber">No. KTP/Identitas *</Label>
                      <Input
                        id="idNumber"
                        value={formData.idNumber}
                        onChange={(e) => setFormData((prev) => ({ ...prev, idNumber: e.target.value }))}
                        placeholder="Nomor KTP/Identitas"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        placeholder="email@example.com"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">No. Telepon *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        placeholder="08xxxxxxxxxx"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="w-5 h-5 text-primary" />
                    Alamat Instalasi
                  </CardTitle>
                  <CardDescription>Alamat lengkap untuk pemasangan layanan internet</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="address">Alamat Lengkap *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
                      placeholder="Jalan, No. Rumah, RT/RW, Kelurahan"
                      required
                      className="bg-background/50 min-h-[100px]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city">Kota/Kabupaten *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
                        placeholder="Nama kota/kabupaten"
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Kode Pos *</Label>
                      <Input
                        id="postalCode"
                        value={formData.postalCode}
                        onChange={(e) => setFormData((prev) => ({ ...prev, postalCode: e.target.value }))}
                        placeholder="12345"
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wifi className="w-5 h-5 text-primary" />
                    Pilihan Paket & Layanan
                  </CardTitle>
                  <CardDescription>Pilih paket internet yang sesuai dengan kebutuhan Anda</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Paket Internet *</Label>
                    <Select
                      value={formData.selectedPackage}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, selectedPackage: value }))}
                    >
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Pilih paket internet" />
                      </SelectTrigger>
                      <SelectContent>
                        {packages.map((pkg) => (
                          <SelectItem key={pkg.id} value={pkg.id}>
                            {pkg.name} - {pkg.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <Label>Layanan Tambahan (Opsional)</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {additionalServices.map((service) => (
                        <div key={service.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={service.id}
                            checked={formData.additionalServices.includes(service.id)}
                            onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                          />
                          <Label htmlFor={service.id} className="text-sm">
                            {service.name} <span className="text-muted-foreground">({service.price})</span>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label>Tipe Instalasi *</Label>
                    <RadioGroup
                      value={formData.installationType}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, installationType: value }))}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard">Instalasi Standard (Gratis)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="express" id="express" />
                        <Label htmlFor="express">Instalasi Express (+Rp 100.000)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Tanggal Instalasi Diinginkan</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData((prev) => ({ ...prev, preferredDate: e.target.value }))}
                      className="bg-background/50"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-primary" />
                    Metode Pembayaran
                  </CardTitle>
                  <CardDescription>Pilih metode pembayaran yang Anda inginkan</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <Label>Metode Pembayaran *</Label>
                    <RadioGroup
                      value={formData.paymentMethod}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, paymentMethod: value }))}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly">Bulanan</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="quarterly" id="quarterly" />
                        <Label htmlFor="quarterly">3 Bulan (Diskon 5%)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="semi-annual" id="semi-annual" />
                        <Label htmlFor="semi-annual">6 Bulan (Diskon 10%)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="annual" id="annual" />
                        <Label htmlFor="annual">12 Bulan (Diskon 15%)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Catatan Tambahan</Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                      placeholder="Catatan khusus untuk instalasi atau pertanyaan lainnya"
                      className="bg-background/50"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({ ...prev, agreeTerms: checked as boolean }))
                      }
                      required
                    />
                    <Label htmlFor="agreeTerms" className="text-sm">
                      Saya setuju dengan{" "}
                      <a href="#" className="text-primary hover:underline">
                        Syarat & Ketentuan
                      </a>{" "}
                      dan{" "}
                      <a href="#" className="text-primary hover:underline">
                        Kebijakan Privasi
                      </a>{" "}
                      *
                    </Label>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || !formData.agreeTerms}
                  className="px-12 py-6 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Memproses Pendaftaran...
                    </>
                  ) : (
                    "Daftar Sekarang"
                  )}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}
