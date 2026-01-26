import React from "react";
import {
  Info,
  Activity,
  AlertTriangle,
  Eye,
  ScanSearch,
  Syringe,
  ShieldCheck,
  BookmarkCheck,
} from "lucide-react";

const OvarianCystsGuideButtons = ({ setShowCard, activeButton, setActiveButton }) => {
  const buttons = [
    { label: "What Are Ovarian Cysts?", icon: <Info className="w-4 h-4" />, card: 1 },
    { label: "See Your Doctor If You Have", icon: <Activity className="w-4 h-4" />, card: 2 },
    { label: "Types of Ovarian Cysts", icon: <AlertTriangle className="w-4 h-4" />, card: 3 },
    { label: "Symptoms of Ovarian Cysts", icon: <Eye className="w-4 h-4" />, card: 4 },
    { label: "Risk Factors", icon: <ScanSearch className="w-4 h-4" />, card: 5 },
    { label: "Fertility & Pregnancy", icon: <Syringe className="w-4 h-4" />, card: 6 },
    { label: "How Cysts Are Diagnosed", icon: <ShieldCheck className="w-4 h-4" />, card: 7 },
    { label: "Surgery to Remove Cysts", icon: <BookmarkCheck className="w-4 h-4" />, card: 8 },
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
            text-black bg-light-pink-1 hover:bg-primary-pink/30 
            text-button leading-tight
            transition-all 
            ${activeButton === index ? "bg-light-pink-2 text-black" : ""}`}
        >
          {button.icon}
          <span>{button.label}</span>
        </button>
      ))}
    </div>
  );
};

export default OvarianCystsGuideButtons;
