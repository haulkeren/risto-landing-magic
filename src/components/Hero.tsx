import { Play, PhoneCall } from "lucide-react";
import { HeroWithMockup } from "@/components/blocks/hero-with-mockup";
import { cn } from "@/lib/utils"; // Pastikan file utils.ts ada


const Hero = () => {
  return (
    <HeroWithMockup
      title="Revolusi Operasional Restoran Anda dengan Risto POS"
      description="Solusi POS all-in-one untuk menu, manajemen meja, inventaris, payroll, dan analitik real-time. Akses Seumur Hidup, Tanpa Biaya Bulanan!"
      primaryCta={{
        text: "Unduh di Google Playstore",
        href: "https://play.google.com/store/apps/details?id=com.risto.pos&hl=id",
        icon: <Play className="mr-2 h-4 w-4 text-white" />,
        className: "bg-primary hover:bg-primary-hover text-white shadow-lg", // Styling default
      }}
      secondaryCta={{
        text: "Negosiasi Sekarang",
        href: "https://api.whatsapp.com/send/?phone=6285246911805&text&type=phone_number&app_absent=0",
        icon: <PhoneCall className="mr-2 h-4 w-4" />,
        className: cn(
          "bg-[#25D366] hover:bg-[#1DA851] text-white", // Warna WhatsApp
          "shadow-lg hover:shadow-xl", // Bayangan dinamis
          "transition-all duration-300", // Animasi smooth
          "border border-transparent hover:border-[#1DA851]" // Outline hover
        ),
      }}
      mockupImage={{
        src: "/assets/images/pos.png",
        alt: "Dashboard Risto POS",
        width: 1248,
        height: 765,
      }}
      className="min-h-screen bg-gradient-to-b from-primary/10 to-white pt-16"
    />
  );
};

export default Hero;