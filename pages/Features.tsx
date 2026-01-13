
import React, { useLayoutEffect, useRef } from 'react';
import { Award, Users, TrendingUp, Zap, ShieldCheck, GraduationCap, Brain, Rocket, Globe, Plane, Briefcase, ArrowRight, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FEATURES } from '../constants';
import { AnimatedProfileCard, ProfileCardContent } from '../components/ui/animated-profile-card';

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

const FEATURE_COLORS = ['#06f414', '#bc13fe', '#00f3ff', '#3b82f6'];


const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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
      <div className="relative py-24 overflow-hidden flex items-center justify-center bg-transparent">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => {
              const Icon = Icons[feature.iconName] || Zap;
              return (
                <div key={idx} className="feature-card h-full">
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
                        className="bg-dark-surface border-white/20 h-full"
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
        </div>
      </div>

      {/* Korea Integration Section (Updated Compact Layout) */}
      <div className="korea-section py-24 bg-transparent relative overflow-hidden border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content Side */}
            <div className="korea-content w-full lg:w-[45.8%]">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/50 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6 font-display">
                <Plane size={12} /> GLOBAL IMKONIYATLAR
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 leading-none tracking-tight">
                Janubiy Koreya <br />
                <span className="text-primary drop-shadow-[0_0_15px_rgba(0,243,255,0.4)]">Ta'lim Tizimi</span>
              </h2>

              {/* Description */}
              <p className="text-base text-gray-400 mb-8 leading-relaxed max-w-xl">
                Janubiy Koreyaning eng ilg‘or metodikalari asosida o‘quvchilaringiz uchun <span className="text-primary font-bold">yangi imkoniyatlar eshigini ochamiz.</span> .
              </p>

              {/* Info Cards - Compact Stack */}
              <div className="space-y-4 mb-8 max-w-md">
                {/* TOPIK Card */}
                <div className="flex items-center gap-4 p-4 bg-black/40 border border-white/10 rounded-2xl hover:border-primary/50 transition-all duration-300 group cursor-default shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-primary/10">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/30 transition-all">
                    <Brain size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-0.5 group-hover:text-primary transition-colors">Bizning Falsafamiz: "Yodlash Emas, Hal Qilish"</h4>
                    <p className="text-gray-500 text-xs">Quruq yodlatish emas, balki muammolarni hal qilish va ijodiy fikrlashni uyg‘otuvchi ta’limga e’tibor qaratamiz.</p>
                  </div>
                </div>

                {/* Grants Card */}
                <div className="flex items-center gap-4 p-4 bg-black/40 border border-white/10 rounded-2xl hover:border-primary/50 transition-all duration-300 group cursor-default shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-primary/10">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/30 transition-all">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-0.5 group-hover:text-primary transition-colors">Tezlashtirilgan TOPIK va Grant Imkoniyati</h4>
                    <p className="text-gray-500 text-xs">TOPIK qisqa muddatda va 100% gacha grant yutish imkoniyatini keskin oshiradi.</p>
                  </div>
                </div>
              </div>

              {/* Link */}
              <Link to="/dasturlar" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs hover:text-white transition-colors group pl-2">
                BATAFSIL MA'LUMOT <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Visual Side */}
            <div className="video-column w-full lg:w-[54.2%]">
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

                {/* Video Container */}
                <div
                  className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 bg-black/20 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] hover:shadow-primary/20"
                  onMouseEnter={(e) => {
                    const video = e.currentTarget.querySelector('video');
                    if (video) {
                      video.muted = false;
                      video.play().catch(e => {
                        console.error("Play error:", e);
                        video.muted = true;
                        video.play().catch(() => { });
                      });
                    }
                  }}
                  onMouseLeave={(e) => {
                    const video = e.currentTarget.querySelector('video');
                    if (video) {
                      video.pause();
                      video.currentTime = 0;
                      video.muted = true;
                    }
                  }}
                >
                  <video
                    src="/K_language.mp4"
                    className="w-full h-full object-cover object-[center_80%] grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent"></div>

                  {/* Optional: Floating Badge on Image */}
                  <div className="absolute top-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs font-medium text-white">
                    📍 South Korea
                  </div>
                </div>

                {/* Rotated frame to match visual section */}
                <div className="absolute -inset-4 border border-primary/30 rounded-[2.5rem] -rotate-1 -z-10 blur-[2px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mirrored Korea Section - Video on Left, Text on Right */}
      <div className="korea-section py-24 bg-transparent relative overflow-hidden border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            {/* Text Content Side - Now on Right */}
            <div className="korea-content w-full lg:w-[45.8%]">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/50 bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest mb-6 font-display">
                <Plane size={12} /> GLOBAL IMKONIYATLAR
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 leading-none tracking-tight">
                Janubiy Koreya <br />
                <span className="text-secondary drop-shadow-[0_0_15px_rgba(188,19,254,0.4)]">AI so'nggi tendentsiyalari</span>
              </h2>

              {/* Description */}
              <p className="text-base text-gray-400 mb-8 leading-relaxed max-w-xl">
                Kelajak bozorida <span className="text-secondary font-bold">eng yuqori daromadli mutaxassisga aylaning</span>.
              </p>

              {/* Info Cards - Compact Stack */}
              <div className="space-y-4 mb-8 max-w-md">
                {/* TOPIK Card */}
                <div className="flex items-center gap-4 p-4 bg-black/40 border border-white/10 rounded-2xl hover:border-secondary/50 transition-all duration-300 group cursor-default shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-secondary/10">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary group-hover:scale-110 group-hover:bg-secondary/30 transition-all">
                    <Brain size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-0.5 group-hover:text-secondary transition-colors">Innovatsion AI Ta’limi</h4>
                    <p className="text-gray-500 text-xs">Koreyaning AI sohasidagi so'nggi tendentsiyalari</p>
                  </div>
                </div>

                {/* Grants Card */}
                <div className="flex items-center gap-4 p-4 bg-black/40 border border-white/10 rounded-2xl hover:border-secondary/50 transition-all duration-300 group cursor-default shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-secondary/10">
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary group-hover:scale-110 group-hover:bg-secondary/30 transition-all">
                    <Crown size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-0.5 group-hover:text-secondary transition-colors">AI orqali Davrni Boshqarish</h4>
                    <p className="text-gray-500 text-xs">Ko'p odamlar uchun kunlar talab qiladigan ishni bir necha daqiqada bajaring.</p>
                  </div>
                </div>
              </div>

              {/* Link */}
              <Link to="/dasturlar" className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-xs hover:text-white transition-colors group pl-2">
                BATAFSIL MA'LUMOT <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Visual Side - Now on Left */}
            <div className="video-column w-full lg:w-[54.2%]">
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-purple-500/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

                {/* Video Container */}
                <div
                  className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 bg-black/20 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] hover:shadow-primary/20"
                  onMouseEnter={(e) => {
                    const video = e.currentTarget.querySelector('video');
                    if (video) {
                      video.muted = false;
                      video.play().catch(e => {
                        console.error("Play error:", e);
                        video.muted = true;
                        video.play().catch(() => { });
                      });
                    }
                  }}
                  onMouseLeave={(e) => {
                    const video = e.currentTarget.querySelector('video');
                    if (video) {
                      video.pause();
                      video.currentTime = 0;
                      video.muted = true;
                    }
                  }}
                >
                  <video
                    src="/Feature_AI HERO Dance.mp4"
                    className="w-full h-full object-cover object-[center_80%] grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent"></div>

                  {/* Optional: Floating Badge on Image */}
                  <div className="absolute top-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs font-medium text-white">
                    📍 South Korea
                  </div>
                </div>

                {/* Rotated frame to match visual section */}
                <div className="absolute -inset-4 border border-secondary/30 rounded-[2.5rem] -rotate-1 -z-10 blur-[2px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Section */}
      <div className="py-24 bg-transparent relative overflow-hidden border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="detail-section w-full lg:w-[45.8%]">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                Kelajakni <br />
                <span className="text-primary drop-shadow-[0_0_10px_rgba(0,243,255,0.3)]">Kafolatlang</span>
              </h2>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed font-medium">
                Bizning o'quv dasturimiz shunchaki bilim berish emas, balki o'quvchilarni real bozor talablariga tayyorlash va ularga xalqaro eshiklarni ochishga qaratilgan.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-black/40 rounded-2xl border border-white/20 shadow-xl hover:shadow-primary/10 transition-shadow">
                  <div className="text-4xl font-display font-black text-white mb-2">70%</div>
                  <div className="text-[10px] uppercase tracking-widest text-primary font-bold">Amaliy Mashg'ulotlar</div>
                </div>
                <div className="p-8 bg-black/40 rounded-2xl border border-white/20 shadow-xl hover:shadow-secondary/10 transition-shadow">
                  <div className="text-4xl font-display font-black text-white mb-2">40%</div>
                  <div className="text-[10px] uppercase tracking-widest text-secondary font-bold">O'rtacha yillik O'sish Sur'ati</div>
                </div>
              </div>
            </div>

            <div className="video-column w-full lg:w-[54.2%] relative">
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

                {/* Video Container */}
                <div
                  className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 bg-black/20 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] hover:shadow-primary/20"
                  onMouseEnter={() => {
                    if (videoRef.current) {
                      videoRef.current.muted = false;
                      videoRef.current.play().catch(e => {
                        console.error("Play error:", e);
                        if (videoRef.current) {
                          videoRef.current.muted = true;
                          videoRef.current.play().catch(() => { });
                        }
                      });
                    }
                  }}
                  onMouseLeave={() => {
                    if (videoRef.current) {
                      videoRef.current.pause();
                      videoRef.current.currentTime = 0;
                      videoRef.current.muted = true;
                    }
                  }}
                >
                  <video
                    ref={videoRef}
                    src="/Hifive.mp4"
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-[center_80%] grayscale opacity-50 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent"></div>
                </div>
                <div className="absolute -inset-4 border border-primary/30 rounded-[2.5rem] -rotate-1 -z-10 blur-[2px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
