"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Zap, Users, Globe } from "lucide-react"

const packages = [
  {
    id: "basic",
    name: "Basic",
    speed: "25 Mbps",
    price: 299000,
    originalPrice: 350000,
    features: [
      { name: "Kecepatan Download 25 Mbps", included: true },
      { name: "Kecepatan Upload 10 Mbps", included: true },
      { name: "Unlimited Quota", included: true },
      { name: "Free Installation", included: true },
      { name: "WiFi Router", included: false },
      { name: "24/7 Support", included: true },
      { name: "Static IP", included: false },
      { name: "Priority Support", included: false },
    ],
    ideal: "Cocok untuk 1-2 pengguna",
    color: "bg-blue-500",
  },
  {
    id: "family",
    name: "Family",
    speed: "50 Mbps",
    price: 499000,
    originalPrice: 580000,
    features: [
      { name: "Kecepatan Download 50 Mbps", included: true },
      { name: "Kecepatan Upload 25 Mbps", included: true },
      { name: "Unlimited Quota", included: true },
      { name: "Free Installation", included: true },
      { name: "WiFi Router", included: true },
      { name: "24/7 Support", included: true },
      { name: "Static IP", included: false },
      { name: "Priority Support", included: true },
    ],
    ideal: "Cocok untuk 3-5 pengguna",
    color: "bg-green-500",
    popular: true,
  },
  {
    id: "business",
    name: "Business",
    speed: "100 Mbps",
    price: 899000,
    originalPrice: 1050000,
    features: [
      { name: "Kecepatan Download 100 Mbps", included: true },
      { name: "Kecepatan Upload 50 Mbps", included: true },
      { name: "Unlimited Quota", included: true },
      { name: "Free Installation", included: true },
      { name: "WiFi Router", included: true },
      { name: "24/7 Support", included: true },
      { name: "Static IP", included: true },
      { name: "Priority Support", included: true },
    ],
    ideal: "Cocok untuk bisnis & kantor",
    color: "bg-purple-500",
  },
]

export default function PackageComparison() {
  const [selectedPackages, setSelectedPackages] = useState(["family"])

  const togglePackage = (packageId: string) => {
    setSelectedPackages(
      (prev) => (prev.includes(packageId) ? prev.filter((id) => id !== packageId) : [...prev, packageId].slice(-2)), // Max 2 packages for comparison
    )
  }

  const selectedPackageData = packages.filter((pkg) => selectedPackages.includes(pkg.id))

  return (
    <div className="space-y-8">
      {/* Package Selection */}
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold text-primary">Bandingkan Paket Internet</h3>
        <p className="text-gray-600">Pilih maksimal 2 paket untuk dibandingkan</p>

        <div className="flex flex-wrap justify-center gap-3">
          {packages.map((pkg) => (
            <Button
              key={pkg.id}
              variant={selectedPackages.includes(pkg.id) ? "default" : "outline"}
              onClick={() => togglePackage(pkg.id)}
              className="relative"
            >
              {pkg.name} - {pkg.speed}
              {pkg.popular && <Badge className="absolute -top-2 -right-2 bg-accent text-white text-xs">Popular</Badge>}
            </Button>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      {selectedPackageData.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2">
          {selectedPackageData.map((pkg) => (
            <Card key={pkg.id} className="relative bg-white/10 backdrop-blur-md border-white/20">
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white">
                  PALING POPULER
                </Badge>
              )}

              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-full ${pkg.color} mx-auto flex items-center justify-center mb-4`}>
                  {pkg.id === "basic" && <Zap className="h-8 w-8 text-white" />}
                  {pkg.id === "family" && <Users className="h-8 w-8 text-white" />}
                  {pkg.id === "business" && <Globe className="h-8 w-8 text-white" />}
                </div>

                <CardTitle className="text-2xl text-primary">{pkg.name}</CardTitle>
                <CardDescription className="text-lg font-semibold">{pkg.speed}</CardDescription>

                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">
                    Rp {pkg.price.toLocaleString("id-ID")}
                    <span className="text-sm font-normal text-gray-600">/bulan</span>
                  </div>
                  <div className="text-sm text-gray-500 line-through">
                    Rp {pkg.originalPrice.toLocaleString("id-ID")}
                  </div>
                  <Badge variant="secondary" className="bg-accent/20 text-accent">
                    Hemat Rp {(pkg.originalPrice - pkg.price).toLocaleString("id-ID")}
                  </Badge>
                </div>

                <p className="text-sm text-gray-600 mt-2">{pkg.ideal}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-accent flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.included ? "text-gray-800" : "text-gray-400"}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Pilih Paket {pkg.name}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
