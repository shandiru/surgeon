import React from 'react';

const HeroSectionView = () => {
  return (
    <section className="relative bg-gradient-to-r from-cyan-50 to-sky-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Text Section */}
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap bg-[#c3eefa]/20 text-[#5a9bb8]">
                Consultant Gynaecological Oncologist
              </span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Expert Care in <span className="text-[#5a9bb8]">Women's Health</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With 26 years of dedicated experience in gynaecological oncology, providing compassionate, evidence-based care for women across Nottingham and beyond.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all shadow-xs h-10 rounded-md px-6 bg-[#c3eefa] hover:bg-[#a8d5e8] text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M8 2v4" /><path d="M16 2v4" /><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M3 10h18" />
                </svg>
                Schedule Consultation
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all border shadow-xs h-10 rounded-md px-6 hover:bg-gray-100 text-gray-900">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Icons Row */}
            <div className="flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#5a9bb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" />
                </svg>
                <span>26+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#5a9bb8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" />
                </svg>
                <span>NHS & Private Practice</span>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative">
              <img
                src="/doctor.png" // <- Update the path to match your project structure
                alt="Mr Ketankumar Gajjar - Professional Portrait"
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#c3eefa] text-gray-900 p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">26</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSectionView;
