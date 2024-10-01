import React from 'react'
import HeroSection from './HeroSection'
import FeatureSection from "./FeatureSection";
import Navbar from "./Navbar";

function LandingPage() {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection />
    <FeatureSection />
    </div>
    </>
  )
}

export default LandingPage