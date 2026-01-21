import React from 'react';
import {
  Stethoscope,
  AlertCircle,
  FileText,
  Shield,
  CheckCircle,
  Heart,
  Users,
} from 'lucide-react';

const RoboticGuideButtons = ({ setShowCard, activeButton, setActiveButton }) => {
  const buttons = [
    { label: 'Robotic Surgery', icon: <Stethoscope className="w-4 h-4" />, card: 1 },
    { label: 'Overview', icon: <AlertCircle className="w-4 h-4" />, card: 2 },
    { label: "The da Vinci Surgical System", icon: <FileText className="w-4 h-4" />, card: 3 },
    { label: 'Applications in Gynecology', icon: <Shield className="w-4 h-4" />, card: 4 },
    { label: 'advantages and benefits', icon: <CheckCircle className="w-4 h-4" />, card: 5 },
    { label: 'Future of Gynecologic Surgery', icon: <Heart className="w-4 h-4" />, card: 6 },
  ];

  const handleButtonClick = (card, index) => {
    setShowCard(card);
    setActiveButton(index);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-2 px-4 sm:px-6 max-w-6xl mx-auto mb-8">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(button.card, index)}
          className={`flex flex-col items-center justify-center text-center 
            w-full py-2 px-3
            font-semibold rounded-md 
            text-[#BB125B] bg-[#FF4B8B]/10 hover:bg-[#FF4B8B]/30 
            text-button
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

export default RoboticGuideButtons;
