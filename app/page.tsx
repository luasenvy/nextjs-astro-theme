import Blog from "@/components/Blog";
import CallToAction from "@/components/CallToAction";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="space-y-40 mb-40">
      <HeroSection />
      <Features />
      <Stats />
      <Testimonials />
      <CallToAction />
      <Blog />
    </main>
  );
}
