import React from "react";
import { Heart, Shield, Users } from "lucide-react";

const cards = [
  {
    id: 1,
    icon: <Heart className="w-12 h-12 mx-auto mb-4 text-[#FF4B8B]" />,
    title: "Common & Normal",
    description: "Lumps are very common at all ages and most are completely harmless",
  },
  {
    id: 2,
    icon: <Shield className="w-12 h-12 mx-auto mb-4 text-[#FF4B8B]" />,
    title: "Professional Care",
    description: "Getting checked by a healthcare provider gives peace of mind",
  },
  {
    id: 3,
    icon: <Users className="w-12 h-12 mx-auto mb-4 text-[#FF4B8B]" />,
    title: "You're Not Alone",
    description: "Many people experience this - support and information are available",
  },
];

const VulvarVaginalLumpsSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h1 className="text-4xl md:text-5xl font-bold mt-10 mb-6 text-balance text-[#FF4B8B]">
          Understanding Vulvar &amp; Vaginal Lumps
        </h1>
        <p className="text-xl mb-8 text-pretty leading-relaxed text-[#FF4B8B]">
          Lumps or bumps can appear on the external area (vulva) or the internal vaginal walls. They
          are common at all ages and often harmless. Most lumps are not serious, but it's always
          best to get them checked by your doctor.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col gap-6 rounded-xl py-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-[0_0_25px_rgba(176,59,102,0.25)] hover:-translate-y-2 hover:scale-105 active:scale-100 bg-[#FF4B8B]/10 text-[#FF4B8B]"
            >
              <div className="p-6 text-center">
                {card.icon}
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-black">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VulvarVaginalLumpsSection;
