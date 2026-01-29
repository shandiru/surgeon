import React from "react";

const TagsBlock = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-light-pink-2 text-primary-pink"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagsBlock;
