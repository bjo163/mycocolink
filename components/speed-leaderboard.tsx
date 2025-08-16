"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Medal, Award, Zap, Star } from "lucide-react"

export function SpeedLeaderboard() {
  const [leaderboard, setLeaderboard] = useState([
    { rank: 1, name: "Ahmad R.", location: "Jakarta Selatan", speed: 987, package: "Fiber 1000", points: 2450 },
    { rank: 2, name: "Sari M.", location: "Jakarta Pusat", speed: 965, package: "Fiber 1000", points: 2380 },
    { rank: 3, name: "Budi S.", location: "Jakarta Timur", speed: 943, package: "Fiber 1000", points: 2290 },
    { rank: 4, name: "Lisa K.", location: "Jakarta Barat", speed: 921, package: "Fiber 500", points: 2150 },
    { rank: 5, name: "Doni P.", location: "Jakarta Utara", speed: 898, package: "Fiber 500", points: 2080 },
  ])

  const [userStats, setUserStats] = useState({
    currentSpeed: 0,
    bestSpeed: 0,
    rank: 0,
    points: 0,
  })

  const runSpeedTest = () => {
    let speed = 0
    const interval = setInterval(() => {
      speed += Math.random() * 50
      setUserStats((prev) => ({ ...prev, currentSpeed: Math.min(speed, 850 + Math.random() * 100) }))

      if (speed >= 850) {
        clearInterval(interval)
        const finalSpeed = Math.round(850 + Math.random() * 100)
        setUserStats((prev) => ({
          ...prev,
          currentSpeed: finalSpeed,
          bestSpeed: Math.max(prev.bestSpeed, finalSpeed),
          points: prev.points + Math.floor(finalSpeed / 10),
        }))
      }
    }, 100)
  }

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />
      default:
        return <span className="text-sm font-bold text-muted-foreground">#{rank}</span>
    }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Speed Test Leaderboard
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kompetisi kecepatan internet bulanan! Raih poin dan menangkan hadiah menarik
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Speed Test Widget */}
          <Card className="lg:col-span-1 border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Test Kecepatan Anda
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {Math.round(userStats.currentSpeed)} <span className="text-lg">Mbps</span>
                </div>
                <Button onClick={runSpeedTest} className="w-full">
                  Mulai Speed Test
                </Button>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Best Speed:</span>
                  <span className="text-sm font-medium">{userStats.bestSpeed} Mbps</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Points:</span>
                  <span className="text-sm font-medium flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-500" />
                    {userStats.points}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leaderboard */}
          <Card className="lg:col-span-2 border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                Top Speed Champions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {leaderboard.map((user, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-lg transition-all hover:scale-[1.02] ${
                      user.rank <= 3
                        ? "bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
                        : "bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {getRankIcon(user.rank)}
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">{user.location}</div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-bold text-primary">{user.speed} Mbps</div>
                      <div className="text-xs text-muted-foreground">{user.points} points</div>
                    </div>

                    <Badge variant="secondary" className="ml-4">
                      {user.package}
                    </Badge>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  Hadiah Bulanan
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                  <div>🥇 Juara 1: Gratis 3 bulan</div>
                  <div>🥈 Juara 2: Gratis 2 bulan</div>
                  <div>🥉 Juara 3: Gratis 1 bulan</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
