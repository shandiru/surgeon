// src/Page/Colposcopy.jsx
import React, { useState } from 'react';
import UltrasoundCard1 from '../components/Ultrasound/Card1';
import UltrasoundCard2 from '../components/Ultrasound/card2';
import UltrasoundCard3 from '../components/Ultrasound/card3';
import UltrasoundCard4 from '../components/Ultrasound/card4';
import UltrasoundCard5 from '../components/Ultrasound/card5';
import UltrasoundCard6 from '../components/Ultrasound/card6';
import HysteroscopyButtons from '../components/Hysteroscopy/Header';
import HysteroscopyGuide from '../components/Hysteroscopy/About';
import HysterosButtons from '../components/Hysteroscopy/Button';
import HysteroscopyCard1 from '../components/Hysteroscopy/Card1';
import HysteroscopyCard2 from '../components/Hysteroscopy/card2';
import HysteroscopyCard3 from '../components/Hysteroscopy/card3';
import Hysteroscopycard4 from '../components/Hysteroscopy/card4';
import Hysteroscopycard5 from '../components/Hysteroscopy/card5';
import Hysteroscopycard6 from '../components/Hysteroscopy/card6';

const Hysteroscopy = () => {
    // State to keep track of which card is being shown
    const [showCard, setShowCard] = useState(1); // Default to Card 1

    return (
        <div>
            {/* Render Guide Buttons */}
            <HysteroscopyButtons />

            {/* Render Colposcopy Guide */}
            <HysteroscopyGuide />

            {/* Render Colposcopy Guide Buttons (to toggle cards) */}
            <HysterosButtons setShowCard={setShowCard} />

            {showCard === 1 && <HysteroscopyCard1 />}
            {showCard === 2 && <HysteroscopyCard2 />}
            {showCard === 3 && <HysteroscopyCard3 />}
            {showCard === 4 && <Hysteroscopycard4 />}
            {showCard === 5 && <Hysteroscopycard5 />}
            {showCard === 6 && <Hysteroscopycard6 />}
        </div>
    );
};

export default Hysteroscopy;
