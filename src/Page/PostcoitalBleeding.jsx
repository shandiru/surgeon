

import PostcoitalBleedingHero from "../components/PostcoitalBleedingPage/PostcoitalBleedingHero"
import PostcoitalBleedingCards from "../components/PostcoitalBleedingPage/PostcoitalBleedingCards"
import PostcoitalCard from "../components/PostcoitalBleedingPage/PostcoitalCard";
import IsItPainfulCard from "../components/PostcoitalBleedingPage/IsItPainfulCard";
import WhereDoesTheBleedingComeFromCard from "../components/PostcoitalBleedingPage/WhereDoesTheBleedingComeFromCard";
import UrgentHelpAlert from "../components/PostcoitalBleedingPage/UrgentHelpAlert";
import TrackBeforeAppointmentCard from "../components/PostcoitalBleedingPage/TrackBeforeAppointmentCard";
import SelfCareTipsCard from "../components/PostcoitalBleedingPage/SelfCareTipsCard";
import RememberCard from "../components/PostcoitalBleedingPage/RememberCard";


export default function PostcoitalBleedingPage() {
  return (
    <div>
      <section>
        <PostcoitalBleedingHero />
      </section>

      <section>
        <PostcoitalBleedingCards />
      </section>
      <PostcoitalCard />
      <IsItPainfulCard />
      <WhereDoesTheBleedingComeFromCard />
      <UrgentHelpAlert />
      <TrackBeforeAppointmentCard />
      <SelfCareTipsCard />
      <RememberCard />
    </div>
  );
}