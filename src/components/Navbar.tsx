
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { text: "Fitur", href: "#features" },
  { text: "Harga", href: "#pricing" },
  { text: "Testimonial", href: "#testimonials" },
  { text: "FAQ", href: "#faq" },
  { text: "Kontak", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-primary">Risto</span>
          <span className="text-2xl font-bold text-gray-800">POS</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <ul className="flex space-x-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-300"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <div className="ml-6 flex items-center space-x-3">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-primary"
              asChild
            >
              <a href="#login">Login</a>
            </Button>
            <Button
              className="bg-primary hover:bg-primary-hover text-white"
              asChild
            >
              <a href="#demo">Coba Demo</a>
            </Button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 rounded-md hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-2 bg-white border-b border-gray-100">
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary rounded-md hover:bg-gray-50 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </a>
              </li>
            ))}
            <li className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
              <Button
                variant="ghost"
                className="justify-start text-gray-700 hover:text-primary w-full"
                asChild
              >
                <a href="#login">Login</a>
              </Button>
              <Button
                className="w-full bg-primary hover:bg-primary-hover text-white"
                asChild
              >
                <a href="#demo">Coba Demo</a>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
