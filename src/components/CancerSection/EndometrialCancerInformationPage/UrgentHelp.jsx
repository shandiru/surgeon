import React from 'react';
import { TrendingUp, ShieldAlert, Clock, Phone } from 'lucide-react'; // Import Lucide icons

const cardData = [
  {
    id: 1,
    icon: <TrendingUp className="w-10 h-10 text-destructive/10" />,
    title: 'Rapidly growing lump',
    description: 'Any lump that increases in size quickly over days or weeks',
  },
  {
    id: 2,
    icon: <ShieldAlert className="w-10 h-10 text-destructive/10" />,
    title: 'Severe pain, fever or spreading redness',
    description: 'Signs of serious infection that need immediate treatment',
  },
  {
    id: 3,
    icon: <ShieldAlert className="w-10 h-10 text-destructive/10" />,
    title: 'Bleeding that won\'t stop',
    description: 'Persistent or heavy bleeding from the affected area',
  },
  {
    id: 4,
    icon: <Clock className="w-10 h-10 text-destructive/10" />,
    title: 'Lumps appearing after menopause',
    description: 'New lumps in post-menopausal women require prompt evaluation',
  },
];

const UrgentHelp = () => {
  return (
    <section id="urgent-help" className="py-16 bg-destructive/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl text-[#d60d64] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">🚨 When to Seek Urgent Help</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Get medical advice quickly if you notice any of these warning signs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm hover:z-50 transition-all duration-300 hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd] hover:scale-105 active:scale-100"
              >
                <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 text-center pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                      {card.icon}
                    </div>
                    <div className="font-semibold text-lg text-destructive">{card.title}</div>
                  </div>
                </div>
                <div className="px-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Urgent Help Call To Action */}
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-destructive" />
                <div>
                  <h3 className="font-semibold text-destructive">Need Immediate Help?</h3>
                  <p className="text-sm text-muted-foreground">Don't wait if you're experiencing urgent symptoms</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <button className="inline-flex items-center bg-[#FF4B8B]/10 justify-center gap-2 rounded-md text-sm font-medium transition-all shadow-sm hover:bg-[#FF4B8B]/90 hover:text-white h-9 px-4 py-2">
                  Call Emergency Services
                </button>
                <button className="inline-flex items-center justify-center px-4 gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border shadow-xs bg-transparent text-destructive hover:bg-destructive hover:text-destructive-foreground border-destructive">
                  Find Urgent Care
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgentHelp;
