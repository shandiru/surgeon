// src/Page/Colposcopy.jsx
import React, { useState } from 'react';
import UltraSoundGuideButtons from '../components/Ultrasound/Header';
import UltraSoundGuide from '../components/Ultrasound/About';
import UltraSoundButtons from "../components/Ultrasound/Button"
import UltrasoundCard1 from '../components/Ultrasound/Card1';
import UltrasoundCard2 from '../components/Ultrasound/card2';
import UltrasoundCard3 from '../components/Ultrasound/card3';
import UltrasoundCard4 from '../components/Ultrasound/card4';
import UltrasoundCard5 from '../components/Ultrasound/card5';
import UltrasoundCard6 from '../components/Ultrasound/card6';

const Ultrasound = () => {
    // State to keep track of which card is being shown
    const [showCard, setShowCard] = useState(1); // Default to Card 1

    return (
        <div>
            {/* Render Guide Buttons */}
            <UltraSoundGuideButtons />

            {/* Render Colposcopy Guide */}
            <UltraSoundGuide />

            {/* Render Colposcopy Guide Buttons (to toggle cards) */}
            <UltraSoundButtons setShowCard={setShowCard} />

            {showCard === 1 && <UltrasoundCard1 />}
            {showCard === 2 && <UltrasoundCard2 />}
            {showCard === 3 && <UltrasoundCard3 />}
            {showCard === 4 && <UltrasoundCard4 />}
            {showCard === 5 && <UltrasoundCard5 />}
            {showCard === 6 && <UltrasoundCard6 />}
        </div>
    );
};

export default Ultrasound;
