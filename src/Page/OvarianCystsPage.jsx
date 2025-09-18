

import HeroSection from "../components/OvarianCystsPage/HeroSection"
import WhatAreOvarianCysts from "../components/OvarianCystsPage/WhatAreOvarianCysts"
import CystAlert from "../components/OvarianCystsPage/CystAlert"
import OvarianCystSupportCard from "../components/OvarianCystsPage/OvarianCystSupportCard"
export default function OvarianCystsPage() {
  return (
    <div>
      
      <section>
        <HeroSection />
      </section>

      <section className="max-w-4xl mx-auto px-6 py-6 ">
        <WhatAreOvarianCysts />
      </section>
       <section className="max-w-4xl mx-auto px-6 py-6 ">
        <CystAlert />
      </section>
       <section className="max-w-4xl mx-auto px-6 py-6 ">
        <OvarianCystSupportCard />
      </section>

    
    </div>
  );
}