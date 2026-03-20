import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Send, Activity } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24" style={{ background: '#f8faff' }}>
      <div className="section-padding">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="badge-gold mx-auto mb-5">
              <Activity size={13} />Get In Touch
            </div>
            <h1 className="heading-xl mb-4 text-navy-950">
              Book a{' '}
              <span className="text-gradient-medical">Consultation</span>
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-base sm:text-lg">
              Have questions about a treatment or want to book an appointment? We're here to help you get the care you need.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">

          {/* Contact Info Cards */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            {[
              {
                icon: MapPin,
                title: 'Omni RK Hospital',
                content: 'Ram Nagar, Visakhapatnam, Andhra Pradesh – 530002',
                color: '#22b0ff',
              },
              {
                icon: Phone,
                title: 'Call Us',
                content: '+91 81791 89919',
                link: 'tel:8179189919',
                sub: '24/7 Emergency Support',
                color: '#f5bc00',
              },
              {
                icon: Clock,
                title: 'OPD Timings',
                content: 'Mon – Sat: 6:00 PM – 9:00 PM',
                sub: 'Sunday: Emergency Cases Only',
                color: '#22b0ff',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="premium-card p-5 sm:p-7 flex items-start gap-4"
              >
                <div
                  className="p-3 rounded-xl shrink-0"
                  style={{ background: `${item.color}14`, border: `1px solid ${item.color}28` }}
                >
                  <item.icon size={20} style={{ color: item.color }} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-navy-950 mb-1">{item.title}</h3>
                  {item.link ? (
                    <a href={item.link} className="text-sm text-slate-500 hover:text-medical-600 transition-colors">
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-500 leading-relaxed">{item.content}</p>
                  )}
                  {item.sub && (
                    <p className="text-xs font-bold mt-1 uppercase tracking-wide" style={{ color: item.color }}>
                      {item.sub}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="premium-card p-7 sm:p-10 lg:p-12"
            >
              {/* Form header accent */}
              <div className="h-1 -mx-7 sm:-mx-10 lg:-mx-12 -mt-7 sm:-mt-10 lg:-mt-12 mb-8 rounded-t-3xl"
                   style={{ background: 'linear-gradient(90deg, #0090e8, #f5bc00)' }} />

              <h2 className="heading-md mb-7 text-navy-950">Send an Inquiry</h2>

              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {['First Name', 'Last Name'].map((label) => (
                    <div key={label}>
                      <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-widest">
                        {label}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3.5 rounded-xl text-sm border transition-all outline-none"
                        style={{
                          background: '#f8faff',
                          border: '1px solid rgba(14,23,99,0.1)',
                          color: '#0e1763',
                        }}
                        placeholder={label === 'First Name' ? 'John' : 'Doe'}
                        onFocus={(e) => { e.target.style.borderColor = '#0090e8'; e.target.style.boxShadow = '0 0 0 3px rgba(0,144,232,0.1)'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'rgba(14,23,99,0.1)'; e.target.style.boxShadow = 'none'; }}
                      />
                    </div>
                  ))}
                </div>

                {[
                  { label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                  { label: 'Phone Number', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-widest">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      className="w-full px-4 py-3.5 rounded-xl text-sm border transition-all outline-none"
                      style={{ background: '#f8faff', border: '1px solid rgba(14,23,99,0.1)', color: '#0e1763' }}
                      placeholder={field.placeholder}
                      onFocus={(e) => { e.target.style.borderColor = '#0090e8'; e.target.style.boxShadow = '0 0 0 3px rgba(0,144,232,0.1)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(14,23,99,0.1)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-widest">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-xl text-sm border transition-all outline-none resize-none"
                    style={{ background: '#f8faff', border: '1px solid rgba(14,23,99,0.1)', color: '#0e1763' }}
                    placeholder="How can we help you?"
                    onFocus={(e) => { e.target.style.borderColor = '#0090e8'; e.target.style.boxShadow = '0 0 0 3px rgba(0,144,232,0.1)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(14,23,99,0.1)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full py-4 text-sm font-bold flex items-center justify-center gap-3"
                >
                  Send Message
                  <Send size={17} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 sm:mt-20"
        >
          <div className="text-center mb-7">
            <h2 className="heading-md text-navy-950 mb-1">
              Find Us on <span className="text-gradient-medical">Map</span>
            </h2>
            <p className="text-slate-500 text-sm">Omni RK Hospital, Ram Nagar, Visakhapatnam</p>
          </div>
          <div className="premium-card overflow-hidden" style={{ borderRadius: '28px' }}>
            <iframe
              title="Omni RK Hospital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.9183267399!2d83.29864!3d17.72556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943b3a9b06c19%3A0x2df58b0f1b2b7e1e!2sOmni%20RK%20Hospital!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://maps.google.com/?q=Omni+RK+Hospital+Ram+Nagar+Visakhapatnam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold hover:opacity-80 transition-opacity text-sm"
              style={{ color: '#0090e8' }}
            >
              <MapPin size={15} />
              Open in Google Maps →
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
