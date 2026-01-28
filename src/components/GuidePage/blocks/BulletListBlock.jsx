import React from "react";

const BulletListBlock = ({ items }) => {
  return (
    <ul className="space-y-3 text-lg text-primary-pink">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-[#FF4B8B] mt-1">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default BulletListBlock;
