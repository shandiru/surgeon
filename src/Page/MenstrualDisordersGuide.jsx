import React, { useState } from 'react';

import MenstrualDisordersGuideAbout from '../components/MenstrualDisordersGuide/About';
import MenstrualDisordersGuideButtons from '../components/MenstrualDisordersGuide/Button';
import MenstrualDisordersGuideCard1 from '../components/MenstrualDisordersGuide/Card1';
import MenstrualDisordersGuideCard2 from '../components/MenstrualDisordersGuide/card2';
import MenstrualDisordersGuidecard3 from '../components/MenstrualDisordersGuide/card3';
import MenstrualDisordersGuideCard4 from '../components/MenstrualDisordersGuide/card4';
import MenstrualDisordersGuideCard5 from '../components/MenstrualDisordersGuide/card5';
import MenstrualDisordersGuideCard6 from '../components/MenstrualDisordersGuide/card6';
import MenstrualDisordersGuideCard7 from '../components/MenstrualDisordersGuide/card7';
import MenstrualDisordersGuideCard8 from '../components/MenstrualDisordersGuide/card8';

const MenstrualDisordersGuide = () => {
  
  const [showCard, setShowCard] = useState(1);
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div class="mt-10">
     
      <MenstrualDisordersGuideAbout activeButton={activeButton} />
      <MenstrualDisordersGuideButtons
        setShowCard={setShowCard}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />

      {showCard === 1 && (
        <MenstrualDisordersGuideCard1 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 2 && (
        <MenstrualDisordersGuideCard2 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 3 && (
        <MenstrualDisordersGuidecard3 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 4 && (
        <MenstrualDisordersGuideCard4 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 5 && (
        <MenstrualDisordersGuideCard5 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 6 && (
        <MenstrualDisordersGuideCard6 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 7 && (
        <MenstrualDisordersGuideCard7 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 8 && (
        <MenstrualDisordersGuideCard8 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
    </div>
  );
};

export default MenstrualDisordersGuide;
