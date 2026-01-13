import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Cpu, Bot, Languages } from 'lucide-react';

import { Program } from '../types';

interface ProgramCardProps {
    program: Program;
    index: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program, index }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.muted = false;
            videoRef.current.play().catch((error) => {
                console.error("Video play failed:", error);
                // Fallback to muted autoplay if unmuted fails (browser policy)
                if (videoRef.current) {
                    videoRef.current.muted = true;
                    videoRef.current.play().catch(e => console.error("Muted play failed:", e));
                }
            });
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset to start
            videoRef.current.muted = true;
        }
    };

    return (
        <div
            className="program-card group bg-dark-lighter/40 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 h-full flex flex-col shadow-xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative h-56 overflow-hidden">
                {program.image.endsWith('.mp4') ? (
                    <video
                        ref={videoRef}
                        src={program.image}
                        loop
                        muted // Default to muted state
                        playsInline
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    />
                ) : (
                    <img src={program.image} alt={program.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                )}
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
    );
};

export default ProgramCard;
