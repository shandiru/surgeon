import React from "react";

const UrgentHelpAlert = () => {
  return (
    <div
      role="alert"
      className="w-full max-w-6xl mx-auto mb-10 rounded-xl bg-[#FFF5F7] p-6 shadow-md"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FF4B8B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 flex-shrink-0"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </svg>
        <h3 className="font-bold text-lg text-primary-pink">When to Seek Urgent Help</h3>
      </div>

      {/* Content */}
      <div className="space-y-4 text-sm text-[#444]">
        <ul className="space-y-2">
          {[
            "Heavy bleeding (soaking pads/tampons or causing dizziness)",
            "Bleeding after sex with pelvic pain, fever, or foul-smelling discharge",
            "Any bleeding after menopause",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF4B8B] mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="font-medium text-black bg-[#FFEAF0] p-3 rounded-md">
          Get medical help straight away if you notice these symptoms.
        </p>
      </div>
    </div>
  );
};

export default UrgentHelpAlert;
