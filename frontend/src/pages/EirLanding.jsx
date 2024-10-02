import React from 'react'
import EirNavbar from '../page-contents/EirNavbar';
import EirHeroSection from'../page-contents/EirHeroSection';
import EirFeatureSection from '../page-contents/EirFeatureSection';
const EirLanding = () => {
  return (
    <>
    <EirNavbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <EirHeroSection />
    <EirFeatureSection />
    </div>
    </>
  )
}
export default EirLanding