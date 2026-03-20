import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, HeartPulse, Linkedin, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Facebook SVG Icon
const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

// Twitter / X SVG Icon
const TwitterIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { href: 'https://in.linkedin.com/in/rohith-mudadla-37a94a186', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://www.instagram.com/dr.rohit_mudadla/', icon: Instagram, label: 'Instagram' },
    { href: 'https://www.facebook.com/', icon: FacebookIcon, label: 'Facebook', isSvg: true },
    { href: 'https://twitter.com/', icon: TwitterIcon, label: 'Twitter', isSvg: true },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-nav py-2 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-gradient-to-b from-navy-950/80 to-transparent py-5 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative p-2 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300"
               style={{ background: 'linear-gradient(135deg, #0090e8, #005799)', boxShadow: '0 4px 16px rgba(0,144,232,0.4)' }}>
            <HeartPulse className="text-white w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h1 className="font-heading font-bold text-lg sm:text-xl leading-none text-white">Omni RK</h1>
            <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: '#f5bc00' }}>Hospital</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-all duration-300 relative group ${
                location.pathname === link.path
                  ? 'text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 ${
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}

          <div className="flex items-center gap-3 pl-4 border-l border-white/10">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-white/40 hover:text-gold-400 transition-colors duration-300"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>

          <a
            href="tel:8179189919"
            className="btn-gold flex items-center gap-2 py-2 px-4 text-xs font-bold animate-pulse-gold"
          >
            <Phone size={14} />
            <span className="hidden lg:inline">Emergency Call</span>
            <span className="lg:hidden">Call</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white/80 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full px-5 py-6 flex flex-col gap-4"
            style={{
              background: 'rgba(8,12,56,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(245,188,0,0.15)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-semibold transition-colors py-1 ${
                  location.pathname === link.path ? 'text-gold-400' : 'text-white/80 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center gap-3 pt-3 border-t border-white/10">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-full text-white/50 hover:text-gold-400 hover:bg-gold-400/10 transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            <a
              href="tel:8179189919"
              className="btn-gold w-full py-3 text-sm font-bold flex items-center justify-center gap-2 mt-1"
            >
              <Phone size={16} />
              <span>Call Emergency: +91 81791 89919</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

