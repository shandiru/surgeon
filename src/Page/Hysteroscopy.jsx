// src/Page/Colposcopy.jsx
import React, { useState } from 'react';
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
    const [showCard, setShowCard] = useState(1);
    const [activeButton, setActiveButton] = useState(0);

    return (
        <div>
            <HysteroscopyButtons />
            <HysteroscopyGuide activeButton={activeButton} />
            <HysterosButtons
                setShowCard={setShowCard}
                activeButton={activeButton}
                setActiveButton={setActiveButton}
            />

            {showCard === 1 && (
                <HysteroscopyCard1 setShowCard={setShowCard} setActiveButton={setActiveButton} />
            )}
            {showCard === 2 && (
                <HysteroscopyCard2 setShowCard={setShowCard} setActiveButton={setActiveButton} />
            )}
            {showCard === 3 && (
                <HysteroscopyCard3 setShowCard={setShowCard} setActiveButton={setActiveButton} />
            )}
            {showCard === 4 && (
                <Hysteroscopycard4 setShowCard={setShowCard} setActiveButton={setActiveButton} />
            )}
            {showCard === 5 && (
                <Hysteroscopycard5 setShowCard={setShowCard} setActiveButton={setActiveButton} />
            )}
            {showCard === 6 && (
                <Hysteroscopycard6 setShowCard={setShowCard} setActiveButton={setActiveButton} />
            )}
        </div>
    );
};

export default Hysteroscopy;