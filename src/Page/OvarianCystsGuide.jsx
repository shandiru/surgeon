import React, { useState } from 'react';

import OvarianCystsGuideAbout from '../components/OvarianCystsGuide/About';
import OvarianCystsGuideButtons from '../components/OvarianCystsGuide/Button';
import OvarianCystsGuideCard1 from '../components/OvarianCystsGuide/Card1';
import OvarianCystsGuideCard2 from '../components/OvarianCystsGuide/card2';
import OvarianCystsGuidecard3 from '../components/OvarianCystsGuide/card3';
import OvarianCystsGuideCard4 from '../components/OvarianCystsGuide/card4';
import OvarianCystsGuideCard5 from '../components/OvarianCystsGuide/card5';
import OvarianCystsGuideCard6 from '../components/OvarianCystsGuide/card6';
import OvarianCystsGuideCard7 from '../components/OvarianCystsGuide/card7';
import OvarianCystsGuideCard8 from '../components/OvarianCystsGuide/card8';
const OvarianCystsGuide = () => {
  const [showCard, setShowCard] = useState(1);
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div class="mt-10">
     
      <OvarianCystsGuideAbout activeButton={activeButton} />
      <OvarianCystsGuideButtons
        setShowCard={setShowCard}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />

      {showCard === 1 && (
        <OvarianCystsGuideCard1 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 2 && (
        <OvarianCystsGuideCard2 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 3 && (
        <OvarianCystsGuidecard3 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 4 && (
        <OvarianCystsGuideCard4 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 5 && (
        <OvarianCystsGuideCard5 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 6 && (
        <OvarianCystsGuideCard6 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 7 && (
        <OvarianCystsGuideCard7 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 8 && (
        <OvarianCystsGuideCard8 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
    </div>
  );
};

export default OvarianCystsGuide;
