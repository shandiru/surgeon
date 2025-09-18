import React from 'react'

const MenstrualHelpSection = () => {
  return (
    <section className="bg-[#FDF1F4] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4 text-balance text-[#4B1C1C]">
            You don't have to struggle through menstrual problems
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-[#6B4C4C]">
            Menstrual disorders are physical and/or emotional symptoms that occur before or during menstruation.
            Most have straightforward causes and can be treated effectively.
          </p>
          <button
            data-slot="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all
            disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none
            [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none
            focus-visible:border-pink-400 focus-visible:ring-pink-400/50 focus-visible:ring-[3px]
            aria-invalid:ring-red-300 dark:aria-invalid:ring-red-400 aria-invalid:border-red-300
            shadow-xs h-10 rounded-md px-6 has-[>svg]:px-4 bg-[#E65A8F] hover:bg-[#d84f84] text-white"
          >
            Learn About Treatment Options
          </button>
        </div>
      </div>
    </section>
  )
}

export default MenstrualHelpSection
