import React from "react";
import iconMap from "../iconMap";

const GridBlock = ({ columns = 3, items }) => {
  const colClass =
    columns === 2
      ? "grid md:grid-cols-2 gap-6"
      : "grid md:grid-cols-3 gap-6";

  return (
    <div className={colClass}>
      {items.map((item, i) => {
        const IconComponent = item.icon ? iconMap[item.icon] : null;
        return (
          <div
            key={i}
            className="rounded-xl border p-6 bg-[#FFF5F8] text-center space-y-3
              transition duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
            style={{ borderColor: "rgb(255,197,211)" }}
          >
            {IconComponent && (
              <div className="w-12 h-12 rounded-full bg-[#FF4B8B]/10 flex items-center justify-center mx-auto">
                <IconComponent className="w-6 h-6 text-[#FF4B8B]" />
              </div>
            )}
            {item.title && (
              <h4 className="font-bold text-[#BB125B]">{item.title}</h4>
            )}
            {item.description && (
              <p className="text-sm text-[#7a2f4f]">{item.description}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default GridBlock;
