import { AboutDoctor } from '../components/AboutDoctor';
import { ClinicalExpertise } from '../components/ClinicalExpertise';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-20 sm:pt-32 pb-16 sm:pb-20">
      <div className="section-padding py-6 sm:py-10">
        <nav className="flex mb-8 text-sm font-medium text-slate-500 items-center gap-2">
          <Link to="/" className="hover:text-medical-600 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-medical-600">About Dr. Rohit Mudadla</span>
        </nav>
      </div>
      
      <AboutDoctor condensed={false} />

      <ClinicalExpertise />

      <div className="section-padding">
        <div className="bg-slate-50 rounded-[28px] sm:rounded-[48px] p-6 sm:p-12 lg:p-20 border border-slate-100">
           <div className="max-w-3xl">
              <h2 className="heading-lg mb-6 sm:mb-8">Why Choose <span className="text-medical-600">Omni RK Hospital?</span></h2>
              <div className="space-y-5 sm:space-y-8">
                 <div className="flex gap-4 sm:gap-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                       <span className="text-medical-600 font-bold text-sm sm:text-base">01</span>
                    </div>
                    <div>
                       <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Patient-Centric Approach</h3>
                       <p className="text-slate-600 text-sm sm:text-base">We prioritize your comfort and well-being, providing personalized care plans that address your unique health needs.</p>
                    </div>
                 </div>
                 <div className="flex gap-4 sm:gap-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                       <span className="text-medical-600 font-bold text-sm sm:text-base">02</span>
                    </div>
                    <div>
                       <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Advanced Technology</h3>
                       <p className="text-slate-600 text-sm sm:text-base">Equipped with the latest surgical tools and imaging technology for high-precision outcomes and faster recovery.</p>
                    </div>
                 </div>
                 <div className="flex gap-4 sm:gap-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                       <span className="text-medical-600 font-bold text-sm sm:text-base">03</span>
                    </div>
                    <div>
                       <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Multi-Disciplinary Expertise</h3>
                       <p className="text-slate-600 text-sm sm:text-base">Collaborating with specialists across departments to ensure holistic treatment for complex cases.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

