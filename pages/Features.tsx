
import React, { useLayoutEffect, useRef } from 'react';
import { Award, Users, TrendingUp, Zap, ShieldCheck, GraduationCap, Brain, Rocket, Globe, Plane, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FEATURES } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Icons: Record<string, React.ElementType> = {
  Award: Award,
  Users: Users,
  TrendingUp: TrendingUp,
  Zap: Zap,
  Brain: Brain,
  Rocket: Rocket,
  ShieldCheck: ShieldCheck,
  GraduationCap: GraduationCap
};

const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Changed to use .set and .to for robust start/end states, ensuring full visibility
      gsap.set(".feature-card", { y: 40, opacity: 0 });
      gsap.to(".feature-card", {
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 85%",
        },
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out"
      });

      // Korea Section Animation
      gsap.from(".korea-content", {
        scrollTrigger: {
          trigger: ".korea-section",
          start: "top 75%",
        },
        x: -50,
        opacity: 0,
        duration: 0.8
      });
      gsap.from(".korea-visual", {
        scrollTrigger: {
          trigger: ".korea-section",
          start: "top 75%",
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2
      });

      gsap.from(".detail-section", {
        scrollTrigger: {
          trigger: ".detail-section",
          start: "top 75%",
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-transparent min-h-screen">
      {/* Header Section */}
      <div className="relative py-20 md:py-28 overflow-hidden flex items-center justify-center bg-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6 font-display">
            <Globe size={14} /> Bizning Ustunligimiz
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-black text-white mb-6 tracking-tight leading-none drop-shadow-[0_0_20px_rgba(0,243,255,0.2)]">
            AFZALLIKLARIMIZ
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium">
            AI HERO loyihasining boshqalardan farq qiladigan asosiy jihatlari va o'quvchilarga beradigan imkoniyatlari.
          </p>
        </div>
      </div>

      {/* Main Features Grid - Enhanced Visibility */}
      <div className="pb-20 bg-transparent features-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature) => {
              const Icon = Icons[feature.iconName] || Zap;
              return (
                <div
                  key={feature.id}
                  // Updated style to match About.tsx: dark-surface background for high visibility
                  className="feature-card group relative bg-dark-surface rounded-[2.5rem] p-10 border border-white/20 hover:border-primary/50 transition-all duration-500 flex flex-col h-full shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
                >
                  {/* Icon Box */}
                  <div className="relative mb-10">
                    <div className="w-16 h-16 bg-primary/20 border border-primary/40 rounded-2xl flex items-center justify-center text-primary transition-all duration-500 shadow-[0_0_30px_rgba(0,243,255,0.2)] group-hover:shadow-[0_0_40px_rgba(0,243,255,0.4)] group-hover:scale-110">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-2xl font-display font-bold text-white mb-6 leading-tight group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-100 text-base leading-relaxed font-medium opacity-100 group-hover:text-white transition-colors">
                      {feature.description}
                    </p>
                  </div>

                  {/* Subtle decorative glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem] pointer-events-none"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Korea Integration Section (Updated Compact Layout) */}
      <div className="korea-section py-24 bg-transparent relative overflow-hidden border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content Side */}
            <div className="korea-content w-full lg:w-1/2">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/50 bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest mb-6 font-display">
                <Plane size={12} /> GLOBAL IMKONIYATLAR
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 leading-none tracking-tight">
                Janubiy Koreya <br />
                <span className="text-secondary drop-shadow-[0_0_15px_rgba(188,19,254,0.4)]">Ta'lim Tizimi</span>
              </h2>

              {/* Description */}
              <p className="text-base text-gray-400 mb-8 leading-relaxed max-w-xl">
                Maktabingiz o'quvchilari uchun nafaqat IT bilimlarini, balki Koreys tili va madaniyatini o'rganish imkoniyatini yarating. Bitiruvchilar uchun Janubiy Koreyaning nufuzli universitetlariga <span className="text-secondary font-bold">kirishga yodram beramiz</span> .
              </p>

              {/* Info Cards - Compact Stack */}
              <div className="space-y-4 mb-8 max-w-md">
                {/* TOPIK Card */}
                <div className="flex items-center gap-4 p-4 bg-dark-surface border border-white/10 rounded-2xl hover:border-secondary/50 transition-all duration-300 group cursor-default">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary group-hover:scale-110 group-hover:bg-secondary/30 transition-all">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-0.5 group-hover:text-secondary transition-colors">TOPIK Sertifikati tez olishga </h4>
                    <p className="text-gray-500 text-xs">Xalqaro darajadagi til sertifikati tayyorgarligi</p>
                  </div>
                </div>

                {/* Grants Card */}
                <div className="flex items-center gap-4 p-4 bg-dark-surface border border-white/10 rounded-2xl hover:border-secondary/50 transition-all duration-300 group cursor-default">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary group-hover:scale-110 group-hover:bg-secondary/30 transition-all">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-0.5 group-hover:text-secondary transition-colors">Universitet Grantlarini yutish imkoniyati</h4>
                    <p className="text-gray-500 text-xs">Top-50 Koreya universitetlariga kirish ko'magi</p>
                  </div>
                </div>
              </div>

              {/* Link */}
              <Link to="/dasturlar" className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-xs hover:text-white transition-colors group pl-2">
                BATAFSIL MA'LUMOT <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Visual Side */}
            <div className="korea-visual w-full lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group aspect-[4/3] lg:aspect-auto lg:h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
                  alt="South Korea Education Building"
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent"></div>

                {/* Optional: Floating Badge on Image */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs font-medium text-white">
                  📍 Seoul, South Korea
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Section */}
      <div className="py-24 bg-transparent relative overflow-hidden border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="detail-section w-full lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                Kelajakni <br />
                <span className="text-primary drop-shadow-[0_0_10px_rgba(0,243,255,0.3)]">Kafolatlang</span>
              </h2>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed font-medium">
                Bizning o'quv dasturimiz shunchaki bilim berish emas, balki o'quvchilarni real bozor talablariga tayyorlash va ularga xalqaro eshiklarni ochishga qaratilgan.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
                  <div className="text-4xl font-display font-black text-white mb-2">70%</div>
                  <div className="text-[10px] uppercase tracking-widest text-primary font-bold">Amaliy Mashg'ulotlar</div>
                </div>
                <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
                  <div className="text-4xl font-display font-black text-white mb-2">100%</div>
                  <div className="text-[10px] uppercase tracking-widest text-secondary font-bold">Rasmiy Sertifikat</div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
                  alt="Cyber Security"
                  className="w-full h-[450px] object-cover grayscale opacity-50 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -inset-4 border border-primary/30 rounded-[2.5rem] -rotate-1 -z-10 blur-[2px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
