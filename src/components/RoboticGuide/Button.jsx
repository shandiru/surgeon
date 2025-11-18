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
    { label: 'Overview', icon: <Stethoscope className="w-4 h-4" />, card: 1 },
    { label: 'How It Starts', icon: <AlertCircle className="w-4 h-4" />, card: 2 },
    { label: "Key Risk Factors", icon: <FileText className="w-4 h-4" />, card: 3 },
    { label: 'Symptoms of Robotic Cancer', icon: <Shield className="w-4 h-4" />, card: 4 },
    { label: 'Diagnosis of Robotic Cancer', icon: <CheckCircle className="w-4 h-4" />, card: 5 },
    { label: 'Treatment of Robotic Cancer', icon: <Heart className="w-4 h-4" />, card: 6 },
  ];

  const handleButtonClick = (card, index) => {
    setShowCard(card);
    setActiveButton(index);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 md:gap-2 px-4 sm:px-6 max-w-6xl mx-auto mb-8">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(button.card, index)}
          className={`flex flex-col items-center justify-center text-center 
            w-full py-2 px-3
            font-semibold rounded-md 
            text-[#BB125B] bg-[#FF4B8B]/10 hover:bg-[#FF4B8B]/30 
            text-sm
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
