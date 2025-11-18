import React, { useState } from 'react';

import PostmenopausalBleedingGuideAbout from '../components/PostmenopausalBleedingGuide/About';
import PostmenopausalBleedingGuideButtons from '../components/PostmenopausalBleedingGuide/Button';
import PostmenopausalBleedingGuideCard1 from '../components/PostmenopausalBleedingGuide/Card1';
import PostmenopausalBleedingGuideCard2 from '../components/PostmenopausalBleedingGuide/card2';
import PostmenopausalBleedingGuidecard3 from '../components/PostmenopausalBleedingGuide/card3';
import PostmenopausalBleedingGuideCard4 from '../components/PostmenopausalBleedingGuide/card4';
import PostmenopausalBleedingGuideCard5 from '../components/PostmenopausalBleedingGuide/card5';
import PostmenopausalBleedingGuideCard6 from '../components/PostmenopausalBleedingGuide/card6';
import PostmenopausalBleedingGuideCard7 from '../components/PostmenopausalBleedingGuide/card7';
import PostmenopausalBleedingGuideCard8 from '../components/PostmenopausalBleedingGuide/card8';
const PostmenopausalBleedingGuide = () => {
  const [showCard, setShowCard] = useState(1);
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div class="mt-10">
     
      <PostmenopausalBleedingGuideAbout activeButton={activeButton} />
      <PostmenopausalBleedingGuideButtons
        setShowCard={setShowCard}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />

      {showCard === 1 && (
        <PostmenopausalBleedingGuideCard1 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 2 && (
        <PostmenopausalBleedingGuideCard2 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 3 && (
        <PostmenopausalBleedingGuidecard3 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 4 && (
        <PostmenopausalBleedingGuideCard4 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 5 && (
        <PostmenopausalBleedingGuideCard5 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 6 && (
        <PostmenopausalBleedingGuideCard6 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 7 && (
        <PostmenopausalBleedingGuideCard7 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
      {showCard === 8 && (
        <PostmenopausalBleedingGuideCard8 setShowCard={setShowCard} setActiveButton={setActiveButton} />
      )}
    </div>
  );
};

export default PostmenopausalBleedingGuide;
