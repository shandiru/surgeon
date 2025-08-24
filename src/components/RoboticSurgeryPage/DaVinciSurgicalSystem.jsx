import { LuMonitor, LuActivity, LuEye, LuHand } from "react-icons/lu";

export default function DaVinciSurgicalSystem() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            The da Vinci Surgical System
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white text-blue-900 flex flex-col gap-4 rounded-xl border border-blue-200 py-6 px-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]">
              <LuMonitor className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold">Surgeon Console</h3>
              <p className="text-gray-700">
                Where the surgeon sits and controls the instruments with precision
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white text-blue-900 flex flex-col gap-4 rounded-xl border border-blue-200 py-6 px-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]">
              <LuActivity className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold">Patient-side Cart</h3>
              <p className="text-gray-700">
                Holds the robotic arms and surgical instruments
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white text-blue-900 flex flex-col gap-4 rounded-xl border border-blue-200 py-6 px-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]">
              <LuEye className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold">Vision System</h3>
              <p className="text-gray-700">
                Provides high-definition, 3D view of the operative field
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white text-blue-900 flex flex-col gap-4 rounded-xl border border-blue-200 py-6 px-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]">
              <LuHand className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold">Wristed Instruments</h3>
              <p className="text-gray-700">
                Greater range of motion than human hands for ultra-precise movements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
