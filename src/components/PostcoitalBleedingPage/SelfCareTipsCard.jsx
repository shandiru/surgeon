import { Leaf } from 'lucide-react';
import React from 'react';

const SelfCareTipsCard = () => {
  return (
    <div className="max-w-6xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl bg-white py-6 shadow-md hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 border-b border-[#FEE6EA] pb-6">
        <div className="font-semibold text-2xl text-primary-pink flex items-center gap-2">
          <Leaf className="text-xl" />
          Self-Care Tips
        </div>
      </div>

      {/* Content */}
      <div className="px-6">
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-primary-pink rounded-full mt-2"></span>
              Use lubrication if vaginal dryness is an issue
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-primary-pink rounded-full mt-2"></span>
              Try a vaginal moisturiser if post-menopausal
            </li>
          </ul>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-primary-pink rounded-full mt-2"></span>
              Avoid rough or prolonged intercourse until you've been checked
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-primary-pink rounded-full mt-2"></span>
              Keep up with regular cervical smear tests
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelfCareTipsCard;
