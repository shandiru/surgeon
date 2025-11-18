import React, { useState } from 'react';

import RoboticGuideAbout from '../components/RoboticGuide/About';
import RoboticGuideButtons from "../components/RoboticGuide/Button"
import RoboticGuide1 from '../components/RoboticGuide/Card1';
import RoboticGuide2 from '../components/RoboticGuide/card2';
import RoboticGuide3 from '../components/RoboticGuide/card3';
import RoboticGuide4 from '../components/RoboticGuide/card4';
import RoboticGuide5 from '../components/RoboticGuide/card5';
import RoboticGuide6 from '../components/RoboticGuide/card6';
import RoboticGuide7 from '../components/RoboticGuide/card7';
import RoboticGuide8 from '../components/RoboticGuide/card8';
const RoboticGuide = () => {
  const [showCard, setShowCard] = useState(1);
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div class="mt-10">
     
      <RoboticGuideAbout activeButton={activeButton} />
      <RoboticGuideButtons
        setShowCard={setShowCard}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />

      {showCard === 1 && (
        <RoboticGuide1 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 2 && (
        <RoboticGuide2 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 3 && (
        <RoboticGuide3 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 4 && (
        <RoboticGuide4 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 5 && (
        <RoboticGuide5 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 6 && (
        <RoboticGuide6 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
    </div>
  );
};

export default RoboticGuide;
