import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        hasScrolled ? "bg-white/95 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center text-2xl font-bold text-primary hover:text-primary-hover transition-colors"
          aria-label="Beranda"
        >
          <span>Risto</span>
          <span className="text-gray-800">POS</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-gray-700 hover:text-primary transition-colors"
                  // Active link detection (tambahkan logika sesuai routing)
                  // style={{ fontWeight: isActive ? 'bold' : 'normal' }}
                >
                  {link.text}
                  <span className="absolute inset-x-0 -bottom-2 h-0.5 bg-primary scale-x-0 transition-transform group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4 ml-4">
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

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } fixed inset-0 bg-white md:hidden transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="p-4 flex flex-col space-y-4">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col space-y-4 mt-4">
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-700 hover:text-primary"
              asChild
            >
              <a href="#login">Login</a>
            </Button>
            <Button className="w-full bg-primary hover:bg-primary-hover text-white">
              <a href="#demo">Coba Demo</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;