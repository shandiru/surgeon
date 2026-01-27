import React from "react";
import iconMap from "../iconMap";

const HeadingBlock = ({ text, level = 2, icon, subtitle }) => {
  const IconComponent = icon ? iconMap[icon] : null;

  const headingClass =
    level === 2
      ? "text-3xl md:text-4xl font-bold text-[#FF4B8B] [text-wrap:balance]"
      : level === 3
        ? "text-2xl md:text-3xl font-semibold text-[#FF4B8B]"
        : "text-xl md:text-2xl font-semibold text-[#FF4B8B]";

  const Tag = `h${level}`;

  return (
    <div className="space-y-2">
      {IconComponent && (
        <div className="w-12 h-12 rounded-full bg-[#FF4B8B]/10 flex items-center justify-center mb-3">
          <IconComponent className="w-6 h-6 text-[#FF4B8B]" />
        </div>
      )}
      <Tag className={headingClass}>{text}</Tag>
      {subtitle && (
        <p className="text-body-large text-[#7a2f4f]">{subtitle}</p>
      )}
    </div>
  );
};

export default HeadingBlock;
