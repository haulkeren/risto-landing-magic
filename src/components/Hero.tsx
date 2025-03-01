import { useState, useEffect } from "react";
import { HeroWithMockup } from "@/components/blocks/hero-with-mockup";
import { Play } from "lucide-react";
import { Skeleton } from "@/components/Skeleton"; // Pastikan path benar
import { Parallax } from "react-scroll-parallax";

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
      }}
      // Hero.tsx
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