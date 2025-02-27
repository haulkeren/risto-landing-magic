
import { Users, ShieldCheck, Headset } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Pengguna Tidak Terbatas",
    description: "Perluas tim Anda dengan mudah tanpa biaya tambahan.",
  },
  {
    icon: ShieldCheck,
    title: "Enkripsi SSL Gratis",
    description: "Pemantauan keamanan 24/7 untuk data Anda.",
  },
  {
    icon: Headset,
    title: "Support Dedicated",
    description: "Maintenance gratis tahun pertama + support dedicated.",
  },
];

const WhyRisto = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-4">
            Mengapa Risto POS?
          </h2>
          <p className="text-xl text-gray-600">
            Keunggulan yang membuat kami berbeda
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRisto;
