import React from 'react';
import { Monitor, Stethoscope, Zap, FileText, CircleCheck, Heart } from 'lucide-react';

const UltraSoundButtons = ({ setShowCard, activeButton, setActiveButton }) => {
  const buttons = [
    { label: 'What is Gynaecological Ultrasound?', icon: <Monitor className="w-4 h-4" />, card: 1 },
    { label: "Why It's Done", icon: <Stethoscope className="w-4 h-4" />, card: 2 },
    { label: 'Types of Ultrasound', icon: <Zap className="w-4 h-4" />, card: 3 },
    { label: 'During the Scan', icon: <FileText className="w-4 h-4" />, card: 4 },
    { label: 'After Your Scan', icon: <CircleCheck className="w-4 h-4" />, card: 5 },
    { label: 'Emotional Wellbeing', icon: <Heart className="w-4 h-4" />, card: 6 },
  ];

  const handleButtonClick = (card, index) => {
    setShowCard(card);
    setActiveButton(index);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 px-4 sm:px-6 xl:px-12 max-w-6xl mx-auto mb-8">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(button.card, index)}
          className={`flex flex-col items-center justify-center text-center 
            w-full py-2 sm:py-3 px-3 sm:px-4 
            font-semibold rounded-md 
            text-[#BB125B] bg-[#FF4B8B]/10 hover:bg-[#FF4B8B]/30 
            text-xs sm:text-sm md:text-base 
            transition-all 
            ${activeButton === index ? 'bg-[#FF4B8B]/50 text-black' : ''}`}
        >
          {button.icon}
          <span className="leading-tight">{button.label}</span>
        </button>
      ))}
    </div>
  );
};

export default UltraSoundButtons;