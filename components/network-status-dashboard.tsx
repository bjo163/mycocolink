"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wifi, Activity, MapPin, Clock } from "lucide-react"

export function NetworkStatusDashboard() {
  const [networkData, setNetworkData] = useState({
    uptime: 99.9,
    avgSpeed: 850,
    activeUsers: 12847,
    serverLoad: 23,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setNetworkData((prev) => ({
        uptime: Math.max(99.5, Math.min(100, prev.uptime + (Math.random() - 0.5) * 0.1)),
        avgSpeed: Math.max(800, Math.min(1000, prev.avgSpeed + (Math.random() - 0.5) * 50)),
        activeUsers: Math.max(10000, Math.min(15000, prev.activeUsers + Math.floor((Math.random() - 0.5) * 100))),
        serverLoad: Math.max(15, Math.min(40, prev.serverLoad + (Math.random() - 0.5) * 5)),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Status Jaringan Real-Time
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pantau performa jaringan Mycocolink secara langsung dengan data yang diperbarui setiap detik
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
          <Card className="relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-2 p-3 sm:p-6">
              <CardTitle className="text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2">
                <Activity className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                <span className="hidden sm:inline">Network Uptime</span>
                <span className="sm:hidden">Uptime</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <div className="text-lg sm:text-2xl font-bold text-green-500">{networkData.uptime.toFixed(1)}%</div>
              <Badge variant="secondary" className="mt-1 sm:mt-2 bg-green-500/10 text-green-500 text-xs">
                Excellent
              </Badge>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-2 p-3 sm:p-6">
              <CardTitle className="text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2">
                <Wifi className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
                <span className="hidden sm:inline">Avg Speed</span>
                <span className="sm:hidden">Speed</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <div className="text-lg sm:text-2xl font-bold text-blue-500">{Math.round(networkData.avgSpeed)} Mbps</div>
              <Badge variant="secondary" className="mt-1 sm:mt-2 bg-blue-500/10 text-blue-500 text-xs">
                <span className="hidden sm:inline">High Performance</span>
                <span className="sm:hidden">High</span>
              </Badge>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-2 p-3 sm:p-6">
              <CardTitle className="text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-purple-500" />
                <span className="hidden sm:inline">Active Users</span>
                <span className="sm:hidden">Users</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <div className="text-lg sm:text-2xl font-bold text-purple-500">
                {networkData.activeUsers.toLocaleString()}
              </div>
              <Badge variant="secondary" className="mt-1 sm:mt-2 bg-purple-500/10 text-purple-500 text-xs">
                Online Now
              </Badge>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-2 p-3 sm:p-6">
              <CardTitle className="text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500" />
                <span className="hidden sm:inline">Server Load</span>
                <span className="sm:hidden">Load</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-6 pt-0">
              <div className="text-lg sm:text-2xl font-bold text-orange-500">{Math.round(networkData.serverLoad)}%</div>
              <Badge variant="secondary" className="mt-1 sm:mt-2 bg-orange-500/10 text-orange-500 text-xs">
                Optimal
              </Badge>
            </CardContent>
          </Card>
        </div>

        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
          <CardHeader className="p-3 sm:p-6">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              Coverage Area Status
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 sm:p-6 pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[
                { area: "Jakarta Pusat", status: "Excellent", speed: "950 Mbps", color: "green" },
                { area: "Jakarta Selatan", status: "Good", speed: "890 Mbps", color: "blue" },
                { area: "Jakarta Timur", status: "Excellent", speed: "920 Mbps", color: "green" },
              ].map((area, index) => (
                <div key={index} className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-muted/50">
                  <div className="min-w-0">
                    <div className="font-medium text-sm sm:text-base truncate">{area.area}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{area.speed}</div>
                  </div>
                  <Badge
                    variant="secondary"
                    className={`bg-${area.color}-500/10 text-${area.color}-500 text-xs ml-2 flex-shrink-0`}
                  >
                    {area.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
