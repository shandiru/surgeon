import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import { LuUsers, LuStethoscope, LuCircleCheckBig } from "react-icons/lu";

const RoboticGuide5 = ({ setShowCard, setActiveButton }) => {
  const patientBenefits = [
    "Smaller incisions, resulting in reduced scarring",
    "Less postoperative pain",
    "Lower risk of infection",
    "Shorter hospital stays",
    "Faster return to normal activities",
    "Reduced blood loss and need for transfusion",
  ];

  const surgeonBenefits = [
    "Enhanced visualization with 3D magnified views",
    "Superior dexterity and precision",
    "Ergonomic comfort during long procedures",
    "Ability to perform complex procedures with greater control",
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once when scrolled
    });
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Benefits for Patients */}
            <div
              className="rounded-lg p-6 bg-white border border-gray-200 shadow-sm
                   transition duration-300 transform
                   hover:scale-105 hover:-translate-y-2 hover:shadow-[0_8px_25px_rgba(176,59,102,0.25)]"
              data-aos="zoom-in"
            >
              <h3 className="text-2xl font-bold mb-8 text-[#FF4B8B] flex items-center gap-2">
                <LuUsers className="w-6 h-6 text-[#FF4B8B]" />
                Benefits for Patients
              </h3>
              <div className="space-y-4">
                {patientBenefits.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <LuCircleCheckBig className="w-5 h-5 text-[#FF4B8B] mt-0.5 flex-shrink-0" />
                    <p className="text-black">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Advantages for Surgeons */}
            <div
              className="rounded-lg p-6 bg-white border border-gray-200 shadow-sm
                   transition duration-300 transform
                   hover:scale-105 hover:-translate-y-2 hover:shadow-[0_8px_25px_rgba(176,59,102,0.25)]"
              data-aos="zoom-in"
            >
              <h3 className="text-2xl font-bold mb-8 text-[#FF4B8B] flex items-center gap-2">
                <LuStethoscope className="w-6 h-6 text-[#FF4B8B]" />
                Advantages for Surgeons
              </h3>
              <div className="space-y-4">
                {surgeonBenefits.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <LuCircleCheckBig className="w-5 h-5 text-[#FF4B8B] mt-0.5 flex-shrink-0" />
                    <p className="text-black">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* NEXT BUTTON */}
          <div className="pt-2 p-6 mt-2">
            <button
              onClick={() => {
                setShowCard(6);
                setActiveButton(5);
              }}
              className="w-full bg-[#FF4B8B] hover:bg-[#FF4B8B]/80 text-white rounded-md h-10 px-4 flex items-center justify-center text-sm font-medium transition"
            >
              Learn About Treatment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoboticGuide5;
