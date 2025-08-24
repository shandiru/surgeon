import { FaPhone } from "react-icons/fa";

export default function EndometrialInfoSection() {
  return (
    <section className="py-12 bg-[#f9fafb]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#111827] mb-4">
          Endometrial Cancer Information
        </h2>
        <p className="text-xl text-[#6b7280] max-w-3xl mx-auto mb-8">
          Early detection and understanding are key to successful treatment. Learn about
          symptoms, diagnosis, and treatment options for endometrial cancer.
        </p>

        <button className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-[#a2ba39] hover:bg-[#8fa830] text-white px-6 py-2 rounded-md shadow focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#a2ba39]">
          <FaPhone className="h-5 w-5" />
          Speak with a Healthcare Provider
        </button>
      </div>
    </section>
  );
}
