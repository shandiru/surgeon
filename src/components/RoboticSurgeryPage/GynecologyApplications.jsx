import {
  LuStethoscope,
  LuHeart,
  LuEye,
  LuActivity,
  LuCircleCheckBig,
} from "react-icons/lu";

export default function GynecologyApplications() {
  const accentPink = "#F93981"; // CTA/Highlight
  const deepPink = "#B51252"; // Headings & icons

  const cards = [
    {
      title: "Hysterectomy",
      icon: <LuStethoscope className="w-5 h-5 text-[#B51252]" />,
      badge: "Uterus Removal",
      description:
        "Preferred for complex cases including large fibroids and endometriosis.",
      points: ["Less blood loss", "Fewer complications", "Quicker recovery"],
    },
    {
      title: "Myomectomy",
      icon: <LuHeart className="w-5 h-5 text-[#B51252]" />,
      badge: "Fibroid Removal",
      description:
        "Precise removal of fibroids while preserving healthy uterine tissue.",
      points: ["Fertility preservation", "Tissue conservation"],
    },
    {
      title: "Endometriosis Excision",
      icon: <LuEye className="w-5 h-5 text-[#B51252]" />,
      badge: "Tissue Removal",
      description:
        "Enhanced visualization of endometrial implants for precise treatment.",
      points: ["Meticulous dissection", "Delicate area precision"],
    },
    {
      title: "Gynecologic Cancer Surgery",
      icon: <LuActivity className="w-5 h-5 text-[#B51252]" />,
      badge: "Oncologic Procedures",
      description:
        "Used in early-stage cervical or endometrial cancer for lymph node dissection and staging.",
      points: [
        "Minimally invasive option",
        "Oncologic safety comparable to open surgery",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#B51252]">
            Applications in Gynecology
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white flex flex-col gap-6 rounded-xl border-l-4 py-6 px-6 shadow-sm 
                  transition duration-300 transform
                  hover:scale-105 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(185,18,82,0.3)]
                  active:scale-105 active:-translate-y-2 active:shadow-[0_8px_30px_rgba(185,18,82,0.3)]"
                style={{ borderLeftColor: accentPink }}
              >
                <div>
                  <div className="flex items-center gap-2 font-semibold mb-1 text-[#B51252]">
                    {card.icon}
                    {card.title}
                  </div>
                  <span className="inline-flex rounded-md px-2 py-0.5 text-xs font-medium bg-[#FDEBED] text-[#B51252] w-fit">
                    {card.badge}
                  </span>
                </div>
                <div>
                  <p className="text-gray-700 mb-3">{card.description}</p>
                  <ul className="text-sm text-gray-600 space-y-1">
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
    </section>
  );
}
