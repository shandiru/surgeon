import React from 'react';
import {
  Info,
  Activity,
  AlertTriangle,
  Eye,
  ScanSearch,
  Syringe,
  ShieldCheck,
  BookmarkCheck
} from "lucide-react";


const FibroidGuideButtons = ({ setShowCard, activeButton, setActiveButton }) => {
const buttons = [
  { label: 'What Are Fibroids', icon: <Info className="w-4 h-4" />, card: 1 },
  { label: 'Symptoms of Fibroids', icon: <Activity className="w-4 h-4" />, card: 2 },
  { label: 'Types of Fibroids', icon: <AlertTriangle className="w-4 h-4" />, card: 3 },
  { label: 'Causes & Risk Factors', icon: <Eye className="w-4 h-4" />, card: 4 },
  { label: 'Fertility & Pregnancy', icon: <ScanSearch className="w-4 h-4" />, card: 5 },
  { label: 'Emotional Wellbeing', icon: <Syringe className="w-4 h-4" />, card: 6 },
  { label: 'Treatment Options', icon: <ShieldCheck className="w-4 h-4" />, card: 7 },
  { label: 'Self-Care Tips', icon: <BookmarkCheck className="w-4 h-4" />, card: 8 },
  
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

export default FibroidGuideButtons;
