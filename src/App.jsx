import React, { useState } from 'react'
import { siteInfo, testimonials, highlights } from './data/clinicData'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustBand from './components/TrustBand'
import StatsStrip from './components/StatsStrip'
import TreatmentGrid from './components/TreatmentGrid'
import FeatureSplit from './components/FeatureSplit'
import TechnologyGrid from './components/TechnologyGrid'
import DoctorGrid from './components/DoctorGrid'
import ReviewGrid from './components/ReviewGrid'
import Locations from './components/Locations'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import ContactModal from './components/ContactModal'

function App() {
  const [modalType, setModalType] = useState(null)

  return (
    <main>
      <TopBar phone={siteInfo.phone} onOpenEmail={() => setModalType('email')} />
      <Header onBook={() => setModalType('appointment')} />
      <Hero onBook={() => setModalType('appointment')} onQuote={() => setModalType('email')} />
      <TrustBand />
      <StatsStrip highlights={highlights} />
      <TreatmentGrid onBook={() => setModalType('appointment')} />
      <FeatureSplit onQuote={() => setModalType('email')} />
      <TechnologyGrid />
      <DoctorGrid />
      <ReviewGrid testimonials={testimonials} />
      <Locations onBook={() => setModalType('appointment')} />
      <Footer />
      <FloatingActions
        phone={siteInfo.phone}
        onEmail={() => setModalType('email')}
        onBook={() => setModalType('appointment')}
      />
      {modalType && <ContactModal type={modalType} onClose={() => setModalType(null)} />}
    </main>
  )
}

export default App
