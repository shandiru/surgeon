import React, { useState } from 'react';
import GuideButtons from '../components/colposcopy/Header';
import ColposcopyGuide from '../components/colposcopy/About';
import ColposcopyGuideButtons from '../components/colposcopy/Button';
import ColposcopyCard1 from '../components/colposcopy/Card1';
import ColposcopyCard2 from '../components/colposcopy/card2';
import ColposcopyCard3 from '../components/colposcopy/card3';
import ColposcopyCard4 from '../components/colposcopy/card4';
import ColposcopyCard5 from '../components/colposcopy/card5';
import ColposcopyCard6 from '../components/colposcopy/card6';
import ColposcopyCard7 from '../components/colposcopy/card7';

const Colposcopy = () => {
  const [showCard, setShowCard] = useState(1);
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div>
      <GuideButtons />
      <ColposcopyGuide activeButton={activeButton} />
      <ColposcopyGuideButtons
        setShowCard={setShowCard}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />

      {showCard === 1 && (
        <ColposcopyCard1 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 2 && (
        <ColposcopyCard2 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 3 && (
        <ColposcopyCard3 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 4 && (
        <ColposcopyCard4 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 5 && (
        <ColposcopyCard5 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 6 && (
        <ColposcopyCard6 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 7 && (
        <ColposcopyCard7 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
    </div>
  );
};

export default Colposcopy;
