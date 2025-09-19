import React from 'react'
import PelvicHeader from '../components/Pelvic/Header'
import PelvicPainCard from '../components/Pelvic/PelvicPainCard'
import PelvicPainTypesCard from '../components/Pelvic/PelvicPainTypesCard'
import PelvicPainCausesCard from '../components/Pelvic/PelvicPainCausesCard'
import PelvicPainAlert from '../components/Pelvic/PelvicPainAlert'
import PelvicPainInvestigation from '../components/Pelvic/PelvicPainInvestigation'
import EmotionalWellbeingCard from '../components/Pelvic/EmotionalWellbeingCard'
import ReminderCard from '../components/Pelvic/ReminderCard'
import SelfCareTips from '../components/Pelvic/SelfCareTips'

const Pelvic = () => {
  return (
    <div>
      <PelvicHeader />
      <PelvicPainCard />
      <PelvicPainTypesCard />
      <PelvicPainCausesCard />
      <PelvicPainAlert />
      <PelvicPainInvestigation />
      <EmotionalWellbeingCard />
      <SelfCareTips />
      <ReminderCard />
    </div>
  )
}

export default Pelvic
