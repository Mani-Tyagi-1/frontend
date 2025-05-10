import Footer from "@/components/LandingComps/Footer";
import Hero from "../components/LandingComps/Hero";
import Navbar from "../components/LandingComps/Navbar";
import VideoSection from "../components/LandingComps/VideoSection";
import ContactForm from "@/components/LandingComps/ContactForm";
import Testimonials from "@/components/LandingComps/FAQ";
import About from "@/components/LandingComps/About";
import { HeroParallax } from "@/components/ui/hero-parallax";
import MissionPhilosophy from "@/components/LandingComps/MissionPhilosophy";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <HeroParallax /> */}
      <VideoSection />
      <About />
      <MissionPhilosophy />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}
