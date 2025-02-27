
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Apakah Risto POS bisa digunakan untuk multiple outlet?",
    answer:
      "Ya, Risto POS dirancang untuk mendukung beberapa outlet sekaligus dengan dashboard terpusat. Anda dapat melihat laporan dari setiap outlet atau laporan gabungan secara real-time.",
  },
  {
    question: "Berapa lama waktu implementasi Risto POS?",
    answer:
      "Implementasi standar Risto POS membutuhkan waktu 1-3 hari tergantung kompleksitas kebutuhan restoran Anda. Tim kami akan membantu proses setup dan training karyawan.",
  },
  {
    question: "Apakah saya perlu berlangganan bulanan?",
    answer:
      "Tidak, Risto POS menawarkan model lisensi sekali bayar dengan akses seumur hidup. Anda tidak perlu khawatir dengan biaya berlangganan bulanan.",
  },
  {
    question: "Apakah ada biaya tersembunyi?",
    answer:
      "Sama sekali tidak ada biaya tersembunyi. Setelah pembayaran lisensi, Anda mendapatkan akses penuh ke semua fitur Risto POS. Support dan maintenance tahun pertama gratis.",
  },
  {
    question: "Bagaimana dengan keamanan data di Risto POS?",
    answer:
      "Risto POS menggunakan enkripsi SSL untuk melindungi data Anda. Kami juga melakukan backup otomatis dan menyediakan fitur kontrol akses untuk memastikan keamanan data restoran Anda.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-4">
            Pertanyaan Umum
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering ditanyakan tentang Risto POS
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
