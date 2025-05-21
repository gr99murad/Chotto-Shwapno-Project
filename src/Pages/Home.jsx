import React from 'react';
import Banner from '../Components/Home/Banner';
import BannerBg from '../assets/bannerbg.png';
import DescriptionStats from '../Components/Home/DescriptionStats';
import DonationSection from '../Components/Home/DonationSection';
import DonationCampagin from '../Components/Home/DonationCampagin';
import DonationCategories from '../Components/Home/DonationCategories';
import ContactSection from '../Components/Home/ContactSection';


const Home = () => {
    return (
        
         <div>
            <div className='bg-cover bg-center min-h-screen' style={{ backgroundImage: `url(${BannerBg})` }}>
                <div  className='mt-16 max-w-7xl mx-auto '>
                    <Banner></Banner>
                  <DescriptionStats></DescriptionStats>

                </div>
                  
            </div>
            
            <div className='my-24 mt-16 max-w-7xl mx-auto '>
                
                <DonationSection></DonationSection>
                <div className='my-24'>
                    <DonationCampagin></DonationCampagin>
                </div>
                
            </div>
            <div className='bg-[#fff5f1]'>
                    <div className='my-24 mt-16 max-w-7xl mx-auto '>
                        <DonationCategories></DonationCategories>
                    </div>
                </div>
                <div className='my-24 mt-16 max-w-7xl mx-auto '>
                    <ContactSection></ContactSection>
                </div>
        </div>
        
       
    );
};

export default Home;