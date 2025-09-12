import { FaPhone } from "react-icons/fa";

export default function EndometrialInfoSection() {
  const pink = '#FFC5D3'
  const pinkHover = '#e6b0c0' // slightly darker hover

  return (
    <section className="py-12" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4" style={{ color: '#111827' }}>
          Endometrial Cancer Information
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Early detection and understanding are key to successful treatment. Learn about
          symptoms, diagnosis, and treatment options for endometrial cancer.
        </p>

        <button
          className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white px-6 py-2 rounded-md shadow focus-visible:ring-2 focus-visible:ring-offset-2 transition-all"
          style={{
            backgroundColor: pink,
            border: `1px solid ${pink}`,
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = pinkHover)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = pink)}
        >
          <FaPhone className="h-5 w-5" />
          Speak with a Healthcare Provider
        </button>
      </div>
    </section>
  );
}
