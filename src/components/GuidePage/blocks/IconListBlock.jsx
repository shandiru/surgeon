import React from "react";
import iconMap from "../iconMap";

const IconListBlock = ({ items }) => {
  return (
    <ul className="space-y-4">
      {items.map((item, i) => {
        const IconComponent = item.icon ? iconMap[item.icon] : null;
        return (
          <li key={i} className="flex items-start gap-3 text-lg text-[#7a2f4f]">
            {IconComponent && (
              <span className="mt-1 text-[#FF4B8B]">
                <IconComponent className="w-5 h-5" />
              </span>
            )}
            <span>{item.text}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default IconListBlock;
