import { HeroSection } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import Features from "../components/Features";
import { Services } from "../components/Services";
import { AITools } from "../components/AiTools";
import { Stats } from "../components/Stats";
import { Pricing } from "../components/Pricing";
import { FAQ } from "../components/FAQ";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#01081D] text-white overflow-x-hidden relative">
      <div className="absolute top-0 left-0 z-0 flex w-full h-[75vh]">
        <img
          src="/hero-vector-1.png"
          alt="Vector 1"
          className="h-full object-cover"
        />
        <img
          src="/Group 20.png"
          alt="Vector 3"
          className="h-full object-cover m-0 p-0 left-50 absolute"
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
      </div>

      <Features />
      <Services />

      <div className="relative">
        <div className="absolute top-[-250px] left-0 z-0 pointer-events-none">
          <img
            src="/light-rays.png"
            alt="Light Ray"
            className="h-full w-auto object-contain opacity-60"
          />
        </div>
        <div className="relative z-10">
          <AITools />
        </div>
      </div>

      <Stats />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
