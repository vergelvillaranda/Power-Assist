import HeroSection from "@/components/section/hero";
import WhyChooseSection from "@/components/section/wcp";
import CoreValuesSection from "@/components/section/corevaluessection";
import MissionVisionSection from "@/components/section/mv";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      <HeroSection />
      <WhyChooseSection />
      <CoreValuesSection />
      <MissionVisionSection />
    </main>
  );
}