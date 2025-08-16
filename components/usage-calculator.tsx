"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Calculator, Users, Smartphone, Tv, Gamepad2, Laptop } from "lucide-react"

export function UsageCalculator() {
  const [usage, setUsage] = useState({
    users: 4,
    streaming: 6,
    gaming: 2,
    work: 8,
    devices: 10,
  })

  const calculateBandwidth = () => {
    const streamingBandwidth = usage.streaming * 25 // 4K streaming
    const gamingBandwidth = usage.gaming * 50 // Online gaming
    const workBandwidth = usage.work * 10 // Video calls, file sharing
    const devicesBandwidth = usage.devices * 5 // IoT devices

    return streamingBandwidth + gamingBandwidth + workBandwidth + devicesBandwidth
  }

  const recommendedSpeed = calculateBandwidth()

  const getRecommendedPackage = () => {
    if (recommendedSpeed <= 100) return { name: "Fiber 100", price: 299000, speed: 100 }
    if (recommendedSpeed <= 300) return { name: "Fiber 300", price: 499000, speed: 300 }
    if (recommendedSpeed <= 500) return { name: "Fiber 500", price: 699000, speed: 500 }
    return { name: "Fiber 1000", price: 999000, speed: 1000 }
  }

  const recommendedPackage = getRecommendedPackage()

  return (
    <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Kalkulator Kebutuhan Internet
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hitung kebutuhan bandwidth Anda dan dapatkan rekomendasi paket yang tepat
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator */}
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Penggunaan Internet Anda
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Jumlah Pengguna
                    </label>
                    <span className="text-sm text-muted-foreground">{usage.users} orang</span>
                  </div>
                  <Slider
                    value={[usage.users]}
                    onValueChange={(value) => setUsage((prev) => ({ ...prev, users: value[0] }))}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Tv className="h-4 w-4" />
                      Streaming Video (jam/hari)
                    </label>
                    <span className="text-sm text-muted-foreground">{usage.streaming} jam</span>
                  </div>
                  <Slider
                    value={[usage.streaming]}
                    onValueChange={(value) => setUsage((prev) => ({ ...prev, streaming: value[0] }))}
                    max={12}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Gamepad2 className="h-4 w-4" />
                      Gaming Online (jam/hari)
                    </label>
                    <span className="text-sm text-muted-foreground">{usage.gaming} jam</span>
                  </div>
                  <Slider
                    value={[usage.gaming]}
                    onValueChange={(value) => setUsage((prev) => ({ ...prev, gaming: value[0] }))}
                    max={8}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Laptop className="h-4 w-4" />
                      Work from Home (jam/hari)
                    </label>
                    <span className="text-sm text-muted-foreground">{usage.work} jam</span>
                  </div>
                  <Slider
                    value={[usage.work]}
                    onValueChange={(value) => setUsage((prev) => ({ ...prev, work: value[0] }))}
                    max={12}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Smartphone className="h-4 w-4" />
                      Smart Devices
                    </label>
                    <span className="text-sm text-muted-foreground">{usage.devices} perangkat</span>
                  </div>
                  <Slider
                    value={[usage.devices]}
                    onValueChange={(value) => setUsage((prev) => ({ ...prev, devices: value[0] }))}
                    max={20}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommendation */}
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge className="bg-primary text-primary-foreground">Rekomendasi</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {recommendedSpeed} <span className="text-lg">Mbps</span>
                </div>
                <p className="text-sm text-muted-foreground">Kebutuhan bandwidth minimum Anda</p>
              </div>

              <div className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-primary">{recommendedPackage.name}</h3>
                  <div className="text-2xl font-bold mt-2">
                    Rp {recommendedPackage.price.toLocaleString()}
                    <span className="text-sm font-normal text-muted-foreground">/bulan</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Kecepatan:</span>
                    <span className="font-medium">{recommendedPackage.speed} Mbps</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Overhead:</span>
                    <span className="font-medium text-green-500">
                      {(((recommendedPackage.speed - recommendedSpeed) / recommendedPackage.speed) * 100).toFixed(0)}%
                    </span>
                  </div>
                </div>

                <Button className="w-full">Pilih Paket Ini</Button>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">Breakdown Penggunaan:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Streaming 4K:</span>
                    <span>{usage.streaming * 25} Mbps</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gaming Online:</span>
                    <span>{usage.gaming * 50} Mbps</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Work from Home:</span>
                    <span>{usage.work * 10} Mbps</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Smart Devices:</span>
                    <span>{usage.devices * 5} Mbps</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
