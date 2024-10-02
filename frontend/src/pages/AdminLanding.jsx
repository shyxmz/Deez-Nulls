import React from 'react'
import AdminNavbar from '../page-contents/AdminNavbar';
import AdminHeroSection from '../page-contents/AdminHeroSection';
import AdminFeatureSection from '../page-contents/AdminFeatureSection';
const AdminLanding = () => {
  return (
    <>
    <AdminNavbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <AdminHeroSection />
    <AdminFeatureSection />
    </div>
    </>
  )
}

export default AdminLanding