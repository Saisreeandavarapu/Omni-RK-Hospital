import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Send, Activity } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-20 sm:pt-24 pb-12 sm:pb-16" style={{ background: '#f8faff' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.div initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }}>
            <div className="badge-gold mx-auto mb-3 inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold">
              <Activity size={12} /> Get In Touch
            </div>
            <h1 className="heading-xl mb-2 text-navy-950 text-base sm:text-xl md:text-2xl">
              Book a <span className="text-gradient-medical">Consultation</span>
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
              Have questions about a treatment or want to book an appointment? We're here to help you get the care you need.
            </p>
          </motion.div>
        </div>

        {/* Grid: Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">

          {/* Contact Cards */}
          <div className="lg:col-span-1 flex flex-col gap-2 sm:gap-3">
            {[
              { icon: MapPin, title: 'Omni RK Hospital', content: 'Ram Nagar, Visakhapatnam – 530002', color: '#22b0ff' },
              { icon: Phone, title: 'Call Us', content: '+91 81791 89919', link: 'tel:8179189919', sub: '24/7 Emergency', color: '#f5bc00' },
              { icon: Clock, title: 'OPD Timings', content: 'Mon – Sat: 6:00 PM – 9:00 PM', sub: 'Sunday: Emergency Only', color: '#22b0ff' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="premium-card p-3 sm:p-4 flex items-start gap-2 sm:gap-3 text-sm"
              >
                <div className="p-2 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${item.color}14`, border: `1px solid ${item.color}28` }}>
                  <item.icon size={16} style={{ color: item.color }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-navy-950 text-xs sm:text-sm">{item.title}</h3>
                  {item.link ? (
                    <a href={item.link} className="text-xs sm:text-[11px] text-slate-500 hover:text-medical-600 transition-colors">
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-xs sm:text-[11px] text-slate-500">{item.content}</p>
                  )}
                  {item.sub && (
                    <p className="text-[9px] sm:text-[10px] font-bold mt-0.5 uppercase tracking-wide" style={{ color: item.color }}>
                      {item.sub}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 mt-3 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="premium-card p-4 sm:p-6 lg:p-8"
            >
              <div className="h-1 -mx-4 sm:-mx-6 lg:-mx-8 -mt-4 sm:-mt-6 lg:-mt-8 mb-4 rounded-t-3xl"
                style={{ background: 'linear-gradient(90deg, #0090e8, #f5bc00)' }} />

              <h2 className="heading-md mb-4 text-navy-950 text-sm sm:text-base md:text-lg">Send an Inquiry</h2>

              <form className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {['First Name', 'Last Name'].map((label) => (
                    <div key={label}>
                      <label className="block text-[9px] sm:text-[10px] font-bold text-slate-600 mb-1 uppercase tracking-widest">{label}</label>
                      <input
                        type="text"
                        placeholder={label === 'First Name' ? 'John' : 'Doe'}
                        className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm border outline-none transition-all"
                        style={{ background: '#f8faff', border: '1px solid rgba(14,23,99,0.1)', color: '#0e1763' }}
                        onFocus={(e) => { e.target.style.borderColor = '#0090e8'; e.target.style.boxShadow = '0 0 0 2px rgba(0,144,232,0.1)'; }}
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
                    <label className="block text-[9px] sm:text-[10px] font-bold text-slate-600 mb-1 uppercase tracking-widest">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm border outline-none transition-all"
                      style={{ background: '#f8faff', border: '1px solid rgba(14,23,99,0.1)', color: '#0e1763' }}
                      onFocus={(e) => { e.target.style.borderColor = '#0090e8'; e.target.style.boxShadow = '0 0 0 2px rgba(0,144,232,0.1)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(14,23,99,0.1)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-[9px] sm:text-[10px] font-bold text-slate-600 mb-1 uppercase tracking-widest">Message</label>
                  <textarea
                    rows={3}
                    placeholder="How can we help you?"
                    className="w-full px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm border outline-none resize-none transition-all"
                    style={{ background: '#f8faff', border: '1px solid rgba(14,23,99,0.1)', color: '#0e1763' }}
                    onFocus={(e) => { e.target.style.borderColor = '#0090e8'; e.target.style.boxShadow = '0 0 0 2px rgba(0,144,232,0.1)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(14,23,99,0.1)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full py-2.5 sm:py-3 text-xs sm:text-sm flex items-center justify-center gap-1.5 font-bold"
                >
                  Send Message
                  <Send size={15} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};