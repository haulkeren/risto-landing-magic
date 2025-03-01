import { Button } from "@/components/ui/button";
import { Mail, Pin, Phone, PiIcon } from "lucide-react";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const DATA_FOOTER = {
  usefull_link: [
    {
      name: "Layanan",
      href: "/services",
    },
    {
      name: "Workshop",
      href: "/workshop",
    },
    {
      name: "AI PDF",
      href: "#",
    },
    {
      name: "Artikel",
      href: "/articles",
    },
  ],
  our_service: [
    {
      name: "POS Solutions",
      href: "/services/aplikasi-kasir-pos-solutions",
    },
    {
      name: "Risto POS",
      href: "/services/kasir-restoran-cafe-risto-pos",
    },
  ],
};

const Footer = () => {
  return (
    <footer className="relative z-10 mt-10" style={{ backgroundColor: "rgba(95, 39, 205, 0.1)" }}>
      <div className="px-10 py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              {/* Replace with your logo */}
              <img src="https://technemasolutions.co.id/_next/static/media/logo.47b2b435.svg" alt="technema logo" className="w-10 h-10" />
              <p className="text-2xl font-semibold">
                Technema Solutions
              </p>
            </div>
            <p className="font-light text-gray-600">
              We provide Information Technology Products for your business and
              business development.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.instagram.com/technemasolutions.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-300 transition-all hover:border-transparent hover:bg-purple-600 hover:text-white"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61561333662838&mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-300 transition-all hover:border-transparent hover:bg-purple-600 hover:text-white"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/technemasolutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-300 transition-all hover:border-transparent hover:bg-purple-600 hover:text-white"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-5 text-sm font-semibold text-gray-500">
              TAUTAN
            </h4>
            <div className="flex flex-col gap-3">
              {DATA_FOOTER.usefull_link.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="font-normal transition-all hover:text-purple-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-5 text-sm font-semibold text-gray-500">
              Produk
            </h4>
            <div className="flex flex-col gap-3">
              {DATA_FOOTER.our_service.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="font-normal transition-all hover:text-purple-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-5 text-sm font-semibold text-gray-500">
              KONTAK
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <div className="text-gray-500">
                  <Pin size={20} />
                </div>
                <div>
                  <p className="text-gray-500">Alamat</p>
                  <p>Niaga 1, No.08, Lantai 2, RT.005, Berau, KALTIM</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-gray-500">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-gray-500">Nomer HP</p>
                  <a href="tel:+6285246911805">+62 852 4691 1805</a>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-gray-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-gray-500">E-mail</p>
                  <a href="mailto:contact@technemasolutions.co.id">
                    contact@technemasolutions.co.id
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-12" />
        <p className="text-center text-gray-600">
          © Copyright 2025, All Rights Reserved by Technema Solutions
        </p>
        <div className="flex justify-center gap-3 font-bold pt-4">
          <Link
            to="https://technemasolutions.co.id/id/syarat-ketentuan"
            className="text-center text-purple-600 transition-all hover:text-purple-500"
          >
            Term and Conditions
          </Link>{" "}
          |{" "}
          <Link
            to="https://technemasolutions.co.id/id/kebijakan-privasi"
            className="text-center text-purple-600 transition-all hover:text-purple-500"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;