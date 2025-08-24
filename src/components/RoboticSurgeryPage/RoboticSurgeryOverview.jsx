import { LuScissors, LuEye, LuHand, LuZap } from "react-icons/lu";

export default function RoboticSurgeryOverview() {
  return (
    <section className="py-16 bg-[#f4f9ff]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Overview of Robotic Surgery
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Robotic surgery represents a revolutionary form of minimally
                invasive surgery that uses advanced technology to enhance
                surgical precision, control, and vision. Unlike traditional
                open surgery, robotic systems enable procedures through small
                incisions with robotic arms controlled by the surgeon from a
                specialized console.
              </p>
              <p className="text-lg text-gray-700">
                The da Vinci Surgical System, developed by Intuitive Surgical,
                has transformed gynecologic surgery by significantly improving
                patient outcomes and surgical experiences.
              </p>
            </div>

            {/* Features Box */}
            <div className="bg-blue-100 p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center transition-shadow duration-300 hover:shadow-[0_0_15px_2px_rgba(37,99,235,0.4)] rounded-lg p-4">
                  <LuScissors className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold text-blue-900">
                    Minimally Invasive
                  </p>
                </div>
                <div className="text-center transition-shadow duration-300 hover:shadow-[0_0_15px_2px_rgba(37,99,235,0.4)] rounded-lg p-4">
                  <LuEye className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold text-blue-900">
                    Enhanced Vision
                  </p>
                </div>
                <div className="text-center transition-shadow duration-300 hover:shadow-[0_0_15px_2px_rgba(37,99,235,0.4)] rounded-lg p-4">
                  <LuHand className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold text-blue-900">
                    Precise Control
                  </p>
                </div>
                <div className="text-center transition-shadow duration-300 hover:shadow-[0_0_15px_2px_rgba(37,99,235,0.4)] rounded-lg p-4">
                  <LuZap className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold text-blue-900">
                    Advanced Technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
