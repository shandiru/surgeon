import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LuStethoscope, LuHeart, LuEye, LuActivity, LuCircleCheckBig } from "react-icons/lu";

const RoboticGuide4 = ({ setShowCard, setActiveButton }) => {
  const cards = [
    {
      title: "Hysterectomy",
      icon: <LuStethoscope className="w-5 h-5 text-[#FF4B8B]" />,
      badge: "Uterus Removal",
      description: "Preferred for complex cases including large fibroids and endometriosis.",
      points: ["Less blood loss", "Fewer complications", "Quicker recovery"],
    },
    {
      title: "Myomectomy",
      icon: <LuHeart className="w-5 h-5 text-[#FF4B8B]" />,
      badge: "Fibroid Removal",
      description: "Precise removal of fibroids while preserving healthy uterine tissue.",
      points: ["Fertility preservation", "Tissue conservation"],
    },
    {
      title: "Endometriosis Excision",
      icon: <LuEye className="w-5 h-5 text-[#FF4B8B]" />,
      badge: "Tissue Removal",
      description: "Enhanced visualization of endometrial implants for precise treatment.",
      points: ["Meticulous dissection", "Delicate area precision"],
    },
    {
      title: "Gynecologic Cancer Surgery",
      icon: <LuActivity className="w-5 h-5 text-[#FF4B8B]" />,
      badge: "Oncologic Procedures",
      description:
        "Used in early-stage cervical or endometrial cancer for lymph node dissection and staging.",
      points: ["Minimally invasive option", "Oncologic safety comparable to open surgery"],
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="space-y-6 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#FF4B8B]" data-aos="fade-down">
            Applications in Gynecology
          </h2>

          {/* FIXED GRID — LAST CARD WILL CENTER */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white flex flex-col gap-6 rounded-xl border-l-4 py-6 px-6 text-center shadow-sm 
                   transition duration-300 transform
                   hover:scale-105 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(185,18,82,0.3)]
                   active:scale-105 active:-translate-y-2 text-[#FF4B8B] active:shadow-[0_8px_30px_rgba(185,18,82,0.3)]"
                data-aos="zoom-in"
              >
                <div>
                  <div
                    className="flex items-center justify-center gap-2 font-semibold mb-1 text-[#FF4B8B]"
                    data-aos="fade-right"
                  >
                    {card.icon}
                    {card.title}
                  </div>
                  <span className="inline-flex rounded-md px-2 py-0.5 text-xs font-medium bg-[#FDEBED] text-[#FF4B8B]">
                    {card.badge}
                  </span>
                </div>

                <div>
                  <p className="text-gray-700 mb-3">{card.description}</p>
                  <ul className="text-sm text-black space-y-1">
                    {card.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <LuCircleCheckBig className="w-4 h-4 text-[#F93981]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
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

export default RoboticGuide4;
