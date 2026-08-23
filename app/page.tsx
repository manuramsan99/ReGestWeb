import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { OcrFeature } from "@/components/OcrFeature";
import { ForGestoria } from "@/components/ForGestoria";
import { SocialProof } from "@/components/SocialProof";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <OcrFeature />
        <ForGestoria />
        <SocialProof />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
