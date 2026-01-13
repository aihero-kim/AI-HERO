
import React, { useLayoutEffect, useRef } from 'react';
import { Cpu, Bot, Languages, CheckCircle, Zap, Calendar, Clock, Banknote, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { PROGRAMS } from '../constants';
import { OrbitGallery } from '../components/ui/3d-orbit-gallery';

gsap.registerPlugin(ScrollTrigger);

const Icons = {
  Cpu: Cpu,
  Bot: Bot,
  Languages: Languages
};

const Programs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.program-section');
      cards.forEach((card: any) => {
        // Set initial state
        gsap.set(card, { y: 30, opacity: 0 });

        // Animate to visible state
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%", // Triggers when top of element hits 90% viewport height
            toggleActions: "play none none none", // Once visible, stay visible
          },
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          clearProps: "transform" // Clean up transform after animation
        });
      });
    }, containerRef);

    // Force refresh to handle initial layout sizing issues
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;

    gsap.to(card.querySelector('.tilt-content'), {
      rotationX: rotateX,
      rotationY: rotateY,
      duration: 0.4,
      ease: 'power2.out',
      transformPerspective: 1000
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    gsap.to(card.querySelector('.tilt-content'), {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  return (
    <div ref={containerRef} className="py-24 bg-transparent relative overflow-hidden min-h-screen">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/10 rounded-[100%] blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest mb-4">
            <Zap size={14} /> Global Standard
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Bizning <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">O'quv Dasturlarimiz</span>
          </h1>
          <p className="text-xl text-gray-400">
            Maktab o'quvchilari uchun maxsus ishlab chiqilgan, xalqaro bozor talablariga javob beradigan professional kurslar.
          </p>
        </div>

        <div className="space-y-24">
          {PROGRAMS.map((program, index) => {
            const Icon = Icons[program.iconName as keyof typeof Icons];
            const isEven = index % 2 === 0;

            return (
              <div
                key={program.id}
                className={`program-section flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Visual Side - 1:1 Aspect Ratio Frame */}
                <div
                  className="w-full lg:w-5/12 group perspective-1000"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="tilt-content relative w-full aspect-square transition-transform ease-out">
                    <div className={`absolute -inset-1 bg-gradient-to-br ${isEven ? 'from-primary to-blue-600' : 'from-secondary to-purple-600'} rounded-3xl opacity-40 blur-lg group-hover:opacity-80 transition duration-1000`}></div>
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-dark-surface h-full shadow-2xl">
                      {program.image.endsWith('.mp4') ? (
                        <video
                          src={program.image}
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition duration-700"
                          loop
                          muted
                          playsInline
                          ref={(el) => {
                            if (el) {
                              const card = el.closest('.program-section')?.querySelector('.group') as HTMLElement;
                              if (card) {
                                // Remove old listeners to prevent duplicates if ref re-runs
                                // Note: This simple approach doesn't easily remove anonymous functions.
                                // Ideal would be useEffect, but sticking to inline ref style for minimal diff:
                                // We'll just assign `onmouseenter` property if possible, or accept that this is a quick fix.
                                // Actually, standard querySelector might return different element references? No.
                                // Let's just update the logic.

                                card.onmouseenter = () => {
                                  el.muted = false;
                                  el.volume = 0.5; // Set volume to 50% as requested
                                  el.play().catch((e) => {
                                    console.error("Audio play failed, falling back to muted", e);
                                    el.muted = true;
                                    el.play().catch(err => console.error("Muted play failed", err));
                                  });
                                };
                                card.onmouseleave = () => {
                                  el.pause();
                                  el.currentTime = 0;
                                  el.muted = true;
                                };
                              }
                            }
                          }}
                        />
                      ) : (
                        <img
                          src={program.image}
                          alt={program.title}
                          loading="lazy"
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition duration-700"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-90"></div>

                      {/* Tech Stack overlay */}
                      <div className="absolute bottom-0 left-0 w-full p-8 z-10">
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center text-white shadow-xl mb-6">
                          <Icon size={32} className={isEven ? 'text-primary' : 'text-secondary'} />
                        </div>

                        <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-3 drop-shadow-md">O'rganiladigan Vositalar:</h4>
                        <div className="flex flex-wrap gap-2">
                          {program.tools?.map((tool, i) => (
                            <span key={i} className="px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs font-medium text-gray-200 backdrop-blur-md">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info Side */}
                <div className="w-full lg:w-7/12 flex flex-col justify-center">
                  <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                    {program.title}
                  </h3>
                  <p className="text-lg text-secondary font-medium mb-6">{program.subtitle}</p>

                  <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-4 border-white/10 pl-6">
                    {program.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Curriculum */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-colors">
                      <h4 className="font-display font-bold text-white mb-4 flex items-center gap-2">
                        <Sparkles size={18} className="text-primary" />
                        Kurs Tarkibi
                      </h4>
                      <ul className="space-y-3">
                        {program.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className={`flex-shrink-0 mt-0.5 ${isEven ? 'text-primary' : 'text-secondary'}`} size={18} />
                            <span className="text-gray-300 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Schedule & Pricing */}
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-secondary/30 transition-colors flex flex-col justify-between">
                      <div>
                        <h4 className="font-display font-bold text-white mb-4 flex items-center gap-2">
                          <Calendar size={18} className="text-secondary" />
                          Dars Jadvali
                        </h4>
                        <div className="space-y-4">
                          <div className="flex gap-3">
                            <Clock size={16} className="text-gray-500 mt-1" />
                            <div>
                              <span className="block text-white text-sm font-bold">Ekspert (Haftada 3 kun)</span>
                              <span className="text-gray-400 text-xs">{program.schedule?.expert}</span>
                              {program.pricing && <div className="text-primary text-xs mt-1 font-mono">{program.pricing.expert}</div>}
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <Clock size={16} className="text-gray-500 mt-1" />
                            <div>
                              <span className="block text-white text-sm font-bold">Xobbi (Haftada 2 kun)</span>
                              <span className="text-gray-400 text-xs">{program.schedule?.hobby}</span>
                              {program.pricing && <div className="text-primary text-xs mt-1 font-mono">{program.pricing.hobby}</div>}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-gray-500">
                        <Banknote size={14} />
                        <span>Davomiyligi: <span className="text-white">{program.schedule?.duration}</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3D Orbit Gallery Animation Section */}
        <div className="mt-12 w-full overflow-hidden">
          <OrbitGallery />
        </div>
      </div>
    </div>
  );
};

export default Programs;
