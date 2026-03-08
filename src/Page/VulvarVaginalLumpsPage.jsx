import React from 'react'
import VulvarVaginalLumpsSection from '../components/Vulvar/VulvarVaginalLumpsSection'
import VulvarVaginalSection from '../components/Vulvar/VulvarVaginalSection'
import SymptomSection from '../components/Vulvar/SymptomSection'
import TreatmentAndHomeCare from '../components/Vulvar/TreatmentSection'
import UrgentHelp from '../components/CancerSection/EndometrialCancerInformationPage/UrgentHelp'
import EmotionalWellbeingSupport from '../components/Vulvar/EmotionalWellbeingSupport'
import Footer from '../components/Vulvar/VulvarFooter'

const Vulvar = () => {
  return (
    <div>
      <VulvarVaginalLumpsSection />
      <VulvarVaginalSection />
      <SymptomSection />
      <TreatmentAndHomeCare />
      <UrgentHelp />
      <EmotionalWellbeingSupport />
      {/* <Footer /> */}
    </div>
  )
}

export default Vulvar
