import { FaRegClock, FaHeartbeat } from "react-icons/fa";
import { PiDropFill } from "react-icons/pi";
import { BsCheckCircle } from "react-icons/bs";
import { FiCalendar } from "react-icons/fi";

const NormalCycleInfo = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 flex items-center gap-2 text-primary-pink">
          <FiCalendar className="text-primary-pink text-2xl" />
          What's a Normal Menstrual Cycle?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Card 1 */}
          <div
            className="rounded-xl p-6 bg-gradient-to-br from-light-pink-1 to-light-pink-2 
                       shadow-md hover:shadow-xl hover:-translate-y-1 active:scale-95 
                       transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              <FaRegClock className="text-primary-pink text-xl" />
              <h3 className="text-lg font-semibold text-black">Cycle Length</h3>
            </div>
            <p className="text-3xl font-bold mb-1 text-primary-pink">21–35</p>
            <p className="text-sm text-black">days between periods</p>
          </div>

          {/* Card 2 */}
          <div
            className="rounded-xl p-6 bg-gradient-to-br from-light-pink-1 to-light-pink-2 
                       shadow-md hover:shadow-xl hover:-translate-y-1 active:scale-95 
                       transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              <FaHeartbeat className="text-primary-pink text-xl" />
              <h3 className="text-lg font-semibold text-black">Period Duration</h3>
            </div>
            <p className="text-3xl font-bold mb-1 text-primary-pink">2–7</p>
            <p className="text-sm text-black">days of bleeding</p>
          </div>

          {/* Card 3 */}
          <div
            className="rounded-xl p-6 bg-gradient-to-br from-light-pink-1 to-light-pink-2 
                       shadow-md hover:shadow-xl hover:-translate-y-1 active:scale-95 
                       transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              <PiDropFill className="text-primary-pink text-xl" />
              <h3 className="text-lg font-semibold text-black">Blood Loss</h3>
            </div>
            <p className="text-3xl font-bold mb-1 text-primary-pink">30–80ml</p>
            <p className="text-sm text-black">3–8 soaked pads/tampons per day</p>
          </div>
        </div>

        {/* Bottom Note */}
        <div
          className="rounded-xl p-5 flex items-start gap-3 text-sm 
                     bg-gradient-to-r from-light-pink-1 to-light-pink-2 
                     shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95
                     transition-all duration-300"
        >
          <BsCheckCircle className="mt-0.5 text-primary-pink text-lg" />
          <p className="text-black">
            What’s “normal” is what’s normal for you — sudden changes are worth checking with your
            healthcare provider.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NormalCycleInfo;
