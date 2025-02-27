
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tim kami siap membantu menjawab pertanyaan dan memandu Anda memilih solusi terbaik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-6">
              Kirim Pesan
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              <Button className="w-full py-6 bg-primary hover:bg-primary-hover text-lg">
                Kirim Pesan
              </Button>
            </form>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-6">
                Informasi Kontak
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Email</h4>
                    <p className="mt-1 text-gray-600">info@ristopos.id</p>
                    <p className="mt-1 text-gray-600">support@ristopos.id</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Telepon</h4>
                    <p className="mt-1 text-gray-600">+62 812 3456 7890</p>
                    <p className="mt-1 text-gray-600">+62 21 987 6543</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Alamat</h4>
                    <p className="mt-1 text-gray-600">
                      Jl. Sudirman No. 123, Lantai 12
                      <br />
                      Jakarta Pusat, 10220
                      <br />
                      Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-gray-50 rounded-2xl">
              <h4 className="font-medium text-lg text-gray-900 mb-2">Jam Operasional</h4>
              <p className="text-gray-600 mb-4">
                Senin - Jumat: 08.00 - 17.00 WIB
                <br />
                Sabtu: 09.00 - 14.00 WIB
                <br />
                Minggu: Tutup
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
