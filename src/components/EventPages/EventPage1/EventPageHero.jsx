import React from "react";

export default function EventPageHero() {
  return (
    <section className="w-full h-[100vh] overflow-hidden">
      {/* Slick-like Slide Wrapper */}
      <div className="relative w-full">
        <div
          className="
            w-full
            transition-all
            duration-500
            ease-in-out
            opacity-100
            z-10
          "
        >
          {/* Slide Item */}
          <div className="w-full inline-block">
            <div
              className="
                w-full
                h-[100vh]
                rounded-xl
                bg-center
                bg-cover
                bg-no-repeat
              "
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1528605248644-14dd04022da1)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
