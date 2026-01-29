import React from "react";
import { parseFormattedText } from "../utils/parseFormattedText";

const BulletListBlock = ({ items }) => {
  return (
    <ul className="space-y-3 text-lg text-primary-pink">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-primary-pink mt-1">•</span>
          <span>{parseFormattedText(item)}</span>
        </li>
      ))}
    </ul>
  );
};

export default BulletListBlock;
