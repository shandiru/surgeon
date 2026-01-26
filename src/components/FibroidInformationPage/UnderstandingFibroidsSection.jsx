'use client'

import { BookOpen, Users } from 'lucide-react'

export default function UnderstandingFibroidsSection() {
  return (
    <section className="py-20 bg-light-pink-2">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-primary-pink">
          Understanding Fibroids
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-black">
          What they are, symptoms &amp; treatment options
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Learn More */}
          <button className="inline-flex items-center justify-center gap-2 text-base font-medium transition-all shadow-md hover:shadow-lg h-12 rounded-lg px-8 active:scale-[0.97] bg-primary-pink text-white">
            <BookOpen className="h-5 w-5" />
            Learn More
          </button>

          {/* Find Support */}
          <button className="inline-flex items-center justify-center gap-2 text-base font-medium transition-all shadow-md hover:shadow-lg h-12 rounded-lg px-8 active:scale-[0.97] bg-white text-primary-pink">
            <Users className="h-5 w-5" />
            Find Support
          </button>
        </div>
      </div>
    </section>
  )
}
