import { FaRegClock, FaHeartbeat } from 'react-icons/fa';
import { PiDropFill } from 'react-icons/pi';
import { BsCheckCircle } from 'react-icons/bs';
import { FiCalendar } from 'react-icons/fi';

const NormalCycleInfo = () => {
  return (
    <section
      className="py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#ffffff' }} // 🔄 white background
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2
          className="text-2xl sm:text-3xl font-semibold mb-8 flex items-center gap-2"
          style={{ color: '#c2185b' }}
        >
          <FiCalendar style={{ color: '#e91e63' }} />
          What's a Normal Menstrual Cycle?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Card 1 */}
          <div
            className="rounded-xl p-6 shadow-sm hover:shadow-md transition border"
            style={{
              backgroundColor: '#fdecef', // 🔄 pink card box
              borderColor: '#f8bbd0',
              color: '#3c0c0c',
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <FaRegClock style={{ color: '#e91e63' }} className="text-xl" />
              <h3 className="text-lg font-semibold">Cycle Length</h3>
            </div>
            <p className="text-3xl font-bold mb-1" style={{ color: '#e91e63' }}>
              21–35
            </p>
            <p className="text-sm" style={{ color: '#3c0c0c' }}>
              days between periods
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="rounded-xl p-6 shadow-sm hover:shadow-md transition border"
            style={{
              backgroundColor: '#fdecef', // 🔄 pink card box
              borderColor: '#f8bbd0',
              color: '#3c0c0c',
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <FaHeartbeat style={{ color: '#e91e63' }} className="text-xl" />
              <h3 className="text-lg font-semibold">Period Duration</h3>
            </div>
            <p className="text-3xl font-bold mb-1" style={{ color: '#e91e63' }}>
              2–7
            </p>
            <p className="text-sm" style={{ color: '#3c0c0c' }}>
              days of bleeding
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="rounded-xl p-6 shadow-sm hover:shadow-md transition border"
            style={{
              backgroundColor: '#fdecef', // 🔄 pink card box
              borderColor: '#f8bbd0',
              color: '#3c0c0c',
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <PiDropFill style={{ color: '#e91e63' }} className="text-xl" />
              <h3 className="text-lg font-semibold">Blood Loss</h3>
            </div>
            <p className="text-3xl font-bold mb-1" style={{ color: '#e91e63' }}>
              30–80ml
            </p>
            <p className="text-sm" style={{ color: '#3c0c0c' }}>
              3–8 soaked pads/tampons per day
            </p>
          </div>
        </div>

        {/* Bottom Note */}
        <div
          className="rounded-xl p-4 flex items-start gap-2 text-sm"
          style={{
            backgroundColor: '#fdecef', // 🔄 pink box
            borderColor: '#f8bbd0',
            color: '#900c3f',
            borderWidth: '1px',
            borderStyle: 'solid',
          }}
        >
          <BsCheckCircle className="mt-1" style={{ color: '#e91e63' }} />
          <p>
            What’s “normal” is what’s normal for you — sudden changes are worth
            checking with your healthcare provider.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NormalCycleInfo;
