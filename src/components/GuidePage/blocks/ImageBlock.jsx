import React from "react";

const ImageBlock = ({ src, alt }) => {
  return (
    <div className="flex justify-center lg:justify-end px-2 sm:px-4 lg:px-8">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full max-w-lg rounded-2xl shadow-xl
          transition duration-300 transform
          hover:scale-105 hover:-translate-y-2 hover:shadow-light-pink-2
          active:scale-105 active:-translate-y-2 active:shadow-light-pink-2"
      />
    </div>
  );
};

export default ImageBlock;
