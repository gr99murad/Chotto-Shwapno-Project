import React from 'react';
import DonationSectionAbout from '../Components/AboutUs/DonationSectionAbout';
import { div } from 'framer-motion/client';
import Navbar from '../SharedFile/Navbar';
import AwardSection from '../Components/AboutUs/AwardSection';
import ChartWithDescription from '../Components/AboutUs/ChartWithDescription';
import TestimonialSection from '../Components/AboutUs/TestimonialSection';

const AboutUs = () => {
    return (
        <div>
            <div>
            <Navbar></Navbar>
        </div>
        <div className="overflow-hidden bg-gradient-to-br from-[#fff5f1] via-white to-[#fff5f1]">
            <div className='mt-16 py-24 max-w-7xl mx-auto'>
            <DonationSectionAbout></DonationSectionAbout>
            
        </div>
        <div className='bg-[#C24C2E14]'>
            <div className='mt-16 max-w-7xl mx-auto'>
            <AwardSection></AwardSection>

        </div>
        </div>
        <div className='mt-16 max-w-7xl mx-auto'>
            <ChartWithDescription></ChartWithDescription>
            <TestimonialSection></TestimonialSection>
        </div>

        </div>
        
        </div>
    );
};

export default AboutUs;