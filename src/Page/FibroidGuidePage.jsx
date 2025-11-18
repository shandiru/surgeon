import React, { useState } from 'react';

import FibroidGuideAbout from '../components/FibroidGuide/About';
import FibroidGuideButtons from '../components/FibroidGuide/Button';
import FibroidGuideCard1 from '../components/FibroidGuide/Card1';
import FibroidGuideCard2 from '../components/FibroidGuide/card2';
import FibroidGuidecard3 from '../components/FibroidGuide/card3';
import FibroidGuideCard4 from '../components/FibroidGuide/card4';
import FibroidGuideCard5 from '../components/FibroidGuide/card5';
import FibroidGuideCard6 from '../components/FibroidGuide/card6';
import FibroidGuideCard7 from '../components/FibroidGuide/card7';
import FibroidGuideCard8 from '../components/FibroidGuide/card8';
const FibroidGuide = () => {
  const [showCard, setShowCard] = useState(1);
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div class="mt-10">
     
      <FibroidGuideAbout activeButton={activeButton} />
      <FibroidGuideButtons
        setShowCard={setShowCard}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />

      {showCard === 1 && (
        <FibroidGuideCard1 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 2 && (
        <FibroidGuideCard2 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 3 && (
        <FibroidGuidecard3 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 4 && (
        <FibroidGuideCard4 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 5 && (
        <FibroidGuideCard5 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 6 && (
        <FibroidGuideCard6 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 7 && (
        <FibroidGuideCard7 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 8 && (
        <FibroidGuideCard8 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
    </div>
  );
};

export default FibroidGuide;
