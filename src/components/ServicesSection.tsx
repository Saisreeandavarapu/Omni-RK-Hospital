import { motion } from 'framer-motion';
import { Activity, Shield, Zap, Info, ChevronRight, Heart, LifeBuoy } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      title: "Hepatopancreatobiliary (HPB) Surgery",
      desc: "Specialized care for liver diseases, gallbladder issues, and complex bile duct disorders.",
      icon: Activity,
      features: ["Liver Tumor Resections", "Gallstone Management", "Biliary Strictures", "Pancreatic Cysts"],
      accentColor: '#22b0ff',
    },
    {
      title: "Minimally Invasive Surgery",
      desc: "Advanced laparoscopic techniques for quicker recovery, less pain, and minimal scarring.",
      icon: Zap,
      features: ["Keyhole Appendix Surgery", "Laparoscopic Hernia Repair", "Anti-Reflux Surgery", "Single Incision Surgery"],
      accentColor: '#f5bc00',
    },
    {
      title: "GI Oncology Care",
      desc: "Expert surgical options for treating various digestive system cancers with precision.",
      icon: Shield,
      features: ["Esophageal Cancer", "Stomach (Gastric) Cancer", "Colorectal Malignancy", "Pancreatic Cancer"],
      accentColor: '#22b0ff',
    },
    {
      title: "Colorectal Surgery",
      desc: "Comprehensive treatment for conditions affecting the colon, rectum, and anal canal.",
      icon: Heart,
      features: ["Colectomy", "Piles/Fissure/Fistula", "Inflammatory Bowel Disease", "Rectal Prolapse"],
      accentColor: '#f5bc00',
    },
    {
      title: "General GI Care",
      desc: "Treatment for Acid Reflux, GERD, Liver Cirrhosis, and common digestive ailments.",
      icon: Info,
      features: ["Acid Reflux/GERD", "Liver Cirrhosis", "Hepatolithiasis", "Digestive Screenings"],
      accentColor: '#22b0ff',
    },
  ];

  const surgeryImage = "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YNqBeDa0NNS0aV4y/img_20250506_124413_699-YBg7Q8BZ22u84vy0.jpg";

  return (
    <section className="section-padding overflow-hidden">
      {/* Header */}
      <div className="text-center mb-14 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="badge-gold mx-auto mb-5">
            <LifeBuoy size={13} />
            Comprehensive Surgical Care
          </div>
          <h2 className="heading-xl mb-4 text-navy-950">
            World-Class{' '}
            <span className="text-gradient-medical">Surgical Services</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg">
            Dr. Rohit Mudadla provides advanced surgical management for complex gastrointestinal, liver, and pancreatic disorders using global standards.
          </p>
        </motion.div>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 mb-14 sm:mb-20">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.09, duration: 0.5 }}
            className="group premium-card p-6 sm:p-8 flex flex-col h-full"
          >
            {/* Icon */}
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 mb-6 transition-all duration-500"
              style={{
                background: `${service.accentColor}14`,
                border: `1px solid ${service.accentColor}28`,
              }}
            >
              <service.icon size={22} style={{ color: service.accentColor }} />
            </div>

            <h3 className="text-lg sm:text-xl font-heading font-bold mb-3 text-navy-950 leading-tight">
              {service.title}
            </h3>
            <p className="text-slate-500 mb-6 leading-relaxed flex-grow text-sm sm:text-base">
              {service.desc}
            </p>

            {/* Feature tags */}
            <div className="grid grid-cols-1 gap-2">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-xl transition-colors"
                  style={{
                    background: `${service.accentColor}08`,
                    color: service.accentColor,
                  }}
                >
                  <ChevronRight size={13} />
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Infrastructure CTA */}
      <div className="relative rounded-[32px] sm:rounded-[48px] overflow-hidden group">
        <img
          src={surgeryImage}
          className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:scale-105 transition-transform duration-1000"
          alt="Surgical Theatre"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #080c38 0%, rgba(8,12,56,0.75) 60%, rgba(0,63,110,0.4) 100%)' }} />

        <div className="relative z-10 p-8 sm:p-14 lg:p-20">
          <div className="badge-medical mb-6">
            <Activity size={13} />State-of-the-Art
          </div>
          <h2 className="text-white font-heading text-2xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
            State-of-the-Art<br />
            <span className="text-gradient-gold">Surgical Infrastructure</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg mb-10 leading-relaxed max-w-xl">
            We utilize the latest laparoscopic imaging systems and advanced surgical instruments to ensure maximum precision, safety, and comfort.
          </p>
          <div className="flex flex-wrap gap-5 sm:gap-8">
            {[
              { icon: Activity, label: 'Precision', sub: 'High-Def Imaging', color: '#22b0ff' },
              { icon: Shield, label: 'Safety', sub: 'Global Standards', color: '#f5bc00' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 glass-card px-5 py-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                     style={{ background: `${item.color}18` }}>
                  <item.icon size={18} style={{ color: item.color }} />
                </div>
                <div>
                  <p className="text-white text-sm font-bold uppercase tracking-wider">{item.label}</p>
                  <p className="text-white/40 text-xs">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
