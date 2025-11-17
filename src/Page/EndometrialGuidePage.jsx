// Sections from components/HomePage
import React, { useState } from 'react';
import EndometrialGuide from '../components/EndometrialGuide/About';
import EndometrialGuideButtons from '../components/EndometrialGuide/Button';
import EndometrialCard1 from '../components/EndometrialGuide/Card1';
import EndometrialCard2 from '../components/EndometrialGuide/card2';
import EndometrialCard3 from '../components/EndometrialGuide/card3';
import EndometrialCard4 from '../components/EndometrialGuide/card4';
import EndometrialCard5 from '../components/EndometrialGuide/card5';
import EndometrialCard6 from '../components/EndometrialGuide/card6';
import EndometrialCard7 from '../components/EndometrialGuide/card7';
import Endometrialcard8 from '../components/EndometrialGuide/card8';

const EndometrialGuidePage = () => {
  const [showCard, setShowCard] = useState(1);
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div>
      <EndometrialGuide activeButton={activeButton} />
      <EndometrialGuideButtons
        setShowCard={setShowCard}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />

      {showCard === 1 && (
        <EndometrialCard1 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 2 && (
        <EndometrialCard2 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 3 && (
        <EndometrialCard3 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 4 && (
        <EndometrialCard4 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 5 && (
        <EndometrialCard5 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 6 && (
        <EndometrialCard6 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 7 && (
        <EndometrialCard7 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 8 && (
        <Endometrialcard8 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
    </div>
  );
};

export default EndometrialGuidePage;
