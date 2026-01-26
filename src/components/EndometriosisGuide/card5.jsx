import { useState } from "react";

const Endometriosiscard5 = ({ setShowCard, setActiveButton }) => {
  const steps = [
    {
      title: "Pelvic Examination",
      description: "Your doctor will perform a physical examination to check for abnormalities.",
    },
    {
      title: "Imaging Tests",
      description: "Ultrasound or MRI scans to look for signs of endometriosis and cysts.",
    },
    {
      title: "Laparoscopy",
      description:
        "A minor keyhole surgery using a thin camera to confirm diagnosis and sometimes take tissue samples.",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10">
      <div className="max-w-4xl p-6 mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF4B8B] mb-3">
            How It&apos;s Diagnosed
          </h2>
          <p className="text-base sm:text-lg text-black">Understanding the diagnostic process</p>
        </div>

        {/* Steps */}
        <div className="space-y-6 sm:space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white text-[#333] rounded-2xl shadow-md 
                         p-5 sm:p-7 md:p-8 
                         transition duration-300 
                         hover:shadow-[0_0_25px_rgba(176,59,102,0.35)] 
                         hover:-translate-y-1 md:hover:-translate-y-2 
                         active:scale-[0.98]"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                {/* Number */}
                <div
                  className="min-w-[48px] min-h-[48px] sm:min-w-[56px] sm:min-h-[56px] 
                                bg-[#FF4B8B] text-white 
                                rounded-full flex items-center justify-center 
                                font-bold text-lg sm:text-xl shadow-md"
                >
                  {index + 1}
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl md:text-2xl text-[#FF4B8B] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-black text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* NEXT BUTTON */}
        <div className="pt-6 sm:pt-8">
          <button
            onClick={() => {
              setShowCard(6);
              setActiveButton(5);
            }}
            className="w-full bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 
                       text-white rounded-md 
                       h-10 sm:h-12 
                       text-sm sm:text-base font-medium 
                       transition flex items-center justify-center"
          >
            Learn About Treatment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Endometriosiscard5;
