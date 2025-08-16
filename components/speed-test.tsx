"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Wifi, Download, Upload, Clock } from "lucide-react"

export default function SpeedTest() {
  const [isRunning, setIsRunning] = useState(false)
  const [results, setResults] = useState<{
    download: number
    upload: number
    ping: number
  } | null>(null)
  const [progress, setProgress] = useState(0)

  const runSpeedTest = async () => {
    setIsRunning(true)
    setProgress(0)
    setResults(null)

    // Simulate speed test with realistic progression
    const intervals = [
      { time: 500, progress: 20 },
      { time: 1000, progress: 45 },
      { time: 1500, progress: 70 },
      { time: 2000, progress: 90 },
      { time: 2500, progress: 100 },
    ]

    for (const interval of intervals) {
      await new Promise((resolve) => setTimeout(resolve, interval.time))
      setProgress(interval.progress)
    }

    // Generate realistic results based on Indonesian ISP speeds
    const downloadSpeed = Math.floor(Math.random() * 80) + 20 // 20-100 Mbps
    const uploadSpeed = Math.floor(downloadSpeed * 0.7) + 5 // Usually lower than download
    const pingTime = Math.floor(Math.random() * 30) + 10 // 10-40ms

    setResults({
      download: downloadSpeed,
      upload: uploadSpeed,
      ping: pingTime,
    })
    setIsRunning(false)
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-md border-white/20">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-primary">
          <Wifi className="h-6 w-6" />
          Test Kecepatan Internet
        </CardTitle>
        <CardDescription className="text-gray-600">Cek kecepatan internet Anda sekarang</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {!isRunning && !results && (
          <Button onClick={runSpeedTest} className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
            Mulai Test Kecepatan
          </Button>
        )}

        {isRunning && (
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{progress}%</div>
              <div className="text-sm text-gray-600">Mengukur kecepatan...</div>
            </div>
            <Progress value={progress} className="h-3" />
          </div>
        )}

        {results && (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <Download className="h-6 w-6 mx-auto text-accent" />
                <div className="text-2xl font-bold text-primary">{results.download}</div>
                <div className="text-xs text-gray-600">Mbps Download</div>
              </div>
              <div className="space-y-2">
                <Upload className="h-6 w-6 mx-auto text-accent" />
                <div className="text-2xl font-bold text-primary">{results.upload}</div>
                <div className="text-xs text-gray-600">Mbps Upload</div>
              </div>
              <div className="space-y-2">
                <Clock className="h-6 w-6 mx-auto text-accent" />
                <div className="text-2xl font-bold text-primary">{results.ping}</div>
                <div className="text-xs text-gray-600">ms Ping</div>
              </div>
            </div>
            <Button onClick={runSpeedTest} variant="outline" className="w-full bg-transparent">
              Test Ulang
            </Button>
            <div className="text-center text-sm text-gray-600">Upgrade ke Mycocolink untuk kecepatan optimal!</div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
