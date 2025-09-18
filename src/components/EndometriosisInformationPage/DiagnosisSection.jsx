// DiagnosisSection.jsx
import React from 'react';

const steps = [
  {
    title: 'Pelvic Examination',
    description: 'Your doctor will perform a physical examination to check for abnormalities.',
  },
  {
    title: 'Imaging Tests',
    description: 'Ultrasound or MRI scans to look for signs of endometriosis and cysts.',
  },
  {
    title: 'Laparoscopy',
    description:
      'A minor keyhole surgery using a thin camera to confirm diagnosis and sometimes take tissue samples.',
  },
];

const DiagnosisSection = () => {
  return (
    <section id="diagnosis" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#E91E63] mb-4">How It's Diagnosed</h2>
            <p className="text-lg text-[#666]">Understanding the diagnostic process</p>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white text-[#333] flex flex-col gap-6 rounded-xl border border-[#E91E63] py-6 shadow-sm"
              >
                <div className="px-6 pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#E91E63] text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                      <p className="text-[#555] leading-relaxed">{step.description}</p>
                    </div>
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
