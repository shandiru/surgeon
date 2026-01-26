import React, { useState } from "react";
import { ChevronRight, Circle, CircleDashed, AlertCircle } from "lucide-react";

const VulvarVaginalSection = () => {
  const [openSections, setOpenSections] = useState({});

  const handleToggle = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const sections = [
    {
      id: "vaginalCysts",
      icon: <AlertCircle className="w-6 h-6 text-[#FF4B8B]" />,
      title: "Vaginal Cysts",
      description: "Pouch-like sacs that can contain pus, air, or scar tissue",
      details: [
        "Usually small and painless",
        "Bartholin's cysts – near the vaginal opening",
        "Endometriosis cysts – caused by endometriosis tissue",
        "Gartner's duct cysts – often during pregnancy",
        "Inclusion cysts – from vaginal trauma, e.g. after childbirth",
      ],
    },
    {
      id: "vaginalPolyps",
      icon: <CircleDashed className="w-6 h-6 text-[#FF4B8B]" />,
      title: "Vaginal Polyps (Skin Tags)",
      description: "Small, soft outgrowths of skin",
      details: [
        "Usually harmless and painless",
        "Treated only if they bleed or cause discomfort",
        "Can appear as small, flesh-colored bumps",
        "May develop due to hormonal changes or irritation",
      ],
    },
    {
      id: "vaginalWarts",
      icon: <AlertCircle className="w-6 h-6 text-[#FF4B8B]" />,
      title: "Vaginal Warts or Herpes Blisters",
      description: "Caused by viral infections (HPV or herpes)",
      details: [
        "Warts are caused by HPV (a common STI)",
        "May appear as small, irregular growths around the vaginal opening",
        "Herpes can cause blisters or sores that may look like pimples",
        "Both conditions are treatable with proper medical care",
      ],
    },
    {
      id: "vaginalCancer",
      icon: <Circle className="w-6 h-6 text-[#FF4B8B]" />,
      title: "Vaginal Cancer (Rare)",
      description: "Uncommon but requires immediate medical attention",
      details: [
        "Can cause persistent lumps",
        "May also cause unusual bleeding or discharge",
        "Advanced symptoms can include pelvic pain, back pain, constipation or leg swelling",
        "These symptoms are much more likely to be caused by infections or benign lumps",
      ],
    },
  ];

  return (
    <section id="causes" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#FF4B8B]">
              Common Causes of Vulvar &amp; Vaginal Lumps
            </h2>
            <p className="text-lg text-gray-700">
              Understanding the different types of lumps can help you know what to expect
            </p>
          </div>

          {/* Expandable Cards */}
          <div className="space-y-4">
            {sections.map((section) => (
              <div
                key={section.id}
                className="flex flex-col rounded-xl bg-white py-6 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01] active:scale-[0.99]"
              >
                {/* Card Header */}
                <div className="cursor-pointer px-6 pb-2" onClick={() => handleToggle(section.id)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span>{section.icon}</span>
                      <div>
                        <div className="font-semibold text-left text-[#FF4B8B]">
                          {section.title}
                        </div>
                        <p className="text-sm text-black">{section.description}</p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`transition-transform text-[#FF4B8B] ${
                        openSections[section.id] ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Card Details */}
                {openSections[section.id] && (
                  <ul className="px-14 space-y-1 list-disc text-sm text-gray-700">
                    {section.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VulvarVaginalSection;
