import { AboutDoctor } from '../components/AboutDoctor';
import { ClinicalExpertise } from '../components/ClinicalExpertise';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="section-padding py-10">
        <nav className="flex mb-8 text-sm font-medium text-slate-500 items-center gap-2">
          <Link to="/" className="hover:text-medical-600 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-medical-600">About Dr. Rohit Mudadla</span>
        </nav>
      </div>
      
      <AboutDoctor condensed={false} />

      <ClinicalExpertise />

      <div className="section-padding">
        <div className="bg-slate-50 rounded-[48px] p-12 lg:p-20 border border-slate-100">
           <div className="max-w-3xl">
              <h2 className="heading-lg mb-8">Why Choose <span className="text-medical-600">Omni RK Hospital?</span></h2>
              <div className="space-y-8">
                 <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                       <span className="text-medical-600 font-bold">01</span>
                    </div>
                    <div>
                       <h3 className="text-xl font-bold mb-2">Patient-Centric Approach</h3>
                       <p className="text-slate-600">We prioritize your comfort and well-being, providing personalized care plans that address your unique health needs.</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                       <span className="text-medical-600 font-bold">02</span>
                    </div>
                    <div>
                       <h3 className="text-xl font-bold mb-2">Advanced Technology</h3>
                       <p className="text-slate-600">Equipped with the latest surgical tools and imaging technology for high-precision outcomes and faster recovery.</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                       <span className="text-medical-600 font-bold">03</span>
                    </div>
                    <div>
                       <h3 className="text-xl font-bold mb-2">Multi-Disciplinary Expertise</h3>
                       <p className="text-slate-600">Collaborating with specialists across departments to ensure holistic treatment for complex cases.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

