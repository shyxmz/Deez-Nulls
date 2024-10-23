import React from 'react'
import HeroSection from '../page-contents/HeroSection'
import FeatureSection from "../page-contents/FeatureSection";
import Navbar from "../page-contents/Navbar";
import Workflow from '../page-contents/Workflow';
import Pricing from '../page-contents/Pricing';
import Testimonials from '../page-contents/Testimonials';
import Footer from '../page-contents/Footer';

function LandingPage() {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection />
      <FeatureSection id="features" />
      <Workflow id="workflow" />
      <Pricing id="pricing" />
      <Testimonials id="testimonials" />
    <Footer />
    </div>
    <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
<script src="https://files.bpcontent.cloud/2024/10/23/08/20241023085748-2LQFIG7G.js"></script>
    </>
  )
}

export default LandingPage