import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { ServicesSection } from '../components/ServicesSection';
import { Link } from 'react-router-dom';
import { PremiumImage } from '../components/PremiumImage';

export const Services = () => {
  return (
    <div className="pt-28 sm:pt-32 pb-20">
      <div className="px-4 sm:px-6 max-w-7xl mx-auto py-4">
        <nav className="flex mb-6 text-sm font-medium text-slate-500 items-center gap-2">
          <Link to="/" className="hover:text-medical-600 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-medical-600">Surgical Specializations</span>
        </nav>
      </div>

      <ServicesSection className="px-4 sm:px-6 max-w-7xl mx-auto pb-16 sm:pb-20 pt-2 sm:pt-4" />

      {/* Testimonials Section */}
      <section className="section-padding bg-slate-50">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Patient <span className="text-medical-600">Success Stories</span></h2>
          <p className="text-slate-600 max-w-xl mx-auto">Hear from those who have experienced life-changing recoveries under Dr. Rohit Mudadla's expert surgical care.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Sanjay Kumar",
              text: "Dr. Rohit Mudadla's expertise transformed my life. His care and skills are truly exceptional and life-changing. I am grateful for the precision with which my surgery was handled.",
              role: "Post-Op Recovery"
            },
            {
              name: "Anita Rao",
              text: "I experienced remarkable recovery after my surgery. Dr. Mudadla’s minimally invasive approach made all the difference in my comfort and healing time. Highly recommended!",
              role: "Laparoscopic Surgery Patient"
            }
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white rounded-[40px] shadow-sm border border-slate-100 italic text-slate-700 relative"
            >
              <div className="text-medical-200 absolute top-8 left-8 text-6xl font-serif">"</div>
              <p className="relative z-10 mb-8 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-4 not-italic">
                <div className="w-12 h-12 bg-medical-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-xs text-medical-600 font-bold uppercase tracking-widest">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="section-padding">
         <div className="bg-medical-50 rounded-[48px] p-12 lg:p-20 border border-medical-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div>
                  <h2 className="heading-lg mb-6">Need a <span className="text-medical-600">Specialist Opinion?</span></h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                     If you are experiencing persistent digestive issues, abdominal pain, or have been diagnosed with a condition requiring surgical intervention, consult with Dr. Rohit Mudadla for an expert assessment.
                  </p>
                  <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                     Book Your Consultation
                  </Link>
               </div>
               <div className="rounded-[32px] sm:rounded-[40px] shadow-xl">
                  <PremiumImage
                    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YNqBeDa0NNS0aV4y/rohit-3-dJoZajkwE1U7X2JD.jpeg"
                    alt="Dr. Rohit Mudadla"
                    containerClassName="max-w-sm sm:max-w-md mx-auto aspect-[4/5] sm:aspect-auto"
                    imgWrapperClassName="rounded-[32px] sm:rounded-[40px] border-4 border-white aspect-[4/5] sm:aspect-auto"
                  />
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

