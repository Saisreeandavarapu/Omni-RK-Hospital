import { motion } from 'framer-motion';
import { Activity, Shield, Zap, Info, ChevronRight, Heart, LifeBuoy } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      title: "Hepatopancreatobiliary (HPB) Surgery",
      desc: "Specialized care for liver diseases, gallbladder issues, and complex bile duct disorders.",
      icon: Activity,
      features: ["Liver Tumor Resections", "Gallstone Management", "Biliary Strictures", "Pancreatic Cysts"]
    },
    {
      title: "Minimally Invasive Surgery",
      desc: "Advanced laparoscopic techniques for quicker recovery, less pain, and minimal scarring.",
      icon: Zap,
      features: ["Keyhole Appendix Surgery", "Laparoscopic Hernia Repair", "Anti-Reflux Surgery", "Single Incision Surgery"]
    },
    {
      title: "GI Oncology Care",
      desc: "Expert surgical options for treating various digestive system cancers with precision.",
      icon: Shield,
      features: ["Esophageal Cancer", "Stomach (Gastric) Cancer", "Colorectal Malignancy", "Pancreatic Cancer"]
    },
    {
      title: "Colorectal Surgery",
      desc: "Comprehensive treatment for conditions affecting the colon, rectum, and anal canal.",
      icon: Heart,
      features: ["Colectomy", "Piles/Fissure/Fistula", "Inflammatory Bowel Disease", "Rectal Prolapse"]
    },
    {
      title: "General GI Care",
      desc: "Treatment for Acid Reflux, GERD, Liver Cirrhosis, and common digestive ailments.",
      icon: Info,
      features: ["Acid Reflux/GERD", "Liver Cirrhosis", "Hepatolithiasis", "Digestive Screenings"]
    }
  ];

  const surgeryImage = "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YNqBeDa0NNS0aV4y/img_20250506_124413_699-YBg7Q8BZ22u84vy0.jpg";

  return (
    <section className="section-padding overflow-hidden">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-medical-50 text-medical-700 rounded-full text-sm font-bold mb-6">
            <LifeBuoy size={16} />
            <span>Comprehensive Surgical Care</span>
          </div>
          <h2 className="heading-xl mb-4">World-Class <span className="text-medical-600">Surgical Services</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Dr. Rohit Mudadla provides advanced surgical management for complex gastrointestinal, liver, and pancreatic disorders using global standards.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-8 bg-white rounded-[40px] shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-500 flex flex-col h-full"
          >
            <div className="w-16 h-16 bg-medical-50 text-medical-600 rounded-2xl flex items-center justify-center shrink-0 mb-8 group-hover:bg-medical-600 group-hover:text-white transition-colors duration-500">
              <service.icon size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 leading-tight">{service.title}</h3>
            <p className="text-slate-600 mb-8 leading-relaxed flex-grow">{service.desc}</p>
            <div className="grid grid-cols-1 gap-3">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-bold text-medical-700 bg-medical-50 px-3 py-2 rounded-xl group-hover:bg-medical-100 transition-colors">
                  <ChevronRight size={14} />
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Infrastructure CTA */}
      <div className="relative rounded-[56px] overflow-hidden bg-medical-900 text-white p-12 lg:p-24 group">
        <img src={surgeryImage} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000" alt="Surgical Theatre" />
        <div className="absolute inset-0 bg-gradient-to-r from-medical-900 via-medical-900/60 to-transparent" />
        
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">State-of-the-Art <br />Surgical Infrastructure</h2>
          <p className="text-lg text-medical-100 mb-10 opacity-90 leading-relaxed">
            We utilize the latest laparoscopic imaging systems and advanced surgical instruments to ensure the maximum precision, safety, and comfort for our patients.
          </p>
          <div className="flex flex-wrap gap-6">
             <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                   <Activity size={24} className="text-medical-400" />
                </div>
                <div>
                   <p className="text-sm font-bold uppercase tracking-widest">Precision</p>
                   <p className="text-xs opacity-60">High-Def Imaging</p>
                </div>
             </div>
             <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
                   <Shield size={24} className="text-medical-400" />
                </div>
                <div>
                   <p className="text-sm font-bold uppercase tracking-widest">Safety</p>
                   <p className="text-xs opacity-60">Global Standards</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
