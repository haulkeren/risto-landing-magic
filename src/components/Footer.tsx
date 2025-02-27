
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl mb-4">
            Siap Transformasi Bisnis Anda?
          </h2>
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <Phone className="mr-2 h-5 w-5" />
            Hubungi via WhatsApp
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
          <div>
            <h3 className="font-poppins font-semibold mb-4">Produk</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-primary transition-colors">
                  Fitur
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors">
                  Harga
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-primary transition-colors">
                  Demo
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-poppins font-semibold mb-4">Perusahaan</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-primary transition-colors">
                  Karir
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-poppins font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#help" className="hover:text-primary transition-colors">
                  Bantuan
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Kontak
                </a>
              </li>
              <li>
                <a href="#status" className="hover:text-primary transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-poppins font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="hover:text-primary transition-colors">
                  Privasi
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-primary transition-colors">
                  Syarat
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-primary transition-colors">
                  Keamanan
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-400 border-t border-gray-800 pt-8">
          <p>© 2024 Risto POS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
