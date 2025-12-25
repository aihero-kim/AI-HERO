
import React, { useLayoutEffect, useRef } from 'react';
import { TEAM } from '../constants';
import { Target, Eye, Globe, Palette, Bot, LineChart, Check, Video, Database, MessageCircle, Users, ShoppingBag, Star, Megaphone } from 'lucide-react';
import gsap from 'gsap';
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
      <div className="relative py-24 md:py-32 bg-transparent overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 blur-[150px] rounded-full -translate-y-1/2 opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-8 font-display">
            Biz Haqimizda
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-white mb-8 tracking-tight leading-[1.1]">
            BIZNING <span className="text-primary drop-shadow-[0_0_15px_rgba(0,243,255,0.4)]">HIKOYAMIZ</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
            AI HERO - bu shunchaki kompaniya emas, bu O'zbekiston ta'lim tizimini <span className="text-primary font-bold">yangi bosqichga</span> olib chiqishni maqsad qilgan innovatorlar birlashmasi.
          </p>
        </div>
      </div>

      {/* Mission, Vision, Values - High Visibility Cards */}
      <div className="py-20 bg-transparent values-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className="value-card group relative bg-dark-surface rounded-[2.5rem] p-10 border border-white/20 hover:border-primary/50 transition-all duration-500 flex flex-col items-center text-center h-full shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
              <div className="w-20 h-20 bg-primary/20 border border-primary/40 rounded-2xl flex items-center justify-center mb-10 text-primary shadow-[0_0_30px_rgba(0,243,255,0.4)]">
                <Target size={44} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-6">Missiyamiz</h3>
              <p className="text-gray-100 leading-relaxed text-lg font-medium opacity-100">
                Har bir maktab o'quvchisiga zamonaviy texnologiyalar va sun'iy intellekt bo'yicha sifatli bilim olish imkoniyatini yaratish.
              </p>
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem] pointer-events-none"></div>
            </div>

            {/* Vision Card */}
            <div className="value-card group relative bg-dark-surface rounded-[2.5rem] p-10 border border-white/20 hover:border-accent/50 transition-all duration-500 flex flex-col items-center text-center h-full shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
              <div className="w-20 h-20 bg-accent/20 border border-accent/40 rounded-2xl flex items-center justify-center mb-10 text-accent shadow-[0_0_30px_rgba(10,255,10,0.4)]">
                <Eye size={44} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-6">Vizionimiz</h3>
              <p className="text-gray-100 leading-relaxed text-lg font-medium opacity-100">
                2030 yilga qadar O'zbekistonning barcha hududlaridagi maktablarda AI va robototexnika laboratoriyalarini tashkil etish.
              </p>
              <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem] pointer-events-none"></div>
            </div>

            {/* Values Card */}
            <div className="value-card group relative bg-dark-surface rounded-[2.5rem] p-10 border border-white/20 hover:border-secondary/50 transition-all duration-500 flex flex-col items-center text-center h-full shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
              <div className="w-20 h-20 bg-secondary/20 border border-secondary/40 rounded-2xl flex items-center justify-center mb-10 text-secondary shadow-[0_0_30px_rgba(188,19,254,0.4)]">
                <Globe size={44} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-6">Qadriyatlarimiz</h3>
              <p className="text-gray-100 leading-relaxed text-lg font-medium opacity-100">
                Innovatsiya, sifatli ta'lim, shaffoflik va doimiy rivojlanish - bizning faoliyatimizning asosiy ustunlaridir.
              </p>
              <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem] pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* SLOGAN BANNER */}
      <div className="py-16 bg-gradient-to-r from-primary/10 via-dark-surface to-accent/10 border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4 tracking-wide">
            "AI HERO — Biznesingiz uchun <span className="text-primary">sun'iy intellekt imkoniyatlarini</span> ochadi."
          </h2>
        </div>
      </div>

      {/* NEW SECTION: Korxonalar (Kompaniyalar) uchun AI takliflari */}
      <div className="py-24 bg-transparent services-grid relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6 font-display">
              Enterprise Solutions
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              KORXONALAR UCHUN <span className="text-primary text-glow">AI TAKLIFLARI</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              "Murakkab jarayonlarni AIga ishoning, jamoangiz esa faqat muhim va kreativ g'oyalarga e'tibor qaratsin."
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-300">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">Xarajatlarni kamaytirish</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">Ish samaradorligini oshirish</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 1. RPA + LLM */}
            <div className="service-card bg-dark-surface/50 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <Bot size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">AI Avtomatlashtirish (RPA + LLM)</h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                Ma'lumotlarni kiritish, hisobotlarni tayyorlash va email xabarlariga javob berish kabi takrorlanuvchi vazifalarni AIga topshirish.
              </p>
              <div className="pt-4 border-t border-white/5">
                <p className="text-primary text-sm font-bold flex items-center gap-2">
                  <Check size={16} /> Natija: Vaqtni 80% gacha tejash
                </p>
              </div>
            </div>

            {/* 2. Marketing Content */}
            <div className="service-card bg-dark-surface/50 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-accent/50 transition-all duration-300 group hover:-translate-y-2">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 border border-accent/20 group-hover:bg-accent/20 transition-colors">
                <Megaphone size={28} className="text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">AI Marketing Kontent</h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                Kompaniya brendiga mos keladigan press-relizlar, ijtimoiy tarmoqlar uchun postlar va reklama matnlarini AI yordamida professional yaratish.
              </p>
              <div className="pt-4 border-t border-white/5">
                <p className="text-accent text-sm font-bold flex items-center gap-2">
                  <Check size={16} /> Natija: Brandingni mustahkamlash
                </p>
              </div>
            </div>

            {/* 3. Private GPT */}
            <div className="service-card bg-dark-surface/50 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-secondary/50 transition-all duration-300 group hover:-translate-y-2">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
                <Database size={28} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">Ichki Bilimlar Bazasi (Private GPT)</h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                Kompaniya hujjatlarini o'rgangan maxsus AI chatbotini yaratish. Yangi xodimlar uchun onboarding va ma'lumot qidirishni tezlashtiradi.
              </p>
              <div className="pt-4 border-t border-white/5">
                <p className="text-secondary text-sm font-bold flex items-center gap-2">
                  <Check size={16} /> Natija: Xodimlar samaradorligi oshishi
                </p>
              </div>
            </div>

             {/* 4. Corporate Video */}
             <div className="service-card bg-dark-surface/50 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 group hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-400/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-400/20 group-hover:bg-blue-400/20 transition-colors">
                <Video size={28} className="text-blue-400" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">AI Korporativ Video</h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                Video suratga olish xarajatlarisiz, AI personajlari va ovozlari orqali yuqori sifatli taqdimot va mahsulot videolarini tayyorlash.
              </p>
              <div className="pt-4 border-t border-white/5">
                <p className="text-blue-400 text-sm font-bold flex items-center gap-2">
                  <Check size={16} /> Natija: Ishlab chiqarish xarajatlarini qisqartirish
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* NEW SECTION: Kichik Biznes Uchun */}
      <div className="py-24 bg-dark-lighter border-t border-white/5 services-grid-small relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest mb-6 font-display">
              SMB Solutions
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              KICHIK BIZNES VA <span className="text-accent text-glow">TADBIRKORLAR</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              "24 soat dam olmasdan ishlaydigan AI xodimi — savdoni oshiradi va vaqtingizni tejaydi."
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-300">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">Savdoni oshirish</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">Mijozlar bilan aloqa</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            
            {/* 1. 24/7 Support */}
            <div className="service-card group relative bg-dark-surface rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 text-center hover:bg-white/5">
              <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">24/7 Chatbot</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Telegram/Instagram orqali avtomatik javob berish va band qilish (booking) tizimi.
              </p>
            </div>

            {/* 2. Intelligent CRM */}
            <div className="service-card group relative bg-dark-surface rounded-2xl p-6 border border-white/10 hover:border-secondary/50 transition-all duration-300 text-center hover:bg-white/5">
              <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4 text-secondary group-hover:scale-110 transition-transform">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Aqlli CRM</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Mijozlar xaridlarini tahlil qilib, moslashtirilgan chegirmalar yuborish tizimi.
              </p>
            </div>

            {/* 3. Design Package */}
            <div className="service-card group relative bg-dark-surface rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 text-center hover:bg-white/5">
               <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                <Palette size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">AI Dizayn</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Menyular, posterlar va mahsulot rasmlarini professional darajada tahrirlash.
              </p>
            </div>

            {/* 4. Review Analysis */}
             <div className="service-card group relative bg-dark-surface rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 text-center hover:bg-white/5">
               <div className="mx-auto w-12 h-12 bg-blue-400/10 rounded-full flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform">
                <Star size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Sharh Tahlili</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Mijozlarning onlayn sharhlarini tahlil qilish va ularga avtomatik javob yozish.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-transparent team-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-wider">MUTAXASSISLARIMIZ</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Loyiha ortida turgan professional va innovatorlar jamoasi bilan tanishing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {TEAM.map((member) => (
              <div key={member.id} className="team-card group relative">
                <div className="relative bg-dark-surface/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-500 shadow-2xl">
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
