
import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Send, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import ParticleBackground from './ParticleBackground';
import CustomCursor from './CustomCursor';
import FloatingTeam from './FloatingTeam';

// Updated Logo to use the uploaded image
// Note: Ensure your image file is named 'logo.png' and placed in the public/root directory
const Logo = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <img
    src="/logo.png"
    alt="AI HERO"
    className={`object-contain ${className}`}
    style={{ width: size, height: size }}
  />
);

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-gray-200 selection:bg-primary selection:text-black relative">
      <ParticleBackground />
      <CustomCursor />
      <FloatingTeam />

      {/* Sticky Header */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 border-b ${scrolled
            ? 'bg-dark/80 backdrop-blur-md border-white/10 py-3'
            : 'bg-transparent border-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo - Reduced Size by ~30% as requested previously */}
            <NavLink to="/" className="flex items-center gap-3 group relative hover-trigger">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/40 blur-xl rounded-full group-hover:bg-primary/60 transition-all"></div>
                <Logo size={80} className="relative z-10 drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]" />
              </div>
              <span className="text-lg font-display font-bold tracking-wider text-white">
                AI <span className="text-primary drop-shadow-[0_0_5px_rgba(0,243,255,0.8)]">HERO</span>
              </span>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-sm px-4 py-1 rounded-full border border-white/10">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full hover-trigger ${isActive
                      ? 'text-black bg-primary font-bold shadow-[0_0_15px_rgba(0,243,255,0.5)]'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:block">
              <NavLink
                to="/aloqa"
                className="relative group px-6 py-2.5 overflow-hidden rounded-lg bg-transparent border border-primary text-primary font-display font-semibold transition-all hover-trigger"
              >
                <span className="absolute inset-0 w-0 bg-primary transition-all duration-[250ms] ease-out group-hover:w-full"></span>
                <span className="relative group-hover:text-black transition-colors">Hamkorlik</span>
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-primary transition-colors p-2"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-dark/95 backdrop-blur-xl border-b border-white/10 shadow-2xl animate-in slide-in-from-top-5">
            <div className="px-4 py-6 space-y-2">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-base font-medium transition-all ${isActive
                      ? 'bg-primary/20 text-primary border border-primary/30'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-4 mt-4 border-t border-white/10">
                <NavLink
                  to="/aloqa"
                  className="block w-full text-center bg-primary text-black px-4 py-3 rounded-lg font-bold shadow-[0_0_20px_rgba(0,243,255,0.3)]"
                >
                  Hamkorlik qilish
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16 relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-dark-surface/90 backdrop-blur-md border-t border-white/10 pt-20 pb-10 relative overflow-hidden z-10">
        {/* Footer Glow */}
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Logo size={40} />
                <span className="text-2xl font-display font-bold text-white">AI HERO</span>
              </div>
              <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
                Biz O'zbekiston yoshlariga sun'iy intellekt va zamonaviy texnologiyalar olamini ochib beramiz.
                Kelajak <span className="text-primary">hozir</span> boshlanadi.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://t.me/+6pQskAYCZN8wYzYy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 hover-trigger hover:scale-110"
                >
                  <Send size={18} />
                </a>
                <a
                  href="https://www.instagram.com/aihero.uz/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300 hover-trigger hover:scale-110"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCObxlQv9lzSgRXEN9EGUWHA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 hover-trigger hover:scale-110"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-display font-semibold mb-6 text-white inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-primary">Sahifalar</h3>
              <ul className="space-y-4">
                {NAV_ITEMS.map((item) => (
                  <li key={item.path}>
                    <NavLink to={item.path} className="text-gray-400 hover:text-primary transition-colors hover:translate-x-1 duration-300 block hover-trigger">
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-display font-semibold mb-6 text-white inline-block relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-secondary">Bog'lanish</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400 group">
                  <MapPin className="mt-1 flex-shrink-0 text-primary group-hover:text-secondary transition-colors" size={18} />
                  <span>Toshkent sh, Yuqori Chirchiq rumani, Yangibozor shaharchasi, AKITA University 204-xona</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 group">
                  <Phone className="flex-shrink-0 text-primary group-hover:text-secondary transition-colors" size={18} />
                  <a href="tel:+998901234567" className="hover:text-white transition-colors hover-trigger">+998 90 123 45 67</a>
                </li>
                <li className="flex items-center gap-3 text-gray-400 group">
                  <Mail className="flex-shrink-0 text-primary group-hover:text-secondary transition-colors" size={18} />
                  <a href="mailto:info@aihero.uz" className="hover:text-white transition-colors hover-trigger">aihero.uz@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} AI HERO. Barcha huquqlar himoyalangan.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-primary transition-colors hover-trigger">Maxfiylik Siyosati</a>
              <a href="#" className="hover:text-primary transition-colors hover-trigger">Foydalanish Shartlari</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
