import React, { useState } from "react";
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

const EventDetail = () => {
  const [activeOrganizer, setActiveOrganizer] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const organizers = [
    {
      name: "Mark Willma",
      postedDays: 3,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      location: "484 Ellis St, Francisco, CA 94102",
      email: "example@gmail.com",
      phone: "89+97872978129",
      website: "www.yourwebsite.com",
    },
    {
      name: "Mark Joe",
      postedDays: 8,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      location: "484 Ellis St, Francisco, CA 94102",
      email: "example@gmail.com",
      phone: "89+97872978129",
      website: "www.yourwebsite.com",
    },
    {
      name: "Willma Mark",
      postedDays: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      location: "484 Ellis St, Francisco, CA 94102",
      email: "example@gmail.com",
      phone: "89+97872978129",
      website: "www.yourwebsite.com",
    },
  ];

  const speakers = [
    {
      name: "Annemijn Aarts",
      role: "The Netherlands",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop",
    },
    {
      name: "Nadeem Abu-Rustum",
      role: "USA",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    },
    {
      name: "Frederic Amant,",
      role: "The Netherlands",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop",
    },
  ];

  const sponsors = [
    "https://via.placeholder.com/200x80/3B82F6/FFFFFF?text=Sponsor+1",
    "https://via.placeholder.com/200x80/8B5CF6/FFFFFF?text=Sponsor+2",
    "https://via.placeholder.com/200x80/EC4899/FFFFFF?text=Sponsor+3",
    "https://via.placeholder.com/200x80/10B981/FFFFFF?text=Sponsor+4",
    "https://via.placeholder.com/200x80/F59E0B/FFFFFF?text=Sponsor+5",
    "https://via.placeholder.com/200x80/EF4444/FFFFFF?text=Sponsor+6",
  ];

  const schedules = [
    {
      title: "Auditorium A",
      subtitle: "Introduction to WP",
      date: "Day 1 - 20 Nov 2020",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=300&fit=crop",
    },
    {
      title: "Auditorium B",
      subtitle: "Advanced Techniques",
      date: "Day 2 - 21 Nov 2020",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=300&h=300&fit=crop",
    },
  ];

  const faqs = [
    {
      question: "Royal Park of America Produces",
      answer:
        "Royal Park of America produces premium branded and private label lubricants for agriculture.",
    },
    {
      question: "Private label Lubricants",
      answer:
        "Royal Park of America produces premium branded and private label lubricants for agriculture.",
    },
    {
      question: "Automotive, Fleet",
      answer:
        "Royal Park of America produces premium branded and private label lubricants for agriculture.",
    },
    {
      question: "Industrial Applications",
      answer:
        "Royal Park of America produces premium branded and private label lubricants for agriculture.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:shadow-2xl">
              <div className="p-6 lg:p-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-black mb-3">
                  Annual Scientific Meeting – Bristol 2026
                </h1>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="inline-flex items-center px-4 py-2 bg-primary-pink/20 text-primary-pink rounded-full font-semibold text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    24th and 26th June 2026.
                  </span>
                  <span className="text-black font-medium">British Gynaecology Cancer Society</span>
                </div>

                {/* Event Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary-pink flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-black">Location</p>
                      <p className="text-black">London and Birmingham</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-primary-pink flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-black">Phone</p>
                      <p className="text-black">(+0064) 725 4143 68</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-4 h-4 text-yellow-400" />
                    </div>
                    <span className="text-black">563 reviews</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="w-5 h-5 text-primary-pink flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-black">Website</p>
                      <p className="text-black">bgcs.org.uk</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-black rounded-xl font-semibold transition-all transform hover:scale-105">
                    <Share2 className="w-5 h-5 mr-2" />
                    Share
                  </button>
                  <a
                    href="https://www.bgcs.org.uk/about-us/join/"
                    target="_blank"
                    className="flex-1 md:flex-none px-8 py-3 bg-gradient-to-r from-primary-pink to-primary-pink hover:bg-primary-pink/20 text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg"
                  >
                    Join Event
                  </a>
                </div>
              </div>
            </div>

            {/* About Event */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-black mb-4 border-b-2 border-primary-pink pb-2 inline-block">
                About Event
              </h2>
              <div className="space-y-4 text-black leading-relaxed">
                <p>
                  The British Gynaecological Cancer Society (BGCS) is the professional home of
                  health providers working and researching the area of gynaecological cancers.
                </p>
                <p>
                  Our members consist of medical practitioners, clinical nurse specialists and other
                  allied professionals, including scientists who want to improve the outcome of all
                  effected by gynaecological cancers. We represent trainees, nurses, unit leads,
                  medical and clinical oncologists, gynaecological oncologists, pathologists and
                  radiologists. Our membership is steadily increasing with at present 700 members
                  and 220 members regularly attend our annual conference.
                </p>
              </div>
            </div>

            {/* Speakers */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-black mb-6 border-b-2 border-primary-pink pb-2 inline-block">
                Who's Speaking?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {speakers.map((speaker, index) => (
                  <div key={index} className="text-center group">
                    <div className="relative mb-4 inline-block">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-gray-100 group-hover:ring-primary-pink transition-all"
                      />
                      <div className="absolute inset-0 rounded-full bg-primary-pink opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    </div>
                    <h3 className="text-lg font-bold text-black">{speaker.name}</h3>
                    <p className="text-sm text-black">{speaker.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-black mb-6 border-b-2 border-primary-pink pb-2 inline-block">
                Location
              </h2>
              <div className="rounded-xl overflow-hidden mb-6 h-64 lg:h-96 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: MapPin, text: "484 Ellis St, San Francisco, CA 94102, United States" },
                  { icon: Phone, text: "+61 2 8236 9200" },
                  { icon: Mail, text: "administrator@bgcs.org.uk" },
                  { icon: Globe, text: "bgcs.org.uk" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <item.icon className="w-5 h-5 text-primary-pink flex-shrink-0" />
                    <span className="text-black text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sponsors */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-black mb-6 border-b-2 border-primary-pink pb-2 inline-block">
                Our Sponsors
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {sponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all hover:shadow-md"
                  >
                    <img src={sponsor} alt={`Sponsor ${index + 1}`} className="max-w-full h-auto" />
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-black mb-6 border-b-2 border-primary-pink pb-2 inline-block">
                FAQ's
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-primary-pink/50 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                      className="w-full flex items-center justify-between p-4 bg-primary-pink/20 hover:bg-primary-pink transition-all"
                    >
                      <h3 className="text-lg font-semibold text-black">{faq.question}</h3>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-primary-pink" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-black" />
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
            {/* Event Host */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-6">
              <div className="bg-gradient-to-r from-primary-pink to-primary-pink p-4">
                <h2 className="text-xl font-bold text-white">Who Host this Event</h2>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={organizers[activeOrganizer].image}
                      alt={organizers[activeOrganizer].name}
                      className="w-20 h-20 rounded-full object-cover ring-4 ring-primary-pink/20"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-black">
                        {organizers[activeOrganizer].name}
                      </h3>
                      <p className="text-sm text-primary-pink">
                        Posted {organizers[activeOrganizer].postedDays} days ago
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { icon: MapPin, text: organizers[activeOrganizer].location },
                      { icon: Mail, text: organizers[activeOrganizer].email },
                      { icon: Phone, text: organizers[activeOrganizer].phone },
                      { icon: Globe, text: organizers[activeOrganizer].website },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <item.icon className="w-5 h-5 text-primary-pink flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-black">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center space-x-2">
                  {organizers.map((org, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveOrganizer(index)}
                      className={`w-14 h-14 rounded-full overflow-hidden ring-2 transition-all ${
                        activeOrganizer === index
                          ? "ring-primary-pink scale-110"
                          : "ring-gray-200 hover:ring-primary-pink/50"
                      }`}
                    >
                      <img src={org.image} alt={org.name} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Event Schedule */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-primary-pink to-primary-pink p-4">
                <h2 className="text-xl font-bold text-white">Event Schedule</h2>
              </div>
              <div className="p-6 space-y-6">
                {schedules.map((schedule, index) => (
                  <div key={index} className="text-center group">
                    <div className="relative mb-4 inline-block">
                      <img
                        src={schedule.image}
                        alt={schedule.title}
                        className="w-32 h-32 rounded-full mx-auto object-cover ring-4 ring-gray-100 group-hover:ring-primary-pink transition-all"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-black mb-1">{schedule.title}</h3>
                    <p className="text-sm text-black mb-2">{schedule.subtitle}</p>
                    <span className="inline-block px-4 py-1 bg-primary-pink/20 text-primary-pink rounded-full text-sm font-semibold">
                      {schedule.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
