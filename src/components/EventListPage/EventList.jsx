import React from "react";
import { MapPin, Phone, Building2, ChevronLeft, ChevronRight } from "lucide-react";

export default function ListingEvents() {
  const events = [
    {
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      status: "Now Closed",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      status: "Open",
    },
    {
      image:
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
      status: "Now Closed",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-16">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-orange-500 font-semibold mb-2">
          Restaurants Event
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Top Listing Events
        </h2>
      </div>

      {/* Navigation Arrows */}
      <button className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow items-center justify-center hover:bg-orange-500 hover:text-white transition">
        <ChevronLeft />
      </button>

      <button className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow items-center justify-center hover:bg-orange-500 hover:text-white transition">
        <ChevronRight />
      </button>

      {/* Cards */}
      <div className="grid gap-8 max-w-7xl mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={item.image}
                alt="Event"
                className="w-full h-56 object-cover"
              />

              {/* Status */}
              <span
                className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full bg-white ${
                  item.status === "Open"
                    ? "text-green-600"
                    : "text-gray-600"
                }`}
              >
                {item.status}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Rating */}
              <div className="flex items-center gap-1 text-orange-500 text-sm mb-2">
                ★★★★★ <span className="text-gray-700 ml-2">4.5</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                Private Hotel-Spa
              </h3>

              <p className="text-sm text-gray-500 mt-1 mb-4">
                Luxury hotel in the heart of Bloomsbury.
              </p>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>95 South Park Avenue</span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+61 2 8236 9200</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-orange-600 text-white px-5 py-4 flex items-center gap-2">
              <Building2 size={18} />
              <span className="text-sm font-medium">Restaurant</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
