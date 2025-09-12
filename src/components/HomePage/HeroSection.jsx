import React from "react";

const HeroSectionView = () => {
  return (
    <section className="relative bg-[#fff7f9] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Section */}
          <div>
            {/* Badge */}
            <div className="mb-4">
              <span className="inline-block border border-[#FFC5D3] text-[#FFC5D3] text-xs font-semibold px-3 py-1 rounded-full">
                Consultant Gynaecological Oncologist
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Expert Care in{" "}
              <span className="text-[#FFC5D3]">Women's Health</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With 26 years of dedicated experience in gynaecological oncology,
              providing compassionate, evidence-based care for women across Nottingham and beyond.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 h-10 rounded-md bg-[#FFC5D3] text-white shadow-sm hover:shadow-[0_0_15px_2px_rgba(255,197,211,0.5)] hover:-translate-y-0.5 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M3 10h18" />
                </svg>
                Schedule Consultation
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 h-10 rounded-md border border-[#FFC5D3] text-[#FFC5D3] hover:bg-[#ffe5ec] hover:shadow-[0_0_15px_2px_rgba(255,197,211,0.4)] hover:-translate-y-0.5 transition-all"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Experience Icons */}
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#FFC5D3]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span>26+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#FFC5D3]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span>NHS & Private Practice</span>
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-6 relative transition-all duration-300 hover:shadow-[0_0_30px_4px_rgba(255,197,211,0.4)] hover:-translate-y-1">
              <img
                src="/doctor.png"
                alt="Mr Ketankumar Gajjar"
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#FFC5D3] text-white px-4 py-3 rounded-xl shadow-md">
                <div className="text-center">
                  <div className="text-xl font-bold leading-none">26</div>
                  <div className="text-xs mt-1">Years Experience</div>
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
