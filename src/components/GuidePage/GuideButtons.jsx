import iconMap from "./iconMap";

const GuideButtons = ({ sections, setShowCard, activeButton, setActiveButton }) => {
  const handleButtonClick = (card, index) => {
    setShowCard(card);
    setActiveButton(index);
  };

  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8
      gap-3 sm:gap-4 md:gap-2 px-4 sm:px-6 max-w-6xl mx-auto mb-8 lg:px-0"
    >
      {sections.map((section, index) => {
        const IconComponent = iconMap[section.buttonIcon] || iconMap.Info;
        return (
          <button
            key={section.id}
            onClick={() => handleButtonClick(section.id, index)}
            className={`
              flex flex-col items-center justify-center text-center w-full py-2 px-3 font-semibold rounded-md bg-light-pink-1 hover:bg-light-pink-2 text-button cursor-pointer transition-all
              ${activeButton === index ? "bg-light-pink-2 text-black" : ""}
            `}
          >
            <IconComponent className="w-4 h-4 mb-2" />
            <span className="leading-tight text-base">{section.buttonLabel}</span>
          </button>
        );
      })}
    </div>
  );
};

export default GuideButtons;
