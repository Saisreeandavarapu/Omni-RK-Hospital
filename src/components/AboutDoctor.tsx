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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={24} />
      </motion.button>
      <motion.img
        initial={{ opacity: 0, scale: 0.85 }}
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
      <section className="section-padding overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="relative z-10 rounded-[32px] sm:rounded-[40px] overflow-hidden border-8 border-white shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700 cursor-pointer group"
              onClick={() => setLightboxSrc(doctorImage)}
              title="Click to view full photo"
            >
              <img src={doctorImage} alt="Dr. Rohit Mudadla" className="w-full h-auto group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3 shadow-lg">
                  <ZoomIn size={24} className="text-medical-600" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-medical-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl -z-10" />

            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 p-4 md:p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 z-20 hidden sm:block">
              <div className="flex items-center gap-3 md:gap-4 text-medical-700 font-bold mb-1">
                <Shield size={18} />
                <span className="text-sm md:text-base">10+ Years Experience</span>
              </div>
              <p className="text-slate-600 text-xs md:text-sm">Expert in Advanced Laparoscopic &amp; GI Oncology Surgeries</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-medical-50 text-medical-700 rounded-full text-sm font-bold mb-5 sm:mb-6">
              <Award size={16} />
              <span>Surgical Excellence</span>
            </div>
            <h2 className="heading-lg mb-4 sm:mb-6 text-slate-900">Meet Your Surgeon:<br /><span className="text-medical-600">Dr. Rohit Mudadla</span></h2>
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <p className="text-base sm:text-lg text-slate-700 font-medium">M.S., M.Ch. (Surgical Gastroenterology), FMAS</p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                A highly experienced Surgical Gastroenterologist with over 10 years of clinical and surgical expertise. Specializing in minimally invasive and advanced laparoscopic surgeries for complex digestive, liver, pancreas, and colorectal conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {[
                "1500+ Trusted Patients",
                "150+ Complex Procedures",
                "Advanced Laparoscopist",
                "GI Cancer Specialist"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-700 font-semibold text-sm sm:text-base">
                  <CheckCircle2 size={18} className="text-medical-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="/about" className="btn-primary inline-block text-center whitespace-nowrap">Read Full Profile</a>
              <a href="/contact" className="btn-secondary inline-block text-center">Book Consultation</a>
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
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="heading-xl mb-4 sm:mb-6">About <span className="text-medical-600">Dr. Rohit Mudadla</span></h1>
          <p className="text-lg sm:text-xl text-slate-600 font-medium italic">"Compassionate Care with Advanced Surgical Precision"</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-stretch mb-16 sm:mb-32">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[32px] sm:rounded-[48px] overflow-hidden shadow-2xl cursor-pointer group"
          onClick={() => setLightboxSrc(clinicalImage)}
          title="Click to view full photo"
        >
          <img
            src={clinicalImage}
            alt="Dr. Rohit in Clinic"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-medical-900/60 to-transparent" />
          {/* Zoom hint overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 rounded-full p-4 shadow-2xl">
              <ZoomIn size={28} className="text-medical-600" />
            </div>
          </div>
          <div className="absolute bottom-8 left-8 right-8 sm:bottom-12 sm:left-12 sm:right-12 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Expert Consultations</h3>
            <p className="opacity-90 leading-relaxed text-sm sm:text-base">Dr. Rohit Mudadla focuses on patient-centric care, ensuring tailored treatment plans for every individual.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <div className="space-y-8 sm:space-y-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-medical-100 text-medical-600 rounded-2xl flex items-center justify-center shrink-0">
                  <BookOpen size={20} />
                </div>
                Academic Excellence
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-slate-600 text-base sm:text-lg ml-12 sm:ml-16">
                <li><strong className="text-slate-900">M.Ch.</strong> - Surgical Gastroenterology</li>
                <li><strong className="text-slate-900">M.S.</strong> - General Surgery</li>
                <li><strong className="text-slate-900">FMAS</strong> - Fellow in Minimal Access Surgery (Colorectal Focus)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-medical-100 text-medical-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                Consultation Timings
              </h3>
              <div className="ml-12 sm:ml-16 p-5 sm:p-6 bg-slate-50 rounded-2xl sm:rounded-3xl border border-slate-100">
                <p className="text-slate-900 font-bold text-lg sm:text-xl mb-2">6:00 PM – 9:00 PM</p>
                <p className="text-slate-600 text-sm sm:text-base">Monday to Saturday</p>
                <div className="mt-4 flex items-center gap-3 text-medical-700 font-semibold bg-medical-50 px-4 py-2 rounded-xl border border-medical-100 w-fit text-sm">
                  <MapPin size={16} />
                  OMNI Hospitals, Ramnagar, Vizag
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="bg-medical-900 rounded-[32px] sm:rounded-[56px] p-8 sm:p-12 lg:p-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-medical-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-[100px]" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">Professional <br /><span className="text-medical-400">Philosophy</span></h2>
            <p className="text-lg sm:text-xl text-medical-100 leading-relaxed mb-6 sm:mb-8 opacity-90 italic">
              "My mission is to provide the highest standard of surgical outcomes through advanced technology and compassionate patient care. We believe in treating the person, not just the condition."
            </p>
            <div className="flex flex-wrap gap-6 sm:gap-8">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-medical-400 mb-1">10+</div>
                <div className="text-xs sm:text-sm uppercase tracking-widest opacity-60">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-medical-400 mb-1">1500+</div>
                <div className="text-xs sm:text-sm uppercase tracking-widest opacity-60">Trusted Patients</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-medical-400 mb-1">150+</div>
                <div className="text-xs sm:text-sm uppercase tracking-widest opacity-60">Complex Surgeries</div>
              </div>
            </div>
          </div>
          <div
            className="rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl cursor-pointer group relative"
            onClick={() => setLightboxSrc("https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YNqBeDa0NNS0aV4y/img_20250504_112058_688-Y4LDwpGZQZFJq9L8.jpg")}
            title="Click to view full photo"
          >
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YNqBeDa0NNS0aV4y/img_20250504_112058_688-Y4LDwpGZQZFJq9L8.jpg"
              alt="Surgery"
              className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
              <div className="bg-white/90 rounded-full p-3 shadow-xl">
                <ZoomIn size={24} className="text-medical-600" />
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
