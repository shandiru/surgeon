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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#b03b66]">
            What Causes Endometriosis?
          </h2>
          <p className="text-lg text-gray-700">
            The exact cause is unknown, but research suggests several possible factors:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {causes.map((item, index) => (
            <div
              key={index}
              className="bg-white text-[#333] flex flex-col items-center justify-center p-8 rounded-2xl shadow-md 
              transition duration-300 hover:shadow-[0_0_25px_rgba(176,59,102,0.4)] hover:-translate-y-2 active:scale-[0.98]"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-[#b03b66]/20 rounded-full flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-[#b03b66] rounded-full" />
              </div>

              {/* Text */}
              <p className="font-medium text-center text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CausesSection;
