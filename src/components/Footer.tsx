import { Phone, Mail, MapPin, Instagram, Linkedin, HeartPulse, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const Footer = () => {
  const socialLinks = [
    { href: 'https://in.linkedin.com/in/rohith-mudadla-37a94a186', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://www.instagram.com/dr.rohit_mudadla/', icon: Instagram, label: 'Instagram' },
    { href: 'https://www.facebook.com/', icon: FacebookIcon, label: 'Facebook' },
    { href: 'https://twitter.com/', icon: TwitterIcon, label: 'Twitter' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Dr. Rohit', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const services = [
    'Laparoscopic Surgery',
    'GI Oncology',
    'Liver & Pancreas Surgery',
    'Colorectal Surgery',
    'Hernia Repair',
  ];

  return (
    <footer style={{ background: 'linear-gradient(160deg, #080c38 0%, #0e1763 50%, #080c38 100%)' }}>
      {/* Gold divider top */}
      <div className="divider-gold opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-14">

          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl" style={{ background: 'linear-gradient(135deg, #0090e8, #005799)', boxShadow: '0 4px 16px rgba(0,144,232,0.3)' }}>
                <HeartPulse size={22} className="text-white" />
              </div>
              <div>
                <h2 className="text-white font-heading font-bold text-xl leading-none">Omni RK</h2>
                <p className="text-[10px] uppercase tracking-widest font-bold mt-0.5" style={{ color: '#f5bc00' }}>Hospital</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-7 max-w-xs">
              Leading surgical gastroenterology center providing advanced minimally invasive treatments and compassionate patient care.
            </p>
            <div className="flex gap-2 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-xl text-white/40 transition-all duration-300 hover:text-gold-400"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(245,188,0,0.12)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,188,0,0.3)';
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  }}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold mb-6 text-sm uppercase tracking-widest">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/50 text-sm hover:text-gold-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={13} className="text-gold-500/0 group-hover:text-gold-500 transition-colors -ml-4 group-hover:ml-0" style={{ transitionProperty: 'all' }} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-bold mb-6 text-sm uppercase tracking-widest">Our Services</h3>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s} className="text-white/50 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full shrink-0" style={{ background: '#f5bc00' }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-bold mb-6 text-sm uppercase tracking-widest">Contact Info</h3>
            <ul className="flex flex-col gap-5">
              <li className="flex gap-3">
                <div className="p-2 rounded-lg shrink-0 mt-0.5" style={{ background: 'rgba(0,144,232,0.15)' }}>
                  <MapPin size={15} style={{ color: '#22b0ff' }} />
                </div>
                <span className="text-white/50 text-sm leading-relaxed">Omni RK Hospital, Ram Nagar,<br />Visakhapatnam 530002</span>
              </li>
              <li className="flex gap-3">
                <div className="p-2 rounded-lg shrink-0" style={{ background: 'rgba(0,144,232,0.15)' }}>
                  <Phone size={15} style={{ color: '#22b0ff' }} />
                </div>
                <a href="tel:8179189919" className="text-white/50 text-sm hover:text-gold-400 transition-colors self-center">
                  +91 81791 89919
                </a>
              </li>
              <li className="flex gap-3">
                <div className="p-2 rounded-lg shrink-0" style={{ background: 'rgba(0,144,232,0.15)' }}>
                  <Mail size={15} style={{ color: '#22b0ff' }} />
                </div>
                <a href="mailto:info@omnirkhospital.com" className="text-white/50 text-sm hover:text-gold-400 transition-colors self-center break-all">
                  info@omnirkhospital.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Gold divider */}
        <div className="divider-gold opacity-20 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30 uppercase tracking-widest">
          <span>© 2024 Omni RK Hospital. All Rights Reserved.</span>
          <span>Designed for Excellence in Healthcare</span>
        </div>
      </div>
    </footer>
  );
};
