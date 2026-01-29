import React from "react";

/**
 * Parses **bold** markers in text
 */
const parseBold = (text) => {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

/**
 * Parses text with **bold** and \n\n line breaks
 * @param {string} text - The text to parse
 * @returns {React.ReactNode} - Parsed JSX with bold and line breaks
 */
export const parseFormattedText = (text) => {
  if (!text) return null;

  // Split by \n\n to create line breaks
  const lines = text.split(/\n\n+/);

  return lines.map((line, index) => (
    <React.Fragment key={index}>
      {index > 0 && (
        <>
          <br />
          <br />
        </>
      )}
      {parseBold(line)}
    </React.Fragment>
  ));
};

export default parseFormattedText;
