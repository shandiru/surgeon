import React, { useState } from "react";
import { useParams } from "react-router-dom";
import guides from "../../content";
import GuideAbout from "./GuideAbout";
import GuideButtons from "./GuideButtons";
import GuideCard from "./GuideCard";

const GuidePage = () => {
  const { slug } = useParams();
  const guide = guides[slug];
  const [showCard, setShowCard] = useState(1);
  const [activeButton, setActiveButton] = useState(0);

  if (!guide) {
    return (
      <div className="text-center mt-20 text-primary-pink">
        <h1 className="text-hero">Guide Not Found</h1>
        <p className="text-body-large mt-4">The guide you are looking for does not exist.</p>
      </div>
    );
  }

  const totalSteps = guide.sections.length;

  return (
    <div className="mt-10">
      <GuideAbout
        title={guide.title}
        subtitle={guide.subtitle}
        tag={guide.tag}
        activeButton={activeButton}
        totalSteps={totalSteps}
      />
      <GuideButtons
        sections={guide.sections}
        setShowCard={setShowCard}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      {guide.sections.map((section) =>
        showCard === section.id ? (
          <GuideCard
            key={section.id}
            section={section}
            totalSteps={totalSteps}
            setShowCard={setShowCard}
            setActiveButton={setActiveButton}
          />
        ) : null,
      )}
    </div>
  );
};

export default GuidePage;
