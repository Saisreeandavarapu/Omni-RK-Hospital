import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-20">
      <div className="section-padding">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-xl mb-4"
          >
            Get In <span className="text-medical-600">Touch</span>
          </motion.h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            Have questions about a treatment or want to book an appointment? We're here to help you get the care you need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 flex flex-col gap-4 sm:gap-6">
            <div className="p-6 sm:p-8 bg-white rounded-[24px] sm:rounded-[32px] border border-slate-100 shadow-sm flex items-start gap-4 sm:gap-6">
              <div className="p-3 sm:p-4 bg-medical-50 text-medical-600 rounded-xl sm:rounded-2xl shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Omni RK Hospital</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ram Nagar, Visakhapatnam, Andhra Pradesh, PIN - 530002
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-white rounded-[24px] sm:rounded-[32px] border border-slate-100 shadow-sm flex items-start gap-4 sm:gap-6">
              <div className="p-3 sm:p-4 bg-medical-50 text-medical-600 rounded-xl sm:rounded-2xl shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                <a href="tel:8179189919" className="text-sm text-slate-600 hover:text-medical-600 transition-colors">+91 81791 89919</a>
                <p className="text-xs text-medical-600 font-bold mt-1 uppercase">24/7 Support for Emergencies</p>
              </div>
            </div>

            <div className="p-6 sm:p-8 bg-white rounded-[24px] sm:rounded-[32px] border border-slate-100 shadow-sm flex items-start gap-4 sm:gap-6">
              <div className="p-3 sm:p-4 bg-medical-50 text-medical-600 rounded-xl sm:rounded-2xl shrink-0">
                <Clock size={22} />
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
              className="p-6 sm:p-10 lg:p-12 bg-white rounded-[28px] sm:rounded-[40px] border border-slate-100 shadow-2xl"
            >
              <h2 className="heading-md mb-6 sm:mb-8">Send an Inquiry</h2>
              <form className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">First Name</label>
                    <input type="text" className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-500/20 focus:border-medical-500 transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Last Name</label>
                    <input type="text" className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-500/20 focus:border-medical-500 transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Address</label>
                  <input type="email" className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-500/20 focus:border-medical-500 transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Phone Number</label>
                  <input type="tel" className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-500/20 focus:border-medical-500 transition-all" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Message</label>
                  <textarea rows={4} className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-medical-500/20 focus:border-medical-500 transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full py-4 sm:py-5 flex items-center justify-center gap-3 text-base sm:text-lg">
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Google Maps Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Find Us on <span className="text-medical-600">Map</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">Omni RK Hospital, Ram Nagar, Visakhapatnam, Andhra Pradesh</p>
          </div>
          <div className="rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl border border-slate-100">
            <iframe
              title="Omni RK Hospital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.9183267399!2d83.29864!3d17.72556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943b3a9b06c19%3A0x2df58b0f1b2b7e1e!2sOmni%20RK%20Hospital!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://maps.google.com/?q=Omni+RK+Hospital+Ram+Nagar+Visakhapatnam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-medical-600 font-semibold hover:text-medical-700 transition-colors text-sm sm:text-base"
            >
              <MapPin size={16} />
              Open in Google Maps →
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
