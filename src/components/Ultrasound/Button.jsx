import React, { useState } from 'react';
import { Monitor, Stethoscope, Zap, FileText, CircleCheck, Heart } from 'lucide-react';

const UltraSoundButtons = ({ setShowCard }) => {

  const [activeButton, setActiveButton] = useState(0); // Track active button

  const buttons = [
    {
      label: 'What is Gynaecological Ultrasound?',
      icon: <Monitor className="w-4 h-4" />,
      card: 1,
    },
    {
      label: "Why It's Done",
      icon: <Stethoscope className="w-4 h-4" />,
      card: 2,
    },
    {
      label: 'Types of Ultrasound',
      icon: <Zap className="w-4 h-4" />,
      card: 3,
    },
    {
      label: 'During the Scan',
      icon: <FileText className="w-4 h-4" />,
      card: 4,
    },
    {
      label: 'After Your Scan',
      icon: <CircleCheck className="w-4 h-4" />,
      card: 5,
    },
    {
      label: 'Emotional Wellbeing',
      icon: <Heart className="w-4 h-4" />,
      card: 6,
    },
  ];

  const handleButtonClick = (card, index) => {
    setShowCard(card);
    setActiveButton(index); // Set active button
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 ml-15 xl:ml-25 max-w-6xl mx-auto mb-8">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(button.card, index)} // Update active button and card displayed
          className={`items-center justify-center text-center font-semibold text-[#BB125B] hover:bg-[#FF4B8B]/30 bg-[#FF4B8B]/10 whitespace-normal text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 rounded-md px-3 py-3 flex flex-col gap-1 relative max-w-full ${
            activeButton === index ? 'bg-[#FF4B8B]/50 text-black' : '' // Active button styling
          }`}
        >
          {button.icon}
          <span className="text-xs leading-tight">{button.label}</span>
        </button>
      ))}
    </div>
  );
};

export default UltraSoundButtons;
