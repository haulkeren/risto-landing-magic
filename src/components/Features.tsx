
import { ChartBar, Table, LineChart } from "lucide-react";

const features = [
  {
    icon: ChartBar,
    title: "Dashboard Global & Outlet",
    description: "Pelacakan penjualan real-time di seluruh outlet tanpa batas.",
  },
  {
    icon: Table,
    title: "Manajemen Meja",
    description: "Optimalisasi tempat duduk, reservasi, dan pengaturan pesanan.",
  },
  {
    icon: LineChart,
    title: "8 Laporan Keuangan",
    description: "Analisis laba/rugi, biaya inventaris, dan payroll.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-4">
            Fitur Unggulan
          </h2>
          <p className="text-xl text-gray-600">
            Solusi lengkap untuk kebutuhan bisnis F&B Anda
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="inline-block p-4 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-4">
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

export default Features;
