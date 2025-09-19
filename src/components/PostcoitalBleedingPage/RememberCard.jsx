import React from 'react';

const RememberCard = () => {
  return (
    <div className="max-w-6xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-muted">
      <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 border-b pb-6">
        <div className="font-semibold text-2xl">💖 Remember</div>
      </div>

      <div className="px-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-2">
            <li>• Postcoital bleeding is common and usually harmless</li>
            <li>• It can come from the vagina or cervix</li>
            <li>• Early assessment can rule out serious causes and protect your health</li>
          </ul>
          <ul className="space-y-2">
            <li>• We're here to support you with care and answers</li>
            <li>• Bleeding after sex can be worrying or embarrassing, but it's common</li>
            <li>• Most causes are harmless and easily treated</li>
          </ul>
        </div>

        <div className="text-center pt-6">
          <button
            data-slot="button"
            className="inline-flex bg-[#FF4B8B]/10 hover:bg-[#FF4B8B] hover:text-black items-center justify-center gap-2 whitespace-nowrap text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&>svg]:pointer-events-none [&>svg]:size-4 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[&>svg]:px-4 font-semibold"
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
              className="lucide lucide-phone mr-2 h-5 w-5"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Book an Appointment
          </button>
          <p className="text-sm text-muted-foreground mt-2">
            If you experience bleeding after sex, book an appointment — don't wait and worry alone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RememberCard;
