import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero-section"
import { AudienceSection } from "@/components/sections/audience-section"
import { PillarsSection } from "@/components/sections/pillars-section"
import { MistakesSection } from "@/components/sections/mistakes-section"
import { ProcessSection } from "@/components/sections/process-section"
import { DifferentialsSection } from "@/components/sections/differentials-section"
import { TransparencySection } from "@/components/sections/transparency-section"
import { SocialProofSection } from "@/components/sections/social-proof-section"
import { TeamSection } from "@/components/sections/team-section"
import { FaqSection } from "@/components/sections/faq-section"
import { CtaSection } from "@/components/sections/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AudienceSection />
        <PillarsSection />
        <MistakesSection />
        <ProcessSection />
        <DifferentialsSection />
        <TransparencySection />
        <SocialProofSection />
        <TeamSection />
        <FaqSection />
        <CtaSection />
        <Footer />
      </main>
    </>
  )
}
