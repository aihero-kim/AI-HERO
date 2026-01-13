import React, { useLayoutEffect, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { TESTIMONIALS, TEAM } from '../constants';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ContactForm from '../components/ContactForm';
import SphereImageGrid, { ImageData } from '../components/ui/img-sphere';

import { TestimonialSlider, type Review } from '../components/ui/testimonial-slider-1';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Map existing TESTIMONIALS to the Review format for the slider
  const mappedReviews: Review[] = TESTIMONIALS.map((t) => ({
    id: t.id,
    name: t.name,
    affiliation: t.role,
    quote: t.content,
    imageSrc: t.image,
    thumbnailSrc: t.image, // Using same image for thumbnail as in original data
  }));

  // Animation for Testimonials (Slider container)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".slider-container", {
        scrollTrigger: {
          trigger: ".slider-container",
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-transparent min-h-screen">

      {/* SECTION 1: Interactive 3D Sphere Animation (AI HERO OILASIGA QO'SHILING!) */}
      <div className="pt-24 pb-12 bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6 font-display">
              Interaktiv Jamoa
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
              AI HERO <span className="text-primary">OILASIGA QO'SHILING!</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              3D sfera - aylantirib ko'ring va har bir oila a'zolari bilan yaqindan tanishing
            </p>
          </div>

          <div className="flex justify-center items-center">
            <SphereImageGrid
              images={(() => {
                // 1. AI HERO Employees (Fixed)
                const TEAM_MEMBERS = [
                  { id: 'cc1', src: '/AH_01_Profkim.png', alt: 'Prof. Kim', title: 'Prof. Kim', description: 'General Director - AI HERO Jamoasi' },
                  { id: 'cc2', src: '/AH_02_Profhwang.png', alt: 'Prof. Hwang', title: 'Prof. Hwang', description: 'Senior Korean Instructor - AI HERO Jamoasi' },
                  { id: 'cc3', src: '/AH_03_Diyor.png', alt: 'Diyor', title: 'Diyor', description: 'Robototexnika Director - AI HERO Jamoasi' },
                  { id: 'cc4', src: '/AH_04_Muhammad.png', alt: 'Muhammad', title: 'Muhammad', description: 'Full-Stack AI Developer - AI HERO Jamoasi' },
                  { id: 'cc5', src: '/AH_05_Sevara.png', alt: 'Sevara', title: 'Sevara', description: 'AI Image & Video Instructor - AI HERO Jamoasi' },
                  { id: 'cc6', src: '/AH_06_Nodir.png', alt: 'Nodirbek', title: 'Nodirbek', description: 'AI Image & Video Instructor - AI HERO Jamoasi' },
                  { id: 'cc7', src: '/AH_07_Mirolim.png', alt: 'Mirolim', title: 'Mirolim', description: 'Senior Korean Instructor - AI HERO Jamoasi' },
                  { id: 'cc8', src: '/AH_08_Nargiza.png', alt: 'Nargiza', title: 'Nargiza', description: 'Senior Korean Instructor - AI HERO Jamoasi' },
                  { id: 'cc9', src: '/AH_09_Sevinchi.png', alt: 'Sevinchi', title: 'Sevinchi', description: 'O\'quv Ishlari Menejeri - AI HERO Jamoasi' },
                ];

                // 2. Specific Community Members (Fixed)
                const SPECIFIC_MEMBERS = [
                  { id: 'cc10', src: '/3DS_10_Sherzod.png', alt: 'Sherzod Sodiqov', title: 'Sherzod Sodiqov', description: 'Mehmon - AI HERO Oila A\'zosi' },
                  { id: 'cc11', src: '/3DS_11_Gulnoza.png', alt: 'Gulnoza Umarov', title: 'Gulnoza Umarov', description: 'Talaba - AI HERO Oila A\'zosi' },
                  { id: 'cc12', src: '/3DS_12_Sherzod.png', alt: 'Sherzod Rustamov', title: 'Sherzod Rustamov', description: 'Talaba - AI HERO Oila A\'zosi' },
                  { id: 'cc13', src: '/3DS_13_Farrukh.png', alt: 'Farrukh Tursunov', title: 'Farrukh Tursunov', description: 'Mutaxassis - AI HERO Oila A\'zosi' },
                  { id: 'cc14', src: '/3DS_14_Otabek.png', alt: 'Otabek Umarov', title: 'Otabek Umarov', description: 'Talaba - AI HERO Oila A\'zosi' },
                  { id: 'cc15', src: '/3DS_15_Dildora.png', alt: 'Dildora Yusupova', title: 'Dildora Yusupova', description: 'O\'qituvchi - AI HERO Oila A\'zosi' },
                  { id: 'cc16', src: '/3DS_16_Nigora.png', alt: 'Nigora Karimov', title: 'Nigora Karimov', description: 'O\'qituvchi - AI HERO Oila A\'zosi' },
                  { id: 'cc17', src: '/3DS_17_Sardor.png', alt: 'Sardor Saidov', title: 'Sardor Saidov', description: 'Hamkor - AI HERO Oila A\'zosi' },
                  { id: 'cc18', src: '/3DS_18_Kamola.png', alt: 'Kamola Rahimova', title: 'Kamola Rahimova', description: 'Talaba - AI HERO Oila A\'zosi' },
                  { id: 'cc19', src: '/3DS_19_Malika.png', alt: 'Malika Aliyeva', title: 'Malika Aliyeva', description: 'Talaba - AI HERO Oila A\'zosi' },
                  { id: 'cc20', src: '/3DS_20_Azizbek.png', alt: 'Azizbek Abdullayev', title: 'Azizbek Abdullayev', description: 'Talaba - AI HERO Oila A\'zosi' },
                  { id: 'cc21', src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80', alt: 'Barno Rustamov', title: 'Barno Rustamov', description: 'Talaba - AI HERO Oila A\'zosi' },
                ];

                // 3. Additional Fixed Members to reach 50
                const FILLER_MEMBERS = [
                  { id: 'cc22', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80', alt: 'Javohir Ahmedov', title: 'Javohir Ahmedov', description: 'Talaba - AI HERO Oila A\'zosi' },
                  { id: 'cc23', src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80', alt: 'Bobur Mirzayev', title: 'Bobur Mirzayev', description: 'Talaba - AI HERO Oila A\'zosi' },
                  { id: 'cc24', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80', alt: 'Laylo Karimova', title: 'Laylo Karimova', description: 'Talaba - AI HERO Oila A\'zosi' },
                  { id: 'cc25', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80', alt: 'Zarina Tursunova', title: 'Zarina Tursunova', description: 'Talaba - AI HERO Oila A\'zosi' },
                  { id: 'cc26', src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80', alt: 'Akmal Sodiqov', title: 'Akmal Sodiqov', description: 'Talaba - AI HERO Oila A\'zosi' },
                  { id: 'cc27', src: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&q=80', alt: 'Dilnoza Ismoilova', title: 'Dilnoza Ismoilova', description: 'Talaba - AI HERO Oila A\'zosi' },
                  { id: 'cc28', src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80', alt: 'Shahlo Azimova', title: 'Shahlo Azimova', description: 'Talaba - AI HERO Oila A\'zosi' },
                  { id: 'cc29', src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80', alt: 'Jamshid Rahimov', title: 'Jamshid Rahimov', description: 'Talaba - AI HERO Oila A\'zosi' },
                  { id: 'cc30', src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80', alt: 'Madina Usmonova', title: 'Madina Usmonova', description: 'Talaba - AI HERO Oila A\'zosi' },
                  { id: 'cc31', src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80', alt: 'Rustam Aliyev', title: 'Rustam Aliyev', description: 'Talaba - AI HERO Oila A\'zosi' },
                  { id: 'cc32', src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80', alt: 'Bekzod Nurmatov', title: 'Bekzod Nurmatov', description: 'Talaba - AI HERO Oila A\'zosi' },
                  { id: 'cc33', src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80', alt: 'Guli Haydarova', title: 'Guli Haydarova', description: 'Koreys Tili O\'quvchisi' },
                  { id: 'cc34', src: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=300&q=80', alt: 'Sanjar Po\'latov', title: 'Sanjar Po\'latov', description: 'Robototexnika O\'quvchisi' },
                  { id: 'cc35', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80', alt: 'Olimjon Valiyev', title: 'Olimjon Valiyev', description: 'Applied AI Talabasi' },
                  { id: 'cc36', src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80', alt: 'Doniyor Qodirov', title: 'Doniyor Qodirov', description: 'Hamkor - Maktab Direktori' },
                  { id: 'cc37', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80', alt: 'Ra\'no Zokirova', title: 'Ra\'no Zokirova', description: 'Ota-ona' },
                  { id: 'cc38', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80', alt: 'Sevara Toshmatova', title: 'Sevara Toshmatova', description: 'Talaba' },
                  { id: 'cc39', src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80', alt: 'Botir Ergashev', title: 'Botir Ergashev', description: 'Hamkor' },
                  { id: 'cc40', src: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&q=80', alt: 'Feruza Salimova', title: 'Feruza Salimova', description: 'Ota-ona' },
                  { id: 'cc41', src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80', alt: 'Mohira G\'aniyeva', title: 'Mohira G\'aniyeva', description: 'Koreys Tili O\'quvchisi' },
                  { id: 'cc42', src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80', alt: 'Dilshod Normatov', title: 'Dilshod Normatov', description: 'Robototexnika O\'quvchisi' },
                  { id: 'cc43', src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80', alt: 'Iroda Xolmurodova', title: 'Iroda Xolmurodova', description: 'Applied AI Talabasi' },
                  { id: 'cc44', src: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=300&q=80', alt: 'Nodir Yuldashev', title: 'Nodir Yuldashev', description: 'Talaba' },
                  { id: 'cc45', src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80', alt: 'Shokir Rasulov', title: 'Shokir Rasulov', description: 'Talaba' },
                  { id: 'cc46', src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80', alt: 'Umida Oripova', title: 'Umida Oripova', description: 'Talaba' },
                  { id: 'cc47', src: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=300&q=80', alt: 'Islom Karimov', title: 'Islom Karimov', description: 'Talaba' },
                  { id: 'cc48', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80', alt: 'Ulug\'bek Fayziyev', title: 'Ulug\'bek Fayziyev', description: 'Talaba' },
                  { id: 'cc49', src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80', alt: 'Akbar Jalolov', title: 'Akbar Jalolov', description: 'Talaba' },
                  { id: 'cc50', src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80', alt: 'Zulayho Nabiyeva', title: 'Zulayho Nabiyeva', description: 'Talaba' },
                ];

                return [...TEAM_MEMBERS, ...SPECIFIC_MEMBERS, ...FILLER_MEMBERS];
              })()}
              containerSize={800}
              sphereRadius={400}
              dragSensitivity={0.8}
              momentumDecay={0.96}
              maxRotationSpeed={6}
              baseImageScale={0.12}
              hoverScale={1.3}
              perspective={1000}
              autoRotate={true}
              autoRotateSpeed={0.05}
            />
          </div>
        </div>
      </div>

      {/* SECTION 2: Testimonials / User Reviews (MIJOZLAR FIKRLARI) */}
      <div className="py-16 border-t border-white/10 relative overflow-hidden slider-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 uppercase tracking-tight">
              MIJOZLAR <span className="text-primary">FIKRLARI</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(0,243,255,0.8)]"></div>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
            <TestimonialSlider reviews={mappedReviews} />
          </div>
        </div>
      </div>


      {/* SECTION 3: Contact Main Section (BIZ BILAN BOG'LANING) */}
      <div className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-tight">
              BIZ BILAN <span className="text-primary text-glow">BOG'LANING</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Maktabingizda kelajak ta'limini yo'lga qo'yish uchun birinchi qadamni tashlang.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

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
