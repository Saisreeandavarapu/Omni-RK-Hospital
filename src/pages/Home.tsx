import { motion } from 'framer-motion';
import { ArrowRight, Activity, Shield, Stethoscope, Users, Star, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AboutDoctor } from '../components/AboutDoctor';
import { ServicesSection } from '../components/ServicesSection';
import { VideoSection } from '../components/VideoSection';

const CountUp = ({ value, suffix = '' }: { value: string; suffix?: string }) => (
  <span>{value}{suffix}</span>
);

export const Home = () => {
  const heroImage = "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1613,fit=crop/YNqBeDa0NNS0aV4y/rohit-6-m7V3Jlp1VpHQVvNe.jpeg";

  const stats = [
    { label: 'Trusted Patients', value: '1500+', icon: Users, color: '#22b0ff' },
    { label: 'Years Experience', value: '10+', icon: Stethoscope, color: '#f5bc00' },
    { label: 'Complex Procedures', value: '150+', icon: Activity, color: '#22b0ff' },
    { label: 'Patient Satisfaction', value: '100%', icon: Star, color: '#f5bc00' },
  ];

  return (
    <div className="overflow-hidden">

      {/* ═══ HERO ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center bg-dark-hero overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full opacity-20"
               style={{ background: 'radial-gradient(circle, #0090e8 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full opacity-15"
               style={{ background: 'radial-gradient(circle, #f5bc00 0%, transparent 70%)' }} />
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-5"
               style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="section-padding relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-28 sm:pt-32">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className="badge-gold mb-6">
              <Activity size={13} />
              Expert Surgical Gastroenterology · Vizag
            </div>

            <h1 className="heading-xl text-white mb-5 leading-[1.1]">
              Advanced{' '}
              <span className="text-gradient-gold">Surgical Care</span>
              <br />& GI Excellence
            </h1>

            <p className="text-white/60 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
              Dr. Rohit Mudadla provides world-class surgical treatments for complex digestive disorders, GI cancers, and hepatobiliary conditions using cutting-edge minimally invasive techniques.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8">
              {['1500+ Patients', 'Minimally Invasive', 'GI Oncology'].map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-white/70 text-[13px] font-medium">
                  <CheckCircle2 size={14} className="text-gold-400 shrink-0" />
                  {t}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact"
                className="btn-gold flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold"
              >
                Book Consultation
                <ArrowRight size={17} />
              </Link>
              <Link to="/services"
                className="btn-secondary flex items-center justify-center gap-2 px-8 py-4 text-sm"
              >
                Our Services
              </Link>
            </div>
          </motion.div>

          {/* Right - Doctor image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="relative mt-6 lg:mt-0"
          >
            {/* Glow behind image */}
            <div className="absolute -inset-4 rounded-[40px] opacity-40 blur-2xl"
                 style={{ background: 'linear-gradient(135deg, #0090e8 0%, #f5bc00 100%)' }} />
            
            <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden border-2 border-white/10 shadow-glass group"
                 style={{ background: 'rgba(255,255,255,0.04)' }}>
              <img
                src={heroImage}
                alt="Dr. Rohit Mudadla"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />
              {/* Doctor info card */}
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7 p-4 sm:p-5 rounded-2xl flex items-center gap-3 border border-white/10"
                   style={{ background: 'rgba(8,12,56,0.85)', backdropFilter: 'blur(20px)' }}>
                <div className="p-2 rounded-xl" style={{ background: 'linear-gradient(135deg, #0090e8, #005799)' }}>
                  <Shield size={20} className="text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-white text-sm sm:text-base leading-tight">Dr. Rohit Mudadla</h3>
                  <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider mt-0.5" style={{ color: '#f5bc00' }}>
                    M.S., M.Ch. · Surgical Gastroenterology
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#f8faff" />
          </svg>
        </div>
      </section>

      {/* ═══ STATS ══════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 bg-f8faff">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="premium-card p-5 sm:p-7 text-center"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-4"
                     style={{ background: `${stat.color}14`, border: `1px solid ${stat.color}28` }}>
                  <stat.icon size={20} style={{ color: stat.color }} />
                </div>
                <div className="font-heading text-2xl sm:text-3xl font-bold text-navy-950 mb-1">
                  <CountUp value={stat.value} />
                </div>
                <div className="text-slate-500 text-xs sm:text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT DOCTOR (condensed) ═══════════════════════ */}
      <AboutDoctor condensed={true} />

      {/* ═══ VIDEO SECTION ══════════════════════════════════ */}
      <VideoSection />

      {/* ═══ SERVICES ═══════════════════════════════════════ */}
      <div className="bg-white">
        <ServicesSection />
      </div>

      {/* ═══ BANNER CTA ══════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-dark-hero" />
        <div className="absolute inset-0 opacity-10"
             style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20"
             style={{ background: '#0090e8' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-15"
             style={{ background: '#f5bc00' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-medical mb-6">
                <Activity size={13} />Expert Surgical Care
              </div>
              <h2 className="text-white font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                Expert Surgical<br />
                <span className="text-gradient-gold">Gastroenterology</span> Care
              </h2>
              <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-lg">
                Providing compassionate care for complex gastrointestinal conditions in Visakhapatnam, ensuring quicker recovery and reduced complications.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {[
                { num: '150+', label: 'Complex Surgeries', sub: '12 Years of Excellence' },
                { num: '1500+', label: 'Trusted Patients', sub: 'Life-Changing Results' },
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 sm:p-8">
                  <div className="text-4xl sm:text-6xl font-heading font-bold text-gradient-gold mb-2">{item.num}</div>
                  <div className="text-white/80 font-semibold text-sm uppercase tracking-wider mb-1">{item.label}</div>
                  <div className="text-white/40 text-xs">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ══════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="badge-gold mx-auto mb-6">
            <Star size={13} />Book Your Appointment
          </div>
          <h2 className="heading-lg mb-5 text-navy-950">
            Ready to restore your{' '}
            <span className="text-gradient-medical">Digestive Health?</span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg mb-8">
            Schedule a detailed consultation with Dr. Rohit Mudadla at OMNI Hospitals, Ramnagar, Visakhapatnam.
          </p>
          <Link
            to="/contact"
            className="btn-gold px-10 py-4 text-sm font-bold inline-flex items-center gap-3"
          >
            Book Appointment Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};
