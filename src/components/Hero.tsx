
import { HeroWithMockup } from "@/components/blocks/hero-with-mockup";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <HeroWithMockup
      title="Revolusi Operasional Restoran Anda dengan Risto POS"
      description="Solusi POS all-in-one untuk menu, manajemen meja, inventaris, payroll, dan analitik real-time. Akses Seumur Hidup, Tanpa Biaya Bulanan!"
      primaryCta={{
        text: "Mulai Gratis Sekarang",
        href: "#",
      }}
      secondaryCta={{
        text: "Tonton Demo",
        href: "#",
        icon: <Play className="mr-2 h-4 w-4" />,
      }}
      mockupImage={{
        src: "https://placehold.co/1248x765/e2e8f0/64748b?text=Risto+POS+Dashboard",
        alt: "Risto POS Dashboard",
        width: 1248,
        height: 765,
      }}
      className="min-h-screen bg-gradient-to-b from-primary/10 to-white pt-16"
    />
  );
};

export default Hero;
