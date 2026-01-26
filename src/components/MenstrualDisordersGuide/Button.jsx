import React from "react";
import {
  Stethoscope,
  AlertCircle,
  FileText,
  Shield,
  CheckCircle,
  Heart,
  Users,
} from "lucide-react";

const MenstrualDisordersGuideButtons = ({ setShowCard, activeButton, setActiveButton }) => {
  const buttons = [
    { label: "Overview", icon: <Stethoscope className="w-4 h-4" />, card: 1 },
    {
      label: `What's a Normal Menstrual Cycle?`,
      icon: <AlertCircle className="w-4 h-4" />,
      card: 2,
    },
    { label: "Types of Menstrual Disorders", icon: <FileText className="w-4 h-4" />, card: 3 },
    { label: "Symptoms to Watch For", icon: <Shield className="w-4 h-4" />, card: 4 },
    { label: "Causes & Risk Factors", icon: <CheckCircle className="w-4 h-4" />, card: 5 },
    { label: "Treatment Options", icon: <Heart className="w-4 h-4" />, card: 6 },
    { label: "Prevention and Early Management", icon: <Users className="w-4 h-4" />, card: 7 },
    { label: "Key Takeaway", icon: <AlertCircle className="w-4 h-4" />, card: 8 },
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
            text-button
            transition-all 
            ${activeButton === index ? "bg-light-pink-2 text-black" : ""}`}
        >
          {button.icon}
          <span className="leading-tight">{button.label}</span>
        </button>
      ))}
    </div>
  );
};

export default MenstrualDisordersGuideButtons;
