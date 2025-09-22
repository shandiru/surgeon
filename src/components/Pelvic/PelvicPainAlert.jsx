import React, { useState } from 'react';
import { Phone, TriangleAlert } from 'lucide-react'; // Import the required icons from lucide-react

const PelvicPainAlert = () => {
  const [isVisible, setIsVisible] = useState(true); // State to manage the visibility of the alert

  // Function to close the alert
  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null; // If not visible, don't render anything

  return (
    <div
      role="alert"
      className="relative w-full rounded-lg border px-4 py-3 text-[#d60d64] bg-[#FF4B8B]/10 max-w-5xl mx-auto mb-10 text-sm grid has-[&gt;svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[&gt;svg]:gap-x-3 gap-y-0.5 items-start [&amp;&gt;svg]:size-4 [&amp;&gt;svg]:translate-y-0.5 [&amp;&gt;svg]:text-current text-card-foreground border-destructive/50 bg-destructive/5 hover:z-50 transition-all duration-300 hover:bg-[#fce3e8] hover:shadow-lg hover:border-[#f5a9bd] active:bg-[#fce3e8] active:shadow-lg active:border-[#f5a9bd] hover:scale-105 active:scale-100"
    >
      <TriangleAlert className="lucide lucide-triangle-alert h-5 w-5 mt-1 text-black text-destructive" />
      <div data-slot="alert-description" className="text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&amp;_p]:leading-relaxed">
        <div className="space-y-4">
          <h3 className="font-semibold text-lg text-destructive ml-8">When to See a Doctor</h3>
          <div>

          </div>
          <ul className="space-y-2 text-sm ml-8">
            <p className="text-foreground">Seek medical advice if you:</p>
            <li className="flex items-center gap-2">
              <Phone className="lucide lucide-phone h-4 w-4 text-destructive" />
              Have sudden, severe pelvic pain
            </li>
            <li className="flex items-center gap-2">
              <Phone className="lucide lucide-phone h-4 w-4 text-destructive" />
              Have fever, nausea, or vomiting with pelvic pain
            </li>
            <li className="flex items-center gap-2">
              <Phone className="lucide lucide-phone h-4 w-4 text-destructive" />
              Notice unexpected vaginal bleeding or discharge
            </li>
            <li className="flex items-center gap-2">
              <Phone className="lucide lucide-phone h-4 w-4 text-destructive" />
              Suspect an infection or STI
            </li>
            <li className="flex items-center gap-2">
              <Phone className="lucide lucide-phone h-4 w-4 text-destructive" />
              Have a known condition and pain suddenly worsens
            </li>
            <div className="mt-4 p-3 rounded-lg border">
              <p className="font-semibold text-destructive">
                Always get urgent help for sudden severe pain, fainting, or heavy bleeding.
              </p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PelvicPainAlert;
