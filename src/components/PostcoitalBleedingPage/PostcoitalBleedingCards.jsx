import React from 'react';

export default function PostcoitalBleedingCards() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          {/* Card 1 */}
          <div
            className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#1F2937',
              borderColor: '#FEE6EA',
            }}
          >
            <div className="grid items-start gap-1.5 px-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-center text-[#FF4B8B] mx-auto mb-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <div className="font-semibold text-lg">Common Condition</div>
            </div>
            <div className="px-6">
              <p style={{ color: '#6B7280' }}>
                Around 1 in 10 women experience postcoital bleeding at some point
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#1F2937',
              borderColor: '#FEE6EA',
            }}
          >
            <div className="grid items-start gap-1.5 px-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-center text-[#FF4B8B] mx-auto mb-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              <div className="font-semibold text-lg">Usually Painless</div>
            </div>
            <div className="px-6">
              <p style={{ color: '#6B7280' }}>
                Most cases are painless and not serious
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#1F2937',
              borderColor: '#FEE6EA',
            }}
          >
            <div className="grid items-start gap-1.5 px-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-center text-[#FF4B8B] mx-auto mb-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              </svg>
              <div className="font-semibold text-lg">Treatable</div>
            </div>
            <div className="px-6">
              <p style={{ color: '#6B7280' }}>
                Most causes are harmless and easily treated
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
