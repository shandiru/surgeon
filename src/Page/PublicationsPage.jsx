"use client";
import React from "react";
import { File } from "lucide-react";
import { FaUser } from "react-icons/fa";

// ----- JSON DATA -----
const publications = [
  {
    id: 1,
    date: "JANUARY 2011",
    type: "ARTICLE",
    title: "Management of breast cancer during pregnancy",
    authors:
      "Radhika Padmagirison MRCOG Specialist Registrar, Ketan Gajjar, Chris Spencer MD FRCOG Consultant Obstetrician and Gynaecologist",
    link: "/publication/1",
  },
  {
    id: 2,
    date: "OCTOBER 2009",
    type: "ARTICLE",
    title:
      "P935 Study of prevalence of intra-operative adhesions and its association with risk factors",
    authors: "Ketan Gajjar, D. Shukla, Amita Mahendru, L. Chauhan",
    link: "/publication/2",
  },
];

export default function PublicationsSection() {
  return (
    <section className="w-full py-16" style={{ backgroundColor: "#FFF7F9" }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-4xl font-bold" style={{ color: "#FF4B8B" }}>
          Publications & Updates
        </h2>

        <p
          className="text-center text-lg mt-2 mb-10"
          style={{ color: "#804659" }}
        >
          Academic papers and research contributions in obstetrics and gynecology
        </p>

        {/* Content */}
        <div className="space-y-12">
          {publications.map((item) => (
            <div
              key={item.id}
              className="pb-12 last:border-none"
              style={{ borderBottom: "1px solid rgb(255,197,211)" }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">

                {/* Date */}
                <div className="w-full md:w-1/4">
                  <p
                    className="font-medium tracking-wide"
                    style={{ color: "#804659" }}
                  >
                    {item.date}
                  </p>
                </div>

                {/* Article Content */}
                <div className="w-full md:w-3/4 space-y-2">

                  {/* Type */}
                  <div
                    className="flex items-center gap-2 text-sm font-semibold"
                    style={{ color: "#FF4B8B" }}
                  >
                    <File size={18} style={{ color: "#FF4B8B" }} />
                    {item.type}
                  </div>

                  {/* Title */}
                  <a
                    href={item.link}
                    className="block text-2xl font-semibold transition"
                    style={{ color: "#0D1525" }}
                    onMouseEnter={(e) => (e.target.style.color = "#FF4B8B")}
                    onMouseLeave={(e) => (e.target.style.color = "#0D1525")}
                  >
                    {item.title}
                  </a>

                  {/* Authors */}
                  <p
                    className="text-sm leading-relaxed flex items-start gap-2"
                    style={{ color: "#374151" }}
                  >
                    <FaUser className="mt-[3px]" style={{ color: "#BB125B" }} />
                    {item.authors}
                  </p>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
