
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Github, Linkedin, Instagram, ArrowLeft, ArrowRight } from 'lucide-react';
import { TEAM } from '../constants';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TeamCarousel: React.FC = () => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <section className="py-20 relative z-10 bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-3 block">Bizning Jamoa</span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Mutaxassislarimiz</h2>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Custom Navigation Buttons */}
                        <div className="flex items-center gap-3">
                            <button
                                ref={prevRef}
                                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group active:scale-95"
                                aria-label="Previous slide"
                            >
                                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button
                                ref={nextRef}
                                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group active:scale-95"
                                aria-label="Next slide"
                            >
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <Link to="/biz-haqimizda" className="hidden md:flex group items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium ml-4">
                            Barcha mutaxassislar <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Carousel */}
                <div className="team-carousel-wrapper">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        speed={1000} // Smoother transition
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            // @ts-ignore
                            swiper.params.navigation.prevEl = prevRef.current;
                            // @ts-ignore
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        className="pb-16"
                    >
                        {TEAM.map((member) => (
                            <SwiperSlide key={member.id}>
                                <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 h-full select-none">
                                    {/* Image Container */}
                                    <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 border-2 border-transparent group-hover:border-primary/50 transition-all duration-500 shadow-[0_0_0_rgba(0,243,255,0)] group-hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Overlay Socials */}
                                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 cursor-pointer">
                                            <span className="p-3 bg-white/10 rounded-full hover:bg-primary hover:text-black text-white transition-all transform hover:scale-110 hover:shadow-[0_0_15px_rgba(0,243,255,0.6)]">
                                                <Linkedin size={20} />
                                            </span>
                                            <span className="p-3 bg-white/10 rounded-full hover:bg-pink-500 hover:text-white text-white transition-all transform hover:scale-110 hover:shadow-[0_0_15px_rgba(236,72,153,0.6)]">
                                                <Instagram size={20} />
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="text-center relative z-10">
                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                                        <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-3 group-hover:text-gray-300 transition-colors">{member.role}</p>
                                        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-bold border border-primary/20 group-hover:bg-primary/20 transition-colors">
                                            {member.specialty}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="md:hidden text-center mt-4">
                    <Link to="/biz-haqimizda" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium">
                        Barcha mutaxassislar <ArrowRight size={18} />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default TeamCarousel;
