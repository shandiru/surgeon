import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function UrgentHelpAlert() {
  return (
    <section className="mb-12 px-4">
      <div
        role="alert"
        className="relative w-full rounded-2xl bg-gradient-to-r from-[#FEE6EA] to-[#FFF0F5] px-6 py-6 text-sm shadow-md hover:shadow-lg transition max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="h-6 w-6 text-[#FF4B8B]" />
          <h3 className="font-bold text-[#BB125B] text-lg sm:text-xl flex items-center gap-2">
             When to Seek Urgent Help
          </h3>
        </div>

        {/* Content */}
        <div className="space-y-3 text-sm text-[#374151] leading-relaxed">
          <p className="text-[#4B5563]">
            <strong>Don’t wait and see —</strong> it’s important to get checked straight away if you
            experience:
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Any vaginal bleeding after menopause</li>
            <li>Heavy bleeding or clots</li>
            <li>Bleeding with pelvic pain, fever, or foul-smelling discharge</li>
            <li>Unexplained weight loss, tiredness, or loss of appetite</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
