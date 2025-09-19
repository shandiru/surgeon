import React from 'react';

const PostcoitalCard = () => {
  return (
    <div className="max-w-6xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
      <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 border-b pb-6">
        <div className="font-semibold flex items-center gap-2 text-2xl">
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
            className="lucide lucide-stethoscope h-6 w-6 text-primary"
          >
            <path d="M11 2v2"></path>
            <path d="M5 2v2"></path>
            <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
            <path d="M8 15a6 6 0 0 0 12 0v-3"></path>
            <circle cx="20" cy="10" r="2"></circle>
          </svg>
          What Is Postcoital Bleeding?
        </div>
      </div>
      <div className="px-6 space-y-4">
        <p className="text-lg leading-relaxed">
          Postcoital bleeding is bleeding that happens after vaginal sex. It is not part of your period.
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li>• The amount of blood can range from light spotting to heavier flow</li>
          <li>• It can happen after penetration by a penis, sex toys, or fingers</li>
          <li>• Around 1 in 10 women experience this at some point — it is common and usually not serious</li>
        </ul>
      </div>
    </div>
  );
};

export default PostcoitalCard;
