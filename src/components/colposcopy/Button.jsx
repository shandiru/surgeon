import React from 'react';
import {
  Stethoscope,
  AlertCircle,
  FileText,
  Shield,
  CheckCircle,
  Heart,
  Users,
} from 'lucide-react';

const ColposcopyGuideButtons = ({ setShowCard, activeButton, setActiveButton }) => {
  const buttons = [
    { label: 'What is Colposcopy?', icon: <Stethoscope className="w-4 h-4" />, card: 1 },
    { label: 'Why You Might Need One', icon: <AlertCircle className="w-4 h-4" />, card: 2 },
    { label: "How It's Done", icon: <FileText className="w-4 h-4" />, card: 3 },
    { label: 'About Biopsies', icon: <Shield className="w-4 h-4" />, card: 4 },
    { label: 'Understanding Results', icon: <CheckCircle className="w-4 h-4" />, card: 5 },
    { label: 'After Your Procedure', icon: <Heart className="w-4 h-4" />, card: 6 },
    { label: 'Emotional Support', icon: <Users className="w-4 h-4" />, card: 7 },
  ];

  const handleButtonClick = (card, index) => {
    setShowCard(card);
    setActiveButton(index);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-2 ml-4 sm:ml-6 lg:ml-10 max-w-6xl mx-auto mb-8">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(button.card, index)}
          className={`items-center justify-center w-full font-semibold text-[#BB125B] hover:bg-[#FF4B8B]/30 bg-[#FF4B8B]/10 whitespace-nowrap text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] rounded-md px-3 has-[&_svg]:px-2.5 flex flex-col gap-1 h-auto py-3 relative ${
            activeButton === index ? 'bg-[#FF4B8B]/50 text-black' : ''
          }`}
        >
          {button.icon}
          <span className="text-xs text-center leading-tight">{button.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ColposcopyGuideButtons;
