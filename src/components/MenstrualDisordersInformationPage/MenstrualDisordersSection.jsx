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
    <section className="py-12 px-4 sm:px-6 lg:px-12">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 text-center sm:text-left">
        <LuStethoscope className="h-6 w-6" style={{ color: "#e91e63" }} />
        <h2 className="text-2xl font-bold" style={{ color: "#c2185b" }}>
          Types of Menstrual Disorders
        </h2>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {disorders.map((disorder, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 rounded-xl border py-6 px-6 shadow-sm hover:shadow-md transition-shadow"
            style={{
              backgroundColor: "#fdecef",
              color: "#3c0c0c",
              borderColor: "#f8bbd0",
            }}
          >
            {/* Badge */}
            <div>
              <span
                className="inline-flex items-center justify-center rounded-md border px-3 py-1 text-xs font-semibold w-fit"
                style={{
                  backgroundColor: "#fdecef",
                  borderColor: "#f8bbd0",
                  color: "#c2185b",
                }}
              >
                {disorder.title}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm" style={{ color: "#3c0c0c" }}>
              {disorder.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenstrualDisordersSection;
