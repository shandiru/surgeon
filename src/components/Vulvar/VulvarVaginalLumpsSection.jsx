import React from 'react';
import { Heart, Shield, Users } from 'lucide-react'; // Importing Lucide icons

const cards = [
  {
    id: 1,
    icon: <Heart className="w-12 h-12 text-primary mx-auto mb-4" />,
    title: "Common & Normal",
    description: "Lumps are very common at all ages and most are completely harmless",
  },
  {
    id: 2,
    icon: <Shield className="w-12 h-12 text-primary mx-auto mb-4" />,
    title: "Professional Care",
    description: "Getting checked by a healthcare provider gives peace of mind",
  },
  {
    id: 3,
    icon: <Users className="w-12 h-12 text-primary mx-auto mb-4" />,
    title: "You're Not Alone",
    description: "Many people experience this - support and information are available",
  },
];

const VulvarVaginalLumpsSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#d60d64] mt-10 mb-6 text-balance">
          Understanding Vulvar &amp; Vaginal Lumps
        </h1>
        <p className="text-xl text-[#d60d64] mb-8 text-pretty leading-relaxed">
          Lumps or bumps can appear on the external area (vulva) or the internal vaginal walls. They are common at all ages and often harmless. Most lumps are not serious, but it's always best to get them checked by your doctor.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {cards.map((card) => (
            <div key={card.id} className="text-[#d60d64] bg-[#FF4B8B]/10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm border-primary/20 hover:border-primary/40 transition-colors">
              <div className="p-6 text-center">
                {card.icon}
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VulvarVaginalLumpsSection;
