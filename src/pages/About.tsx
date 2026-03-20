import { AboutDoctor } from '../components/AboutDoctor';
import { ClinicalExpertise } from '../components/ClinicalExpertise';
import { Link } from 'react-router-dom';
import { ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  {
    num: '01',
    title: 'Patient-Centric Approach',
    desc: 'We prioritize your comfort and well-being, providing personalized care plans that address your unique health needs.',
    color: '#22b0ff',
  },
  {
    num: '02',
    title: 'Advanced Technology',
    desc: 'Equipped with the latest surgical tools and imaging technology for high-precision outcomes and faster recovery.',
    color: '#f5bc00',
  },
  {
    num: '03',
    title: 'Multi-Disciplinary Expertise',
    desc: 'Collaborating with specialists across departments to ensure holistic treatment for complex cases.',
    color: '#22b0ff',
  },
];

export const About = () => {
  return (
    <div className="pt-20 sm:pt-32 pb-16 sm:pb-20" style={{ background: '#f8faff' }}>

      {/* Breadcrumb */}
      <div className="section-padding py-6 sm:py-8">
        <nav className="flex mb-0 text-sm font-medium text-slate-400 items-center gap-2">
          <Link to="/" className="hover:text-medical-600 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span style={{ color: '#0090e8' }}>About Dr. Rohit Mudadla</span>
        </nav>
      </div>

      <AboutDoctor condensed={false} />

      <ClinicalExpertise />

      {/* Why Choose Us */}
      <div className="section-padding pt-0">
        <div className="rounded-[32px] sm:rounded-[48px] overflow-hidden relative"
             style={{ background: 'linear-gradient(135deg, #080c38 0%, #0e1763 60%, #003f6e 100%)' }}>
          {/* Grid */}
          <div className="absolute inset-0 opacity-5"
               style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] opacity-20"
               style={{ background: '#0090e8' }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-[100px] opacity-15"
               style={{ background: '#f5bc00' }} />

          <div className="relative z-10 p-8 sm:p-14 lg:p-20">
            <div className="badge-gold mb-6">
              <Star size={13} />Why Choose Us
            </div>
            <h2 className="text-white font-heading text-3xl sm:text-4xl font-bold mb-12 leading-tight">
              Why Choose{' '}
              <span className="text-gradient-gold">Omni RK Hospital?</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
              {reasons.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="glass-card p-7"
                >
                  <div
                    className="text-4xl font-heading font-black mb-5 leading-none"
                    style={{ color: r.color, opacity: 0.6 }}
                  >
                    {r.num}
                  </div>
                  <h3 className="text-white font-heading font-bold text-lg mb-3">{r.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{r.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
