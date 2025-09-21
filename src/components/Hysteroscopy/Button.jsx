import React, { useState } from 'react';
import { Monitor, AlertCircle, FileText, Camera, Heart, Shield } from 'lucide-react';

const HysterosButtons = ({ setShowCard, activeButton, setActiveButton }) => {

  const buttons = [
    {
      label: 'What is Hysteroscopy?',
      icon: <Monitor className="w-4 h-4" />,
      card: 1,
    },
    {
      label: 'Why You Might Need One',
      icon: <AlertCircle className="w-4 h-4" />,
      card: 2,
    },
    {
      label: 'Preparing for the Procedure',
      icon: <FileText className="w-4 h-4" />,
      card: 3,
    },
    {
      label: 'During the Procedure',
      icon: <Camera className="w-4 h-4" />,
      card: 4,
    },
    {
      label: 'Recovery & Aftercare',
      icon: <Heart className="w-4 h-4" />,
      card: 5,
    },
    {
      label: 'When to Seek Help',
      icon: <Shield className="w-4 h-4" />,
      card: 6,
    },
  ];

  const handleButtonClick = (card, index) => {
    setShowCard(card);
    setActiveButton(index); // Set active button
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 ml-4 sm:ml-6 xl:ml-12 max-w-6xl mx-auto mb-8">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(button.card, index)} // Update active button and card displayed
          className={`items-center -ml-2 sm:ml-0 justify-center text-center font-semibold text-[#BB125B] hover:bg-[#FF4B8B]/30 bg-[#FF4B8B]/10 whitespace-normal text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 rounded-md px-3 py-3 flex flex-col gap-1 relative max-w-full ${
            activeButton === index ? 'bg-[#FF4B8B]/50 text-black' : '' // Active button styling
          }`}
        >
          {button.icon}
          <span className="text-xs sm:text-sm leading-tight">{button.label}</span>
        </button>
      ))}
    </div>
  );
};

export default HysterosButtons;
