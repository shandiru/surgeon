import { LuStethoscope } from "react-icons/lu";

const disorders = [
  {
    title: "Abnormal Uterine Bleeding",
    description: "Heavy or prolonged bleeding",
  },
  {
    title: "Amenorrhoea",
    description: "No menstrual bleeding",
  },
  {
    title: "Oligomenorrhoea",
    description: "Infrequent or light periods",
  },
  {
    title: "Fibroids",
    description: "Noncancerous growths in the womb",
  },
  {
    title: "PMS",
    description: "Physical and emotional symptoms before your period",
  },
  {
    title: "PMDD",
    description: "Severe physical and emotional symptoms before your period",
  },
];

const MenstrualDisordersSection = () => {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 mb-12 text-center sm:text-left">
        <LuStethoscope className="h-8 w-8 text-primary-pink" />
        <h2 className="text-3xl md:text-4xl font-bold text-primary-pink">
          Types of Menstrual Disorders
        </h2>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {disorders.map((disorder, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 rounded-2xl p-8 shadow-md hover:shadow-xl 
                       hover:-translate-y-1 active:scale-95 transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #fdecef 0%, #fff5f9 100%)",
              color: "#3c0c0c",
            }}
          >
            {/* Badge */}
            <div>
              <span
                className="inline-block rounded-full px-4 py-1 text-xs font-semibold tracking-wide"
                style={{
                  backgroundColor: "#fff",
                  color: "#c2185b",
                  boxShadow: "0 2px 6px rgba(233, 30, 99, 0.15)",
                }}
              >
                {disorder.title}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base leading-relaxed text-[#3c0c0c]">
              {disorder.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenstrualDisordersSection;
