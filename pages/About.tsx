
import React, { useLayoutEffect, useRef } from 'react';
import { TEAM } from '../constants';
import { Target, Eye, Globe, Palette, Bot, LineChart, Check, Video, Database, MessageCircle, Users, ShoppingBag, Star, Megaphone } from 'lucide-react';
import gsap from 'gsap';
import { AnimatedTestimonials } from '../components/ui/animated-testimonials';
import { StickyFeatureSection } from '../components/ui/sticky-scroll-cards-section';
import { Meteors } from '../components/ui/meteors';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Improved entrance animation for value cards - using to instead of from to ensure final state is 100% visible
      gsap.set(".value-card", { y: 40, opacity: 0 });
      gsap.to(".value-card", {
        scrollTrigger: {
          trigger: ".values-grid",
          start: "top 85%",
        },
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out"
      });

      // Animation for New Services Section
      gsap.set(".service-card", { y: 50, opacity: 0 });
      gsap.to(".service-card", {
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out"
      });

      // Team cards animation
      gsap.from(".team-card", {
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 80%",
        },
        scale: 0.95,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-transparent min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-24 pb-10 bg-transparent overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 blur-[150px] rounded-full -translate-y-1/2 opacity-30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-8 font-display">
            Biz Haqimizda
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-white mb-8 tracking-tight leading-[1.1]">
            BIZNING <span className="text-primary drop-shadow-[0_0_15px_rgba(0,243,255,0.4)]">HIKOYAMIZ</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
            AI HERO - bu shunchaki kompaniya emas, bu O'zbekiston ta'lim tizimini <br /> <span className="text-primary font-bold">yangi bosqichga</span> olib chiqishni maqsad qilgan innovatorlar birlashmasi.
          </p>
        </div>
      </div>

      {/* Mission, Vision, Values - Animated Section */}
      <div className="pt-0 pb-10 bg-transparent values-grid">
        <AnimatedTestimonials
          testimonials={[
            {
              name: "Missiyamiz",
              designation: "AI HERO Maqsadi",
              quote: "Har bir maktab o'quvchisiga zamonaviy texnologiyalar va sun'iy intellekt bo'yicha sifatli bilim olish imkoniyatini yaratish.",
              src: "/About_01_Mission.png"
            },
            {
              name: "Vizionimiz",
              designation: "2030 Strategiyasi",
              quote: "2030 yilga qadar O'zbekistonning barcha hududlaridagi maktablarda AI va robototexnika laboratoriyalarini tashkil etish.",
              src: "/About_02_Vision.png"
            },
            {
              name: "Qadriyatlarimiz",
              designation: "Asosiy Ustunlar",
              quote: "Innovatsiya, sifatli ta'lim, shaffoflik va doimiy rivojlanish - bizning faoliyatimizning asosiy ustunlaridir.",
              src: "/About_03_Value.jpeg"
            }
          ]}
          autoplay={true}
        />
      </div>

      {/* SLOGAN BANNER */}
      <div className="py-16 bg-gradient-to-r from-primary/10 via-dark-surface to-accent/10 border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4 tracking-wide">
            "<span className="text-primary drop-shadow-[0_0_15px_rgba(0,243,255,0.4)]">AI HERO</span> — Biznesingiz uchun <span className="text-secondary drop-shadow-[0_0_15px_rgba(188,19,254,0.4)]">AI imkoniyatlarini</span> ochadi."
          </h2>
        </div>
      </div>

      {/* Sticky Feature Section for Enterprise Solutions */}
      <div className="py-16 bg-transparent relative">
        <StickyFeatureSection />
      </div>

      {/* NEW SECTION: Kichik Biznes Uchun */}
      <div className="py-16 bg-transparent border-t border-white/5 services-grid-small relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest mb-6 font-display">
              SMB Solutions
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              KICHIK BIZNES VA <span className="text-accent text-glow">TADBIRKORLAR</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-8">
              "24 soat dam olmasdan ishlaydigan AI xodimi — savdoni oshiradi va vaqtingizni tejaydi."
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-300">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">Savdoni oshirish</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">Mijozlar bilan aloqa</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

            {/* 1. 24/7 Support */}
            <div className="service-card group relative bg-black/40 rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 text-center hover:bg-black/60 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
              <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">24/7 Chatbot</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 relative z-10">
                Telegram/Instagram orqali avtomatik javob berish va band qilish (booking) tizimi.
              </p>
              <Meteors number={15} />
            </div>

            {/* 2. Intelligent CRM */}
            <div className="service-card group relative bg-black/40 rounded-2xl p-6 border border-white/10 hover:border-secondary/50 transition-all duration-300 text-center hover:bg-black/60 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(188,19,254,0.2)]">
              <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4 text-secondary group-hover:scale-110 transition-transform">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">Aqlli CRM</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 relative z-10">
                Mijozlar xaridlarini tahlil qilib, moslashtirilgan chegirmalar yuborish tizimi.
              </p>
              <Meteors number={15} />
            </div>

            {/* 3. Design Package */}
            <div className="service-card group relative bg-black/40 rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 text-center hover:bg-black/60 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(0,243,255,0.2)]">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                <Palette size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">AI Dizayn</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 relative z-10">
                Menyular, posterlar va mahsulot rasmlarini professional darajada tahrirlash.
              </p>
              <Meteors number={15} />
            </div>

            {/* 4. Review Analysis */}
            <div className="service-card group relative bg-black/40 rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 text-center hover:bg-black/60 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]">
              <div className="mx-auto w-12 h-12 bg-blue-400/10 rounded-full flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform">
                <Star size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">Sharh Tahlili</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 relative z-10">
                Mijozlarning onlayn sharhlarini tahlil qilish va ularga avtomatik javob yozish.
              </p>
              <Meteors number={15} />
            </div>

          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-transparent team-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-wider">MUTAXASSISLARIMIZ</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Loyiha ortida turgan professional va innovatorlar jamoasi bilan tanishing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {TEAM.map((member) => (
              <div key={member.id} className="team-card group relative">
                <div className="relative bg-black/40 rounded-3xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-500 shadow-2xl hover:shadow-primary/10">
                  {/* Aspect Ratio 1:1 Image Container */}
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
                    />
                    {/* Dark gradient for text readability at the bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-100"></div>
                  </div>

                  {/* Info Section */}
                  <div className="p-8 text-center bg-dark-surface/90 border-t border-white/5">
                    <h3 className="text-2xl font-bold text-white mb-2 font-display">{member.name}</h3>
                    <p className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm font-medium">{member.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
