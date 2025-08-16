"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Newspaper, Lightbulb, Wifi, Clock, ExternalLink } from "lucide-react"

export function TechNewsHub() {
  const [news] = useState([
    {
      id: 1,
      title: "WiFi 7 Resmi Diluncurkan: Kecepatan Internet Hingga 46 Gbps",
      excerpt: "Standar WiFi terbaru menjanjikan kecepatan yang revolusioner untuk rumah dan bisnis.",
      category: "Technology",
      readTime: "3 min",
      date: "2 jam lalu",
      image: "/wifi7-technology.png",
    },
    {
      id: 2,
      title: "Fiber Optic vs 5G: Mana yang Lebih Cocok untuk Kebutuhan Anda?",
      excerpt: "Perbandingan lengkap antara teknologi fiber optic dan 5G untuk berbagai kebutuhan.",
      category: "Guide",
      readTime: "5 min",
      date: "4 jam lalu",
      image: "/fiber-vs-5g-comparison.png",
    },
    {
      id: 3,
      title: "Tips Optimasi Router untuk Performa Internet Maksimal",
      excerpt: "Panduan lengkap mengoptimalkan pengaturan router untuk mendapatkan kecepatan terbaik.",
      category: "Tips",
      readTime: "4 min",
      date: "6 jam lalu",
      image: "/router-optimization.png",
    },
  ])

  const [tips] = useState([
    {
      title: "Posisi Router yang Optimal",
      description: "Letakkan router di tengah rumah, hindari dinding tebal dan perangkat elektronik lain.",
      icon: <Wifi className="h-5 w-5 text-primary" />,
    },
    {
      title: "Update Firmware Rutin",
      description: "Selalu update firmware router untuk mendapatkan fitur terbaru dan keamanan optimal.",
      icon: <Lightbulb className="h-5 w-5 text-accent" />,
    },
    {
      title: "Gunakan Ethernet untuk Gaming",
      description: "Koneksi kabel memberikan latency yang lebih rendah dibanding WiFi untuk gaming.",
      icon: <Wifi className="h-5 w-5 text-primary" />,
    },
  ])

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Tech News & Digital Hub
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tetap update dengan berita teknologi terbaru dan tips optimasi internet
          </p>
        </div>

        <Tabs defaultValue="news" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="news" className="flex items-center gap-2">
              <Newspaper className="h-4 w-4" />
              Tech News
            </TabsTrigger>
            <TabsTrigger value="tips" className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Tips & Tricks
            </TabsTrigger>
          </TabsList>

          <TabsContent value="news">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((article) => (
                <Card
                  key={article.id}
                  className="border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={article.image || "/tech-news-placeholder.png"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {article.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tips">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tips.map((tip, index) => (
                <Card
                  key={index}
                  className="border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      {tip.icon}
                      {tip.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Digital Literacy Corner
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Keamanan Internet</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Gunakan password yang kuat untuk WiFi</li>
                      <li>• Aktifkan WPA3 encryption</li>
                      <li>• Hindari WiFi publik untuk transaksi</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Optimasi Kecepatan</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Restart router secara berkala</li>
                      <li>• Gunakan DNS yang cepat (1.1.1.1)</li>
                      <li>• Batasi bandwidth untuk streaming</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
