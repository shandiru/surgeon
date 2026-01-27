import React from "react";

const TagsBlock = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#FF4B8B]/10 text-[#BB125B]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagsBlock;
