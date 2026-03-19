import { motion } from 'framer-motion';
import { Play, Youtube, ExternalLink } from 'lucide-react';

export const VideoSection = () => {
  const videos = [
    {
      id: "rYoHyp9OngA",
      title: "FirstLap.Proctocolectomy & Ileal Pouch",
      desc: "Advanced surgical protocol for complex colorectal procedures."
    },
    {
      id: "9EHx2mBd56g",
      title: "Laparoscopic Cholecystectomy",
      desc: "Advanced keyhole surgery in complex anatomical conditions."
    }
  ];

  return (
    <section className="section-padding bg-slate-50 overflow-hidden">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-bold mb-6">
            <Youtube size={16} />
            <span>Surgical Insights</span>
          </div>
          <h2 className="heading-xl mb-4">Advanced <span className="text-medical-600">Surgical Protocols</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Dr. Rohit Mudadla shares expert surgical protocols and minimally invasive techniques to advance the field of Gastroenterology.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {videos.map((video, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group relative"
          >
            <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-6 px-4">
              <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center justify-between">
                {video.title}
                <a 
                  href={`https://www.youtube.com/watch?v=${video.id}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-red-600 transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{video.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a 
          href="https://www.youtube.com/@FirstLapProtocol" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition-all shadow-xl hover:shadow-red-500/25 active:scale-95"
        >
          <Play size={20} fill="currentColor" />
          <span>View More on YouTube</span>
        </a>
      </div>
    </section>
  );
};
