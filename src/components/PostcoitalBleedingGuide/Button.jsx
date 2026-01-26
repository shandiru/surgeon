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

const PostcoitalBleedingGuideButtons = ({ setShowCard, activeButton, setActiveButton }) => {
  const buttons = [
    { label: "What Is Postcoital Bleeding", icon: <Info className="w-4 h-4" />, card: 1 },
    { label: "Is It Painful?", icon: <Activity className="w-4 h-4" />, card: 2 },
    {
      label: "Where Does the Bleeding Come From?",
      icon: <AlertTriangle className="w-4 h-4" />,
      card: 3,
    },
    { label: "When to Seek Urgent Help", icon: <Eye className="w-4 h-4" />, card: 4 },
    {
      label: "What to Track Before Your Appointment",
      icon: <ScanSearch className="w-4 h-4" />,
      card: 5,
    },
    { label: "Self-Care Tips", icon: <Syringe className="w-4 h-4" />, card: 6 },
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
            text-black bg-light-pink-1 hover:bg-light-pink-2
            text-button
            transition-all cursor-pointer
            ${activeButton === index ? "bg-light-pink-2 text-black" : ""}`}
        >
          {button.icon}
          <span className="leading-tight">{button.label}</span>
        </button>
      ))}
    </div>
  );
};

export default PostcoitalBleedingGuideButtons;
