import { motion } from 'framer-motion';
import { Microscope, Award } from 'lucide-react';
import { PremiumImage } from './PremiumImage';

export const ClinicalExpertise = () => {
  const cases = [
    {
      title: "Hepatolithiasis",
      desc: "Hepatolithiasis is a rare, infection-related condition characterized by stones within the intrahepatic bile ducts. Effective management often requires liver resection surgery to address recurrent infections and prevent long-term complications.",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=720,h=408,fit=crop/YNqBeDa0NNS0aV4y/55-a-mP4OkD6PXrFDl2w4.jpg"
    },
    {
      title: "Hilar Cholangiocarcinoma",
      desc: "Hilar cholangiocarcinoma is a rare bile duct tumor at the junction of hepatic ducts within the liver. Its management requires a multidisciplinary approach and highly complex major liver resections to achieve optimal outcomes.",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=732,h=414,fit=crop/YNqBeDa0NNS0aV4y/hilar-rt-hepatectomy-A0xlPweLVlHl7bnz.jpg"
    },
    {
      title: "Radical Cholecystectomy",
      desc: "Radical cholecystectomy is a specialized procedure for gallbladder cancer involving removal of the gallbladder with surrounding tissues and lymph nodes, crucial for complete cancer clearance and improving long-term outcomes.",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=672,h=406,fit=crop/YNqBeDa0NNS0aV4y/56-a-m5KM9jn5pyHZB84n.jpg"
    }
  ];

  return (
    <section className="section-padding overflow-hidden" style={{ background: '#f8faff' }}>
      {/* Training block */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start mb-16 sm:mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/3"
        >
          <div className="badge-gold mb-5">
            <Award size={13} />Surgical Excellence
          </div>
          <h2 className="heading-lg mb-5 text-navy-950">
            World-Class{' '}
            <span className="text-gradient-medical">Surgical Training</span>
          </h2>
          <div className="h-0.5 w-16 rounded-full" style={{ background: 'linear-gradient(90deg, #0090e8, #f5bc00)' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-2/3"
        >
          <p className="text-lg sm:text-xl text-navy-900 leading-relaxed mb-4 font-medium">
            Dr. Rohith Mudadla received his surgical training at{' '}
            <span style={{ color: '#0090e8' }}>Stanley Medical College, Chennai</span>{' '}
            — one of India's top ten medical institutions and a premier center for liver surgeries and transplantation.
          </p>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
            With a strong passion for hepatobiliary surgery, he is committed to delivering dedicated, high-quality care for a wide range of liver conditions. Dr. Mudadla has successfully performed numerous complex liver resections with excellent outcomes.
          </p>
        </motion.div>
      </div>

      {/* Cases header */}
      <div className="text-center mb-12">
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy-950 flex items-center justify-center gap-3">
          <Microscope style={{ color: '#0090e8' }} size={28} />
          Specialized Clinical Cases
        </h3>
      </div>

      {/* Cases grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {cases.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group premium-card overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="relative overflow-hidden group/img w-full rounded-t-3xl">
              <PremiumImage
                src={item.image}
                alt={item.title}
                containerClassName="w-full aspect-[4/3]"
                imgWrapperClassName="w-full h-full rounded-none"
                className="grayscale-[0.3] group-hover:grayscale-0"
                overlayContent={
                  <>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                         style={{ background: 'linear-gradient(to top, rgba(8,12,56,0.5), transparent)' }} />
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-30"
                         style={{ background: 'linear-gradient(90deg, #f5bc00, #0090e8)' }} />
                  </>
                }
              />
            </div>

            <div className="p-6 flex-1">
              <h4 className="font-heading text-lg font-bold text-navy-950 mb-3 group-hover:text-medical-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
