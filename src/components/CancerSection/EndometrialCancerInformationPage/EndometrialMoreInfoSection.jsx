import { LuPhone } from "react-icons/lu";

export default function MoreInfoSection() {
  return (
    <section className="text-center py-12 bg-[#f3f7f6] rounded-lg px-4">
      <h3 className="text-2xl font-bold text-[#1c1c1c] mb-4">
        Need More Information?
      </h3>
      <p className="text-[#4b5563] mb-6 max-w-2xl mx-auto">
        If you have concerns about any symptoms or need personalized medical advice, 
        please consult with a healthcare professional.
      </p>
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 text-white shadow-xs h-10 rounded-md px-6 bg-[#004b4a] hover:bg-[#00615f]">
        <LuPhone className="h-5 w-5 mr-2" />
        Contact Your Healthcare Provider
      </button>
    </section>
  );
}
