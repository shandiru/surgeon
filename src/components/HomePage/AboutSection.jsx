import React from 'react';

const AboutSectionView = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Mr Ketankumar Gajjar</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A leading consultant in gynaecological oncology, dedicated to providing exceptional care and advancing women's health through clinical excellence and research.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <div className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border shadow-sm text-center p-6 hover:shadow-md transition">
            <div className="bg-[#ffc5d3]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ffc5d3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M11 2v2" /><path d="M5 2v2" /><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" /><path d="M8 15a6 6 0 0 0 12 0v-3" /><circle cx="20" cy="10" r="2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Clinical Excellence</h3>
            <p className="text-gray-600">
              Providing world-class care with the latest evidence-based treatments and techniques.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border shadow-sm text-center p-6 hover:shadow-md transition">
            <div className="bg-[#ffc5d3]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ffc5d3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Compassionate Care</h3>
            <p className="text-gray-600">
              Supporting patients and families through every step of their healthcare journey.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl border shadow-sm text-center p-6 hover:shadow-md transition">
            <div className="bg-[#ffc5d3]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ffc5d3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                <circle cx="12" cy="8" r="6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Research & Innovation</h3>
            <p className="text-gray-600">
              Contributing to medical advancement through research and professional leadership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionView;
