import React from 'react'
import KycForm from '../components/KycForm'
import StartupNavbar from '../page-contents/StartupNavbar';
import StartupHeroSection from '../page-contents/StartupHeroSection';
import StartupFeatureSection from '../page-contents/StartupFeatureSection';
import Footer from '../page-contents/Footer';
const StartupLanding = () => {
  return (
    <>
     <StartupNavbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <StartupHeroSection />
    <StartupFeatureSection />
    <Footer />
    </div>
    <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
<script src="https://files.bpcontent.cloud/2024/10/23/08/20241023085748-2LQFIG7G.js"></script>
    </>
  )
}

export default StartupLanding