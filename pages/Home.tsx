
import React, { useLayoutEffect, useRef } from 'react';
import { ArrowRight, Star, Cpu, Rocket, Zap, Video, Award, Brain, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { PROGRAMS, STATS, FEATURES } from '../constants';
import VideoShowcase from '../components/VideoShowcase';
import TeamCarousel from '../components/TeamCarousel';
import ProgramCard from '../components/ProgramCard';
import { SplineScene } from "../components/ui/splite";
import { Spotlight } from "../components/ui/spotlight";
import { AnimatedProfileCard, ProfileCardContent } from '../components/ui/animated-profile-card';

const FeatureIcons: Record<string, React.ElementType> = {
  Zap: Zap,
  Rocket: Rocket,
  Award: Award,
  Brain: Brain
};

const FEATURE_COLORS = ['#06f414', '#bc13fe', '#00f3ff', '#3b82f6'];


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
      <section className="relative pt-24 pb-18 bg-transparent overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
        />
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

            {/* Right Visual Image - 3D Spline */}
            <div className="hero-visual relative order-1 lg:order-2 h-[650px] w-full -mt-20 lg:-mr-20">
              <div className="relative w-full h-full flex items-center justify-center">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 2. Stats Section */}
      < section className="stats-section py-12 relative z-20 bg-transparent border-t border-white/5" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STATS.map((stat, index) => (
              <div key={index} className="stat-item relative p-6 bg-black/40 border border-white/5 rounded-[1.5rem] group hover:bg-white/5 transition-colors text-center shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <div className="text-5xl md:text-6xl font-display font-black text-white/90 mb-2 group-hover:text-primary transition-all">
                  {stat.value}<span className="text-2xl align-top text-primary">{stat.suffix}</span>
                </div>
                <div className="text-primary font-display font-bold uppercase tracking-[0.2em] text-[10px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* 3. Advantages Preview Section */}
      < section className="advantages-section py-20 relative bg-dark/30" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Nega Aynan Biz?</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">AI HERO Afzalliklari</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => {
              const Icon = FeatureIcons[feature.iconName] || Zap;
              return (
                <div key={idx} className="advantage-item">
                  <AnimatedProfileCard
                    accentColor={FEATURE_COLORS[idx % FEATURE_COLORS.length]}
                    onAccentForegroundColor="#000000"
                    onAccentMutedForegroundColor="#333333"
                    baseCard={
                      <ProfileCardContent
                        name={feature.title}
                        location="AFZALLIK"
                        bio={feature.description}
                        avatarSrc={feature.image || ""}
                        avatarFallback={<Icon size={32} strokeWidth={1.5} />}
                        showAvatar={true}
                        className="bg-black/20 border-white/10 hover:shadow-primary/10 transition-shadow"
                      />
                    }
                    overlayCard={
                      <ProfileCardContent
                        name={feature.title}
                        location="AI HERO"
                        bio={feature.description}
                        avatarSrc={feature.image || ""}
                        avatarFallback={<Icon size={32} strokeWidth={1.5} />}
                        showAvatar={true}
                        variant="on-accent"
                        cardStyle={{ backgroundColor: FEATURE_COLORS[idx % FEATURE_COLORS.length] }}
                        titleStyle={{ color: '#000' }}
                        descriptionClassName="text-black/60"
                        bioClassName="text-black/80"
                      />
                    }

                  />
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link to="/afzalliklar" className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors">
              Barcha afzalliklarni ko'rish <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section >

      {/* 4. Programs Preview Section */}
      < section className="programs-section py-24 bg-transparent relative overflow-hidden" >
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
              <ProgramCard key={program.id} program={program} index={index} />
            ))}
          </div>
        </div>
      </section >

      {/* Team Scroll Section */}
      < TeamCarousel />

      {/* Video Section */}
      < div className="video-section" >
        <div className="video-section-anim">
          <VideoShowcase />
        </div>
      </div >

      {/* 5. About Preview Section */}
      <section className="about-section py-24 relative border-y border-white/5 bg-black/20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="about-content w-full lg:w-1/2">

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
            <div className="about-visual w-full lg:w-1/2 relative group perspective-1000">

              <div className="relative w-full aspect-square transition-transform ease-out">

                {/* Neon Glow Effect - Matching Programs.tsx */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary to-blue-600 rounded-3xl opacity-40 blur-lg group-hover:opacity-80 transition duration-1000"></div>

                {/* Video Container */}
                <div
                  className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/40 h-full shadow-2xl hover:shadow-primary/10 transition-shadow"
                  onMouseEnter={() => {
                    const video = document.getElementById('about-video') as HTMLVideoElement;
                    if (video) {
                      video.muted = false;
                      video.play().catch(e => {
                        console.error('Video play failed:', e);
                        // Fallback to muted if unmuted fails
                        video.muted = true;
                        video.play().catch(err => console.error('Muted fallback failed', err));
                      });
                    }
                  }}
                  onMouseLeave={() => {
                    const video = document.getElementById('about-video') as HTMLVideoElement;
                    if (video) {
                      video.pause();
                      video.currentTime = 0;
                      video.muted = true;
                    }
                  }}
                >
                  <video
                    id="about-video"
                    src="/AI leader.mp4"
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-90"></div>

                  {/* Overlay Badge similar to Programs */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 text-white text-xs font-bold uppercase tracking-wider mb-2">
                      <Award size={14} className="text-primary" />
                      Innovatsion Yondashuv
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-dark/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col justify-center shadow-2xl z-20 group-hover:translate-y-2 transition-transform duration-500">
                <div className="text-4xl font-black text-primary mb-1">100+</div>
                <div className="text-gray-400 text-xs font-bold uppercase tracking-wide">Muvaffaqiyatli Bitiruvchilar</div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* 6. Contact / Call to Action Section (Redesigned) */}
      <section className="cta-section py-24 relative overflow-hidden bg-transparent border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left: Visual Content */}
            <div className="cta-visual w-full lg:w-1/2 relative group">
              {/* Neon Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary to-blue-600 rounded-3xl opacity-30 blur-lg group-hover:opacity-50 transition duration-1000"></div>

              <div
                className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/40 aspect-square shadow-2xl hover:shadow-primary/10 transition-shadow"
                onMouseEnter={() => {
                  const video = document.getElementById('cta-video') as HTMLVideoElement;
                  if (video) {
                    video.muted = false;
                    video.play().catch(e => {
                      console.error('Video play failed:', e);
                      // Fallback
                      video.muted = true;
                      video.play().catch(err => console.error('Muted fallback failed', err));
                    });
                  }
                }}
                onMouseLeave={() => {
                  const video = document.getElementById('cta-video') as HTMLVideoElement;
                  if (video) {
                    video.pause();
                    video.currentTime = 0;
                    video.muted = true;
                  }
                }}
              >
                <video
                  id="cta-video"
                  src="/AI HERO.mp4"
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-[58%_50%] opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent"></div>

                {/* Overlay Badge */}
                <div className="absolute top-6 left-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-wider">
                    <Zap size={14} /> Join the community
                  </div>
                </div>
              </div>

              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-primary/20 rounded-[2.5rem] -rotate-1 -z-10 blur-[1px]"></div>
            </div>

            {/* Right: Text Content */}
            <div className="cta-content w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6 font-display">
                Kelajakni Bugun Quring
              </div>

              <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 leading-[1.1] tracking-tight">
                Siz Ham <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 drop-shadow-[0_0_10px_rgba(0,243,255,0.4)]">AI HERO</span> <br />
                Bo'lishga Tayyormisiz?
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                Hoziroq ro'yxatdan o'ting va birinchi darsga bepul qatnashing. Bizning zamonaviy o'quv dasturimiz sizga xalqaro standartlardagi bilimlarni taqdim etadi.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-3 text-gray-400">
                  <CheckCircle size={20} className="text-primary" />
                  <span className="text-sm font-medium">Professional AI Dasturlari</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <CheckCircle size={20} className="text-primary" />
                  <span className="text-sm font-medium">Koreys Tili & Visa Yordami</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <CheckCircle size={20} className="text-primary" />
                  <span className="text-sm font-medium">Amaliy Loyiha & Portfolio</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <CheckCircle size={20} className="text-primary" />
                  <span className="text-sm font-medium">Karyera Markazi Ko'magi</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-5">
                <Link to="/aloqa" className="w-full sm:w-auto group relative inline-flex justify-center items-center gap-3 px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-primary/50">
                  Ariza Qoldirish <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:+998901234567" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  <Phone size={18} /> Aloqa
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div >
  );
};

export default Home;
