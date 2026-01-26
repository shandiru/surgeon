import React from "react";
import { FileText, Clock, Heart, Zap, Stethoscope } from "lucide-react";

const UltrasoundCard4 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="UltrasoundCard2">
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-black mx-auto mb-10 flex flex-col gap-6 rounded-xl border border-light-pink-2 py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">
        {/* Card Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 border-b pb-6">
          <div className="leading-none font-semibold flex items-center gap-2">
            <FileText className="w-6 h-6 text-primary-pink" />
            What Happens During the Scan
          </div>
          <div className="text-black text-sm">Step-by-step walkthrough of the procedure</div>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-4">
          {/* Steps Section */}
          <div className="space-y-4">
            {[
              {
                step: <Stethoscope className="w-6 h-6" />,
                title: "Positioning",
                description: "You'll lie on an examination couch in a comfortable position",
                number: "1",
              },
              {
                step: <Zap className="w-6 h-6" />,
                title: "Gel Application",
                description: "A small amount of warm gel is placed on your lower abdomen",
                number: "2",
              },
              {
                step: <Heart className="w-6 h-6" />,
                title: "Scanning",
                description: "The ultrasound probe is moved gently across the skin",
                number: "3",
              },
              {
                step: <Clock className="w-6 h-6" />,
                title: "Transvaginal (if needed)",
                description:
                  "For internal scan, probe is covered with sheath and lubricated before gentle insertion",
                number: "4",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 bg-white rounded-lg border border-light-pink-2 hover:z-50 transition-all duration-300 hover:bg-light-pink-1 hover:border-light-pink-2 active:bg-light-pink-1 active:shadow-lg active:border-light-pink-2 hover:scale-105 active:scale-100"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-primary-pink rounded-full flex items-center justify-center text-white font-bold">
                    {item.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1 flex items-center gap-2">
                    {item.step} {item.title}
                  </h4>
                  <p className="text-black text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Duration & Comfort Section */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-light-pink-1 p-4 rounded-lg border border-primary-pink">
              <h4 className="font-semibold text-primary-pink mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Duration
              </h4>
              <p className="text-sm">
                The scan usually takes about <strong>10–15 minutes</strong>
              </p>
            </div>
            <div className="bg-light-pink-1 p-4 rounded-lg border border-light-pink-2">
              <h4 className="font-semibold text-primary-pink mb-2">
                <Zap className="inline w-5 h-5 mr-2 text-primary-pink" /> Comfort
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
              className="inline-flex items-center bg-primary-pink hover:bg-primary-pink/80 text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full cursor-pointer"
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
