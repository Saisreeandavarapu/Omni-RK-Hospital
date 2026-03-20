import { Phone, Mail, MapPin, Instagram, Linkedin, HeartPulse } from 'lucide-react';

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

export const Footer = () => {
  const socialLinks = [
    { href: 'https://in.linkedin.com/in/rohith-mudadla-37a94a186', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://www.instagram.com/dr.rohit_mudadla/', icon: Instagram, label: 'Instagram' },
    { href: 'https://www.facebook.com/', icon: FacebookIcon, label: 'Facebook', isSvg: true },
    { href: 'https://twitter.com/', icon: TwitterIcon, label: 'Twitter', isSvg: true },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 sm:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-medical-500 rounded-lg text-white">
              <HeartPulse size={24} />
            </div>
            <h2 className="text-white font-heading font-bold text-2xl">Omni RK</h2>
          </div>
          <p className="text-sm leading-relaxed mb-6 max-w-xs">
            Leading surgical gastroenterology center providing advanced minimally invasive treatments and compassionate patient care.
          </p>
          <div className="flex gap-3 flex-wrap">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 bg-slate-800 rounded-full hover:bg-medical-600 transition-colors text-white"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-5 sm:mb-6">Quick Links</h3>
          <ul className="flex flex-col gap-3 sm:gap-4 text-sm">
            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-white transition-colors">About Dr. Rohit</a></li>
            <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-5 sm:mb-6">Our Services</h3>
          <ul className="flex flex-col gap-3 sm:gap-4 text-sm">
            <li>Laparoscopic Surgery</li>
            <li>GI Oncology</li>
            <li>Liver &amp; Pancreas Surgery</li>
            <li>Colorectal Surgery</li>
            <li>Hernia Repair</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-5 sm:mb-6">Contact Info</h3>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-medical-500 shrink-0 mt-0.5" />
              <span>Omni RK Hospital, Ram Nagar, Visakhapatnam</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-medical-500 shrink-0" />
              <a href="tel:8179189919" className="hover:text-white transition-colors">+91 81791 89919</a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-medical-500 shrink-0" />
              <a href="mailto:info@omnirkhospital.com" className="hover:text-white transition-colors">info@omnirkhospital.com</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-10 border-t border-slate-800 text-center text-xs tracking-wider uppercase">
        © 2024 Omni RK Hospital. All Rights Reserved. Designed for Excellence.
      </div>
    </footer>
  );
};
