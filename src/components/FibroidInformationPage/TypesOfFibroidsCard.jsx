'use client'

import { Microscope } from "lucide-react"

export default function TypesOfFibroidsCard() {
  const pink = "#FFC5D3"
  const deepPink = "#FF4B8B"

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto bg-white text-[#212529] flex flex-col gap-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8">

        {/* Header */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Microscope className="h-7 w-7" style={{ color: deepPink }} />
            <h2 className="font-bold text-3xl" style={{ color: deepPink }}>
              Types of Fibroids
            </h2>
          </div>
          <p className="text-black text-base">
            It's possible to have more than one type at the same time:
          </p>
        </div>

        {/* Grid of Types */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Submucosal */}
          <div
            className="rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            style={{ backgroundColor: pink }}
          >
            <h4 className="font-semibold mb-2 text-lg" style={{ color: deepPink }}>
              Submucosal fibroids
            </h4>
            <p className="text-black text-sm leading-relaxed">
              Grow under the lining of the womb (may grow on a stalk)
            </p>
          </div>

          {/* Intramural */}
          <div
            className="rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            style={{ backgroundColor: pink }}
          >
            <h4 className="font-semibold mb-2 text-lg" style={{ color: deepPink }}>
              Intramural fibroids
            </h4>
            <p className="text-black text-sm leading-relaxed">
              Grow within the wall of the womb (most common)
            </p>
          </div>

          {/* Subserosal */}
          <div
            className="rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            style={{ backgroundColor: pink }}
          >
            <h4 className="font-semibold mb-2 text-lg" style={{ color: deepPink }}>
              Subserosal fibroids
            </h4>
            <p className="text-black text-sm leading-relaxed">
              Grow on the outside wall of the womb (can press on nearby organs if large)
            </p>
          </div>

          {/* Pedunculated */}
          <div
            className="rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            style={{ backgroundColor: pink }}
          >
            <h4 className="font-semibold mb-2 text-lg" style={{ color: deepPink }}>
              Pedunculated fibroids
            </h4>
            <p className="text-black text-sm leading-relaxed">
              Grow on a stalk, either inside or outside the womb
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
