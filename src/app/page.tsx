import HeroSection from "@/components/Hero-Section";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900">
      <HeroSection />
      <BackgroundBeams />
    </div>
  );
}
