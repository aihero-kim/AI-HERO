
import React, { useState } from 'react';
import { Play, Youtube, Clock, ExternalLink } from 'lucide-react';

interface Video {
    id: string;
    title: string;
    thumbnail: string;
    duration: string;
    url: string;
}

// Mock Data - moving to constants later if needed, but keeping self-contained for now as it's specific
const VIDEOS: Video[] = [
    {
        id: '1',
        title: "AI HERO: Kelajak Ta'limi Taqdimoti",
        thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
        duration: "2:45",
        url: "https://youtube.com/shorts/r-nq5Y-YsNQ?si=WoIlSBmUy4SboelK"
    },
    {
        id: '2',
        title: "Robototexnika va Sun'iy Intellekt",
        thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600",
        duration: "1:30",
        url: "https://www.youtube.com/embed/videoseries?list=UULCObxlQv9lzSgRXEN9EGUWHA"
    },
    {
        id: '3',
        title: "Koreys Tili va Grantlar",
        thumbnail: "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&q=80&w=600",
        duration: "3:15",
        url: "https://www.youtube.com/embed/videoseries?list=UULCObxlQv9lzSgRXEN9EGUWHA"
    },
    {
        id: '4',
        title: "O'quvchilarimiz Natijalari",
        thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
        duration: "4:20",
        url: "https://www.youtube.com/embed/videoseries?list=UULCObxlQv9lzSgRXEN9EGUWHA"
    }
];

const VideoShowcase: React.FC = () => {
    const [activeVideo, setActiveVideo] = useState<Video>(VIDEOS[0]);

    return (
        <section className="py-20 relative z-10 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <div className="flex items-center gap-2 text-red-500 mb-2">
                            <Youtube size={20} />
                            <span className="text-xs font-bold uppercase tracking-widest font-display">YOUTUBE KANALIMIZ</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Bizni Kuzatib Boring</h2>
                    </div>
                    <a
                        href="https://www.youtube.com/channel/UCObxlQv9lzSgRXEN9EGUWHA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]"
                    >
                        <Youtube size={20} /> Obuna Bo'lish
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Video Player */}
                    <div className="lg:col-span-2">
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,100,255,0.1)] group bg-black">
                            <iframe
                                src={activeVideo.url}
                                title={activeVideo.title}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-2xl font-display font-bold text-white mb-2">{activeVideo.title}</h3>
                            <p className="text-gray-400 text-sm">AI HERO rasmiy kanali. Eng so'nggi yangiliklar, darslar va master-klasslarni o'tkazib yubormang.</p>
                        </div>
                    </div>

                    {/* Video List */}
                    <div className="lg:col-span-1 flex flex-col gap-4 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
                        {VIDEOS.map((video) => (
                            <div
                                key={video.id}
                                onClick={() => setActiveVideo(video)}
                                className={`group p-3 rounded-xl border transition-all cursor-pointer flex gap-4 items-center ${activeVideo.id === video.id
                                    ? 'bg-white/10 border-primary/50 shadow-[0_0_15px_rgba(0,243,255,0.2)]'
                                    : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'
                                    }`}
                            >
                                <div className="relative w-32 aspect-video rounded-lg overflow-hidden flex-shrink-0">
                                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md ${activeVideo.id === video.id ? 'bg-primary text-black' : 'bg-white/20 text-white'}`}>
                                            <Play size={14} fill={activeVideo.id === video.id ? "currentColor" : "white"} />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/80 rounded text-[9px] font-bold text-white flex items-center gap-1">
                                        <Clock size={8} /> {video.duration}
                                    </div>
                                </div>
                                <div>
                                    <h4 className={`text-sm font-bold line-clamp-2 mb-1 ${activeVideo.id === video.id ? 'text-primary' : 'text-gray-200 group-hover:text-white'}`}>
                                        {video.title}
                                    </h4>
                                    <div className="text-[10px] text-gray-500 uppercase tracking-wider font-display">AI HERO</div>
                                </div>
                            </div>
                        ))}

                        <a
                            href="https://www.youtube.com/channel/UCObxlQv9lzSgRXEN9EGUWHA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 w-full py-3 border border-dashed border-white/20 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all text-sm gap-2 sm:hidden"
                        >
                            <ExternalLink size={16} /> Barcha Videolarni Ko'rish
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoShowcase;
