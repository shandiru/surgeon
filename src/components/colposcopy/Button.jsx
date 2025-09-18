// src/components/colposcopy/Button.jsx
import React from 'react';

const ColposcopyGuideButtons = ({ setShowCard }) => {
  const buttons = [
    {
      label: 'What is Colposcopy?',
      icon: 'lucide-stethoscope',
      card: 1
    },
    {
      label: 'Why You Might Need One',
      icon: 'lucide-circle-alert',
      card: 2
    },
    {
      label: 'How It\'s Done',
      icon: 'lucide-file-text',
      card: 3
    },
    {
      label: 'About Biopsies',
      icon: 'lucide-shield',
      card: 4
    },
    {
      label: 'Understanding Results',
      icon: 'lucide-circle-check-big',
      card: 5
    },
    {
      label: 'After Your Procedure',
      icon: 'lucide-heart',
      card: 6
    },
    {
      label: 'Emotional Support',
      icon: 'lucide-users',
      card: 7
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 max-w-5xl mx-auto mb-8">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => setShowCard(button.card)} // Update the card displayed
          className="items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 rounded-md px-3 has-[&_svg]:px-2.5 flex flex-col gap-1 h-auto py-3 relative"
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
            className={`lucide ${button.icon} w-4 h-4`}
          >
            {/* Add paths corresponding to each icon here */}
            {button.icon === 'lucide-stethoscope' && (
              <path d="M11 2v2"></path>
            )}
            {button.icon === 'lucide-circle-alert' && (
              <>
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" x2="12" y1="8" y2="12"></line>
                <line x1="12" x2="12.01" y1="16" y2="16"></line>
              </>
            )}
            {/* Add other icon paths as needed */}
          </svg>
          <span className="text-xs text-center leading-tight">{button.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ColposcopyGuideButtons;
