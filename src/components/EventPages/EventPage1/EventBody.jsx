import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Star,
  Share2,
  Calendar,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { eventsData } from "../../../EventData/Data";

const EventDetail = () => {
  const { id } = useParams();
  const event = eventsData[id];

  const [activeOrganizer, setActiveOrganizer] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-black">Event Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:shadow-2xl">
              <div className="p-6 lg:p-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="inline-flex items-center px-4 py-2 bg-primary-pink/20 text-primary-pink rounded-full font-semibold text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </span>
                  <span className="text-black/90 font-medium">
                    {event.shortLocation}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary-pink flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-black">Location</p>
                      <p className="text-black/90">{event.locationName}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary-pink flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-black">Phone</p>
                      <p className="text-black/90">{event.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="w-5 h-5 text-primary-pink flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-black">Website</p>
                      <p className="text-black/90">{event.website}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-black rounded-xl font-semibold transition-all">
                    <Share2 className="w-5 h-5 mr-2" /> Share
                  </button>
                  <a
                    href={event.joinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none px-8 py-3 bg-primary-pink text-white rounded-xl font-semibold transition-all shadow-lg text-center"
                  >
                    Join Event
                  </a>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary-pink pb-2 inline-block">
                About Event
              </h2>
              <p className="text-black leading-relaxed">{event.about}</p>
            </div>

            {/* Speakers */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-primary-pink pb-2 inline-block">
                Who's Speaking?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {event.speakers.map((speaker, index) => (
                  <div key={index} className="text-center group">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-gray-100 group-hover:ring-primary-pink transition-all"
                    />
                    <h3 className="text-lg font-bold text-gray-900 mt-4">
                      {speaker.name}
                    </h3>
                    <p className="text-sm text-black/90">{speaker.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-primary-pink pb-2 inline-block">
                FAQ's
              </h2>
              <div className="space-y-3">
                {event.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-primary-pink/50 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                      className="w-full flex items-center justify-between p-4 bg-primary-pink/20 hover:bg-primary-pink/30 transition-all"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 text-left">
                        {faq.question}
                      </h3>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="p-4 bg-white">
                        <p className="text-black">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-6">
              <div className="bg-primary-pink p-4 text-white text-xl font-bold">
                Who Host this Event
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={event.organizers[activeOrganizer].image}
                    className="w-20 h-20 rounded-full object-cover ring-4 ring-primary-pink"
                    alt="Host"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {event.organizers[activeOrganizer].name}
                    </h3>
                    <p className="text-sm text-primary-pink">
                      Posted {event.organizers[activeOrganizer].postedDays} days
                      ago
                    </p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-black">
                    <MapPin size={16} color="#FF4B8B" />{" "}
                    {event.organizers[activeOrganizer].location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-black">
                    <Mail size={16} color="#FF4B8B" />{" "}
                    {event.organizers[activeOrganizer].email}
                  </div>
                </div>
                <div className="flex justify-center space-x-2">
                  {event.organizers.map((org, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveOrganizer(index)}
                      className={`w-14 h-14 rounded-full overflow-hidden ring-2 transition-all ${activeOrganizer === index ? "ring-primary-pink scale-110" : "ring-gray-200"}`}
                    >
                      <img
                        src={org.image}
                        alt={org.name}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
