import React, { useState } from 'react';

import IrregularBleedingGuideAbout from '../components/IrregularBleedingGuide/About';
import IrregularBleedingGuideButtons from '../components/IrregularBleedingGuide/Button';
import IrregularBleedingGuideCard1 from '../components/IrregularBleedingGuide/Card1';
import IrregularBleedingGuideCard2 from '../components/IrregularBleedingGuide/card2';
import IrregularBleedingGuidecard3 from '../components/IrregularBleedingGuide/card3';
import IrregularBleedingGuideCard4 from '../components/IrregularBleedingGuide/card4';
import IrregularBleedingGuideCard5 from '../components/IrregularBleedingGuide/card5';
import IrregularBleedingGuideCard6 from '../components/IrregularBleedingGuide/card6';

const IrregularBleedingGuide = () => {
  const [showCard, setShowCard] = useState(1);
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div class="mt-10">
     
      <IrregularBleedingGuideAbout activeButton={activeButton} />
      <IrregularBleedingGuideButtons
        setShowCard={setShowCard}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />

      {showCard === 1 && (
        <IrregularBleedingGuideCard1 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 2 && (
        <IrregularBleedingGuideCard2 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 3 && (
        <IrregularBleedingGuidecard3 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 4 && (
        <IrregularBleedingGuideCard4 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 5 && (
        <IrregularBleedingGuideCard5 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 6 && (
        <IrregularBleedingGuideCard6 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
     
    </div>
  );
};

export default IrregularBleedingGuide;
