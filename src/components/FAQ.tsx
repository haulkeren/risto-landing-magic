import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search } from "lucide-react";

const faqs = [
  {
    question: "Apakah Risto POS bisa digunakan untuk multiple outlet?",
    answer:
      "Ya, Risto POS dirancang untuk mendukung beberapa outlet sekaligus dengan dashboard terpusat. Anda dapat melihat laporan dari setiap outlet atau laporan gabungan secara real-time.",
    category: "fitur",
  },
  {
    question: "Berapa lama waktu implementasi Risto POS?",
    answer:
      "Implementasi standar Risto POS membutuhkan waktu 1-3 hari tergantung kompleksitas kebutuhan restoran Anda. Tim kami akan membantu proses setup dan training karyawan.",
    category: "implementasi",
  },
  {
    question: "Apakah saya perlu berlangganan bulanan?",
    answer:
      "Tidak, Risto POS menawarkan model lisensi sekali bayar dengan akses seumur hidup. Anda tidak perlu khawatir dengan biaya berlangganan bulanan.",
    category: "biaya",
  },
  {
    question: "Apakah ada biaya tersembunyi?",
    answer:
      "Sama sekali tidak ada biaya tersembunyi. Setelah pembayaran lisensi, Anda mendapatkan akses penuh ke semua fitur Risto POS. Support dan maintenance tahun pertama gratis.",
    category: "biaya",
  },
  {
    question: "Bagaimana dengan keamanan data di Risto POS?",
    answer:
      "Risto POS menggunakan enkripsi SSL untuk melindungi data Anda. Kami juga melakukan backup otomatis dan menyediakan fitur kontrol akses untuk memastikan keamanan data restoran Anda.",
    category: "keamanan",
  },
];

// Unique categories from FAQs
const categories = ["semua", ...new Set(faqs.map((faq) => faq.category))];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("semua");

  // Filter FAQs based on search query and active category
  const filteredFaqs = faqs.filter(
    (faq) =>
      (activeCategory === "semua" || faq.category === activeCategory) &&
      (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-4">
            Pertanyaan Umum
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering ditanyakan tentang Risto POS
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-200 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Cari pertanyaan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {filteredFaqs.length > 0 ? (
            <Accordion type="single" collapsible className="w-full divide-y divide-gray-200">
              {filteredFaqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow px-1"
                >
                  <AccordionTrigger className="text-left font-medium text-lg py-5 px-4 hover:no-underline hover:bg-gray-50">
                    <div className="flex items-start">
                      <span className="mr-2 text-blue-600 font-semibold">Q:</span>
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 bg-gray-50 rounded-b-lg">
                    <div className="p-4 flex">
                      <span className="mr-2 text-blue-600 font-semibold">A:</span>
                      <span>{faq.answer}</span>
                    </div>
                    <div className="px-4 pb-4 text-right">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 capitalize">
                        {faq.category}
                      </span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-8 bg-white rounded-lg border border-gray-200">
              <p className="text-gray-500">Tidak ada pertanyaan yang sesuai dengan pencarian Anda.</p>
              <button 
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("semua");
                }}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Reset Pencarian
              </button>
            </div>
          )}
        </div>

        {/* Contact section */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Masih punya pertanyaan lain? Jangan ragu untuk menghubungi kami
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;