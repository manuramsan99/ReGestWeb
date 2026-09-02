import { StructuredData } from "@/components/StructuredData";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Dashboard } from "@/components/Dashboard";
import { HowItWorks } from "@/components/HowItWorks";
import { OcrFeature } from "@/components/OcrFeature";
import { WhyReGest } from "@/components/WhyReGest";
import { ForGestoria } from "@/components/ForGestoria";
import { SocialProof } from "@/components/SocialProof";
import { Pricing } from "@/components/Pricing";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Dashboard />
        <HowItWorks />
        <OcrFeature />
        <WhyReGest />
        <ForGestoria />
        <SocialProof />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
