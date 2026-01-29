import React, { useState } from "react";
import { Heart, TriangleAlert, ChevronDown } from "lucide-react";

const WhereDoesTheBleedingComeFromCard = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto mb-10 flex flex-col gap-6 rounded-xl bg-white py-6 shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 text-primary-pink">
      {/* Header */}
      <div className="grid auto-rows-min gap-1.5 px-6 border-b border-[#FEE6EA] pb-6">
        <h2 className="font-semibold text-2xl text-primary-pink">
          Where Does the Bleeding Come From?
        </h2>
        <p className="text-sm text-[#6B7280]">
          Postcoital bleeding usually comes from the vagina or cervix
        </p>
      </div>

      {/* Content */}
      <div className="px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vaginal Causes */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-primary-pink">
              <TriangleAlert className="h-5 w-5 text-primary-pink" />
              Vaginal Causes
            </h3>
            <p className="text-sm text-[#6B7280]">
              Usually from direct friction or trauma during sex — known as a vaginal laceration.
            </p>

            <span className="inline-flex items-center justify-center rounded-full bg-[#FEE6EA] text-primary-pink px-3 py-1 text-xs font-medium w-fit shadow-sm">
              May be heavier and bright red
            </span>

            <div className="space-y-2 text-sm">
              <p className="font-medium">Common causes:</p>
              <ul className="space-y-1 text-[#6B7280] ml-4">
                <li>• The vagina is not well lubricated</li>
                <li>• Estrogen levels are low (breastfeeding or menopause)</li>
                <li>• Sex is unusually rough</li>
                <li>• A foreign object is used (e.g., piercings or implants)</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-[#FEE6EA] text-sm text-primary-pink shadow-sm">
              Minor tears usually heal on their own in a few days to weeks. Larger tears may need
              stitches but heal within six weeks.
            </div>
          </div>

          {/* Cervical Causes */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-primary-pink">
              <Heart className="h-5 w-5 text-primary-pink" />
              Cervical Causes
            </h3>
            <p className="text-sm text-[#6B7280]">
              Bleeding from the cervix is usually light — often just seen when wiping.
            </p>

            {/* Accordion */}
            <div className="w-full rounded-lg border border-[#FEE6EA] divide-y divide-[#FEE6EA]">
              {[
                {
                  title: "Cervical Ectropion",
                  content: (
                    <>
                      <p className="mb-2">Inner cervical cells turn outward and are more fragile</p>
                      <p className="mb-2">
                        Common during pregnancy or when using the pill. These cells bleed easily
                        with contact.
                      </p>
                    </>
                  ),
                },
                {
                  title: "Cervical Polyps",
                  content: (
                    <>
                      <p className="mb-2">Small benign growths in the cervical canal</p>
                      <p className="mb-2">Have a rich blood supply and bleed easily during sex</p>
                    </>
                  ),
                },
                {
                  title: "Cervicitis",
                  content: (
                    <>
                      <p className="mb-2">Inflammation of the cervix</p>
                      <p className="mb-2">
                        Often caused by STIs like chlamydia. May have no symptoms early on but can
                        affect fertility. Can be treated with antibiotics.
                      </p>
                    </>
                  ),
                },
                {
                  title: "Cervical Cancer",
                  content: (
                    <>
                      <p className="mb-2">The least common but most serious cause</p>
                      <p className="mb-2">
                        Very unlikely if you have regular cervical smear tests. Needs urgent
                        assessment and treatment.
                      </p>
                    </>
                  ),
                },
              ].map((item, index) => (
                <div key={index}>
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center py-4 px-4 text-sm font-medium text-primary-pink hover:bg-[#FFF1F5] transition-colors"
                  >
                    {item.title}
                    <ChevronDown
                      className={`h-5 w-5 text-primary-pink transition-transform duration-200 ${
                        openAccordion === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openAccordion === index && (
                    <div className="px-4 pb-4 text-sm text-[#6B7280] bg-[#FFF9FB]">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhereDoesTheBleedingComeFromCard;
