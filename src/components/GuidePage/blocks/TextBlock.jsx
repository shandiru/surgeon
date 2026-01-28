import React from "react";

const parseBold = (text) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const TextBlock = ({ value }) => {
  return (
    <p className="text-lg leading-relaxed text-black [text-wrap:pretty]">{parseBold(value)}</p>
  );
};

export default TextBlock;
