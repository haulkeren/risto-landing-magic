import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StarIcon } from "lucide-react";

// Testimonial data with added avatar and rating
const testimonials = [
  {
    quote: "Risto POS mengurangi kesalahan pemesanan kami sebesar 40% – modul manajemen meja sangat membantu!",
    author: "Jessica Wijaya",
    role: "Pemilik XYZ Café",
    avatar: "assets/images/user.png",
    rating: 5,
  },
  {
    quote: "Akses seumur hidup? Sangat worth it. Tidak ada biaya tersembunyi!",
    author: "Budi Santoso",
    role: "Manager Restoran Chain",
    avatar: "assets/images/user.png",
    rating: 5,
  },
  {
    quote: "Support yang luar biasa dan fitur yang lengkap. Sangat membantu operasional restoran kami.",
    author: "Diana Putri",
    role: "Operational Manager",
    avatar: "assets/images/user.png",
    rating: 5,
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kisah sukses dari pengguna Risto POS yang telah mengoptimalkan operasional bisnis mereka
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 text-primary-500 opacity-20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="relative"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:px-4 py-2">
                  <div className="p-8 md:p-12 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
                    {/* Rating stars */}
                    <div className="flex mb-6 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 font-light italic text-center">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    {/* Divider */}
                    <div className="w-16 h-1 bg-primary-500 mx-auto mb-8"></div>
                    
                    {/* Author info with avatar */}
                    <div className="flex items-center justify-center">
                      <div className="mr-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.author} 
                          className="w-12 h-12 rounded-full object-cover border-2 border-primary-100"
                        />
                      </div>
                      <div>
                        <div className="font-poppins font-semibold text-lg text-gray-900">
                          {testimonial.author}
                        </div>
                        <div className="text-gray-600 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom navigation buttons */}
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-md hover:bg-gray-50 text-gray-700 border border-gray-200" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white shadow-md hover:bg-gray-50 text-gray-700 border border-gray-200" />
          </Carousel>
          
          {/* Pagination indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-primary-500' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;