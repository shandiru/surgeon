import { LuPhone } from "react-icons/lu";

export default function MoreInfoSection() {
  const pink = '#FFC5D3'

  return (
    <section className="text-center py-12 px-4 max-w-6xl mx-auto bg-white rounded-lg border" style={{ borderColor: pink }}>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Need More Information?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        If you have concerns about any symptoms or need personalized medical advice, 
        please consult with a healthcare professional.
      </p>
      <button
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 text-white shadow-xs h-10 rounded-md px-6"
        style={{ backgroundColor: pink }}
      >
        <LuPhone className="h-5 w-5 mr-2" />
        Contact Your Healthcare Provider
      </button>
    </section>
  );
}
