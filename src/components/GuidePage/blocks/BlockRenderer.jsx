import React from "react";
import TextBlock from "./TextBlock";
import HeadingBlock from "./HeadingBlock";
import ImageBlock from "./ImageBlock";
import StatBoxBlock from "./StatBoxBlock";
import BulletListBlock from "./BulletListBlock";
import IconListBlock from "./IconListBlock";
import NumberedStepsBlock from "./NumberedStepsBlock";
import InfoBoxBlock from "./InfoBoxBlock";
import AccordionBlock from "./AccordionBlock";
import GridBlock from "./GridBlock";
import TagsBlock from "./TagsBlock";
import CtaBlock from "./CtaBlock";

const BlockRenderer = ({ block }) => {
  switch (block.type) {
    case "heading":
      return <HeadingBlock text={block.text} level={block.level} icon={block.icon} subtitle={block.subtitle} />;
    case "text":
      return <TextBlock value={block.value} />;
    case "image":
      return <ImageBlock src={block.src} alt={block.alt} />;
    case "statBox":
      return <StatBoxBlock stat={block.stat} description={block.description} />;
    case "bulletList":
      return <BulletListBlock items={block.items} />;
    case "iconList":
      return <IconListBlock items={block.items} />;
    case "numberedSteps":
      return <NumberedStepsBlock steps={block.steps} />;
    case "infoBox":
      return <InfoBoxBlock title={block.title} description={block.description} icon={block.icon} />;
    case "accordion":
      return <AccordionBlock items={block.items} />;
    case "grid":
      return <GridBlock columns={block.columns} items={block.items} />;
    case "tags":
      return <TagsBlock tags={block.tags} />;
    case "cta":
      return <CtaBlock label={block.label} icon={block.icon} />;
    default:
      return null;
  }
};

export default BlockRenderer;
