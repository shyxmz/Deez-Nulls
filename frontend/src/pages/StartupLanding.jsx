import React from 'react'
import KycForm from '../components/KycForm'
import StartupNavbar from '../page-contents/StartupNavbar';
import StartupHeroSection from '../page-contents/StartupHeroSection';
import StartupFeatureSection from '../page-contents/StartupFeatureSection';
const StartupLanding = () => {
  return (
    <>
     <StartupNavbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <StartupHeroSection />
    <StartupFeatureSection />
    </div>
    </>
  )
}

export default StartupLanding