import React from "react";
import { parseFormattedText } from "../utils/parseFormattedText";

const TextBlock = ({ value }) => {
  return (
    <p className="text-lg leading-relaxed text-black [text-wrap:pretty]">{parseFormattedText(value)}</p>
  );
};

export default TextBlock;
