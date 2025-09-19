import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function UrgentHelpAlert() {
  return (
    <section className="mb-12 px-4">
      <div
        role="alert"
        className="relative w-full rounded-lg border border-[#FCA5B5] bg-[#FEE6EA] px-4 py-5 text-sm grid grid-cols-[1.5rem_1fr] gap-x-3 items-start text-[#1F2937] max-w-4xl mx-auto"
      >
        {/* Icon */}
        <AlertTriangle className="h-4 w-4 text-[#FF4B8B] mt-1" />

        {/* Content */}
        <div>
          <h3 className="font-semibold mb-2 flex items-center gap-2 text-[#FF4B8B] text-lg sm:text-xl">
            <span>🚨</span>When to Seek Help Urgently
          </h3>

          <div className="space-y-2 text-sm text-[#4B5563]">
            <p>
              <strong>Don't wait and see — it's important to get checked straight away if you experience:</strong>
            </p>
            <ul className="space-y-1 list-disc ml-5">
              <li>Any vaginal bleeding after menopause</li>
              <li>Heavy bleeding or clots</li>
              <li>Bleeding with pelvic pain, fever, or foul-smelling discharge</li>
              <li>Unexplained weight loss, tiredness, or loss of appetite</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
