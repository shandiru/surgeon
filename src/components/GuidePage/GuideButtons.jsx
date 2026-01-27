import React from "react";
import iconMap from "./iconMap";

const GuideButtons = ({ sections, setShowCard, activeButton, setActiveButton }) => {
  const handleButtonClick = (card, index) => {
    setShowCard(card);
    setActiveButton(index);
  };

  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8
      gap-3 sm:gap-4 md:gap-2 px-4 sm:px-6 max-w-6xl mx-auto mb-8"
    >
      {sections.map((section, index) => {
        const IconComponent = iconMap[section.buttonIcon] || iconMap.Info;
        return (
          <button
            key={section.id}
            onClick={() => handleButtonClick(section.id, index)}
            className={`
              flex flex-col items-center justify-center text-center
              w-full py-2 px-3
              font-semibold rounded-md
              text-[#BB125B] bg-[#FF4B8B]/10 hover:bg-[#FF4B8B]/30
              text-button transition-all
              ${activeButton === index ? "bg-[#FF4B8B]/50 text-black" : ""}
            `}
          >
            <IconComponent className="w-4 h-4" />
            <span className="leading-tight">{section.buttonLabel}</span>
          </button>
        );
      })}
    </div>
  );
};

export default GuideButtons;
