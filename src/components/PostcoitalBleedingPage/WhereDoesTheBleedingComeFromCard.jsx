import React, { useState } from 'react';
import { Heart, TriangleAlert, ChevronDown } from 'lucide-react';

const WhereDoesTheBleedingComeFromCard = () => {
  // Accordion state handling
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="max-w-6xl text-[#BB125B] mx-auto mb-10 flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
      <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 border-b pb-6">
        <div className="font-semibold text-2xl">Where Does the Bleeding Come From?</div>
        <div className="text-muted-foreground text-sm">
          Postcoital bleeding usually comes from the vagina or cervix
        </div>
      </div>

      <div className="px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vaginal Causes */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-destructive flex items-center gap-2">
              <TriangleAlert className="h-5 w-5" />
              Vaginal Causes
            </h3>
            <p className="text-sm text-muted-foreground">
              Usually from direct friction or trauma during sex — known as a vaginal laceration.
            </p>
            <div className="space-y-2">
              <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 bg-destructive text-white mb-2">
                May be heavier and bright red
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <p><strong>Common causes:</strong></p>
              <ul className="space-y-1 text-muted-foreground ml-4">
                <li>• The vagina is not well lubricated</li>
                <li>• Estrogen levels are low (breastfeeding or menopause)</li>
                <li>• Sex is unusually rough</li>
                <li>• A foreign object is used (e.g., piercings or implants)</li>
              </ul>
            </div>
            <div className="relative w-full rounded-lg border px-4 py-3 text-sm bg-card text-card-foreground">
              <div className="text-muted-foreground text-sm leading-relaxed">
                Minor tears usually heal on their own in a few days to weeks. Larger tears may need stitches but heal within six weeks.
              </div>
            </div>
          </div>

          {/* Cervical Causes */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Cervical Causes
            </h3>
            <p className="text-sm text-muted-foreground">
              Bleeding from the cervix is usually light — often just seen when wiping.
            </p>

            {/* Accordion */}
            <div className="w-full">
              <div className="border-b last:border-b-0">
                <h3 className="flex">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(0)}
                    className="flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-sm font-medium transition-all outline-none hover:underline"
                  >
                    Cervical Ectropion
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                        openAccordion === 0 ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                {openAccordion === 0 && (
                  <div className="text-sm">
                    <p className='mb-2'>Inner cervical cells turn outward and are more fragile</p>
                    <p className='mb-2'>Common during pregnancy or when using the pill. These cells bleed easily with contact.</p>
                  </div>
                )}
              </div>

              <div className="border-b last:border-b-0">
                <h3 className="flex">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(1)}
                    className="flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-sm font-medium transition-all outline-none hover:underline"
                  >
                    Cervical Polyps
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                        openAccordion === 1 ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                {openAccordion === 1 && (
                  <div className="text-sm">
                    <p className='mb-2'>Small benign growths in the cervical canal </p>
                    <p className='mb-2'>Have a rich blood supply and bleed easily during sex</p>
                  </div>
                )}
              </div>

              <div className="border-b last:border-b-0">
                <h3 className="flex">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(2)}
                    className="flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-sm font-medium transition-all outline-none hover:underline"
                  >
                    Cervicitis
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                        openAccordion === 2 ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                {openAccordion === 2 && (
                  <div className="text-sm">
                    <p className='mb-2'>Inflammation of the cervix</p>
                    <p className='mb-2'>Often caused by STIs like chlamydia. May have no symptoms early on but can affect fertility. Can be treated with antibiotics.</p>
                  </div>
                )}
              </div>

              <div className="border-b last:border-b-0">
                <h3 className="flex">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(3)}
                    className="flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-sm font-medium transition-all outline-none hover:underline"
                  >
                    Cervical Cancer
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                        openAccordion === 3 ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                {openAccordion === 3 && (
                  <div className="text-sm">
                    <p className='mb-2'>The least common but most serious cause</p>
                    <p className='mb-2'>Very unlikely if you have regular cervical smear tests. Needs urgent assessment and treatment.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhereDoesTheBleedingComeFromCard;
