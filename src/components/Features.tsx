import { 
  BarChart, 
  Table, 
  LineChart, 
  Package, 
  Users, 
  ShoppingCart, 
  FileText, 
  Settings, 
  Layers, 
  UserCheck, 
  DollarSign, 
  Shield,
  ChevronRight,
  Coffee
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import FeatureModal from "./FeatureModal"; // Import the modal component

// Organize features into categories for better information architecture
const featureCategories = [
  {
    id: "operational",
    title: "Operasional",
    icon: Coffee,
    features: [
      {
        icon: Package,
        title: "Point of Sale (POS)",
        description: "Proses transaksi penjualan dengan cepat dan akurat, terima berbagai jenis pembayaran, dan cetak struk.",
        highlight: true
      },
      {
        icon: ShoppingCart,
        title: "Modul Menu",
        description: "Buat, edit, dan kategorikan menu dengan mudah, serta kelola harga dan ketersediaan stok.",
        highlight: false
      },
      {
        icon: Table,
        title: "Manajemen Meja",
        description: "Atur tata letak meja, alokasikan pesanan ke meja, dan pantau status meja secara real-time.",
        highlight: false
      },
      {
        icon: Layers,
        title: "Pelacakan Pesanan",
        description: "Lacak status pesanan dari dapur hingga penyajian.",
        highlight: false
      },
    ]
  },
  {
    id: "management",
    title: "Manajemen",
    icon: BarChart,
    features: [
      {
        icon: BarChart,
        title: "Dasbor Global & Outlet",
        description: "Pantau kinerja bisnis secara keseluruhan dan per outlet dengan mudah.",
        highlight: true
      },
      {
        icon: LineChart,
        title: "Laporan Keuangan",
        description: "Dapatkan laporan penjualan, laba rugi, arus kas, dan lainnya secara real-time dan akurat.",
        highlight: false
      },
      {
        icon: FileText,
        title: "Riwayat Pesanan",
        description: "Lihat riwayat pesanan pelanggan dan analisis penjualan.",
        highlight: false
      },
      {
        icon: DollarSign,
        title: "Modul Pembelian & Beban",
        description: "Catat dan kelola pengeluaran bisnis Anda, termasuk pembelian bahan baku dan biaya operasional lainnya.",
        highlight: false
      },
    ]
  },
  {
    id: "team",
    title: "Tim & Keamanan",
    icon: Users,
    features: [
      {
        icon: Users,
        title: "Manajemen Pelanggan & Pemasok",
        description: "Kelola data pelanggan dan pemasok, serta catat riwayat transaksi.",
        highlight: false
      },
      {
        icon: UserCheck,
        title: "SDM & Penggajian",
        description: "Kelola karyawan, absensi, gaji, cuti, dan penghargaan.",
        highlight: false
      },
      {
        icon: Shield,
        title: "Role & Permissions",
        description: "Atur hak akses pengguna sesuai peran dan tanggung jawab mereka.",
        highlight: false
      },
      {
        icon: Settings,
        title: "Unlimited Akun",
        description: "Tambahkan akun pengguna tanpa batas untuk tim Anda.",
        highlight: true
      },
    ]
  }
];

const Features = () => {
  // State to track the active category
  const [activeCategory, setActiveCategory] = useState("operational");
  
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Get the features for the active category
  const activeCategoryData = featureCategories.find(cat => cat.id === activeCategory);
  
  // Animation variants
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
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Enhanced Header with visual elements */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="flex items-center justify-center mb-4">
            <span className="inline-block h-1 w-10 bg-primary rounded-full mr-2"></span>
            <span className="uppercase text-xs md:text-sm font-semibold tracking-wider text-primary">Komprehensif & Terpadu</span>
            <span className="inline-block h-1 w-10 bg-primary rounded-full ml-2"></span>
          </div>
          
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 md:mb-6">
            Fitur <span className="text-primary">Unggulan</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Solusi lengkap untuk mengoptimalkan operasional bisnis F&B Anda
          </p>
        </motion.div>

        {/* Tab-like category navigation - Mobile optimized */}
        <div className="mb-8 md:mb-12 flex justify-center">
          <div className="inline-flex flex-wrap gap-2 md:gap-0 justify-center md:flex-nowrap rounded-lg bg-gray-100 p-1">
            {featureCategories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-3 md:px-6 py-2 md:py-3 rounded-lg font-medium text-xs md:text-sm transition-all ${
                  category.id === activeCategory ? 'bg-white text-primary shadow-md' : 'text-gray-700 hover:text-primary'
                }`}
              >
                <category.icon className="w-4 h-4 mr-1 md:mr-2" />
                {category.title}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Feature Category Header */}
        <motion.div 
          key={activeCategory + "-header"}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center mb-6 md:mb-10"
        >
          <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 text-primary mr-3 md:mr-4">
            <activeCategoryData.icon className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800">{activeCategoryData.title}</h3>
        </motion.div>
        
        {/* Feature Cards - Only shows the active category */}
        <motion.div 
          key={activeCategory + "-features"}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {activeCategoryData.features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 group ${
                feature.highlight 
                  ? 'bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20'
                  : 'bg-white border border-gray-100 hover:border-primary/20'
              }`}
            >
              {feature.highlight && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-white text-xs py-1 px-2 md:px-3 rounded-bl-lg font-medium">
                    Unggulan
                  </div>
                </div>
              )}
              
              <div className="p-4 md:p-6 flex flex-col h-full">
                <div className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg mb-4 md:mb-5 ${
                  feature.highlight 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-primary group-hover:bg-primary/10 transition-colors duration-300'
                }`}>
                  <feature.icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                
                <h4 className="font-semibold text-lg md:text-xl text-gray-900 mb-2 md:mb-3">
                  {feature.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed text-xs md:text-sm flex-grow mb-3 md:mb-4">
                  {feature.description}
                </p>
                
                <div className={`flex items-center text-xs md:text-sm font-medium ${
                  feature.highlight ? 'text-primary' : 'text-gray-500 group-hover:text-primary'
                } transition-colors duration-300`}>
                  <span>Pelajari lebih lanjut</span>
                  <ChevronRight className="h-3 w-3 md:h-4 md:w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Features Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mt-10 md:mt-16"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 md:px-8 py-3 md:py-4 bg-white border border-gray-200 hover:border-primary/30 hover:bg-primary/5 text-gray-900 rounded-full shadow-sm transition-all duration-300 font-medium flex items-center gap-2 text-sm md:text-base"
            onClick={() => setIsModalOpen(true)}
          >
            Lihat Semua Fitur
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Feature Modal */}
      <FeatureModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        featureCategories={featureCategories} 
      />
    </section>
  );
};

export default Features;