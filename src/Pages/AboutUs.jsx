import React, { useEffect } from 'react';
import DonationSectionAbout from '../Components/AboutUs/DonationSectionAbout';
import Navbar from '../SharedFile/Navbar';
import AwardSection from '../Components/AboutUs/AwardSection';
import ChartWithDescription from '../Components/AboutUs/ChartWithDescription';
import TestimonialSection from '../Components/AboutUs/TestimonialSection';

const AboutUs = () => {
  // Scroll to the top of the page when this component is mounted
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top (0, 0) on page load
  }, []);

  return (
    <div>
      <Navbar />
      <div className="overflow-hidden bg-gradient-to-br from-[#fff5f1] via-white to-[#fff5f1]">
        <div className="mt-16 py-24 max-w-7xl mx-auto">
          <DonationSectionAbout />
        </div>
        <div className="bg-[#C24C2E14]">
          <div className="mt-16 max-w-7xl mx-auto">
            <AwardSection />
          </div>
        </div>
        <div className="mt-16 max-w-7xl mx-auto">
          <ChartWithDescription />
          <TestimonialSection />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
