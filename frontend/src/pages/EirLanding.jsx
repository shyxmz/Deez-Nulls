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
    <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
<script src="https://files.bpcontent.cloud/2024/10/23/08/20241023085748-2LQFIG7G.js"></script>
    </>
  )
}
export default EirLanding