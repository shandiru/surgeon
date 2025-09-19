

import PostmenopausalBleedingSection from '../components/PostmenopausalBleedingPage/PostmenopausalBleedingSection';
import PostmenopausalBleedingCard from '../components/PostmenopausalBleedingPage/PostmenopausalBleedingCard';
import  HowCommonSection from '../components/PostmenopausalBleedingPage/HowCommonSection';
import CausesOfBleedingSection from '../components/PostmenopausalBleedingPage/CausesOfBleedingSection';
import SymptomsAndRiskFactorsSection from '../components/PostmenopausalBleedingPage/SymptomsAndRiskFactorsSection';
import HowItsDiagnosed from '../components/PostmenopausalBleedingPage/HowItsDiagnosed';
import UrgentHelpAlert from '../components/PostmenopausalBleedingPage/UrgentHelpAlert';
import EmotionalAndSupportSection from '../components/PostmenopausalBleedingPage/EmotionalAndSupportSection';
import RememberSection from '../components/PostmenopausalBleedingPage/RememberSection';
export default function PostmenopausalBleedingPage() {
  return (
    <div>
     
     <section>
     <PostmenopausalBleedingSection />
     </section>
    
        <section className='py-8'>
        <PostmenopausalBleedingCard />
        </section>

        <section >
        <HowCommonSection />
        </section>
        <section >
        <CausesOfBleedingSection />
        </section>

        <section >
        <SymptomsAndRiskFactorsSection />
        </section>

        <section >
        <HowItsDiagnosed />
        </section>

        <section >
        <UrgentHelpAlert />
        </section>

        <section >
        <EmotionalAndSupportSection />
        </section>

        <section >
        <RememberSection />
        </section>
    </div>
  );
}