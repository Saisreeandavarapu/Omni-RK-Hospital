import { motion } from 'framer-motion';
import { ArrowRight, Activity, Shield, Stethoscope, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AboutDoctor } from '../components/AboutDoctor';
import { ServicesSection } from '../components/ServicesSection';
import { VideoSection } from '../components/VideoSection';

export const Home = () => {
  const heroImage = "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1080,h=1613,fit=crop/YNqBeDa0NNS0aV4y/rohit-6-m7V3Jlp1VpHQVvNe.jpeg";

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 sm:pt-20 bg-slate-50">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(2,132,199,0.1)_0,transparent_50%)]" />
        </div>

        <div className="section-padding relative z-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-medical-100 text-medical-700 rounded-full text-sm font-bold mb-6">
              <Activity size={16} />
              <span>Expert Surgical Gastroenterology in Vizag</span>
            </div>
            <h1 className="heading-xl mb-4 sm:mb-6">
              Advanced <span className="text-medical-600">Surgical Care</span> &amp; GI Excellence
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 max-w-xl leading-relaxed">
              Dr. Rohit Mudadla provides world-class surgical treatments for complex digestive disorders, GI cancers, and hepatobiliary conditions using advanced minimally invasive techniques.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4">
                <span>Book Consultation</span>
                <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn-secondary px-6 sm:px-8 py-3 sm:py-4 text-center">
                Our Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-4 lg:mt-0"
          >
            <div className="absolute -inset-2 sm:-inset-4 bg-medical-500/10 rounded-2xl blur-3xl transform -rotate-6" />
            <div className="relative bg-white p-2 sm:p-4 rounded-[28px] sm:rounded-[40px] shadow-2xl overflow-hidden border-4 sm:border-8 border-white group">
              <img
                src={heroImage}
                alt="Dr. Rohit Mudadla"
                className="w-full h-auto rounded-[22px] sm:rounded-[32px] group-hover:scale-105 transition-transform duration-700"
              />
              {/* Doctor info card - responsive */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 p-3 sm:p-5 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-3 border border-white/50">
                <div className="p-2 sm:p-3 bg-medical-600 rounded-lg sm:rounded-xl text-white shrink-0">
                  <Shield size={18} className="sm:hidden" />
                  <Shield size={22} className="hidden sm:block" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">Dr. Rohit Mudadla</h3>
                  <p className="text-[10px] sm:text-xs text-medical-600 font-bold uppercase tracking-wide leading-tight mt-0.5">
                    <span className="sm:hidden">M.S., M.Ch. · Surgical Gastro.</span>
                    <span className="hidden sm:inline">M.S., M.Ch. (Surgical Gastroenterology)</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-20 bg-medical-900 text-white border-y border-medical-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 text-center">
          {[
            { label: 'Trusted Patients', value: '1500+', icon: Users },
            { label: 'Clinical Experience', value: '10+', icon: Stethoscope },
            { label: 'Complex Procedures', value: '150+', icon: Activity },
            { label: 'Global Excellence', icon: Shield },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-medical-400 mb-4 flex justify-center">
                {stat.icon && <stat.icon size={32} />}
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">{stat.value || '100%'}</h3>
              <p className="text-medical-200 text-xs sm:text-sm font-medium uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Premium Stats Banner */}
      <section className="bg-medical-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-medical-400 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div>
              <h2 className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">Expert Surgical <br />Gastroenterology Care</h2>
              <p className="text-medical-50 text-base sm:text-lg opacity-90 leading-relaxed max-w-lg">
                Providing compassionate care for complex gastrointestinal conditions in Visakhapatnam, ensuring quicker recovery and reduced complications for all patients.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:gap-12">
              <div>
                <div className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-2">150+</div>
                <div className="text-medical-100 font-medium uppercase tracking-widest text-xs sm:text-sm">Complex Surgeries</div>
                <div className="text-medical-200/60 text-xs mt-1">12 Years of Excellence</div>
              </div>
              <div>
                <div className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-2">1500</div>
                <div className="text-medical-100 font-medium uppercase tracking-widest text-xs sm:text-sm">Trusted Patients</div>
                <div className="text-medical-200/60 text-xs mt-1">Life-Changing Results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Doctor Section (Condensed) */}
      <AboutDoctor condensed={true} />

      {/* Video Section */}
      <VideoSection />

      {/* Services Highlight Section */}
      <div className="bg-white">
        <ServicesSection />
      </div>

      {/* Final Call to Action */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-6 sm:mb-8">Ready to restore your <span className="text-medical-600">Digestive Health?</span></h2>
          <p className="text-slate-600 text-base sm:text-lg mb-8 sm:mb-10">Schedule a detailed consultation with Dr. Rohit Mudadla today at OMNI Hospitals, Ramnagar, Visakhapatnam.</p>
          <Link to="/contact" className="btn-primary px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg inline-flex items-center gap-3">
            <span>Book Appointment Now</span>
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

