import { 
  Users, 
  ShieldCheck, 
  Headset, 
  Scale, 
  PieChart, 
  LayoutDashboard, 
  CreditCard, 
  BarChart3, 
  Settings, 
  Layers,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Users,
    title: "Pengguna Tanpa Batas",
    description: "Tambahkan tim tanpa batasan jumlah akun dengan biaya tetap",
    color: "bg-gradient-to-br from-blue-400 to-blue-600",
  },
  {
    icon: CreditCard,
    title: "Sistem Pembayaran Satu Kali",
    description: "Hanya bayar sekali mulai dari Rp 4.560.000 tanpa biaya bulanan",
    color: "bg-gradient-to-br from-green-400 to-green-600",
  },
  {
    icon: LayoutDashboard,
    title: "Fitur All-in-One",
    description: "Manajemen meja, stok, payroll, laporan keuangan dalam satu platform",
    color: "bg-gradient-to-br from-purple-400 to-purple-600",
  },
  {
    icon: Layers,
    title: "Skalabilitas Multi-Outlet",
    description: "Kelola semua cabang dalam satu sistem terpusat",
    color: "bg-gradient-to-br from-yellow-400 to-yellow-600",
  },
  {
    icon: ShieldCheck,
    title: "Keamanan Tingkat Tinggi",
    description: "Enkripsi SSL + pemantauan keamanan 24/7",
    color: "bg-gradient-to-br from-red-400 to-red-600",
  },
  {
    icon: PieChart,
    title: "Analitik Bisnis",
    description: "Laporan penjualan, laba rugi, dan analisis tren real-time",
    color: "bg-gradient-to-br from-teal-400 to-teal-600",
  },
  {
    icon: Settings,
    title: "Kustomisasi Fleksibel",
    description: "Atur menu, harga, dan role pengguna sesuai kebutuhan",
    color: "bg-gradient-to-br from-pink-400 to-pink-600",
  },
  {
    icon: BarChart3,
    title: "Pantau Kinerja",
    description: "Tracking pesanan dapur dan performa outlet secara live",
    color: "bg-gradient-to-br from-indigo-400 to-indigo-600",
  },
  {
    icon: Scale,
    title: "Harga Kompetitif",
    description: "Fitur lengkap dengan biaya lebih rendah dari kompetitor",
    color: "bg-gradient-to-br from-orange-400 to-orange-600",
  },
  {
    icon: Headset,
    title: "Dukungan 12/7",
    description: "Tim support siap membantu 12 jam/hari via live chat & telepon",
    color: "bg-gradient-to-br from-cyan-400 to-cyan-600",
  },
];

// Group features into categories for better organization
const featureGroups = [
  {
    title: "Nilai Bisnis",
    items: [0, 1, 8] // User, Payment, Competitive Price
  },
  {
    title: "Kemampuan Sistem",
    items: [2, 3, 6] // All-in-One, Multi-Outlet, Customization
  },
  {
    title: "Performa & Keamanan",
    items: [4, 7, 5] // Security, Performance Monitoring, Analytics
  },
  {
    title: "Layanan Pelanggan",
    items: [9] // Support
  }
];

const WhyRisto = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Enhanced Header with decorative elements */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          
          <h2 className="font-extrabold text-5xl md:text-6xl text-gray-900 mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Mengapa Risto POS?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light mb-8">
            Solusi lengkap untuk meningkatkan efisiensi bisnis F&B Anda
          </p>
          
          <div className="flex justify-center gap-2 opacity-70">
            <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
            <span className="inline-block w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="inline-block w-2 h-2 rounded-full bg-gray-300"></span>
          </div>
        </motion.div>

        {/* Feature Categories */}
        <div className="mb-16">
          {featureGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-16 last:mb-0">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-gray-800 mb-8 pl-4 border-l-4 border-primary"
              >
                {group.title}
              </motion.h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {group.items.map(index => {
                  const feature = features[index];
                  return (
                    <motion.div 
                      key={index}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.03, 
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                      }}
                      className="p-6 bg-white rounded-2xl shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full"
                    >
                      <div className={`w-14 h-14 mb-6 rounded-xl flex items-center justify-center ${feature.color}`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-xl mb-3 text-gray-800">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-base flex-grow">
                        {feature.description}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 bg-gradient-to-r from-primary to-secondary p-8 md:p-12 rounded-3xl shadow-xl text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Tingkatkan Efisiensi Bisnis F&B Anda Sekarang
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Solusi lengkap dengan harga terjangkau untuk mengoptimalkan operasional bisnis kuliner Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-primary hover:bg-gray-100 rounded-full shadow-lg transition-all duration-300 font-medium flex items-center justify-center gap-2"
            >
              Lihat Demo Fitur
              <LayoutDashboard className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 rounded-full shadow-lg transition-all duration-300 font-medium flex items-center justify-center gap-2"
            >
              Jadwalkan Konsultasi
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyRisto;