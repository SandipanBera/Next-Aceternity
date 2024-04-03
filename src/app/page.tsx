import { Cards } from "@/components/Cards";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero-Section";
import { InfiniteMovingCardsDemo } from "@/components/Moving-Cards";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 gap-2 flex-wrap content-center">
      <HeroSection />
      <Cards />
      <InfiniteMovingCardsDemo />
      <Footer />
      <BackgroundBeams />
    </div>
  );
}
