'use client'

import { BookOpen, Users } from 'lucide-react'

export default function UnderstandingFibroidsSection() {
  return (
    <section className="bg-gradient-to-r from-[#fff1f6] to-[#ffe6f0] py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#d63384] mb-6 leading-tight">
          Understanding Fibroids
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#6c757d] mb-10 max-w-2xl mx-auto">
          What they are, symptoms &amp; treatment options
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Learn More */}
          <button
            className="inline-flex items-center justify-center gap-2 text-base font-medium transition-all bg-[#f7d6e0] text-[#d63384] hover:bg-[#f5cbd9] shadow-md hover:shadow-lg h-12 rounded-lg px-8 active:scale-[0.97]"
          >
            <BookOpen className="h-5 w-5" />
            Learn More
          </button>

          {/* Find Support */}
          <button
            className="inline-flex items-center justify-center gap-2 text-base font-medium transition-all border border-[#f7d6e0] bg-white text-[#d63384] hover:bg-[#fff5f9] shadow-md hover:shadow-lg h-12 rounded-lg px-8 active:scale-[0.97]"
          >
            <Users className="h-5 w-5" />
            Find Support
          </button>
        </div>
      </div>
    </section>
  )
}
