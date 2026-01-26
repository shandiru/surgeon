import React from "react";

const OvarianCancerGuideCard2 = ({ setShowCard, setActiveButton }) => {
  return (
    <div className="space-y-6 pb-10">
      {/* Card Container */}
      <div
        className="max-w-sm sm:max-w-2xl lg:max-w-5xl mx-auto mb-10 
        flex flex-col gap-6 rounded-2xl border border-primary-pink/10 shadow-sm 
        animate-in slide-in-from-right-5 duration-300 p-8 bg-white"
      >
        {/* Card Header */}
        <div className="grid auto-rows-min items-start gap-1.5">
          <div className="leading-none font-semibold flex items-center gap-2 text-primary-pink">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-primary-pink"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            How Ovarian Cancer Starts
          </div>
        </div>

        {/* Card Content */}
        <div className="space-y-6">
          {/* Intro Box */}
          <div
            className="p-4 rounded-xl border transition-all duration-300 
            hover:shadow-lg hover:scale-105 active:scale-100"
            style={{
              backgroundColor: "#FFF5F8",
              borderColor: "rgb(255,197,211)",
            }}
          >
            <p className="text-lg leading-relaxed" style={{ color: "#7a2f4f" }}>
              Ovarian cancer can develop in different types of cells inside the ovary. Understanding
              where it starts helps doctors diagnose the type and plan the most effective treatment.
            </p>
          </div>

          {/* Types of Ovarian Cancer */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Type 1 */}
            <div className="p-4 rounded-xl border border-primary-pink/10 bg-white transition-all duration-300 hover:shadow-md">
              <h4 className="font-semibold mb-2 text-primary-pink">Epithelial Ovarian Cancer</h4>
              <p className="text-sm text-black">
                The most common type — <strong>around 90%</strong> of all ovarian cancers. It begins
                in the cells covering the surface of the ovary or fallopian tubes.
              </p>
            </div>

            {/* Type 2 */}
            <div
              className="p-4 rounded-xl border bg-white transition-all duration-300 hover:shadow-md"
              style={{
                borderColor: "rgb(255,197,211)",
                backgroundColor: "#FFFFFF",
              }}
            >
              <h4 className="font-semibold mb-2" style={{ color: "#FF4B8B" }}>
                Germ Cell Tumours
              </h4>
              <p className="text-sm" style={{ color: "#7a2f4f" }}>
                Start in the cells that produce eggs. These are less common and tend to affect
                younger women.
              </p>
            </div>

            {/* Type 3 */}
            <div className="p-4 rounded-xl border border-primary-pink/10 bg-white transition-all duration-300 hover:shadow-md">
              <h4 className="font-semibold mb-2 text-primary-pink">Stromal Tumours</h4>
              <p className="text-sm text-black">
                Begin in the hormone-producing cells of the ovary. They are rare and often detected
                earlier because they can cause hormone-related symptoms.
              </p>
            </div>
          </div>

          {/* Extra Info Box */}
          <div className="p-4 rounded-xl border border-primary-pink/10 bg-light-pink-1">
            <h4 className="font-semibold flex items-center gap-2 mb-2 text-primary-pink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-primary-pink"
              >
                <path d="M9 18h6"></path>
                <path d="M10 22h4"></path>
                <path d="M2 10a10 10 0 1 1 20 0c0 3.46-1.8 6.5-4.53 8.12a1 1 0 0 0-.47.85V20a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-.97a1 1 0 0 0-.47-.85A9.99 9.99 0 0 1 2 10Z"></path>
              </svg>
              Did You Know?
            </h4>

            <p className="text-sm text-black">
              Some ovarian cancers begin in the fallopian tubes and spread to the ovary — but they
              are still grouped as ovarian cancer.
            </p>
          </div>

          {/* Continue Button */}
          <div className="pt-6 flex justify-center">
            <button
              onClick={() => {
                setShowCard(3);
                setActiveButton(2);
              }}
              className="inline-flex items-center bg-primary-pink hover:bg-primary-pink/80 text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-9 px-4 py-2 w-full cursor-pointer"
            >
              Continue to Next Section
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OvarianCancerGuideCard2;
