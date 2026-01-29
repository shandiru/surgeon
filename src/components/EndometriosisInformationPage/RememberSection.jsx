"use client";

import React from "react";

export default function RememberSection() {
  const pink = "#FFC5D3";
  const deepPink = "#FF4B8B";

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: deepPink }}>
            Remember
          </h2>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={deepPink}
                    strokeWidth="2"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                ),
                text: "Endometriosis is common and treatable",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={deepPink}
                    strokeWidth="2"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                text: "You are not alone — support is available",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={deepPink}
                    strokeWidth="2"
                  >
                    <path d="M11 2v2" />
                    <path d="M5 2v2" />
                    <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
                    <path d="M8 15a6 6 0 0 0 12 0v-3" />
                    <circle cx="20" cy="10" r="2" />
                  </svg>
                ),
                text: "Early diagnosis can relieve pain and protect fertility",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center rounded-2xl p-6 shadow-md transition duration-300 hover:shadow-xl hover:-translate-y-2 active:scale-[0.98]"
                style={{
                  backgroundColor: `${pink}20`,
                }}
              >
                {item.icon}
                <p className="font-medium text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="p-8 rounded-2xl shadow-lg bg-white">
            <p className="text-lg mb-6 text-gray-700">
              If you think you may have endometriosis, book an appointment — we&apos;re here to
              help.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* Primary Button */}
              <button
                className="inline-flex items-center justify-center gap-2 text-sm font-medium h-11 px-6 rounded-lg text-white shadow-md transition hover:opacity-90 active:scale-[0.97]"
                style={{ backgroundColor: deepPink }}
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 19 19.5 19.5 0 0 1 5.19 13 19.79 19.79 0 0 1 2.12 4.33 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81A2 2 0 0 1 9.36 8.64l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                Book Appointment
              </button>

              {/* Secondary Button */}
              <button
                className="inline-flex items-center justify-center gap-2 text-sm font-medium h-11 px-6 rounded-lg shadow-sm transition hover:bg-light-pink-1/20 active:scale-[0.97]"
                style={{ color: deepPink }}
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Find Support Groups
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
