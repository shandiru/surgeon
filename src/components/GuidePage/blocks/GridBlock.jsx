import React from "react";
import iconMap from "../iconMap";

const GridBlock = ({ columns = 3, items }) => {
  const colClass = columns === 2 ? "grid md:grid-cols-2 gap-6" : "grid md:grid-cols-3 gap-6";

  return (
    <div className={colClass}>
      {items.map((item, i) => {
        const IconComponent = item.icon ? iconMap[item.icon] : null;
        return (
          <div
            key={i}
            className="rounded-xl border p-6 bg-light-pink-1 text-center space-y-3
              transition duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
            style={{ borderColor: "rgb(255,197,211)" }}
          >
            {IconComponent && (
              <div className="w-12 h-12 rounded-full bg-light-pink-2 flex items-center justify-center mx-auto">
                <IconComponent className="w-6 h-6 text-primary-pink" />
              </div>
            )}
            {item.title && <h4 className="font-bold text-primary-pink">{item.title}</h4>}
            {item.description && <p className="text-sm text-black">{item.description}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default GridBlock;
