// src/Page/Colposcopy.jsx
import React, { useState } from 'react';
import GuideButtons from '../components/colposcopy/Header';
import ColposcopyGuide from '../components/colposcopy/About';
import ColposcopyCard1 from '../components/colposcopy/Card1';
import ColposcopyGuideButtons from '../components/colposcopy/Button';
import ColposcopyCard2 from '../components/colposcopy/card2';
import Colposcopycard3 from '../components/colposcopy/card3';
import ColposcopyCard4 from '../components/colposcopy/card4';
import Colposcopycard5 from '../components/colposcopy/card5';
import Colposcopycard6 from '../components/colposcopy/card6';
import Colposcopycard7 from '../components/colposcopy/card7';

const Colposcopy = () => {
  // State to keep track of which card is being shown
  const [showCard, setShowCard] = useState(1); // Default to Card 1

  return (
    <div>
      {/* Render Guide Buttons */}
      <GuideButtons />

      {/* Render Colposcopy Guide */}
      <ColposcopyGuide />

      {/* Render Colposcopy Guide Buttons (to toggle cards) */}
      <ColposcopyGuideButtons setShowCard={setShowCard} />

      {/* Render the selected card based on the button clicked */}
      {showCard === 1 && <ColposcopyCard1 />}
      {showCard === 2 && <ColposcopyCard2 />}
      {showCard === 3 && <Colposcopycard3 />}
      {showCard === 4 && <ColposcopyCard4 />}
      {showCard === 5 && <Colposcopycard5 />}
      {showCard === 6 && <Colposcopycard6 />}
      {showCard === 7 && <Colposcopycard7 />}
    </div>
  );
};

export default Colposcopy;
