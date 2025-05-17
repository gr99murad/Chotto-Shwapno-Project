import React from 'react';
import Banner from '../Components/Home/Banner';
import BannerBg from '../assets/bannerbg.png';
import DescriptionStats from '../Components/Home/DescriptionStats';
import DonationSection from '../Components/Home/DonationSection';


const Home = () => {
    return (
        
         <div>
            <div className='bg-cover bg-center min-h-screen' style={{ backgroundImage: `url(${BannerBg})` }}>
                <div  className='mt-16 max-w-7xl mx-auto '>
                    <Banner></Banner>
                  <DescriptionStats></DescriptionStats>

                </div>
                  
            </div>
            
            <div className='my-12 mt-16 max-w-7xl mx-auto '>
                
                <DonationSection></DonationSection>
            </div>
        </div>
        
       
    );
};

export default Home;