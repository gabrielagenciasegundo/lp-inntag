import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import BenefitsSection from "@/components/sections/BenefitsSection";
import MidCTASection from "@/components/sections/MidCTASection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ProjectsGallerySection from "@/components/sections/ProjectsGallerySection";
import AboutSection from "@/components/sections/AboutSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustBar />
      <BenefitsSection />
      <HowItWorksSection />
      <ProjectsGallerySection />
      <AboutSection />
      <ReviewsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
