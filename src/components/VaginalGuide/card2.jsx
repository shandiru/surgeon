"use client";
import React from "react";

const VaginalCard2 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 px-3">
      {/* Card Container */}
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10 flex flex-col gap-6 rounded-2xl border py-8 px-6 shadow-sm animate-in slide-in-from-right-5 duration-300"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: "rgb(255,197,211)",
        }}
      >
        {/* Card Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5">
          <div
            className="leading-none font-semibold flex items-center gap-2"
            style={{ color: "#FF4B8B" }}
          >
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
              className="lucide lucide-circle-alert w-6 h-6 text-primary-pink"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" x2="12" y1="8" y2="12"></line>
              <line x1="12" x2="12.01" y1="16" y2="16"></line>
            </svg>
            How Vaginal Cancer Develops
          </div>
        </div>

        {/* Card Content */}
        <div className="space-y-6">
          {/* Intro Section */}
          <div
            className="p-4 rounded-xl border transition-all duration-300"
            style={{
              backgroundColor: "#FFF5F8",
              borderColor: "rgb(255,197,211)",
            }}
          >
            <p className="text-base leading-relaxed" style={{ color: "#7a2f4f" }}>
              Vaginal cancer usually begins in the cells that line the surface of the vagina. Most
              cases develop slowly over time and may first appear as
              <strong>
                {" "}
                pre-cancerous changes called VAIN (Vaginal Intraepithelial Neoplasia)
              </strong>
              . Understanding how it starts helps with early detection and better treatment
              outcomes.
            </p>
          </div>

          {/* Types Section Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Main Types Section */}
            <div>
              <h4 className="font-semibold mb-3" style={{ color: "#FF4B8B" }}>
                Main Types
              </h4>

              <div className="space-y-3">
                {[
                  {
                    title: "Squamous Cell Carcinoma (Most Common — 85–90%)",
                    desc: "Forms in the thin, flat cells lining the vagina. Often begins as VAIN, which can be detected before turning into cancer.",
                  },
                  {
                    title: "Adenocarcinoma",
                    desc: "Develops in gland-like cells inside the vagina. Less common but may spread more easily than other types.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl border transition-all duration-300 hover:shadow-md"
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderColor: "rgb(255,197,211)",
                    }}
                  >
                    <div className="font-semibold mb-1" style={{ color: "#FF4B8B" }}>
                      {item.title}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#7a2f4f" }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Rare Types Section */}
            <div>
              <h4 className="font-semibold mb-3" style={{ color: "#FF4B8B" }}>
                Other Rare Types
              </h4>

              <div className="space-y-3">
                {[
                  { label: "Melanoma of the Vagina", badge: "Very rare" },
                  { label: "Sarcoma of the Vagina", badge: "Soft-tissue cancer" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl border transition-all duration-300 hover:shadow-md"
                    style={{
                      backgroundColor: "#FFF5F8",
                      borderColor: "rgb(255,197,211)",
                    }}
                  >
                    <span className="text-sm" style={{ color: "#7a2f4f" }}>
                      {item.label}
                    </span>

                    <span
                      className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium"
                      style={{
                        backgroundColor: "#FFFFFF",
                        borderColor: "rgb(255,197,211)",
                        color: "#7a2f4f",
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Warning Section */}
          <div
            className="p-4 rounded-xl border"
            style={{
              backgroundColor: "#FFF5F8",
              borderColor: "rgb(255,197,211)",
            }}
          >
            <h4 className="font-semibold mb-2 flex items-center gap-2" style={{ color: "#FF4B8B" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-alert w-5 h-5 text-primary-pink"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" x2="12" y1="8" y2="12"></line>
                <line x1="12" x2="12.01" y1="16" y2="16"></line>
              </svg>
              When to Contact Your Doctor
            </h4>

            <p className="text-sm leading-relaxed" style={{ color: "#7a2f4f" }}>
              Seek medical advice if you experience unusual bleeding, persistent discharge, pelvic
              pain, pain during sex, or feel a lump inside the vagina. Early detection significantly
              improves recovery.
            </p>
          </div>

          {/* Next Button */}
          <div className="pt-6 flex justify-center">
            <button
              onClick={() => {
                setShowCard(3);
                setActiveButton(2);
              }}
              className="bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white w-[90%] md:w-[60%] lg:w-[40%] rounded-md h-10 text-sm font-medium transition-all"
            >
              Learn About the Procedure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaginalCard2;
