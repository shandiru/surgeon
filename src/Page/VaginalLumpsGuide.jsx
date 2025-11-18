import React, { useState } from 'react';

import VaginalLumpsGuideAbout from '../components/VaginalLumpsGuide/About';
import VaginalLumpsGuideButtons from '../components/VaginalLumpsGuide/Button';
import VaginalLumpsGuideCard1 from '../components/VaginalLumpsGuide/Card1';
import VaginalLumpsGuideCard2 from '../components/VaginalLumpsGuide/card2';
import VaginalLumpsGuidecard3 from '../components/VaginalLumpsGuide/card3';
import VaginalLumpsGuideCard4 from '../components/VaginalLumpsGuide/card4';
import VaginalLumpsGuideCard5 from '../components/VaginalLumpsGuide/card5';
import VaginalLumpsGuideCard6 from '../components/VaginalLumpsGuide/card6';
import VaginalLumpsGuideCard7 from '../components/VaginalLumpsGuide/card7';
import VaginalLumpsGuideCard8 from '../components/VaginalLumpsGuide/card8';

const VaginalLumpsGuide = () => {
  
  const [showCard, setShowCard] = useState(1);
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div class="mt-10">
     
      <VaginalLumpsGuideAbout activeButton={activeButton} />
      <VaginalLumpsGuideButtons
        setShowCard={setShowCard}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />

      {showCard === 1 && (
        <VaginalLumpsGuideCard1 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 2 && (
        <VaginalLumpsGuideCard2 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 3 && (
        <VaginalLumpsGuidecard3 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 4 && (
        <VaginalLumpsGuideCard4 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 5 && (
        <VaginalLumpsGuideCard5 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 6 && (
        <VaginalLumpsGuideCard6 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 7 && (
        <VaginalLumpsGuideCard7 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 8 && (
        <VaginalLumpsGuideCard8 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
    </div>
  );
};

export default VaginalLumpsGuide;
