import React, { useState, useEffect, useRef } from 'react';
import { Bot, Megaphone, Database, Video, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Data for the feature cards ---
const features = [
    {
        title: "AI Avtomatlashtirish",
        description: "Ma'lumotlarni kiritish, hisobotlarni tayyorlash va email xabarlariga javob berish kabi takrorlanuvchi vazifalarni AIga topshirish.",
        result: "Vaqtni 80% gacha tejash",
        icon: Bot,
        imageUrl: "/About_1.mp4",
        bgColor: "bg-primary/20",
        borderColor: "border-primary/50",
        glowColor: "shadow-primary/20"
    },
    {
        title: "AI Marketing Kontent",
        description: "Kompaniya brendiga mos keladigan press-relizlar, ijtimoiy tarmoqlar uchun postlar va reklama matnlarini AI yordamida professional yaratish.",
        result: "Brandingni mustahkamlash",
        icon: Megaphone,
        imageUrl: "/About_2.mp4",
        bgColor: "bg-accent/20",
        borderColor: "border-accent/50",
        glowColor: "shadow-accent/20"
    },
    {
        title: "Ichki Bilimlar Bazasi",
        description: "Kompaniya hujjatlarini o'rgangan maxsus AI chatbotini yaratish. Yangi xodimlar uchun onboarding va ma'lumot qidirishni tezlashtiradi.",
        result: "Xodimlar samaradorligi oshishi",
        icon: Database,
        imageUrl: "/About_3.mp4",
        bgColor: "bg-secondary/20",
        borderColor: "border-secondary/50",
        glowColor: "shadow-secondary/20"
    },
    {
        title: "AI Korporativ Video",
        description: "Video suratga olish xarajatlarisiz, AI personajlari va ovozlari orqali yuqori sifatli taqdimot va mahsulot videolarini tayyorlash.",
        result: "Xarajatlarni qisqartirish",
        icon: Video,
        imageUrl: "/About_4.mp4",
        bgColor: "bg-blue-500/20",
        borderColor: "border-blue-500/50",
        glowColor: "shadow-blue-500/20"
    },
];

// --- Custom Hook for Scroll Animation ---
const useScrollAnimation = () => {
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            {
                threshold: 0.1,
            }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return [ref, inView] as const;
};

// --- Header Component ---
const AnimatedHeader = () => {
    const [headerRef, headerInView] = useScrollAnimation();
    const [pRef, pInView] = useScrollAnimation();

    return (
        <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6 font-display">
                Enterprise Solutions
            </div>
            <h2
                ref={headerRef}
                className={cn(
                    "text-4xl md:text-5xl font-display font-bold text-white transition-all duration-700 ease-out",
                    headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                )}
            >
                KORXONALAR UCHUN <br /><span className="text-primary text-glow">AI TAKLIFLARI</span>
            </h2>
            <p
                ref={pRef}
                className={cn(
                    "text-lg text-gray-400 mt-6 transition-all duration-700 ease-out delay-200 leading-relaxed",
                    pInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                )}
            >
                "Murakkab jarayonlarni AIga ishoning, jamoangiz esa faqat muhim <br className="hidden md:block" /> va kreativ g'oyalarga e'tibor qaratsin."
            </p>
        </div>
    );
};

export function StickyFeatureSection() {
    return (
        <div className="bg-transparent font-sans pt-0 pb-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedHeader />

                <div className="relative space-y-20">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={cn(
                                "sticky w-full grid grid-cols-1 lg:grid-cols-2 gap-12 p-6 md:p-10 rounded-[3rem] border backdrop-blur-xl transition-all duration-500",
                                "bg-dark-surface/90",
                                feature.borderColor,
                                "shadow-2xl",
                                feature.glowColor
                            )}
                            style={{
                                zIndex: index + 10,
                                top: `${80 + index * 40}px`,
                                marginTop: index === 0 ? 0 : '2rem'
                            }}
                            onMouseEnter={() => {
                                const video = document.getElementById(`feature-video-${index}`) as HTMLVideoElement;
                                if (video) {
                                    video.muted = false;
                                    video.play().catch(e => {
                                        console.error('Video play failed:', e);
                                        video.muted = true;
                                        video.play().catch(err => console.error('Muted fallback failed:', err));
                                    });
                                }
                            }}
                            onMouseLeave={() => {
                                const video = document.getElementById(`feature-video-${index}`) as HTMLVideoElement;
                                if (video) {
                                    video.pause();
                                    video.currentTime = 0;
                                    video.muted = true;
                                }
                            }}
                        >
                            {/* Card Content */}
                            <div className="flex flex-col justify-center">
                                <div className={cn("w-16 h-9 rounded-2xl flex items-center justify-center mb-4 border transition-transform group-hover:scale-110", feature.bgColor, feature.borderColor)}>
                                    <feature.icon size={28} className={cn(
                                        feature.title.includes("Marketing") ? "text-accent" :
                                            feature.title.includes("Bilimlar") ? "text-secondary" :
                                                feature.title.includes("Video") ? "text-blue-400" : "text-primary"
                                    )} />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300 text-base leading-relaxed mb-4">
                                    {feature.description}
                                </p>
                                <div className="pt-6 border-t border-white/5">
                                    <p className={cn(
                                        "font-bold flex items-center gap-3",
                                        feature.title.includes("Marketing") ? "text-accent" :
                                            feature.title.includes("Bilimlar") ? "text-secondary" :
                                                feature.title.includes("Video") ? "text-blue-400" : "text-primary"
                                    )}>
                                        <Check size={20} /> Natija: {feature.result}
                                    </p>
                                </div>
                            </div>
                            {/* Card Media (Video or Image) */}
                            <div className="relative rounded-2xl overflow-hidden aspect-video">
                                {feature.imageUrl.endsWith('.mp4') ? (
                                    <video
                                        id={`feature-video-${index}`}
                                        src={feature.imageUrl}
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                    />
                                ) : (
                                    <img
                                        src={feature.imageUrl}
                                        alt={feature.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
