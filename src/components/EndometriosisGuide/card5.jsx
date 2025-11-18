import { useState } from "react";

const Endometriosiscard5 = ({ setShowCard, setActiveButton }) => {

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

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-6 p-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FF4B8B] mb-4">
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
                transition duration-300 hover:shadow-[0_0_25px_rgba(176,59,102,0.35)] 
                hover:-translate-y-2 active:scale-[0.98]"
              >
                <div className="flex items-start gap-6">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-[#FF4B8B] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-semibold text-xl text-[#FF4B8B] mb-2">
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
          {/* NEXT BUTTON */}
          <div className="pt-2 p-6 mt-2">
            <button
              onClick={() => {
                setShowCard(6);
                setActiveButton(5);
              }}
              className="w-full bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white rounded-md h-10 px-4 flex items-center justify-center text-sm font-medium transition"
            >
              Learn About Treatment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Endometriosiscard5;
