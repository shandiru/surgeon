"use client";
import React from "react";
import { Heart, Flame, Droplet, Shield, Sparkles } from "lucide-react";
import { LuShield } from "react-icons/lu";

const EndometrialCard6 = ({ setShowCard, setActiveButton }) => {
  const pink = "#FFC5D3";
  const deepPink = "#FF4B8B"; // stronger deep pink for headings and important text

  return (
    <div className="px-3">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <LuShield className="h-8 w-8" style={{ color: deepPink }} />
          <h2 className="text-3xl font-bold" style={{ color: deepPink }}>
            Treatment for Endometrial Cancer
          </h2>
        </div>

        {/* Treatment Options Card */}
        <div className="bg-white text-gray-900 flex flex-col gap-6 rounded-xl mb-5 shadow-sm">
          {/* Card Header */}
          <div className="px-6 grid gap-1.5">
            <h3 className="font-semibold text-xl" style={{ color: deepPink }}>
              Treatment Options
            </h3>
            <p className="text-sm text-black">
              Treatment depends on factors such as stage, tumor size, and cancer type.
            </p>
          </div>

          {/* Card Content */}
          <div className="px-6">
            <p className="mb-6 text-sm text-black">A gynaecological oncologist may recommend:</p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="p-4 border rounded-lg bg-white" style={{ borderColor: pink }}>
                  <h4 className="font-semibold mb-2" style={{ color: deepPink }}>
                    Surgery
                  </h4>
                  <p className="text-sm text-black">
                    Often the first-line treatment to remove the uterus (hysterectomy), sometimes
                    including ovaries and fallopian tubes.
                  </p>
                </div>

                <div className="p-4 border rounded-lg bg-white" style={{ borderColor: pink }}>
                  <h4 className="font-semibold mb-2" style={{ color: deepPink }}>
                    Radiation Therapy
                  </h4>
                  <p className="text-sm text-black">
                    High-energy rays used to target and destroy cancer cells.
                  </p>
                </div>

                <div className="p-4 border rounded-lg bg-white" style={{ borderColor: pink }}>
                  <h4 className="font-semibold mb-2" style={{ color: deepPink }}>
                    Chemotherapy
                  </h4>
                  <p className="text-sm text-black">
                    Anti-cancer drugs that destroy or slow cancer cell growth.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div className="p-4 border rounded-lg bg-white" style={{ borderColor: pink }}>
                  <h4 className="font-semibold mb-2" style={{ color: deepPink }}>
                    Hormone Therapy
                  </h4>
                  <p className="text-sm text-black">
                    Medicines that block or lower hormones fueling cancer growth.
                  </p>
                </div>

                <div className="p-4 border rounded-lg bg-white" style={{ borderColor: pink }}>
                  <h4 className="font-semibold mb-2" style={{ color: deepPink }}>
                    Combination Therapy
                  </h4>
                  <p className="text-sm text-black">
                    A tailored mix of treatments for the best results.
                  </p>
                </div>

                <div
                  className="p-4 rounded-lg border"
                  style={{ backgroundColor: pink, borderColor: pink }}
                >
                  <p className="text-sm font-medium " style={{ color: deepPink }}>
                    <strong>Personalized Care:</strong> Every treatment plan is customized to
                    provide the best outcome for your health and recovery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Point Box */}
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/20 mx-6">
            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary-pink" />
              Key Point
            </h4>
            <p className="text-sm">
              Every treatment plan is personalized based on tumor characteristics, stage, and
              patient health to achieve the best outcome and recovery.
            </p>
          </div>

          {/* Continue Button */}
          <div className="p-6">
            <button
              onClick={() => {
                setShowCard(7);
                setActiveButton(6);
              }}
              className="inline-flex items-center bg-primary-pink hover:bg-primary-pink/80 text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full cursor-pointer"
            >
              Continue to Next Section
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndometrialCard6;
