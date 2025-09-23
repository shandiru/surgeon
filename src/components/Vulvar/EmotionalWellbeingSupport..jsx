import React from 'react';
import { Heart, Shield, MessageCircle, Users } from 'lucide-react'; // Importing Lucide icons

const cards = [
  {
    id: 1,
    icon: <Heart className="w-12 h-12 text-primary mx-auto mb-4" />,
    title: "It's Normal to Feel Worried",
    description: "Lumps on intimate areas can feel worrying or embarrassing - these feelings are completely normal and valid.",
  },
  {
    id: 2,
    icon: <Shield className="w-12 h-12 text-primary mx-auto mb-4" />,
    title: "Most Are Harmless",
    description: "The vast majority of lumps are not cancer and are easily treatable or resolve on their own.",
  },
  {
    id: 3,
    icon: <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />,
    title: "Ask Questions",
    description: "It's okay to ask questions and get reassurance from your healthcare provider - we are here to help.",
  },
  {
    id: 4,
    icon: <Users className="w-12 h-12 text-primary mx-auto mb-4" />,
    title: "You're Not Alone",
    description: "Many people experience similar concerns. Support groups and resources are available.",
  },
];

const EmotionalWellbeingSupport = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 text-[#d60d64]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Emotional Wellbeing &amp; Support
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Your emotional health is just as important as your physical health
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Dynamic Cards */}
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl  py-6 shadow-sm hover:z-50 transition-all duration-300 hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd] hover:scale-105 active:scale-100"
              >
                <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 text-center pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      {card.icon}
                    </div>
                    <div className="font-semibold text-lg">{card.title}</div>
                  </div>
                </div>
                <div className="px-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Remember Section */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                <Heart className="inline-block mr-2 text-[#d60d64]" />
                Remember
              </h3>
              <div className="space-y-2 mb-6">
                <p className="text-muted-foreground">• Vulvar and vaginal lumps are common and usually harmless</p>
                <p className="text-muted-foreground">• Most are not cancerous and are easily treatable</p>
                <p className="text-muted-foreground">• Getting checked gives peace of mind and fast treatment if needed</p>
                <p className="text-muted-foreground font-medium">• If you notice a lump or bump, book an appointment — don't wait and worry alone</p>
              </div>
              <div className="flex justify-center space-x-4">
                <button className="inline-flex items-center bg-[#FF4B8B]/10 hover:bg-[#fce3e8] justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2">
                  Book Appointment
                </button>
                <button className="inline-flex items-center hover:bg-[#FF4B8B]/10 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                  Find Support Groups
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalWellbeingSupport;
