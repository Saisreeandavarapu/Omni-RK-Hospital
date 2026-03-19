import { motion } from 'framer-motion';
import { Microscope, Award } from 'lucide-react';

export const ClinicalExpertise = () => {
  const cases = [
    {
      title: "Hepatolithiasis",
      desc: "Hepatolithiasis is a rare, infection-related condition characterized by the formation of stones within the intrahepatic bile ducts. Effective management often requires liver resection surgery, which plays a crucial role in addressing recurrent infections and preventing long-term complications.",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=720,h=408,fit=crop/YNqBeDa0NNS0aV4y/55-a-mP4OkD6PXrFDl2w4.jpg"
    },
    {
      title: "Hilar Cholangiocarcinoma",
      desc: "Hilar cholangiocarcinoma is a rare bile duct tumor located at the junction of the right and left hepatic ducts within the liver. Its management requires a comprehensive, multidisciplinary approach and often involves highly complex major liver resections to achieve optimal outcomes.",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=732,h=414,fit=crop/YNqBeDa0NNS0aV4y/hilar-rt-hepatectomy-A0xlPweLVlHl7bnz.jpg"
    },
    {
      title: "Radical Cholecystectomy",
      desc: "Radical cholecystectomy is a specialized surgical procedure performed for gallbladder cancer involving removal of the gallbladder along with surrounding tissues and lymph nodes. This advanced surgery is crucial for achieving complete cancer clearance and improving long-term outcomes.",
      image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=672,h=406,fit=crop/YNqBeDa0NNS0aV4y/56-a-m5KM9jn5pyHZB84n.jpg"
    }
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-medical-50 text-medical-600 rounded-full text-sm font-bold mb-6">
              <Award size={16} />
              <span>Surgical Excellence</span>
            </div>
            <h2 className="heading-lg mb-6">World-Class <span className="text-medical-600">Surgical Training</span></h2>
            <div className="w-20 h-1.5 bg-medical-600 rounded-full mb-8" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <p className="text-xl text-slate-700 leading-relaxed mb-6 font-medium">
              Dr. Rohith Mudadla received his surgical training at <span className="text-medical-600">Stanley Medical College, Chennai</span> — one of India’s top ten medical institutions and a premier center for liver surgeries and transplantation.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              With a strong passion for hepatobiliary surgery, he is committed to delivering dedicated, high-quality care for a wide range of liver conditions. Throughout his career, Dr. Mudadla has successfully performed numerous complex liver resections with excellent outcomes.
            </p>
          </motion.div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-slate-900 flex items-center justify-center gap-3">
            <Microscope className="text-medical-600" />
            Specialized Clinical Cases
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-slate-50 rounded-[40px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="p-8 pb-4">
                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-medical-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                  {item.desc}
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden mx-6 mb-6 rounded-3xl">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
