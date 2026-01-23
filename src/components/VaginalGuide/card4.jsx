import { useState } from "react";
import { FaInfoCircle, FaStethoscope } from "react-icons/fa";

const VaginalCard4 = ({ setShowCard, setActiveButton }) => {
  const primaryPink = "bg-primary-pint";
  const deepPink = "bg-primary-pink";
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="space-y-6 px-0 sm:px-6 lg:px-8">
      <div className="max-w-5xl p-3 mx-auto flex flex-col gap-6">
        {/* Card Container */}
        <div className="rounded-xl shadow-sm flex flex-col overflow-hidden animate-in slide-in-from-right-5 duration-300">

          {/* Card Header */}
          <div className={`px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${deepPink} text-white`}>
            <div className="flex items-center gap-2">
              <FaStethoscope className="w-6 h-6" />
              <h2 className="text-xl sm:text-2xl font-semibold">Symptoms of Vaginal Cancer</h2>
            </div>
          </div>

          {/* Content Section */}
          <div className="grid md:grid-cols-2 gap-6 px-6 py-6 items-start">

            {/* Left Column */}
            <div>
              <p className="text-[#7a2f4f] mb-4 text-sm sm:text-base">
                Early vaginal cancer often has no symptoms. As it progresses, signs may include:
              </p>

              <ul className="space-y-2 text-sm sm:text-base text-[#7a2f4f]">
                {[
                  "Unusual vaginal bleeding (after intercourse or after menopause)",
                  "Watery vaginal discharge",
                  "A lump or mass in the vagina",
                  "Painful urination",
                  "Frequent urination",
                  "Constipation",
                  "Pelvic pain",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary-pink mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: FIXED RESPONSIVE IMAGE */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/vaginal.png"
                alt="Vaginal Cancer Awareness"
                className="
                  w-full
                  max-w-[220px]     /* very small screens */
                  sm:max-w-[280px]  /* small screens */
                  md:max-w-[350px]  /* medium screens */
                  lg:max-w-[420px]  /* large screens */
                  rounded-xl 
                  shadow-md 
                  object-contain    /* prevent zooming/cropping */
                "
              />
            </div>
          </div>

          {/* Info Box */}
          <div className={`${primaryPink} m-6 p-4 rounded-lg flex items-center gap-2 shadow-sm`}>
            <FaInfoCircle className="w-5 h-5 text-black" />
            <p className="font-medium text-black text-sm sm:text-base">
              Routine pelvic exams are important for early detection.
            </p>
          </div>

          {/* Navigate Button */}
          <div className="px-6 pb-6 flex justify-center">
            <button
              onClick={() => {
                setShowCard(5);
                setActiveButton(4);
              }}
              className="w-full sm:w-[70%] md:w-[50%] bg-primary-pink hover:bg-primary-pink/80 text-white font-medium rounded-md h-10 px-4 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Learn More
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VaginalCard4;
