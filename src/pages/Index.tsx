
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import WhyRisto from "@/components/WhyRisto";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      <Navbar />
      <Hero />
      <Features />
      <WhyRisto />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
