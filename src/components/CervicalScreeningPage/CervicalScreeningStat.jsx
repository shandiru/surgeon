// src/components/CervicalScreeningStat.jsx
export default function CervicalScreeningStat() {
  return (
    <section className="text-center">
      <div
        data-slot="card"
        className="flex flex-col gap-6 rounded-xl border border-[#ff97b3] py-6 shadow-sm bg-[#ff97b3] text-white max-w-2xl mx-auto"
      >
        <div data-slot="card-content" className="px-6 pt-6">
          <div className="text-3xl font-bold mb-2">83%</div>
          <p className="text-lg">
            Regular screening can prevent up to 83% of cervical cancer cases
          </p>
        </div>
      </div>
    </section>
  );
}
