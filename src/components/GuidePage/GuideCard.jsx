import React from "react";
import BlockRenderer from "./blocks/BlockRenderer";
import iconMap from "./iconMap";

const GuideCard = ({ section, totalSteps, setShowCard, setActiveButton }) => {
  const isLastSection = section.id === totalSteps;
  const layout = section.layout || "single-column";
  const content = section.content || [];
  const CardTitleIcon = section.cardTitleIcon ? iconMap[section.cardTitleIcon] : null;

  // Separate image blocks from other content for two-column layout
  const imageBlocks = content.filter((b) => b.type === "image");
  const otherBlocks = content.filter((b) => b.type !== "image");

  const renderBlocks = (blocks) =>
    blocks.map((block, i) => (
      <div key={i}>
        <BlockRenderer block={block} />
      </div>
    ));

  const renderContent = () => {
    if (layout === "two-column") {
      return (
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 px-2 sm:px-4 lg:px-8 text-black">
            <h2 className="text-3xl flex md:text-4xl font-bold text-primary-pink items-start justify-end gap-3">
              {CardTitleIcon && <CardTitleIcon className="w-8 h-8 shrink-0" />}
              {section.cardTitle}
            </h2>
            {renderBlocks(otherBlocks)}
          </div>
          {imageBlocks.length > 0 && <div>{renderBlocks(imageBlocks)}</div>}
        </div>
      );
    }

    // single-column and three-column-grid both render blocks sequentially
    return (
      <div className="space-y-6 px-2 sm:px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black [text-wrap:balance] text-center flex items-center justify-center gap-3">
          {CardTitleIcon && <CardTitleIcon className="w-8 h-8 shrink-0" />}
          {section.cardTitle}
        </h2>
        {renderBlocks(content)}
      </div>
    );
  };

  return (
    <div className="space-y-6 pb-10">
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10
        flex flex-col gap-6 rounded-2xl border shadow-sm
        animate-in slide-in-from-right-5 duration-300 p-8"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: "rgb(255,197,211)",
        }}
      >
        {renderContent()}

        {/* Navigation Button */}
        <div className="pt-6 flex justify-center">
          {!isLastSection ? (
            <button
              onClick={() => {
                setShowCard(section.id + 1);
                setActiveButton(section.id);
              }}
              className="inline-flex items-center justify-center bg-primary-pink
              hover:bg-primary-pink/80 text-white rounded-md text-sm font-medium
              transition-all h-10 px-4 w-[90%] md:w-[70%] lg:w-[40%] cursor-pointer"
            >
              Continue to Next Section
            </button>
          ) : (
            <div className="text-center text-[#BB125B] font-semibold text-lg">Guide Complete</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
