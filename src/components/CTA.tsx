import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const handleConsultationClick = () => {
    window.location.href = "https://api.whatsapp.com/send/?phone=6285246911805&text&type=phone_number&app_absent=0";
  };

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins font-bold text-4xl text-white mb-6">
            Tingkatkan Efisiensi Restoran Anda Sekarang
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Dapatkan akses seumur hidup Risto POS tanpa biaya bulanan. 
            Solusi lengkap untuk operasional restoran modern.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-lg font-medium"
              onClick={handleConsultationClick}
            >
              Konsultasi Gratis <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;