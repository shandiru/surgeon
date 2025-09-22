import {
  LuStethoscope,
  LuHeart,
  LuEye,
  LuActivity,
  LuCircleCheckBig,
} from "react-icons/lu";

export default function GynecologyApplications() {
  const pink = "#FFC5D3";
  const deepPink = "#b03b66";

  const cards = [
    {
      title: "Hysterectomy",
      icon: <LuStethoscope className="w-5 h-5 text-[#b03b66]" />,
      badge: "Uterus Removal",
      description:
        "Preferred for complex cases including large fibroids and endometriosis.",
      points: ["Less blood loss", "Fewer complications", "Quicker recovery"],
    },
    {
      title: "Myomectomy",
      icon: <LuHeart className="w-5 h-5 text-[#b03b66]" />,
      badge: "Fibroid Removal",
      description:
        "Precise removal of fibroids while preserving healthy uterine tissue.",
      points: ["Fertility preservation", "Tissue conservation"],
    },
    {
      title: "Endometriosis Excision",
      icon: <LuEye className="w-5 h-5 text-[#b03b66]" />,
      badge: "Tissue Removal",
      description:
        "Enhanced visualization of endometrial implants for precise treatment.",
      points: ["Meticulous dissection", "Delicate area precision"],
    },
    {
      title: "Gynecologic Cancer Surgery",
      icon: <LuActivity className="w-5 h-5 text-[#b03b66]" />,
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
    <section className="py-16" style={{ backgroundColor: "#FFF5F8" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#b03b66]">
            Applications in Gynecology
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white text-[#b03b66] flex flex-col gap-6 rounded-xl border border-l-4 py-6 px-6 shadow-sm 
                  transition duration-300 transform
                  hover:scale-105 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(176,59,102,0.4)]
                  active:scale-105 active:-translate-y-2 active:shadow-[0_8px_30px_rgba(176,59,102,0.4)]"
                style={{ borderColor: pink, borderLeftColor: deepPink }}
              >
                <div>
                  <div className="flex items-center gap-2 font-semibold mb-1">
                    {card.icon}
                    {card.title}
                  </div>
                  <span className="inline-flex rounded-md border px-2 py-0.5 text-xs font-medium bg-[#fff0f5] text-[#b03b66] w-fit">
                    {card.badge}
                  </span>
                </div>
                <div>
                  <p className="text-gray-700 mb-3">{card.description}</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {card.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <LuCircleCheckBig className="w-4 h-4 text-[#b03b66]" />
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
