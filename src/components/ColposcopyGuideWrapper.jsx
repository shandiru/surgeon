import React, { useState } from 'react';
import ColposcopyGuide from './colposcopy/About';
import ColposcopyGuideButtons from './colposcopy/Button';

const ColposcopyGuideWrapper = () => {
  const [progress, setProgress] = useState(0); // Track progress
  const [showCard, setShowCard] = useState(null); // Track which card is shown

  return (
    <div>
      <ColposcopyGuide setProgress={setProgress} />
      <ColposcopyGuideButtons setShowCard={setShowCard} setProgress={setProgress} />
    </div>
  );
};

export default ColposcopyGuideWrapper;
