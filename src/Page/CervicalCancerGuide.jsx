import React, { useState } from 'react';

import CervicalCancerGuideAbout from '../components/CervicalCancerGuide/About';
import CervicalCancerGuideButtons from '../components/CervicalCancerGuide/Button';
import CervicalCancerGuide1 from '../components/CervicalCancerGuide/Card1';
import CervicalCancerGuide2 from '../components/CervicalCancerGuide/card2';
import CervicalCancerGuide3 from '../components/CervicalCancerGuide/card3';
import CervicalCancerGuide4 from '../components/CervicalCancerGuide/card4';
import CervicalCancerGuide5 from '../components/CervicalCancerGuide/card5';
import CervicalCancerGuide6 from '../components/CervicalCancerGuide/card6';
import CervicalCancerGuide7 from '../components/CervicalCancerGuide/card7';
import CervicalCancerGuide8 from '../components/CervicalCancerGuide/card8';
const CervicalCancerGuide = () => {
  const [showCard, setShowCard] = useState(1);
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div class="mt-10">
     
      <CervicalCancerGuideAbout activeButton={activeButton} />
      <CervicalCancerGuideButtons
        setShowCard={setShowCard}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />

      {showCard === 1 && (
        <CervicalCancerGuide1 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 2 && (
        <CervicalCancerGuide2 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 3 && (
        <CervicalCancerGuide3 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 4 && (
        <CervicalCancerGuide4 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 5 && (
        <CervicalCancerGuide5 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 6 && (
        <CervicalCancerGuide6 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 7 && (
        <CervicalCancerGuide7 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 8 && (
        <CervicalCancerGuide8 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
    </div>
  );
};

export default CervicalCancerGuide;
