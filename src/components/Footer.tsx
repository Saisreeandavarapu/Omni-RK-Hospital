import { Phone, Mail, MapPin, Instagram, Linkedin, HeartPulse } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-medical-500 rounded-lg text-white">
              <HeartPulse size={24} />
            </div>
            <h2 className="text-white font-heading font-bold text-2xl">Omni RK</h2>
          </div>
          <p className="text-sm leading-relaxed mb-6 max-w-xs">
            Leading surgical gastroenterology center providing advanced minimally invasive treatments and compassionate patient care.
          </p>
          <div className="flex gap-4">
            <a href="https://in.linkedin.com/in/rohith-mudadla-37a94a186" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-medical-600 transition-colors text-white">
              <Linkedin size={18} />
            </a>
            <a href="https://www.instagram.com/dr.rohit_mudadla/" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-medical-600 transition-colors text-white">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6">Quick Links</h3>
          <ul className="flex flex-col gap-4 text-sm">
            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-white transition-colors">About Dr. Rohit</a></li>
            <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6">Our Services</h3>
          <ul className="flex flex-col gap-4 text-sm">
            <li>Laparoscopic Surgery</li>
            <li>GI Oncology</li>
            <li>Liver & Pancreas Surgery</li>
            <li>Colorectal Surgery</li>
            <li>Hernia Repair</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-6">Contact Info</h3>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-medical-500 shrink-0" />
              <span>Omni RK Hospital, Ram Nagar, Visakhapatnam</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-medical-500 shrink-0" />
              <span>+91 81791 89919</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-medical-500 shrink-0" />
              <span>info@omnirkhospital.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-800 text-center text-xs tracking-wider uppercase">
        © 2024 Omni RK Hospital. All Rights Reserved. Designed for Excellence.
      </div>
    </footer>
  );
};
