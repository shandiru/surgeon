// CausesSection.jsx
import React from 'react';

const causes = [
  'Retrograde (backward) menstruation',
  'Genetics (family history)',
  'Immune system disorders',
  'Hormonal imbalances',
];

const CausesSection = () => {
  return (
    <section className="py-16 bg-[#ffe5ec]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#E91E63]">
            What Causes Endometriosis?
          </h2>
          <p className="text-lg text-[#555] mb-8">
            The exact cause is unknown, but research suggests several possible factors:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {causes.map((item, index) => (
              <div
                key={index}
                className="bg-white text-[#333] flex flex-col gap-6 rounded-xl border border-[#E91E63] py-6 shadow-sm text-center"
              >
                <div className="px-6 pt-6">
                  <div className="w-12 h-12 bg-[#E91E63]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-[#E91E63] rounded-full" />
                  </div>
                  <p className="font-medium">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CausesSection;
