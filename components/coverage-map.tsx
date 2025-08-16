"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MapPin, Search, Wifi, CheckCircle, Clock } from "lucide-react"

export function CoverageMap() {
  const [searchAddress, setSearchAddress] = useState("")
  const [searchResult, setSearchResult] = useState<any>(null)

  const coverageAreas = [
    { area: "Jakarta Pusat", coverage: 95, speed: "1000 Mbps", status: "available", color: "green" },
    { area: "Jakarta Selatan", coverage: 92, speed: "1000 Mbps", status: "available", color: "green" },
    { area: "Jakarta Timur", coverage: 88, speed: "500 Mbps", status: "available", color: "blue" },
    { area: "Jakarta Barat", coverage: 85, speed: "500 Mbps", status: "available", color: "blue" },
    { area: "Jakarta Utara", coverage: 78, speed: "300 Mbps", status: "coming-soon", color: "orange" },
    { area: "Tangerang", coverage: 65, speed: "300 Mbps", status: "coming-soon", color: "orange" },
  ]

  const checkCoverage = () => {
    if (!searchAddress.trim()) return

    // Simulate API call
    setTimeout(() => {
      const randomArea = coverageAreas[Math.floor(Math.random() * coverageAreas.length)]
      setSearchResult({
        address: searchAddress,
        ...randomArea,
        estimatedInstall: "3-5 hari kerja",
        nearestNode: "250m",
      })
    }, 1000)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Peta Jangkauan Jaringan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cek ketersediaan layanan Mycocolink di lokasi Anda dan lihat estimasi kecepatan yang tersedia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Address Checker */}
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader className="p-3 sm:p-6">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <Search className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                Cek Alamat Anda
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0 space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  placeholder="Masukkan alamat lengkap..."
                  value={searchAddress}
                  onChange={(e) => setSearchAddress(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && checkCoverage()}
                  className="text-sm"
                />
                <Button onClick={checkCoverage} className="sm:w-auto">
                  <Search className="h-4 w-4 mr-2 sm:mr-0" />
                  <span className="sm:hidden">Cek</span>
                </Button>
              </div>

              {searchResult && (
                <div className="p-3 sm:p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium mb-2 text-sm sm:text-base break-words">{searchResult.address}</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm text-muted-foreground">Status:</span>
                          <Badge
                            variant="secondary"
                            className={`bg-${searchResult.color}-500/10 text-${searchResult.color}-500 text-xs`}
                          >
                            {searchResult.status === "available" ? "Tersedia" : "Segera Hadir"}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm text-muted-foreground">Max Speed:</span>
                          <span className="text-xs sm:text-sm font-medium">{searchResult.speed}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm text-muted-foreground">Estimasi Install:</span>
                          <span className="text-xs sm:text-sm font-medium">{searchResult.estimatedInstall}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm text-muted-foreground">Jarak ke Node:</span>
                          <span className="text-xs sm:text-sm font-medium">{searchResult.nearestNode}</span>
                        </div>
                      </div>

                      {searchResult.status === "available" && (
                        <Button className="w-full mt-4" size="sm">
                          Daftar Sekarang
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Coverage Areas */}
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader className="p-3 sm:p-6">
              <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                <Wifi className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                Area Jangkauan
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <div className="space-y-2 sm:space-y-3">
                {coverageAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      {area.status === "available" ? (
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                      ) : (
                        <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500 flex-shrink-0" />
                      )}
                      <div className="min-w-0">
                        <div className="font-medium text-sm sm:text-base truncate">{area.area}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">Coverage: {area.coverage}%</div>
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0 ml-2">
                      <div className="text-xs sm:text-sm font-medium">{area.speed}</div>
                      <Badge variant="secondary" className={`text-xs bg-${area.color}-500/10 text-${area.color}-500`}>
                        {area.status === "available" ? "Tersedia" : "Segera"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                <h4 className="font-medium mb-2 text-sm sm:text-base">Ekspansi Jaringan 2024</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Kami terus memperluas jangkauan ke area Bogor, Depok, dan Bekasi. Daftar sekarang untuk mendapat
                  notifikasi saat layanan tersedia di area Anda.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
