import { LuStethoscope } from "react-icons/lu";

export default function CervicalCancerHeader() {
  return (
    <header className="border-b" style={{ backgroundColor: "#FFC5D3", borderColor: "#f5a9bd" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-4">
          {/* Icon with background */}
          <div className="p-3 rounded-lg" style={{ backgroundColor: "#fbe1ea" }}>
            <LuStethoscope className="h-8 w-8" style={{ color: "#b03b66" }} />
          </div>

          {/* Heading and subtitle */}
          <div>
            <h1 className="text-3xl font-bold" style={{ color: "#b03b66" }}>
              Cervical Cancer Overview
            </h1>
            <p className="mt-1 text-sm" style={{ color: "#7a2f4f" }}>
              Clinical Information for Surgeons
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
