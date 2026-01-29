import React from "react";
import iconMap from "../iconMap";

const HeadingBlock = ({ text, level = 2, icon, subtitle }) => {
  const IconComponent = icon ? iconMap[icon] : null;

  const headingClass =
    level === 2
      ? "text-3xl md:text-4xl font-bold text-primary-pink [text-wrap:balance]"
      : level === 3
        ? "text-2xl md:text-3xl font-semibold text-primary-pink"
        : "text-xl md:text-2xl font-semibold text-primary-pink";

  const Tag = `h${level}`;

  return (
    <div className="space-y-3 my-4">
      <div className="flex items-center justify-start gap-3 mb-3">
        {IconComponent && (
          <div className="w-12 h-12 rounded-full bg-light-pink-2 flex items-center justify-center ">
            <IconComponent className="w-6 h-6 text-primary-pink " />
          </div>
        )}
        <Tag className={headingClass}>{text}</Tag>
      </div>
      {subtitle && <p className="text-body-large text-black">{subtitle}</p>}
    </div>
  );
};

export default HeadingBlock;
