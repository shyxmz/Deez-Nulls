import React from 'react'
import EirNavbar from '../page-contents/EirNavbar';
import EirHeroSection from'../page-contents/EirHeroSection';
import EirFeatureSection from '../page-contents/EirFeatureSection';
import Footer from '../page-contents/Footer';
const EirLanding = () => {
  return (
    <>
    <EirNavbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <EirHeroSection />
    <EirFeatureSection />
    <Footer />
    </div>
    </>
  )
}
export default EirLanding