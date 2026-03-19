import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="section-padding">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-xl mb-4"
          >
            Get In <span className="text-medical-600">Touch</span>
          </motion.h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Have questions about a treatment or want to book an appointment? We're here to help you get the care you need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm flex items-start gap-6">
              <div className="p-4 bg-medical-50 text-medical-600 rounded-2xl">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Omni RK Hospital</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ram Nagar, Visakhapatnam, Andhra Pradesh, PIN - 530002
                </p>
              </div>
            </div>

            <div className="p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm flex items-start gap-6">
              <div className="p-4 bg-medical-50 text-medical-600 rounded-2xl">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                <p className="text-sm text-slate-600">+91 81791 89919</p>
                <p className="text-xs text-medical-600 font-bold mt-1 uppercase">24/7 Support for Emergencies</p>
              </div>
            </div>

            <div className="p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm flex items-start gap-6">
              <div className="p-4 bg-medical-50 text-medical-600 rounded-2xl">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Visiting Hours</h3>
                <p className="text-sm text-slate-600">Mon - Sat: 4:00 PM - 9:00 PM</p>
                <p className="text-sm text-slate-600">Sun: Emergency Cases Only</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-10 lg:p-12 bg-white rounded-[40px] border border-slate-100 shadow-2xl"
            >
              <h2 className="heading-md mb-8">Send an Inquiry</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">First Name</label>
                    <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-500/20 focus:border-medical-500 transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Last Name</label>
                    <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-500/20 focus:border-medical-500 transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Address</label>
                  <input type="email" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-500/20 focus:border-medical-500 transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Message</label>
                  <textarea rows={4} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-500/20 focus:border-medical-500 transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full py-5 flex items-center justify-center gap-3 text-lg">
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
