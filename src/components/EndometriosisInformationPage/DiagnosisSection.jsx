// DiagnosisSection.jsx
import React from 'react';

const steps = [
  {
    title: 'Pelvic Examination',
    description:
      'Your doctor will perform a physical examination to check for abnormalities.',
  },
  {
    title: 'Imaging Tests',
    description:
      'Ultrasound or MRI scans to look for signs of endometriosis and cysts.',
  },
  {
    title: 'Laparoscopy',
    description:
      'A minor keyhole surgery using a thin camera to confirm diagnosis and sometimes take tissue samples.',
  },
];

const DiagnosisSection = () => {
  return (
    <section id="diagnosis" className="py-20 bg-[#FFF5F8]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#b03b66] mb-4">
              How It&apos;s Diagnosed
            </h2>
            <p className="text-lg text-gray-700">
              Understanding the diagnostic process
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white text-[#333] rounded-2xl shadow-md p-6 md:p-8 
                transition duration-300 hover:shadow-[0_0_25px_rgba(255,151,179,0.35)] 
                hover:-translate-y-2 active:scale-[0.98]"
              >
                <div className="flex items-start gap-6">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-[#ff97b3] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-semibold text-xl text-[#b03b66] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosisSection;
