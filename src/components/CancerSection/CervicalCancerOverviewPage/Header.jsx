import { LuStethoscope } from "react-icons/lu";

export default function CervicalCancerHeader() {
  return (
    <header className="border-b border-gray-200 bg-[#f4fcfc]">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center gap-3">
          {/* Icon with background */}
          <div className="p-2 bg-teal-100 rounded-lg">
            <LuStethoscope className="h-8 w-8 text-teal-700" />
          </div>

          {/* Heading and subtitle */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Cervical Cancer Overview
            </h1>
            <p className="text-gray-500 mt-1">
              Clinical Information for Surgeons
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
