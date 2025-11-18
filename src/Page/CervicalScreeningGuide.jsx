import React, { useState } from 'react';

import CervicalScreeningGuideAbout from '../components/CervicalScreeningGuide/About';
import CervicalScreeningGuideButtons from '../components/CervicalScreeningGuide/Button';
import CervicalScreeningGuide1 from '../components/CervicalScreeningGuide/Card1';
import CervicalScreeningGuide2 from '../components/CervicalScreeningGuide/card2';
import CervicalScreeningGuide3 from '../components/CervicalScreeningGuide/card3';
import CervicalScreeningGuide4 from '../components/CervicalScreeningGuide/card4';
import CervicalScreeningGuide5 from '../components/CervicalScreeningGuide/card5';
import CervicalScreeningGuide6 from '../components/CervicalScreeningGuide/card6';
import CervicalScreeningGuide7 from '../components/CervicalScreeningGuide/card7';
import CervicalScreeningGuide8 from '../components/CervicalScreeningGuide/card8';
const CervicalScreeningGuide = () => {
  const [showCard, setShowCard] = useState(1);
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div class="mt-10">
     
      <CervicalScreeningGuideAbout activeButton={activeButton} />
      <CervicalScreeningGuideButtons
        setShowCard={setShowCard}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />

      {showCard === 1 && (
        <CervicalScreeningGuide1 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 2 && (
        <CervicalScreeningGuide2 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 3 && (
        <CervicalScreeningGuide3 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 4 && (
        <CervicalScreeningGuide4 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 5 && (
        <CervicalScreeningGuide5 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 6 && (
        <CervicalScreeningGuide6 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 7 && (
        <CervicalScreeningGuide7 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 8 && (
        <CervicalScreeningGuide8 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
    </div>
  );
};

export default CervicalScreeningGuide;
