import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, BookOpen, Clock, MapPin, Shield, CheckCircle2, X, ZoomIn } from 'lucide-react';

// Lightbox component
const Lightbox = ({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: 'rgba(4,6,28,0.95)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full text-white transition-colors z-10"
        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
        onClick={onClose}
        aria-label="Close"
      >
        <X size={22} />
      </motion.button>
      <motion.img
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        src={src}
        alt={alt}
        className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  </AnimatePresence>
);

export const AboutDoctor = ({ condensed = false }: { condensed?: boolean }) => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const doctorImage = "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1535,fit=crop/YNqBeDa0NNS0aV4y/rohit-3-dJoZajkwE1U7X2JD.jpeg";
  const clinicalImage = "/assets/1773935921413.png";

  if (condensed) {
    return (
      <section className="section-padding overflow-hidden" style={{ background: '#f8faff' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="relative z-10 rounded-[32px] sm:rounded-[40px] overflow-hidden border-4 border-white shadow-navy group cursor-pointer"
              onClick={() => setLightboxSrc(doctorImage)}
              title="Click to view full photo"
            >
              <img
                src={doctorImage}
                alt="Dr. Rohit Mudadla"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{ background: 'rgba(8,12,56,0.25)' }}>
                <div className="p-3 rounded-full" style={{ background: 'rgba(255,255,255,0.9)' }}>
                  <ZoomIn size={24} style={{ color: '#0090e8' }} />
                </div>
              </div>
            </div>

            {/* Glows */}
            <div className="absolute -bottom-12 -right-12 w-72 h-72 rounded-full blur-[100px] -z-10 opacity-30"
                 style={{ background: '#0090e8' }} />
            <div className="absolute -top-12 -left-12 w-56 h-56 rounded-full blur-[80px] -z-10 opacity-20"
                 style={{ background: '#f5bc00' }} />

            {/* Info card */}
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7 p-4 sm:p-5 rounded-2xl hidden sm:flex items-center gap-3"
                 style={{ background: 'rgba(8,12,56,0.88)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="p-2 rounded-xl" style={{ background: 'linear-gradient(135deg, #0090e8, #005799)' }}>
                <Shield size={18} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">10+ Years Experience</p>
                <p className="text-white/50 text-xs mt-0.5">Expert in Advanced Laparoscopic & GI Oncology</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="badge-gold mb-5">
              <Award size={13} />Surgical Excellence
            </div>
            <h2 className="heading-lg mb-5 text-navy-950">
              Meet Your Surgeon:<br />
              <span className="text-gradient-medical">Dr. Rohit Mudadla</span>
            </h2>
            <div className="space-y-3 mb-7">
              <p className="text-base sm:text-lg text-navy-900 font-medium">M.S., M.Ch. (Surgical Gastroenterology), FMAS</p>
              <p className="text-slate-500 leading-relaxed text-sm sm:text-base">
                A highly experienced Surgical Gastroenterologist with over 10 years of clinical and surgical expertise. Specializing in minimally invasive and advanced laparoscopic surgeries for complex digestive, liver, pancreas, and colorectal conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
              {[
                "1500+ Trusted Patients",
                "150+ Complex Procedures",
                "Advanced Laparoscopist",
                "GI Cancer Specialist"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-navy-900 font-semibold text-sm">
                  <CheckCircle2 size={16} style={{ color: '#0090e8' }} className="shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/about" className="btn-primary text-center">Read Full Profile</a>
              <a href="/contact" className="btn-gold text-center">Book Consultation</a>
            </div>
          </motion.div>
        </div>

        {lightboxSrc && (
          <Lightbox src={lightboxSrc} alt="Dr. Rohit Mudadla" onClose={() => setLightboxSrc(null)} />
        )}
      </section>
    );
  }

  return (
    <section className="section-padding" style={{ background: '#f8faff' }}>
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="heading-xl mb-4 text-navy-950">
            About{' '}
            <span className="text-gradient-medical">Dr. Rohit Mudadla</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 font-medium italic">
            "Compassionate Care with Advanced Surgical Precision"
          </p>
        </motion.div>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-stretch mb-16 sm:mb-28">
        {/* Clinical Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[32px] sm:rounded-[48px] overflow-hidden shadow-navy group cursor-pointer"
          onClick={() => setLightboxSrc(clinicalImage)}
          title="Click to view full photo"
        >
          <img
            src={clinicalImage}
            alt="Dr. Rohit in Clinic"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0"
               style={{ background: 'linear-gradient(to top, rgba(8,12,56,0.7), transparent 50%)' }} />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 rounded-full" style={{ background: 'rgba(255,255,255,0.9)' }}>
              <ZoomIn size={28} style={{ color: '#0090e8' }} />
            </div>
          </div>
          <div className="absolute bottom-8 left-8 right-8 sm:bottom-12 sm:left-12 sm:right-12 text-white">
            <h3 className="text-xl sm:text-2xl font-heading font-bold mb-2">Expert Consultations</h3>
            <p className="text-white/70 leading-relaxed text-sm sm:text-base">
              Dr. Rohit Mudadla focuses on patient-centric care, ensuring tailored treatment plans for every individual.
            </p>
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <div className="space-y-10 sm:space-y-12">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-navy-950 mb-5 flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0"
                     style={{ background: 'rgba(0,144,232,0.12)', border: '1px solid rgba(0,144,232,0.2)' }}>
                  <BookOpen size={20} style={{ color: '#0090e8' }} />
                </div>
                Academic Excellence
              </h3>
              <ul className="space-y-3 text-slate-600 text-base sm:text-lg ml-14 sm:ml-16">
                <li><strong className="text-navy-950">M.Ch.</strong> — Surgical Gastroenterology</li>
                <li><strong className="text-navy-950">M.S.</strong> — General Surgery</li>
                <li><strong className="text-navy-950">FMAS</strong> — Fellow in Minimal Access Surgery (Colorectal Focus)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-navy-950 mb-5 flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0"
                     style={{ background: 'rgba(245,188,0,0.12)', border: '1px solid rgba(245,188,0,0.2)' }}>
                  <Clock size={20} style={{ color: '#d49900' }} />
                </div>
                Consultation Timings
              </h3>
              <div className="ml-14 sm:ml-16 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border"
                   style={{ background: '#f8faff', borderColor: 'rgba(14,23,99,0.08)' }}>
                <p className="text-navy-950 font-bold text-lg sm:text-xl mb-1">6:00 PM – 9:00 PM</p>
                <p className="text-slate-500 text-sm mb-4">Monday to Saturday</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
                     style={{ background: 'rgba(0,144,232,0.08)', color: '#0070c4', border: '1px solid rgba(0,144,232,0.15)' }}>
                  <MapPin size={14} />
                  OMNI Hospitals, Ramnagar, Vizag
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Philosophy */}
      <div className="rounded-[32px] sm:rounded-[56px] p-8 sm:p-12 lg:p-24 text-white relative overflow-hidden"
           style={{ background: 'linear-gradient(135deg, #080c38 0%, #0e1763 50%, #003f6e 100%)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] opacity-20"
             style={{ background: '#0090e8' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[100px] opacity-15"
             style={{ background: '#f5bc00' }} />
        <div className="absolute inset-0 opacity-5"
             style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Professional{' '}
              <span className="text-gradient-gold">Philosophy</span>
            </h2>
            <p className="text-white/60 text-lg sm:text-xl leading-relaxed mb-8 italic">
              "My mission is to provide the highest standard of surgical outcomes through advanced technology and compassionate patient care. We believe in treating the person, not just the condition."
            </p>
            <div className="flex flex-wrap gap-8">
              {[
                { val: '10+', label: 'Years of Experience' },
                { val: '1500+', label: 'Trusted Patients' },
                { val: '150+', label: 'Complex Surgeries' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-3xl sm:text-4xl font-heading font-bold mb-1 text-gradient-gold">{s.val}</div>
                  <div className="text-xs uppercase tracking-widest text-white/50">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 cursor-pointer group relative"
            style={{ borderColor: 'rgba(255,255,255,0.1)' }}
            onClick={() => setLightboxSrc("https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YNqBeDa0NNS0aV4y/img_20250504_112058_688-Y4LDwpGZQZFJq9L8.jpg")}
          >
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YNqBeDa0NNS0aV4y/img_20250504_112058_688-Y4LDwpGZQZFJq9L8.jpg"
              alt="Surgery"
              className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                 style={{ background: 'rgba(8,12,56,0.3)' }}>
              <div className="p-3 rounded-full" style={{ background: 'rgba(255,255,255,0.9)' }}>
                <ZoomIn size={24} style={{ color: '#0090e8' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightboxSrc && (
        <Lightbox src={lightboxSrc} alt="Doctor Photo" onClose={() => setLightboxSrc(null)} />
      )}
    </section>
  );
};
