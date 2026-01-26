import { Heart } from "lucide-react";
import React from "react";

const RememberCard = () => {
  return (
    <div className="max-w-6xl text-black mx-auto mb-10 flex flex-col gap-6 rounded-xl bg-white py-6 shadow-md hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 border-b border-[#FEE6EA] pb-6">
        <div className="font-semibold text-2xl text-primary-pink flex items-center gap-2">
          <Heart className="text-xl" />
          Remember
        </div>
      </div>

      {/* Content */}
      <div className="px-6 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-primary-pink rounded-full mt-2"></span>
              Postcoital bleeding is common and usually harmless
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-primary-pink rounded-full mt-2"></span>
              It can come from the vagina or cervix
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-primary-pink rounded-full mt-2"></span>
              Early assessment can rule out serious causes and protect your health
            </li>
          </ul>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-primary-pink rounded-full mt-2"></span>
              We're here to support you with care and answers
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-primary-pink rounded-full mt-2"></span>
              Bleeding after sex can be worrying or embarrassing, but it's common
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-primary-pink rounded-full mt-2"></span>
              Most causes are harmless and easily treated
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <button className="inline-flex items-center justify-center gap-2 text-sm font-semibold rounded-md px-6 h-10 text-white bg-primary-pink hover:bg-[#e43d7a] transition-all shadow-md hover:shadow-lg">
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
              className="lucide lucide-phone"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Book an Appointment
          </button>
          <p className="text-sm text-black mt-3">
            If you experience bleeding after sex, book an appointment — don't wait and worry alone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RememberCard;
