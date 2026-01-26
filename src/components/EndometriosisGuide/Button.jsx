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

const EndometriosisGuideButtons = ({ setShowCard, activeButton, setActiveButton }) => {
  const buttons = [
    { label: "Overview", icon: <Stethoscope className="w-4 h-4" />, card: 1 },
    { label: "Symptoms of Endometriosis", icon: <AlertCircle className="w-4 h-4" />, card: 2 },
    { label: "Impact on Fertility and Wellbeing", icon: <FileText className="w-4 h-4" />, card: 3 },
    { label: "What Causes Endometriosis", icon: <Shield className="w-4 h-4" />, card: 4 },
    {
      label: "Diagnosis of Endometriosis Cancer",
      icon: <CheckCircle className="w-4 h-4" />,
      card: 5,
    },
    { label: `How It's Diagnosed`, icon: <Heart className="w-4 h-4" />, card: 6 },
    { label: "Treatment Options", icon: <Users className="w-4 h-4" />, card: 7 },
  ];

  const handleButtonClick = (card, index) => {
    setShowCard(card);
    setActiveButton(index);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 md:gap-2 px-4 sm:px-6 max-w-6xl mx-auto mb-8">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(button.card, index)}
          className={`flex flex-col items-center justify-center text-center 
            w-full py-2 px-3
            font-semibold rounded-md 
            text-black bg-[#FF4B8B]/10 hover:bg-[#FF4B8B]/30 
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

export default EndometriosisGuideButtons;
