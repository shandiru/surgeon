// Sections from components/HomePage
import React, { useState } from 'react';
import VaginalGuide from '../components/VaginalGuide/About';
import VaginalGuideButtons from '../components/VaginalGuide/Button';
import VaginalCard1 from '../components/VaginalGuide/Card1';
import VaginalCard2 from '../components/VaginalGuide/card2';
import VaginalCard3 from '../components/VaginalGuide/card3';
import VaginalCard4 from '../components/VaginalGuide/card4';
import VaginalCard5 from '../components/VaginalGuide/card5';
import VaginalCard6 from '../components/VaginalGuide/card6';
import VaginalCard7 from '../components/VaginalGuide/card7';
import Vulvarcard8 from '../components/VaginalGuide/card8';

const VaginalGuidePage = () => {
  const [showCard, setShowCard] = useState(1);
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div>
      <VaginalGuide activeButton={activeButton} />
      <VaginalGuideButtons
        setShowCard={setShowCard}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />

      {showCard === 1 && (
        <VaginalCard1 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 2 && (
        <VaginalCard2 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 3 && (
        <VaginalCard3 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 4 && (
        <VaginalCard4 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 5 && (
        <VaginalCard5 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 6 && (
        <VaginalCard6 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 7 && (
        <VaginalCard7 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 8 && (
        <Vulvarcard8 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
    </div>
  );
};

export default VaginalGuidePage;
