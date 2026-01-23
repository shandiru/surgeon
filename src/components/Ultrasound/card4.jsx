import React from 'react';
import { FileText, Clock, Heart, Zap, Stethoscope } from 'lucide-react';

const UltrasoundCard4 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="UltrasoundCard2">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">
        {/* Card Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 border-b pb-6">
          <div className="leading-none font-semibold flex items-center gap-2">
            <FileText className="w-6 h-6 text-primary" />
            What Happens During the Scan
          </div>
          <div className="text-muted-foreground text-sm">Step-by-step walkthrough of the procedure</div>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-4">
          {/* Steps Section */}
          <div className="space-y-4">
            {[{
              step: <Stethoscope className="w-6 h-6" />,
              title: "Positioning",
              description: "You'll lie on an examination couch in a comfortable position",
              number: "1"
            }, {
              step: <Zap className="w-6 h-6" />,
              title: "Gel Application",
              description: "A small amount of warm gel is placed on your lower abdomen",
              number: "2"
            }, {
              step: <Heart className="w-6 h-6" />,
              title: "Scanning",
              description: "The ultrasound probe is moved gently across the skin",
              number: "3"
            }, {
              step: <Clock className="w-6 h-6" />,
              title: "Transvaginal (if needed)",
              description: "For internal scan, probe is covered with sheath and lubricated before gentle insertion",
              number: "4"
            }].map((item, index) => (
              <div key={index} className="flex gap-4 p-4 bg-card rounded-lg border hover:z-50 transition-all duration-300 hover:bg-[#fce3e8]  hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd] hover:scale-105 active:scale-100">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {item.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1 flex items-center gap-2">{item.step} {item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Duration & Comfort Section */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Duration
              </h4>
              <p className="text-sm">The scan usually takes about <strong>10–15 minutes</strong></p>
            </div>
            <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
              <h4 className="font-semibold text-accent-foreground mb-2">
                <Zap className="inline w-5 h-5 mr-2 text-accent-foreground" /> Comfort
              </h4>
              <p className="text-sm">Most patients find the procedure comfortable and painless</p>
            </div>
          </div>

          {/* Button to Learn About the Procedure */}
          <div className="pt-4">
            <button
              onClick={() => {
                setShowCard(5);
                setActiveButton(4);
              }}
              className="inline-flex items-center bg-primary-pink hover:bg-primary-pink/80 text-black justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[&_svg]:px-3 w-full"
            >
              Learn What Happens After
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltrasoundCard4;
