'use client'

import { BookOpen, Users } from 'lucide-react'

export default function UnderstandingFibroidsSection() {
  return (
    <section className="bg-[#fff1f6] py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#d63384] mb-6 leading-tight">
          Understanding Fibroids
        </h1>
        <p className="text-xl text-[#6c757d] mb-8 max-w-2xl mx-auto">
          What they are, symptoms &amp; treatment options
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            className="inline-flex items-center justify-center gap-2 text-sm font-medium transition-all bg-[#f7d6e0] text-[#d63384] hover:bg-[#f5cbd9] shadow-xs h-10 rounded-md px-6"
          >
            <BookOpen className="h-5 w-5 mr-2" />
            Learn More
          </button>
          <button
            className="inline-flex items-center justify-center gap-2 text-sm font-medium transition-all border border-[#f7d6e0] bg-white text-[#d63384] hover:bg-[#fff5f9] hover:text-[#d63384] shadow-xs h-10 rounded-md px-6"
          >
            <Users className="h-5 w-5 mr-2" />
            Find Support
          </button>
        </div>
      </div>
    </section>
  )
}
