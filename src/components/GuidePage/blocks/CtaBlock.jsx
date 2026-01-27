import React from "react";
import iconMap from "../iconMap";

const CtaBlock = ({ label, icon }) => {
  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <div className="flex justify-center">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="inline-flex items-center gap-2 justify-center bg-primary-pink
        hover:bg-primary-pink/80 text-white rounded-full text-sm font-medium
        transition-all h-12 px-8"
      >
        {IconComponent && <IconComponent className="w-5 h-5" />}
        {label}
      </button>
    </div>
  );
};

export default CtaBlock;
