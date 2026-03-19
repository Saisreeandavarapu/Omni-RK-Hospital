import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, HeartPulse, Linkedin, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-medical-600 rounded-lg group-hover:rotate-12 transition-transform">
            <HeartPulse className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="font-heading font-bold text-xl leading-none text-slate-900">Omni RK</h1>
            <p className="text-[10px] uppercase tracking-widest text-medical-600 font-bold">Hospital</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-medical-600 ${
                location.pathname === link.path ? 'text-medical-600' : 'text-slate-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 pl-4 border-l border-slate-200">
            <a href="https://in.linkedin.com/in/rohith-mudadla-37a94a186" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-medical-600 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://www.instagram.com/dr.rohit_mudadla/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-medical-600 transition-colors">
              <Instagram size={18} />
            </a>
          </div>
          <a href="tel:8179189919" className="btn-primary py-2 px-5 text-sm flex items-center gap-2">
            <Phone size={16} />
            <span>Emergency</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-xl px-6 py-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg font-semibold text-slate-900"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:8179189919" className="btn-primary w-full text-center flex items-center justify-center gap-2">
              <Phone size={18} />
              <span>Call Emergency</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
