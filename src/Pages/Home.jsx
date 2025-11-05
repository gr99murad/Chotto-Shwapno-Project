import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from '../Components/Home/Banner';
import BannerBg from '../assets/bannerbg.png';
import DescriptionStats from '../Components/Home/DescriptionStats';
import DonationSection from '../Components/Home/DonationSection';
import DonationCampagin from '../Components/Home/DonationCampagin';
import DonationCategories from '../Components/Home/DonationCategories';
import ContactSection from '../Components/Home/ContactSection';

const Home = () => {
  const location = useLocation();

  // Scroll to Contact section if navigated via Navbar
  useEffect(() => {
    if (location.state?.scrollToContact) {
      const element = document.getElementById('contact-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      {/* Banner Section */}
      <div
        className='bg-cover bg-center min-h-screen'
        style={{ backgroundImage: `url(${BannerBg})` }}
      >
        <div className='mt-14 md:mt-16 max-w-7xl mx-4 md:mx-auto'>
          <Banner />
          <DescriptionStats />
        </div>
      </div>

      {/* Donation Section */}
      <div className='my-24 mt-16 max-w-7xl mx-4 md:mx-auto'>
        <DonationSection />
        <div className='my-24'>
          <DonationCampagin />
        </div>
      </div>

      {/* Donation Categories */}
      <div className='bg-[#fff5f1]'>
        <div className='my-24 mt-16 max-w-7xl mx-4 md:mx-auto'>
          <DonationCategories />
        </div>
      </div>

      {/* Contact Section */}
      <div className='my-24 mt-16 max-w-7xl mx-4 md:mx-auto'>
        <ContactSection></ContactSection>
      </div>
    </div>
  );
};

export default Home;
