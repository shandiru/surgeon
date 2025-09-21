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
    const [showCard, setShowCard] = useState(1);
    const [activeButton, setActiveButton] = useState(0);

    return (
        <div>
            <UltraSoundGuideButtons />
            <UltraSoundGuide activeButton={activeButton} />
            <UltraSoundButtons
                setShowCard={setShowCard}
                activeButton={activeButton}
                setActiveButton={setActiveButton}
            />

            {showCard === 1 && (
                <UltrasoundCard1 setShowCard={setShowCard} setActiveButton={setActiveButton} />
            )}
            {showCard === 2 && (
                <UltrasoundCard2 setShowCard={setShowCard} setActiveButton={setActiveButton} />
            )}
            {showCard === 3 && (
                <UltrasoundCard3 setShowCard={setShowCard} setActiveButton={setActiveButton} />
            )}
            {showCard === 4 && (
                <UltrasoundCard4 setShowCard={setShowCard} setActiveButton={setActiveButton} />
            )}
            {showCard === 5 && (
                <UltrasoundCard5 setShowCard={setShowCard} setActiveButton={setActiveButton} />
            )}
            {showCard === 6 && (
                <UltrasoundCard6 setShowCard={setShowCard} setActiveButton={setActiveButton} />
            )}
        </div>
    );
};

export default Ultrasound;
