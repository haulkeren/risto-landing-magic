
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-primary/10 to-white flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern" />
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-poppins font-bold text-4xl md:text-6xl text-gray-900 mb-6 leading-tight animate-fade-in">
            Revolusi Operasional Restoran Anda dengan Risto POS –{" "}
            <span className="text-primary">Akses Seumur Hidup, Tanpa Biaya Bulanan!</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 animate-fade-in delay-100">
            Solusi POS all-in-one untuk menu, manajemen meja, inventaris, payroll, dan analitik real-time.
            Dipercaya oleh 500+ bisnis F&B.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 animate-fade-in delay-200 hover:scale-105 hover:shadow-xl"
            >
              Mulai Gratis Sekarang
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group border-2 border-primary/20 hover:border-primary text-primary hover:text-primary px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 animate-fade-in delay-300 hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" /> Tonton Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
