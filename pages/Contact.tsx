import React, { useLayoutEffect, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ContactForm from '../components/ContactForm';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation for Testimonials
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        scrollTrigger: {
          trigger: ".testimonials-grid",
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        scale: 0.9,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.2)"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-transparent min-h-screen">

      {/* SECTION 1: Testimonials / User Reviews (Moved to Top) */}
      <div className="pt-32 pb-20 relative overflow-hidden testimonials-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              MIJOZLAR <span className="text-primary">FIKRLARI</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(0,243,255,0.8)]"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card flex flex-col items-center text-center group">

                {/* Circular Image Container with Glowing Rings - Match Team Style */}
                <div className="relative w-40 h-40 mb-6">
                  {/* Outer Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-500"></div>
                  {/* Inner Ring (Glowing) */}
                  <div className="absolute inset-2 rounded-full border-2 border-primary shadow-[0_0_15px_rgba(0,243,255,0.4)] group-hover:shadow-[0_0_30px_rgba(0,243,255,0.8)] transition-all duration-500"></div>

                  {/* Image */}
                  <div className="absolute inset-4 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-display font-bold text-white mb-1 group-hover:text-primary transition-colors">
                  {testimonial.name}
                </h3>
                <p className="text-primary font-bold uppercase tracking-wider text-[10px] mb-4">
                  {testimonial.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed italic border-t border-white/10 pt-4 w-full px-2">
                  "{testimonial.content}"
                </p>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 2: Contact Main Section (Moved to Bottom) */}
      <div className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              BIZ BILAN <span className="text-primary text-glow">BOG'LANING</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Maktabingizda kelajak ta'limini yo'lga qo'yish uchun birinchi qadamni tashlang.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-24">

            {/* Contact Info Side */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/5 relative overflow-hidden flex flex-col justify-between shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-8 font-display">Aloqa Ma'lumotlari</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group hover-trigger">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-gray-400 group-hover:text-primary group-hover:border-primary transition-all duration-300">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Telefon</p>
                      <p className="text-xl font-bold text-white group-hover:text-primary transition-colors">+998 90 123 45 67</p>
                      <p className="text-sm text-gray-500 mt-1">Dushanba - Shanba, 9:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group hover-trigger">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-gray-400 group-hover:text-secondary group-hover:border-secondary transition-all duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Email</p>
                      <p className="text-xl font-bold text-white group-hover:text-secondary transition-colors">aihero.uz@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group hover-trigger">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-gray-400 group-hover:text-accent group-hover:border-accent transition-all duration-300">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm uppercase tracking-wider mb-1">Manzil</p>
                      <p className="text-xl font-bold text-white group-hover:text-accent transition-colors">Toshkent sh, AKITA University 204-xona</p>
                      <p className="text-sm text-gray-500 mt-1">Yuqori chirchiq, Yangibozor tumani, </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 relative z-10 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <p className="text-gray-300 italic">"Bizning maktabimiz AI HERO bilan hamkorlikdan so'ng IT sohasida katta yutuqlarga erishdi."</p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                  <div>
                    <div className="text-white font-bold text-sm">Direktor, 21-maktab</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-30"></div>
              <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-10 border border-white/10 relative z-10 h-full shadow-2xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
