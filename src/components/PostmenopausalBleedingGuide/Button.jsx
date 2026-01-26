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

const PostmenopausalBleedingGuideButtons = ({ setShowCard, activeButton, setActiveButton }) => {
  const buttons = [
    { label: "What Is Postmenopausal Bleeding?", icon: <Info className="w-4 h-4" />, card: 1 },
    { label: "How Common Is It?", icon: <Activity className="w-4 h-4" />, card: 2 },
    {
      label: "Causes of Postmenopausal Bleeding",
      icon: <AlertTriangle className="w-4 h-4" />,
      card: 3,
    },
    { label: "Symptoms You Might Notice", icon: <Eye className="w-4 h-4" />, card: 4 },
    { label: "Risk Factors", icon: <ScanSearch className="w-4 h-4" />, card: 5 },
    { label: "How It’s Diagnosed", icon: <Syringe className="w-4 h-4" />, card: 6 },
    { label: "When to Seek Urgent Help", icon: <ShieldCheck className="w-4 h-4" />, card: 7 },
    { label: "Emotional Wellbeing", icon: <BookmarkCheck className="w-4 h-4" />, card: 8 },
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
            text-black bg-[#FF4B8B]/10 hover:bg-[#FF4B8B]/30 
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

export default PostmenopausalBleedingGuideButtons;
