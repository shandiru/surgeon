import { FiPhone } from "react-icons/fi";

export default function EndometrialInfoSection() {
  const pink = '#FFC5D3';
  const pinkHover = '#e6b0c0'; // slightly darker hover

  return (
    <section className="py-12" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container px-4 max-w-6xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center">
        {/* Content Section */}
        <div className="text-center md:text-left md:mr-12 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#111827' }}>
            Endometrial Cancer Information
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto md:mx-0 mb-8">
            Early detection and understanding are key to successful treatment. Learn about
            symptoms, diagnosis, and treatment options for endometrial cancer.
          </p>

          <button
            className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white px-6 py-2 rounded-md shadow focus-visible:ring-2 focus-visible:ring-offset-2 transition-all duration-300 ease-in-out hover:bg-[#f5a9bd] hover:shadow-lg active:bg-[#e6b0c0] active:shadow-md"
            style={{
              backgroundColor: pink,
              border: `1px solid ${pink}`,
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = pinkHover)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = pink)}
          >
            <FiPhone className="h-5 w-5" />
            Speak with a Healthcare Provider
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-start mt-8 md:mt-0">
          <img
            src="/Endometrial.png" // Replace with the actual image URL
            alt="Endometrial Cancer Awareness"
            className="mx-auto rounded-md shadow-lg transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
            style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px' }}
          />
        </div>
      </div>
    </section>
  );
}
