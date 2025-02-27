
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Dasar",
    price: "Rp3.75M",
    description: "Mulai dengan fitur-fitur dasar yang lengkap",
    features: [
      "Dashboard Basic",
      "Manajemen Meja",
      "Laporan Harian",
      "Support Email",
    ],
  },
  {
    name: "Premium",
    price: "Rp5.56M",
    description: "Solusi lengkap untuk bisnis berkembang",
    popular: true,
    features: [
      "Semua fitur Dasar",
      "Modul HR & Payroll",
      "Analisis Lanjutan",
      "Support 24/7",
    ],
  },
  {
    name: "On-Premise",
    price: "Rp7.5M/tahun",
    description: "Solusi kustom dengan server pribadi",
    features: [
      "Semua fitur Premium",
      "Server Dedicated",
      "Custom Domain",
      "Training Tim",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-4">
            Pilihan Paket
          </h2>
          <p className="text-xl text-gray-600">
            Solusi yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 bg-white rounded-2xl ${
                plan.popular
                  ? "shadow-2xl border-2 border-primary/20"
                  : "shadow-lg border border-gray-100"
              } transition-all duration-300 hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Paling Populer
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="text-primary font-poppins font-bold text-4xl mb-4">
                  {plan.price}
                </div>
                <p className="text-gray-600 mb-8">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full py-6 ${
                  plan.popular
                    ? "bg-primary hover:bg-primary-hover"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
              >
                Pilih Paket
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
