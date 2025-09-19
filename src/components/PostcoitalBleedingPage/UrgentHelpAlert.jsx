import React from 'react';

const UrgentHelpAlert = () => {
  return (
    <div
      role="alert"
      className="relative w-full max-w-6xl text-[#BB125B] mx-auto mb-10 rounded-lg border px-4 py-3 text-sm grid grid-cols-[0_1fr] gap-y-0.5 items-start bg-card text-card-foreground border-destructive"
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
        className="lucide lucide-triangle-alert h-4 w-4 mt-1 text-current"
      >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
        <path d="M12 9v4"></path>
        <path d="M12 17h.01"></path>
      </svg>
      <div className="col-start-2 grid justify-items-start gap-1 text-sm space-y-2 text-muted-foreground">
        <p className="font-semibold ml-7">🚨 When to Seek Urgent Help</p>
        <ul className="space-y-1 text-sm">
          <li>• Heavy bleeding (soaking pads/tampons or causing dizziness)</li>
          <li>• Bleeding after sex with pelvic pain, fever, or foul-smelling discharge</li>
          <li>• Any bleeding after menopause</li>
        </ul>
        <p className="text-sm font-medium">
          Get medical help straight away if you notice these symptoms.
        </p>
      </div>
    </div>
  );
};

export default UrgentHelpAlert;
