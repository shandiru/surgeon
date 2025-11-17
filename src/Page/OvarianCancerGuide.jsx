import React, { useState } from 'react';

import OvarianCancerGuideAbout from '../components/OvarianCancerGuide/About';
import OvarianCancerGuideButtons from '../components/OvarianCancerGuide/Button';
import OvarianCancerGuide1 from '../components/OvarianCancerGuide/Card1';
import OvarianCancerGuide2 from '../components/OvarianCancerGuide/card2';
import OvarianCancerGuide3 from '../components/OvarianCancerGuide/card3';
import OvarianCancerGuide4 from '../components/OvarianCancerGuide/card4';
import OvarianCancerGuide5 from '../components/OvarianCancerGuide/card5';
import OvarianCancerGuide6 from '../components/OvarianCancerGuide/card6';
import OvarianCancerGuide7 from '../components/OvarianCancerGuide/card7';
import OvarianCancerGuide8 from '../components/OvarianCancerGuide/card8';
const OvarianCancerGuide = () => {
  const [showCard, setShowCard] = useState(1);
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div class="mt-10">
     
      <OvarianCancerGuideAbout activeButton={activeButton} />
      <OvarianCancerGuideButtons
        setShowCard={setShowCard}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />

      {showCard === 1 && (
        <OvarianCancerGuide1 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 2 && (
        <OvarianCancerGuide2 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 3 && (
        <OvarianCancerGuide3 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 4 && (
        <OvarianCancerGuide4 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 5 && (
        <OvarianCancerGuide5 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 6 && (
        <OvarianCancerGuide6 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 7 && (
        <OvarianCancerGuide7 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 8 && (
        <OvarianCancerGuide8 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
    </div>
  );
};

export default OvarianCancerGuide;
