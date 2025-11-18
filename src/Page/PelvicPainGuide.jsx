import React, { useState } from 'react';

import PelvicPainGuideAbout from '../components/PelvicPainGuide/About';
import PelvicPainGuideButtons from '../components/PelvicPainGuide/Button';
import PelvicPainGuideCard1 from '../components/PelvicPainGuide/Card1';
import PelvicPainGuideCard2 from '../components/PelvicPainGuide/card2';
import PelvicPainGuidecard3 from '../components/PelvicPainGuide/card3';
import PelvicPainGuideCard4 from '../components/PelvicPainGuide/card4';
import PelvicPainGuideCard5 from '../components/PelvicPainGuide/card5';
import PelvicPainGuideCard6 from '../components/PelvicPainGuide/card6';
import PelvicPainGuideCard7 from '../components/PelvicPainGuide/card7';
import PelvicPainGuideCard8 from '../components/PelvicPainGuide/card8';
const PelvicPainGuide = () => {
  const [showCard, setShowCard] = useState(1);
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div class="mt-10">
     
      <PelvicPainGuideAbout activeButton={activeButton} />
      <PelvicPainGuideButtons
        setShowCard={setShowCard}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />

      {showCard === 1 && (
        <PelvicPainGuideCard1 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 2 && (
        <PelvicPainGuideCard2 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 3 && (
        <PelvicPainGuidecard3 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 4 && (
        <PelvicPainGuideCard4 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 5 && (
        <PelvicPainGuideCard5 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 6 && (
        <PelvicPainGuideCard6 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 7 && (
        <PelvicPainGuideCard7 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 8 && (
        <PelvicPainGuideCard8 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
    </div>
  );
};

export default PelvicPainGuide;
