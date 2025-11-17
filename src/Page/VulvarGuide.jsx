import React, { useState } from 'react';

import VulvarGuideAbout from '../components/VulvarGuide/About';
import VulvarGuideButtons from '../components/VulvarGuide/Button';
import VulvarGuideCard1 from '../components/VulvarGuide/Card1';
import VulvarGuideCard2 from '../components/VulvarGuide/card2';
import VulvarGuidecard3 from '../components/VulvarGuide/card3';
import VulvarGuideCard4 from '../components/VulvarGuide/card4';
import VulvarGuideCard5 from '../components/VulvarGuide/card5';
import VulvarGuideCard6 from '../components/VulvarGuide/card6';
import VulvarGuideCard7 from '../components/VulvarGuide/card7';
import VulvarGuideCard8 from '../components/VulvarGuide/card8';
const VulvarGuide = () => {
  const [showCard, setShowCard] = useState(1);
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div class="mt-10">
     
      <VulvarGuideAbout activeButton={activeButton} />
      <VulvarGuideButtons
        setShowCard={setShowCard}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />

      {showCard === 1 && (
        <VulvarGuideCard1 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 2 && (
        <VulvarGuideCard2 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 3 && (
        <VulvarGuidecard3 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 4 && (
        <VulvarGuideCard4 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 5 && (
        <VulvarGuideCard5 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 6 && (
        <VulvarGuideCard6 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 7 && (
        <VulvarGuideCard7 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 8 && (
        <VulvarGuideCard8 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
    </div>
  );
};

export default VulvarGuide;
