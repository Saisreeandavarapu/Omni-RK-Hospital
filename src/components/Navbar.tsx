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

  const socialLinks = [
    { href: 'https://in.linkedin.com/in/rohith-mudadla-37a94a186', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://www.instagram.com/dr.rohit_mudadla/', icon: Instagram, label: 'Instagram' },
    { href: 'https://www.facebook.com/', icon: FacebookIcon, label: 'Facebook', isSvg: true },
    { href: 'https://twitter.com/', icon: TwitterIcon, label: 'Twitter', isSvg: true },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-medical-600 rounded-lg group-hover:rotate-12 transition-transform">
            <HeartPulse className="text-white w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h1 className="font-heading font-bold text-lg sm:text-xl leading-none text-slate-900">Omni RK</h1>
            <p className="text-[10px] uppercase tracking-widest text-medical-600 font-bold">Hospital</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
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
          <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-slate-400 hover:text-medical-600 transition-colors"
              >
                {social.isSvg ? (
                  <social.icon size={18} />
                ) : (
                  <social.icon size={18} />
                )}
              </a>
            ))}
          </div>
          <a href="tel:8179189919" className="btn-primary py-2 px-4 lg:px-5 text-sm flex items-center gap-2">
            <Phone size={16} />
            <span className="hidden lg:inline">Emergency</span>
            <span className="lg:hidden">Call</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900 p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-xl px-6 py-6 flex flex-col gap-5"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-semibold transition-colors ${
                  location.pathname === link.path ? 'text-medical-600' : 'text-slate-900'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Social icons in mobile menu */}
            <div className="flex items-center gap-4 pt-2 border-t border-slate-100">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-medical-100 hover:text-medical-600 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            <a href="tel:8179189919" className="btn-primary w-full text-center flex items-center justify-center gap-2 mt-1">
              <Phone size={18} />
              <span>Call Emergency</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
