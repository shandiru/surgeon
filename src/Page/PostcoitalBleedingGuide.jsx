import React, { useState } from 'react';

import PostcoitalBleedingGuideAbout from '../components/PostcoitalBleedingGuide/About';
import PostcoitalBleedingGuideButtons from '../components/PostcoitalBleedingGuide/Button';
import PostcoitalBleedingGuideCard1 from '../components/PostcoitalBleedingGuide/Card1';
import PostcoitalBleedingGuideCard2 from '../components/PostcoitalBleedingGuide/card2';
import PostcoitalBleedingGuidecard3 from '../components/PostcoitalBleedingGuide/card3';
import PostcoitalBleedingGuideCard4 from '../components/PostcoitalBleedingGuide/card4';
import PostcoitalBleedingGuideCard5 from '../components/PostcoitalBleedingGuide/card5';
import PostcoitalBleedingGuideCard6 from '../components/PostcoitalBleedingGuide/card6';
import PostcoitalBleedingGuideCard7 from '../components/PostcoitalBleedingGuide/card7';
import PostcoitalBleedingGuideCard8 from '../components/PostcoitalBleedingGuide/card8';

const PostcoitalBleedingGuide = () => {
  
  const [showCard, setShowCard] = useState(1);
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div class="mt-10">
     
      <PostcoitalBleedingGuideAbout activeButton={activeButton} />
      <PostcoitalBleedingGuideButtons
        setShowCard={setShowCard}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />

      {showCard === 1 && (
        <PostcoitalBleedingGuideCard1 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 2 && (
        <PostcoitalBleedingGuideCard2 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 3 && (
        <PostcoitalBleedingGuidecard3 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 4 && (
        <PostcoitalBleedingGuideCard4 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 5 && (
        <PostcoitalBleedingGuideCard5 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 6 && (
        <PostcoitalBleedingGuideCard6 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
    </div>
  );
};

export default PostcoitalBleedingGuide;
