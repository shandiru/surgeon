import React from "react";
import iconMap from "../iconMap";
import { parseFormattedText } from "../utils/parseFormattedText";

const InfoBoxBlock = ({ title, description, icon }) => {
  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <div
      className="rounded-xl border p-6 bg-light-pink-1 space-y-2"
      style={{ borderColor: "rgb(255,197,211)" }}
    >
      <div className="flex items-center gap-2">
        {IconComponent && <IconComponent className="w-5 h-5 text-primary-pink" />}
        {title && <span className="font-bold text-primary-pink">{title}</span>}
      </div>
      <p className="text-base text-black leading-relaxed">{parseFormattedText(description)}</p>
    </div>
  );
};

export default InfoBoxBlock;
