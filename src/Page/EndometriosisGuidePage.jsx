import React, { useState } from 'react';

import EndometriosisGuideAbout from '../components/EndometriosisGuide/About';
import EndometriosisGuideButtons from '../components/EndometriosisGuide/Button';
import EndometriosisGuideCard1 from '../components/EndometriosisGuide/Card1';
import EndometriosisGuideCard2 from '../components/EndometriosisGuide/card2';
import EndometriosisGuidecard3 from '../components/EndometriosisGuide/card3';
import EndometriosisGuideCard4 from '../components/EndometriosisGuide/card4';
import EndometriosisGuideCard5 from '../components/EndometriosisGuide/card5';
import EndometriosisGuideCard6 from '../components/EndometriosisGuide/card6';
import EndometriosisGuideCard7 from '../components/EndometriosisGuide/card7';
import EndometriosisGuideCard8 from '../components/EndometriosisGuide/card8';
const EndometriosisGuide = () => {
  const [showCard, setShowCard] = useState(1);
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div class="mt-10">
     
      <EndometriosisGuideAbout activeButton={activeButton} />
      <EndometriosisGuideButtons
        setShowCard={setShowCard}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />

      {showCard === 1 && (
        <EndometriosisGuideCard1 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 2 && (
        <EndometriosisGuideCard2 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 3 && (
        <EndometriosisGuidecard3 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 4 && (
        <EndometriosisGuideCard4 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 5 && (
        <EndometriosisGuideCard5 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 6 && (
        <EndometriosisGuideCard6 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 7 && (
        <EndometriosisGuideCard7 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 8 && (
        <EndometriosisGuideCard8 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
    </div>
  );
};

export default EndometriosisGuide;
