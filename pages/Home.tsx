
import React, { useLayoutEffect, useRef } from 'react';
import { ArrowRight, ChevronRight, Star, Cpu, Rocket, Zap, Bot, Languages, Video, Award, Brain, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { PROGRAMS, STATS, FEATURES } from '../constants';
import VideoShowcase from '../components/VideoShowcase';
import TeamCarousel from '../components/TeamCarousel';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      const tl = gsap.timeline();
      tl.from(".hero-badge", { y: 30, opacity: 0, duration: 0.6 })
        .from(".hero-title span", { y: 50, opacity: 0, duration: 0.8, stagger: 0.1 }, "-=0.4")
        .from(".hero-desc", { y: 30, opacity: 0, duration: 0.6 }, "-=0.6")
        .from(".hero-btn", { y: 20, opacity: 0, stagger: 0.1, duration: 0.6 }, "-=0.4")
        .from(".hero-visual", { x: 30, opacity: 0, duration: 1 }, "-=0.8");

      // Stats Animation - Use batch or simpler trigger to ensure visibility
      ScrollTrigger.batch(".stat-item", {
        start: "top 90%",
        onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      });

      // Programs Animation
      ScrollTrigger.batch(".program-card", {
        start: "top 85%",
        onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      });

      // Advantages Animation
      ScrollTrigger.batch(".advantage-item", {
        start: "top 85%",
        onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.1, overwrite: true }),
      });

      // Video Section Animation
      gsap.fromTo(".video-section-anim",
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".video-section",
            start: "top 85%",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          overwrite: true
        }
      );

      // About Animation
      gsap.fromTo(".about-content",
        { x: -50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%",
          },
          x: 0,
          opacity: 1,
          duration: 0.8,
          overwrite: true
        }
      );

      gsap.fromTo(".about-visual",
        { x: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%",
          },
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          overwrite: true
        }
      );

      // Contact/CTA Animation
      gsap.fromTo(".cta-content",
        { scale: 0.9, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".cta-section",
            start: "top 85%",
          },
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.2)",
          overwrite: true
        }
      );

    }, containerRef);

    // Mouse movement effect for Hero Visual
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 15;
      const yPos = (clientY / window.innerHeight - 0.5) * 15;

      gsap.to(".hero-visual-inner", {
        rotationY: xPos,
        rotationX: -yPos,
        duration: 1,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden bg-transparent">
      {/* 1. Hero Section */}
      <section className="relative pt-12 lg:pt-20 pb-20 bg-transparent">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[180px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-3xl order-2 lg:order-1">
              <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary backdrop-blur-md mb-8">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-semibold tracking-wide uppercase font-display">Innovatsion Ta'lim #1</span>
              </div>

              <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[0.95] mb-8">
                <span className="block mb-2">KELAJAK</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary filter drop-shadow-[0_0_15px_rgba(0,243,255,0.6)]">TA'LIMI</span>
                <span className="block text-3xl md:text-5xl text-gray-500 mt-4">SIZNING MAKTABDA</span>
              </h1>

              <p className="hero-desc text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-xl border-l-4 border-primary/50 pl-6">
                AI HERO maktabingizga <span className="text-primary font-bold">AI Agentlar</span>, zamonaviy Robototexnika va Koreys tilini taqdim etadi.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <Link to="/aloqa" className="hero-btn group relative inline-flex justify-center items-center gap-3 px-10 py-5 bg-primary text-black font-bold text-lg rounded-none skew-x-[-12deg] hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.7)] hover-trigger">
                  <div className="skew-x-[12deg] flex items-center gap-2">Hamkorlikni Boshlash <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></div>
                </Link>
                <Link to="/dasturlar" className="hero-btn group relative inline-flex justify-center items-center gap-3 px-10 py-5 bg-transparent border border-white/20 text-white font-bold text-lg rounded-none skew-x-[-12deg] hover:border-primary hover:text-primary transition-all duration-300 hover-trigger">
                  <div className="skew-x-[12deg]">Dasturlarimiz</div>
                </Link>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="hero-visual relative order-1 lg:order-2 perspective-1000">
              <div className="hero-visual-inner relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10 transition-transform duration-100 transform-style-3d bg-dark-surface">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200"
                  alt="AI Education Future"
                  loading="eager"
                  className="w-full h-auto object-cover opacity-90 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>

                {/* Floating Cards */}
                <div className="absolute bottom-8 left-8 p-3.5 bg-dark/90 backdrop-blur-2xl border border-white/10 rounded-xl flex items-center gap-3 animate-float shadow-2xl transform translate-z-30">
                  <div className="w-8 h-8 bg-secondary/30 rounded-lg flex items-center justify-center text-secondary border border-secondary/20">
                    <Cpu size={16} />
                  </div>
                  <div>
                    <div className="text-[8px] text-gray-500 uppercase font-display tracking-widest mb-0.5">AI Agent</div>
                    <div className="font-bold text-white text-sm leading-none">n8n & Genspark</div>
                  </div>
                </div>

                <div className="absolute top-8 right-8 p-3.5 bg-dark/90 backdrop-blur-2xl border border-white/10 rounded-xl flex items-center gap-3 animate-float shadow-2xl transform translate-z-30" style={{ animationDelay: '1.5s' }}>
                  <div className="w-8 h-8 bg-primary/30 rounded-lg flex items-center justify-center text-primary border border-primary/20">
                    <Video size={16} />
                  </div>
                  <div>
                    <div className="text-[8px] text-gray-500 uppercase font-display tracking-widest mb-0.5">AI Creative</div>
                    <div className="font-bold text-white text-sm leading-none">VEO 3 & SORA 2</div>
                  </div>
                </div>
              </div>

              <div className="absolute -inset-6 border border-primary/20 rounded-[2.5rem] rotate-3 z-0"></div>
              <div className="absolute -inset-6 border border-secondary/20 rounded-[2.5rem] -rotate-2 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="stats-section py-12 relative z-20 bg-transparent border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STATS.map((stat, index) => (
              <div key={index} className="stat-item relative p-6 bg-dark-lighter/50 backdrop-blur-md border border-white/5 rounded-[1.5rem] group hover:bg-white/5 transition-colors text-center">
                <div className="text-5xl md:text-6xl font-display font-black text-white/90 mb-2 group-hover:text-primary transition-all">
                  {stat.value}<span className="text-2xl align-top text-primary">{stat.suffix}</span>
                </div>
                <div className="text-primary font-display font-bold uppercase tracking-[0.2em] text-[10px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Advantages Preview Section */}
      <section className="advantages-section py-20 relative bg-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Nega Aynan Biz?</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">AI HERO Afzalliklari</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="advantage-item group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
                  {feature.iconName === 'Zap' && <Zap size={28} />}
                  {feature.iconName === 'Rocket' && <Rocket size={28} />}
                  {feature.iconName === 'Award' && <Award size={28} />}
                  {feature.iconName === 'Brain' && <Brain size={28} />}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/afzalliklar" className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors">
              Barcha afzalliklarni ko'rish <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Programs Preview Section */}
      <section className="programs-section py-24 bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div>
              <div className="flex items-center gap-3 text-primary mb-4">
                <Zap size={18} className="animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.4em] font-display">BIZNING DASTURLAR</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-black text-white leading-tight">
                Kelajak Kasblarini <br />
                <span className="text-primary">Biz Bilan</span> O'rganing
              </h2>
            </div>
            <div>
              <Link to="/dasturlar" className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full transition-all duration-300 font-bold uppercase tracking-widest text-[10px] text-white">
                BARCHA DASTURLAR <ArrowRight size={16} className="text-primary" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROGRAMS.map((program, index) => (
              <div key={program.id} className="program-card group bg-dark-lighter/40 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 h-full flex flex-col shadow-xl">
                <div className="relative h-56 overflow-hidden">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-dark/80 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/10 z-10">
                    {index === 0 && <Cpu size={20} className="text-primary" />}
                    {index === 1 && <Bot size={20} className="text-primary" />}
                    {index === 2 && <Languages size={20} className="text-primary" />}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80"></div>
                </div>
                <div className="p-8 pt-4 flex flex-col flex-grow relative">
                  {/* Badge */}
                  <div className="absolute -top-4 right-6 bg-primary text-black text-[9px] font-bold uppercase px-3 py-1.5 rounded-full">
                    {program.subtitle}
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-3 mt-2">{program.title}</h3>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3">{program.description}</p>

                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <Link to="/dasturlar" className="text-xs font-bold uppercase tracking-widest text-white hover:text-primary transition-colors flex items-center gap-2">
                      Batafsil <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Scroll Section */}
      <TeamCarousel />

      {/* Video Section */}
      <div className="video-section">
        <div className="video-section-anim">
          <VideoShowcase />
        </div>
      </div>

      {/* 5. About Preview Section */}
      <section className="about-section py-20 relative border-y border-white/5 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="about-content">
              <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-3 block">Bizning Missiyamiz</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">O'zbekistonni AI Markaziga Aylantirish</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Bizning maqsadimiz - yoshlarga sun'iy intellekt, robototexnika va xalqaro tillarni o'rgatish orqali ularni global miqyosdagi raqobatbardosh mutaxassislarga aylantirishdir.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-400">
                  <CheckCircle size={20} className="text-primary" />
                  <span>Eng so'nggi o'quv metodikalari</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <CheckCircle size={20} className="text-primary" />
                  <span>Xalqaro sertifikat va diplomlar</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <CheckCircle size={20} className="text-primary" />
                  <span>Koreya universitetida o'qish imkoniyati</span>
                </li>
              </ul>
              <Link to="/biz-haqimizda" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition-colors">
                Batafsil ma'lumot <ArrowRight size={18} />
              </Link>
            </div>
            <div className="about-visual relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team working" className="w-full h-auto opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-dark/90 backdrop-blur-xl border border-white/10 rounded-xl p-6 flex flex-col justify-center shadow-2xl">
                <div className="text-4xl font-black text-primary mb-1">100+</div>
                <div className="text-gray-400 text-sm font-medium">Muvaffaqiyatli Bitiruvchilar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact / Call to Action Section */}
      <section className="cta-section py-24 relative flex items-center justify-center bg-transparent">
        <div className="cta-content relative z-10 max-w-4xl mx-auto px-4 w-full">
          <div className="bg-gradient-to-br from-dark-lighter to-dark border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-[0_0_50px_rgba(0,243,255,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3"></div>

            <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6 relative z-10">
              Siz Ham <span className="text-primary">AI HERO</span> Bo'lishga Tayyormisiz?
            </h2>
            <p className="text-gray-400 mb-10 text-lg relative z-10 max-w-2xl mx-auto">
              Hoziroq ro'yxatdan o'ting va birinchi darsga bepul qatnashing. Kelajagingizni bugun quring!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link to="/aloqa" className="w-full sm:w-auto px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest rounded-lg hover:bg-white transition-all shadow-lg hover:shadow-primary/50">
                Ariza Qoldirish
              </Link>
              <a href="tel:+998901234567" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Phone size={18} /> Qo'ng'iroq Qilish
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
