import React from "react";
import { parseFormattedText } from "../utils/parseFormattedText";

const StatBoxBlock = ({ stat, description }) => {
  return (
    <div
      className="rounded-xl border p-6 shadow-md bg-light-pink-1 backdrop-blur-sm max-w-md mx-auto lg:mx-0"
      style={{ borderColor: "rgb(255,197,211)" }}
    >
      <div className="text-4xl font-extrabold mb-2 text-primary-pink">{stat}</div>
      <p className="text-base text-primary-pink/90 leading-relaxed">{parseFormattedText(description)}</p>
    </div>
  );
};

export default StatBoxBlock;
