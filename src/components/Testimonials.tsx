
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Risto POS mengurangi kesalahan pemesanan kami sebesar 40% – modul manajemen meja sangat membantu!",
    author: "Jessica Wijaya",
    role: "Pemilik XYZ Café",
  },
  {
    quote: "Akses seumur hidup? Sangat worth it. Tidak ada biaya tersembunyi!",
    author: "Budi Santoso",
    role: "Manager Restoran Chain",
  },
  {
    quote: "Support yang luar biasa dan fitur yang lengkap. Sangat membantu operasional restoran kami.",
    author: "Diana Putri",
    role: "Operational Manager",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-xl text-gray-600">
            Kisah sukses dari pengguna Risto POS
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="relative"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-8 md:p-12 bg-white rounded-2xl shadow-lg">
                    <blockquote className="text-2xl text-gray-700 mb-8 font-light italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center justify-center">
                      <div className="text-center">
                        <div className="font-poppins font-semibold text-lg text-gray-900">
                          {testimonial.author}
                        </div>
                        <div className="text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
