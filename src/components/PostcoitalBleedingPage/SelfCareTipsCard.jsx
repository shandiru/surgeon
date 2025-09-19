import React from 'react';

const SelfCareTipsCard = () => {
  return (
    <div className="max-w-6xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
      <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 border-b pb-6">
        <div className="font-semibold text-2xl">🌿 Self-Care Tips</div>
      </div>

      <div className="px-6">
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-2">
            <li>• Use lubrication if vaginal dryness is an issue</li>
            <li>• Try a vaginal moisturiser if post-menopausal</li>
          </ul>
          <ul className="space-y-2">
            <li>• Avoid rough or prolonged intercourse until you've been checked</li>
            <li>• Keep up with regular cervical smear tests</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelfCareTipsCard;
