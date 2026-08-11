import MotionBackground from "@/components/sections/MotionBackground";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import MissionVision from "@/components/sections/MissionVision";
import Events from "@/components/sections/Events";
import RegistrationPanel from "@/components/sections/RegistrationPanel";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0518] min-h-screen text-white relative selection:bg-purple-500 selection:text-white">
      <MotionBackground />
      <Hero />
      <About />
      <MissionVision />
      <Events />
      <RegistrationPanel />
      <Footer />
    </main>
  );
}