import React from 'react';
import { Stethoscope, Activity, CircleCheck, Heart, Shield, Lightbulb } from 'lucide-react';

const HysteroscopyCard1 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6">
      <div
        data-slot="card"
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300"
      >
        <div
          data-slot="card-header"
          className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
        >
          <div
            data-slot="card-title"
            className="leading-none font-semibold flex items-center gap-2"
          >
            <Stethoscope className="w-6 h-6 text-primary" />
            What Is a Hysteroscopy?
          </div>
        </div>

        <div data-slot="card-content" className="px-6 space-y-4">
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
            <p className="text-lg leading-relaxed">
              A hysteroscopy is a <strong>simple procedure</strong> that allows a doctor to look inside your uterus (womb) using a thin telescope-like camera called a hysteroscope.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Activity className="w-4 h-4 text-accent" />
                Two Types
              </h4>
              <div className="space-y-2">
                <div className="p-3 bg-card rounded-lg border">
                  <h5 className="font-medium text-primary">Diagnostic Hysteroscopy</h5>
                  <p className="text-sm text-muted-foreground">To diagnose problems</p>
                </div>
                <div className="p-3 bg-card rounded-lg border">
                  <h5 className="font-medium text-accent">Operative Hysteroscopy</h5>
                  <p className="text-sm text-muted-foreground">To treat problems</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <CircleCheck className="w-4 h-4 text-accent" />
                Quick Facts
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CircleCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Usually takes 5–10 minutes for diagnosis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Up to 30 minutes if treatment is done</span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Safe and effective procedure</span>
                </li>
                <li className="flex items-start gap-2">
                  <CircleCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Usually done as outpatient</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-accent/10 p-4 rounded-lg">
            <h4 className="flex items-start gap-2">
              <Lightbulb className="w-5 h-5" /> Remember
            </h4>
            <p className="text-sm">
              Hysteroscopy is commonly offered for abnormal bleeding or fertility issues. It's a safe way to find and treat common womb problems.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={() => {
                setShowCard(2);       // move to Card 4
                setActiveButton(1);   // index for Card 4
              }}
              className="inline-flex items-center bg-primary-pink hover:bg-primary-pink/80 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[&_svg]:px-3 w-full"
            >
              Continue to Next Section
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HysteroscopyCard1;
