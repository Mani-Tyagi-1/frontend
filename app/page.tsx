import Footer from "@/components/LandingComps/Footer";
import Hero from "../components/LandingComps/Hero";
import Navbar from "../components/LandingComps/Navbar";
import VideoSection from "../components/LandingComps/VideoSection";
import ContactForm from "@/components/LandingComps/ContactForm";
import Testimonials from "@/components/LandingComps/Testimonials";
import About from "@/components/LandingComps/About";
import MissionPhilosophy from "@/components/LandingComps/MissionPhilosophy";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoSection />
      <About />
      <MissionPhilosophy />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}
