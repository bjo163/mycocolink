"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Send, Bot, User } from "lucide-react"

export function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      message: "Halo! Saya MyCoco AI Assistant. Ada yang bisa saya bantu tentang layanan internet Mycocolink?",
      time: "10:30",
    },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const quickReplies = [
    "Cek status jaringan",
    "Info paket internet",
    "Cara upgrade paket",
    "Troubleshooting koneksi",
    "Jadwal teknisi",
  ]

  const sendMessage = () => {
    if (!inputMessage.trim()) return

    const newMessage = {
      id: messages.length + 1,
      type: "user",
      message: inputMessage,
      time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => [...prev, newMessage])
    setInputMessage("")

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Terima kasih atas pertanyaannya! Saya akan membantu Anda dengan informasi yang dibutuhkan.",
        "Berdasarkan data sistem, saya dapat memberikan informasi berikut untuk Anda.",
        "Saya sudah mengecek sistem kami. Berikut adalah informasi yang Anda butuhkan.",
        "Pertanyaan yang bagus! Mari saya bantu Anda dengan solusi terbaik.",
      ]

      const botResponse = {
        id: messages.length + 2,
        type: "bot",
        message: responses[Math.floor(Math.random() * responses.length)],
        time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
      }

      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply)
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-16 w-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-accent"
        >
          <MessageCircle className="h-7 w-7" />
        </Button>
        <div className="absolute -top-2 -right-2">
          <div className="h-5 w-5 bg-red-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm h-[70vh] max-h-96 sm:w-80 sm:h-96">
      <Card className="h-full border-primary/20 bg-card/95 backdrop-blur-sm shadow-xl">
        <CardHeader className="pb-2 bg-gradient-to-r from-primary to-accent text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <Bot className="h-4 w-4 sm:h-5 sm:w-5" />
              MyCoco AI Assistant
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 h-8 w-8 p-0 text-lg"
            >
              ×
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs opacity-90">Online - Siap membantu</span>
          </div>
        </CardHeader>

        <CardContent className="p-0 h-full flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] sm:max-w-[80%] p-2 sm:p-3 rounded-lg ${
                    msg.type === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {msg.type === "bot" && <Bot className="h-3 w-3 sm:h-4 sm:w-4 mt-0.5 text-primary flex-shrink-0" />}
                    {msg.type === "user" && <User className="h-3 w-3 sm:h-4 sm:w-4 mt-0.5 flex-shrink-0" />}
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm break-words">{msg.message}</p>
                      <span className="text-xs opacity-70 mt-1 block">{msg.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="p-2 sm:p-3 border-t">
            <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
              {quickReplies.map((reply, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors text-xs py-1 px-2"
                  onClick={() => handleQuickReply(reply)}
                >
                  {reply}
                </Badge>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <Input
                placeholder="Ketik pesan..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                className="text-xs sm:text-sm h-8 sm:h-9"
              />
              <Button size="sm" onClick={sendMessage} className="h-8 w-8 sm:h-9 sm:w-9 p-0">
                <Send className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
