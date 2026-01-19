import React from "react";
import { MapPin, Building2, Calendar } from "lucide-react";
import { Link } from "react-router-dom"; // <-- import Link

export default function ListingEvents() {
  const events = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      status: "Now Closed",
      rating: 4.5,
      title: "British Gynaecological Cancer Society Annual Meeting 2024",
      description: "Invited Speaker / Panel Chair",
      talk: "Advances in Minimally Invasive Surgery for Gynaecological Cancers",
      Date: "12–14 September 2024",
      address: "London, UK / Virtual",
      organiser: "British Gynaecological Cancer Society",
      link: "/event/1", // <-- event page link
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      status: "Open",
      rating: 4.8,
      title: "International Oncology Conference 2024",
      description: "Keynote Speaker",
      talk: "Innovations in Cancer Treatment",
      Date: "5–7 October 2024",
      address: "New York, USA / Virtual",
      organiser: "Global Oncology Association",
      link: "/event/2",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
      status: "Now Closed",
      rating: 4.3,
      title: "European Gynaecological Surgery Forum",
      description: "Invited Speaker",
      talk: "Robotic Surgery Techniques",
      Date: "20–22 November 2024",
      address: "Berlin, Germany",
      organiser: "European Surgical Society",
      link: "/event/3",
    },
  ];

  return (
    <section id="list" className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-16">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-[#FF4B8B] font-semibold mb-2">Speaking Engagements</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Top Listing Events</h2>
      </div>

      {/* Event Cards */}
      <div className="grid gap-8 max-w-7xl mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="relative">
              <img src={event.image} alt={event.title} className="w-full h-56 object-cover" />
              <span
                className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full bg-white ${
                  event.status === "Open" ? "text-green-600" : "text-gray-600"
                }`}
              >
                {event.status}
              </span>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 text-[#FF4B8B] text-sm mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < Math.round(event.rating) ? "text-[#FF4B8B]" : "text-gray-300"}>
                      ★
                    </span>
                  ))}
                  <span className="text-gray-700 ml-2">{event.rating}</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{event.description}</p>
                <p className="text-sm text-gray-700 mt-1 italic">{event.talk}</p>

                <div className="space-y-2 text-sm text-gray-600 mt-2">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{event.Date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{event.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 size={16} />
                    <span>{event.organiser}</span>
                  </div>
                </div>
              </div>

              {/* Footer / Action */}
              <div className="bg-[#FF4B8B] rounded-xl text-white px-5 py-4 mt-4 flex items-center justify-center">
                <Link to={event.link} className="font-medium text-sm uppercase w-full text-center">
                  View Programme
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
