"use client";
import React from "react";
import { Bed, Wrench, Droplet, Search, Sparkles } from "lucide-react";

const Colposcopycard3 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6">
      {/* Card Container */}
      <div className="max-w-sm sm:max-w-2xl lg:max-w-5xl text-black mx-auto mb-10 flex flex-col gap-6 rounded-xl border border-light-pink-2 py-6 shadow-sm animate-in slide-in-from-right-5 duration-300">
        {/* Card Header */}
        <div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
          <div className="leading-none font-semibold flex items-center gap-2 text-primary-pink">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-file-text w-6 h-6 text-primary"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
            </svg>
            How a Colposcopy Is Done
          </div>
          <div className="text-black text-sm">
            Step-by-step walkthrough of the procedure
          </div>
        </div>

        {/* Card Content */}
        <div className="px-6 space-y-4">
          {/* Steps Section */}
          <div className="space-y-4">
            {[
              {
                step: "Positioning",
                icon: <Bed className="w-5 h-5 text-primary-pink" />,
                description: "You'll lie on an examination table, just like during a smear test",
              },
              {
                step: "Speculum Insertion",
                icon: <Wrench className="w-5 h-5 text-primary-pink" />,
                description: "A speculum is gently inserted to hold the vagina open",
              },
              {
                step: "Solution Application",
                icon: <Droplet className="w-5 h-5 text-primary-pink" />,
                description: "A vinegar-like solution is applied to highlight abnormal cells",
              },
              {
                step: "Examination",
                icon: <Search className="w-5 h-5 text-primary-pink" />,
                description: "The colposcope examines your cervix and vulva from outside your body",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 bg-white rounded-lg border hover:z-50 transition-all duration-300 hover:bg-light-pink-1 hover:shadow-lg border-primary-pink active:bg-light-pink-1 active:shadow-lg active:border-primary-pink hover:scale-105 active:scale-100"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-light-pink-2 rounded-full flex items-center justify-center font-bold text-primary-pink">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1 flex items-center gap-2 text-primary-pink">
                    <span>{item.icon}</span>
                    {item.step}
                  </h4>
                  <p className="text-black text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="bg-light-pink-1 p-4 rounded-lg border border-primary-pink">
            <h4 className="font-semibold mb-2 flex items-center gap-2 text-primary-pink">
              <Sparkles className="w-5 h-5 text-primary-pink" />
              Good to Know
            </h4>
            <p className="text-sm">
              The colposcope stays <strong>outside your body</strong> — it does not go inside the
              vagina. Think of it like a special microscope that gives your doctor a better view.
            </p>
          </div>

          {/* Learn About Biopsies Button */}
          <div className="pt-4">
            <button
              onClick={() => {
                setShowCard(4); // move to Card 4
                setActiveButton(3); // index for Card 4
              }}
              className="inline-flex items-center bg-primary-pink hover:bg-primary-pink/80 text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full cursor-pointer"
            >
              Learn About Biopsies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colposcopycard3;
