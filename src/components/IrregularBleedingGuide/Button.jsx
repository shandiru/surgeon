import React from 'react';
import {
  Info,
  TriangleAlert,
  Stethoscope,
  FileText,
  TestTube,
  Pill
} from "lucide-react";

const IrregularBleedingGuideButtons = ({ setShowCard, activeButton, setActiveButton }) => {

  // ✅ Updated buttons (only 6)
  const buttons = [
    { label: 'Overview', icon: <Info size={16} />, card: 1 },
    { label: 'Causes', icon: <TriangleAlert size={16} />, card: 2 },
    { label: 'When to Seek Help', icon: <Stethoscope size={16} />, card: 3 },
    { label: 'What to Track', icon: <FileText size={16} />, card: 4 },
    { label: 'Your Appointment', icon: <TestTube size={16} />, card: 5 },
    { label: 'Treatment', icon: <Pill size={16} />, card: 6 }
  ];

  const handleButtonClick = (card, index) => {
    setShowCard(card);
    setActiveButton(index);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 
                    gap-3 sm:gap-4 px-4 sm:px-6 max-w-5xl mx-auto mb-8">

      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(button.card, index)}
          className={`flex flex-col items-center justify-center text-center 
            w-full py-2 px-3 rounded-md text-button font-semibold 
            text-[#BB125B] bg-primary-pink hover:bg-primary-pink/30 transition-all
            ${activeButton === index ? 'bg-primary-pink/50 text-black shadow-md' : ''}`}
        >
          {button.icon}
          <span className="leading-tight mt-1">{button.label}</span>
        </button>
      ))}

    </div>
  );
};

export default IrregularBleedingGuideButtons;
