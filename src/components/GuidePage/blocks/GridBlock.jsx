import React from "react";
import iconMap from "../iconMap";
import { parseFormattedText } from "../utils/parseFormattedText";

const GridBlock = ({ columns = 3, items }) => {
  const colClassMap = {
    1: "grid grid-cols-1 gap-6",
    2: "grid md:grid-cols-2 gap-6",
    3: "grid md:grid-cols-3 gap-6",
    4: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
  };
  const colClass = colClassMap[columns] || "grid md:grid-cols-3 gap-6";

  return (
    <div className={colClass}>
      {items.map((item, i) => {
        const IconComponent = item.icon ? iconMap[item.icon] : null;
        return (
          <div
            key={i}
            className="rounded-xl border p-6 bg-light-pink-1 text-center space-y-3
              transition duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg border-primary-pink"
          >
            {IconComponent && (
              <div className="w-12 h-12 rounded-full bg-light-pink-2 flex items-center justify-center mx-auto">
                <IconComponent className="w-6 h-6 text-primary-pink" />
              </div>
            )}
            {item.title && <h4 className="font-bold text-primary-pink">{item.title}</h4>}
            {item.description && <p className="text-sm text-black">{parseFormattedText(item.description)}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default GridBlock;
