import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { NetworkStatusDashboard } from "@/components/network-status-dashboard"
import { AboutSection } from "@/components/about-section"
import { PackagesSection } from "@/components/packages-section"
import { SpeedLeaderboard } from "@/components/speed-leaderboard"
import { CoverageMap } from "@/components/coverage-map"
import { UsageCalculator } from "@/components/usage-calculator"
import { TestimonialsSection } from "@/components/testimonials-section"
import { InteractiveFeatures } from "@/components/interactive-features"
import { TechNewsHub } from "@/components/tech-news-hub"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import LiveChat from "@/components/live-chat"
import { AIChatAssistant } from "@/components/ai-chat-assistant"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <NetworkStatusDashboard />
      <AboutSection />
      <PackagesSection />
      <SpeedLeaderboard />
      <CoverageMap />
      <UsageCalculator />
      <TestimonialsSection />
      <InteractiveFeatures />
      <TechNewsHub />
      <ContactSection />
      <Footer />
      <LiveChat />
      <AIChatAssistant />
    </main>
  )
}
