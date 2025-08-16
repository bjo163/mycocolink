"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Radio, HardDrive, Upload, Activity, Award, Box } from "lucide-react"
import { useState, useEffect } from "react"

export function InteractiveFeatures() {
  const [networkStatus, setNetworkStatus] = useState({
    ping: 12,
    jitter: 2,
    packetLoss: 0.1,
  })

  const [dailyQuiz, setDailyQuiz] = useState({
    question: "Berapa kecepatan minimum yang direkomendasikan untuk streaming 4K?",
    options: ["10 Mbps", "25 Mbps", "50 Mbps", "100 Mbps"],
    correct: 1,
    answered: false,
    userAnswer: null,
  })

  const [rewards, setRewards] = useState({
    points: 1250,
    level: "Silver Member",
    nextReward: "Gold Member (500 points lagi)",
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setNetworkStatus({
        ping: Math.floor(Math.random() * 10) + 8,
        jitter: Math.floor(Math.random() * 3) + 1,
        packetLoss: (Math.random() * 0.5).toFixed(1),
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleQuizAnswer = (answerIndex: number) => {
    setDailyQuiz((prev) => ({
      ...prev,
      answered: true,
      userAnswer: answerIndex,
    }))
    if (answerIndex === dailyQuiz.correct) {
      setRewards((prev) => ({
        ...prev,
        points: prev.points + 50,
      }))
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      <div className="floating-orb absolute top-20 right-10 w-24 h-24 bg-primary/5 glow-primary animate-pulse-glow"></div>
      <div className="floating-orb absolute bottom-20 left-10 w-20 h-20 bg-accent/5 glow-accent animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk text-foreground mb-6">
            Fitur <span className="text-primary glow-primary">Interaktif</span> Eksklusif
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <span className="inline-flex items-center mr-2">
              <span className="w-3 h-3 bg-primary rounded-sm"></span>
              <span className="w-2 h-2 bg-accent rounded-sm ml-1"></span>
            </span>
            Nikmati pengalaman digital yang lebih menyenangkan dengan fitur-fitur canggih kami
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Real-time Network Monitor */}
          <Card className="glass-card-hover border-primary/30 group">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-primary/20 rounded-2xl group-hover:bg-primary/30 transition-colors">
                  <Radio className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Network Monitor</h3>
                  <p className="text-sm text-muted-foreground">Real-time status</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Ping</span>
                  <span className="text-primary font-bold">{networkStatus.ping}ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Jitter</span>
                  <span className="text-accent font-bold">{networkStatus.jitter}ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Packet Loss</span>
                  <span className="text-destructive font-bold">{networkStatus.packetLoss}%</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-accent/10 rounded-xl">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm text-accent font-semibold">Status: Excellent</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Daily Tech Quiz */}
          <Card className="glass-card-hover border-accent/30 group">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-accent/20 rounded-2xl group-hover:bg-accent/30 transition-colors">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Daily Quiz</h3>
                  <p className="text-sm text-muted-foreground">Earn rewards!</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-foreground font-medium">{dailyQuiz.question}</p>

                <div className="space-y-2">
                  {dailyQuiz.options.map((option, index) => (
                    <Button
                      key={index}
                      variant={
                        dailyQuiz.answered
                          ? index === dailyQuiz.correct
                            ? "default"
                            : index === dailyQuiz.userAnswer
                              ? "destructive"
                              : "outline"
                          : "outline"
                      }
                      className="w-full justify-start"
                      onClick={() => !dailyQuiz.answered && handleQuizAnswer(index)}
                      disabled={dailyQuiz.answered}
                    >
                      {option}
                    </Button>
                  ))}
                </div>

                {dailyQuiz.answered && (
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <p className="text-sm text-primary font-semibold">
                      {dailyQuiz.userAnswer === dailyQuiz.correct ? (
                        <span className="flex items-center">
                          <span className="inline-flex items-center mr-2">
                            <span className="w-2 h-2 bg-accent rounded-full animate-bounce"></span>
                            <span
                              className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce ml-1"
                              style={{ animationDelay: "0.2s" }}
                            ></span>
                          </span>
                          Benar! +50 poin
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <span className="inline-flex items-center mr-2">
                            <span className="w-2 h-2 bg-destructive rounded-full"></span>
                          </span>
                          Jawaban yang benar: {dailyQuiz.options[dailyQuiz.correct]}
                        </span>
                      )}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Rewards System */}
          <Card className="glass-card-hover border-destructive/30 group">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-destructive/20 rounded-2xl group-hover:bg-destructive/30 transition-colors">
                  <Box className="w-8 h-8 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">My Rewards</h3>
                  <p className="text-sm text-muted-foreground">{rewards.level}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-destructive mb-2">{rewards.points}</div>
                  <div className="text-sm text-muted-foreground">Total Points</div>
                </div>

                <div className="p-4 bg-destructive/10 rounded-xl">
                  <p className="text-sm text-destructive font-semibold mb-2">
                    <span className="inline-flex items-center mr-2">
                      <span className="w-2 h-2 border-2 border-destructive rounded-full"></span>
                      <span className="w-1 h-1 bg-destructive rounded-full absolute"></span>
                    </span>
                    Next Goal:
                  </p>
                  <p className="text-sm text-muted-foreground">{rewards.nextReward}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-destructive font-semibold">71%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-destructive h-2 rounded-full w-[71%]"></div>
                  </div>
                </div>

                <Button className="w-full bg-destructive hover:bg-destructive/90">Tukar Poin</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Usage Statistics */}
        <div className="mt-16">
          <Card className="glass-card-hover border-primary/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                <span className="inline-flex items-center mr-2">
                  <span className="flex space-x-0.5">
                    <span className="w-1 h-4 bg-primary rounded-sm"></span>
                    <span className="w-1 h-6 bg-accent rounded-sm"></span>
                    <span className="w-1 h-3 bg-destructive rounded-sm"></span>
                  </span>
                </span>
                Statistik Penggunaan Bulan Ini
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="p-4 bg-primary/20 rounded-2xl inline-block mb-4">
                    <HardDrive className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">847 GB</div>
                  <div className="text-muted-foreground">Total Download</div>
                  <div className="text-sm text-accent mt-1">
                    <span className="inline-flex items-center mr-1">
                      <span className="w-0 h-0 border-l-2 border-l-transparent border-r-2 border-r-transparent border-b-2 border-b-accent"></span>
                    </span>
                    23% dari bulan lalu
                  </div>
                </div>

                <div className="text-center">
                  <div className="p-4 bg-accent/20 rounded-2xl inline-block mb-4">
                    <Upload className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-accent mb-2">156 GB</div>
                  <div className="text-muted-foreground">Total Upload</div>
                  <div className="text-sm text-primary mt-1">
                    <span className="inline-flex items-center mr-1">
                      <span className="w-0 h-0 border-l-2 border-l-transparent border-r-2 border-r-transparent border-b-2 border-b-primary"></span>
                    </span>
                    15% dari bulan lalu
                  </div>
                </div>

                <div className="text-center">
                  <div className="p-4 bg-destructive/20 rounded-2xl inline-block mb-4">
                    <Activity className="w-8 h-8 text-destructive" />
                  </div>
                  <div className="text-3xl font-bold text-destructive mb-2">99.8%</div>
                  <div className="text-muted-foreground">Uptime</div>
                  <div className="text-sm text-accent mt-1">Excellent!</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
