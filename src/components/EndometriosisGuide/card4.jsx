import { useState } from "react";
import { FaInfoCircle, FaStethoscope } from "react-icons/fa";

const EndometriosisCard4 = ({ setShowCard, setActiveButton }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const causes = [
  'Retrograde (backward) menstruation',
  'Genetics (family history)',
  'Immune system disorders',
  'Hormonal imbalances',
];

  return (
    <div className="space-y-6 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-5xl p-6 mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#FF4B8B]">
            What Causes Endometriosis?
          </h2>
          <p className="text-lg text-gray-700">
            The exact cause is unknown, but research suggests several possible factors:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {causes.map((item, index) => (
            <div
              key={index}
              className="bg-white text-[#333] flex flex-col items-center justify-center p-8 rounded-2xl shadow-md 
              transition duration-300 hover:shadow-[0_0_25px_rgba(176,59,102,0.4)] hover:-translate-y-2 active:scale-[0.98]"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-[#FF4B8B]/20 rounded-full flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-[#FF4B8B] rounded-full" />
              </div>

              {/* Text */}
              <p className="font-medium text-center text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigate Button */}
      <div className="px-6 pb-6 flex justify-center">
        <button
          onClick={() => {
            setShowCard(5);
            setActiveButton(4);
          }}
          className="w-full sm:w-[70%] md:w-[50%] bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white font-medium rounded-md h-10 px-4 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default EndometriosisCard4;
