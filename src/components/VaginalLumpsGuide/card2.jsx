'use client';
import React, { useState } from 'react';
import {
  CircleAlert,
  CircleDashed,
  Circle,
  ChevronRight,
} from 'lucide-react';

const VaginalLumpsGuideCard2 = ({ setShowCard, setActiveButton }) => {
  // Accordion state
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Data for items
  const causes = [
    {
      icon: <CircleAlert className="w-6 h-6" style={{ color: '#FF4B8B' }} />,
      title: 'Vaginal Cysts',
      desc: 'Pouch-like sacs that can contain pus, air, or scar tissue',
      bullets: [
        'Usually small and painless',
        "Bartholin\'s cysts – near the vaginal opening",
        'Endometriosis cysts – caused by endometriosis tissue',
        "Gartner\'s duct cysts – often during pregnancy",
        'Inclusion cysts – from vaginal trauma, e.g., after childbirth',
      ],
    },

    {
      icon: <CircleDashed className="w-6 h-6" style={{ color: '#FF4B8B' }} />,
      title: 'Vaginal Polyps (Skin Tags)',
      desc: 'Small, soft outgrowths of skin',
      bullets: [
        'Usually harmless and painless',
        'Treated only if they bleed or cause discomfort',
        'Can appear as small, flesh-colored bumps',
        'May develop due to hormonal changes or irritation',
      ],
    },

    {
      icon: <CircleAlert className="w-6 h-6" style={{ color: '#FF4B8B' }} />,
      title: 'Vaginal Warts or Herpes Blisters',
      desc: 'Caused by viral infections (HPV or herpes)',
      bullets: [
        'Warts are caused by HPV (a common STI)',
        'May appear as small, irregular growths around the vaginal opening',
        'Herpes can cause blisters or sores that may look like pimples',
        'Both conditions are treatable with proper medical care',
      ],
    },

    {
      icon: <Circle className="w-6 h-6" style={{ color: '#FF4B8B' }} />,
      title: 'Vaginal Cancer (Rare)',
      desc: 'Uncommon but requires immediate medical attention',
      bullets: [
        'Can cause persistent lumps',
        'May also cause unusual bleeding or discharge',
        'Advanced symptoms can include pelvic pain, back pain, constipation or leg swelling',
        'These symptoms are more commonly caused by infections or benign lumps',
      ],
    },
  ];

  return (
    <div className="space-y-6 pb-10 px-3">
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10 rounded-2xl p-8 border shadow-sm animate-in slide-in-from-right-5 duration-300"
        style={{ backgroundColor: '#FFFFFF', borderColor: 'rgb(255,197,211)' }}
      >
        {/* Title */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl font-bold mb-3"
            style={{ color: 'rgb(255,75,139)' }}
          >
            Common Causes of Vulvar & Vaginal Lumps
          </h2>
          <p className="text-lg text-gray-700">
            Understanding the different types of lumps can help you know what to expect
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {causes.map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl bg-white py-6 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01] active:scale-[0.99]"
            >
              {/* Header */}
              <div
                className="cursor-pointer px-6 pb-2"
                onClick={() => toggle(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {item.icon}
                    <div>
                      <div
                        className="font-semibold text-left"
                        style={{ color: '#FF4B8B' }}
                      >
                        {item.title}
                      </div>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>

                  {/* Rotate chevron on open */}
                  <ChevronRight
                    className={`w-6 h-6 transition-transform ${
                      openIndex === index ? 'rotate-90' : ''
                    }`}
                    style={{ color: '#FF4B8B' }}
                  />
                </div>
              </div>

              {/* Dropdown Content */}
              {openIndex === index && (
                <ul className="px-14 space-y-1 list-disc text-sm text-gray-700 transition-all duration-300">
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Continue Button */}
        <div className="pt-10 flex justify-center">
          <button
            onClick={() => {
              setShowCard(3);
              setActiveButton(2);
            }}
            className="bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md h-10 text-sm font-medium transition-all"
          >
            Continue to Next Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default VaginalLumpsGuideCard2;
