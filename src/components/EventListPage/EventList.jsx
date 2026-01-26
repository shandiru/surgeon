import React from "react";
import { MapPin, Building2, Calendar } from "lucide-react";
import { Link } from "react-router-dom"; // <-- import Link

export default function ListingEvents({ events = [], selectedCategory = "All Events" }) {
  // Categorize events into Upcoming and Closed based on computed status from dates
  let upcomingEvents = [];
  let closedEvents = [];

  if (selectedCategory === "All Events") {
    upcomingEvents = events.filter((event) => event.isUpcoming || event.computedStatus === "Open");
    closedEvents = events.filter(
      (event) => !event.isUpcoming || event.computedStatus === "Now Closed",
    );
  } else if (selectedCategory === "Upcoming Events") {
    upcomingEvents = events.filter((event) => event.isUpcoming || event.computedStatus === "Open");
  } else if (selectedCategory === "Closed Events") {
    closedEvents = events.filter(
      (event) => !event.isUpcoming || event.computedStatus === "Now Closed",
    );
  }

  // Event Card Component
  const EventCard = ({ event }) => (
    <div
      key={event.id}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-1 transition-transform duration-300 flex flex-col md:flex-row w-full max-w-full"
    >
      {/* Image */}
      <div className="relative md:w-80 flex-shrink-0">
        <img src={event.image} alt={event.title} className="w-full h-56 md:h-full object-cover" />
        <span
          className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full bg-white ${
            event.isUpcoming || event.computedStatus === "Open" ? "text-green-600" : "text-black"
          }`}
        >
          {event.computedStatus || (event.isUpcoming ? "Open" : "Now Closed")}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1 text-primary-pink text-sm mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={i < Math.round(event.rating) ? "text-primary-pink" : "text-gray-300"}
              >
                ★
              </span>
            ))}
            <span className="text-black ml-2">{event.rating}</span>
          </div>

          <h3 className="text-lg font-semibold text-black">{event.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{event.description}</p>
          <p className="text-sm text-black mt-1 italic">{event.talk}</p>

          <div className="space-y-2 text-sm text-black mt-2">
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
        <div className="bg-primary-pink rounded-xl text-white px-5 py-4 mt-4 flex items-center justify-center">
          {event.link.startsWith("http") ? (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-sm uppercase w-full text-center"
            >
              View Programme
            </a>
          ) : (
            <Link to={event.link} className="font-medium text-sm uppercase w-full text-center">
              View Programme
            </Link>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="list" className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-16">
      {/* Heading */}
      <div className="text-center mb-14">
        <p className="text-primary-pink font-semibold mb-2">Speaking Engagements</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-black">Top Listing Events</h2>
      </div>

      {/* Upcoming Events Section */}
      {upcomingEvents.length > 0 && (
        <div className="mb-16 max-w-7xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-black mb-8">Upcoming Events</h3>
          <div className="flex flex-col gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      )}

      {/* Closed Events Section */}
      {closedEvents.length > 0 && (
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-black mb-8">Closed Events</h3>
          <div className="flex flex-col gap-8">
            {closedEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
