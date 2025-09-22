'use client'

export default function TypesOfFibroidsCard() {
  return (
    <section className="py-16 px-6 bg-[#fff5f9]">
      <div className="max-w-5xl mx-auto bg-white text-[#212529] flex flex-col gap-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 border border-[#f8c6d8]">
        
        {/* Header */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🧬</span>
            <h2 className="font-bold text-3xl text-[#d63384]">Types of Fibroids</h2>
          </div>
          <p className="text-gray-600 text-base">
            It's possible to have more than one type at the same time:
          </p>
        </div>

        {/* Grid of Types */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Submucosal */}
          <div className="bg-gradient-to-r from-[#fff0f6] to-[#ffeaf2] border border-[#f783ac]/40 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <h4 className="font-semibold text-[#d63384] mb-2 text-lg">Submucosal fibroids</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              Grow under the lining of the womb (may grow on a stalk)
            </p>
          </div>

          {/* Intramural */}
          <div className="bg-gradient-to-r from-[#fff0f6] to-[#ffeaf2] border border-[#f783ac]/40 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <h4 className="font-semibold text-[#d63384] mb-2 text-lg">Intramural fibroids</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              Grow within the wall of the womb (most common)
            </p>
          </div>

          {/* Subserosal */}
          <div className="bg-gradient-to-r from-[#fff0f6] to-[#ffeaf2] border border-[#f783ac]/40 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <h4 className="font-semibold text-[#d63384] mb-2 text-lg">Subserosal fibroids</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              Grow on the outside wall of the womb (can press on nearby organs if large)
            </p>
          </div>

          {/* Pedunculated */}
          <div className="bg-gradient-to-r from-[#fff0f6] to-[#ffeaf2] border border-[#f783ac]/40 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <h4 className="font-semibold text-[#d63384] mb-2 text-lg">Pedunculated fibroids</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              Grow on a stalk, either inside or outside the womb
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
