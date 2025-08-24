import {
  LuStethoscope,
  LuHeart,
  LuEye,
  LuActivity,
  LuCircleCheckBig,
} from "react-icons/lu";

export default function GynecologyApplications() {
  const cards = [
    {
      title: "Hysterectomy",
      icon: <LuStethoscope className="w-5 h-5" />,
      badge: "Uterus Removal",
      description:
        "Preferred for complex cases including large fibroids and endometriosis.",
      points: ["Less blood loss", "Fewer complications", "Quicker recovery"],
    },
    {
      title: "Myomectomy",
      icon: <LuHeart className="w-5 h-5" />,
      badge: "Fibroid Removal",
      description:
        "Precise removal of fibroids while preserving healthy uterine tissue.",
      points: ["Fertility preservation", "Tissue conservation"],
    },
    {
      title: "Endometriosis Excision",
      icon: <LuEye className="w-5 h-5" />,
      badge: "Tissue Removal",
      description:
        "Enhanced visualization of endometrial implants for precise treatment.",
      points: ["Meticulous dissection", "Delicate area precision"],
    },
    {
      title: "Gynecologic Cancer Surgery",
      icon: <LuActivity className="w-5 h-5" />,
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
    <section className="py-16 bg-[#f6fafe]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Applications in Gynecology
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white text-blue-900 flex flex-col gap-6 rounded-xl border border-l-4 border-l-blue-600 py-6 px-6 shadow-sm transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              >
                <div>
                  <div className="flex items-center gap-2 font-semibold text-blue-900 mb-1">
                    {card.icon}
                    {card.title}
                  </div>
                  <span className="inline-flex rounded-md border px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 w-fit">
                    {card.badge}
                  </span>
                </div>
                <div>
                  <p className="text-gray-700 mb-3">{card.description}</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {card.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <LuCircleCheckBig className="w-4 h-4 text-green-600" />
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
