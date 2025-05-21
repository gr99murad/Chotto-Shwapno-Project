import React from 'react';

const CampaignBanner = () => {
    return (
    <section >
      <div className="mt-16  ">
        <h2 className="text-7xl font-bold text-center text-[#b33a2f] mb-10">
          Our Campaigns
        </h2>

        <div className='bg-primary-8'>
            <div className='mt-16 py-24 max-w-7xl mx-auto'>
            <div className="grid md:grid-cols-2 gap-8 items-center ">
          {/* Image Section */}
          <div className="w-full h-full">
            <img
              src="https://i.ibb.co/rfM17wgc/IMG-2182.jpg" 
              alt="Campaign"
              className="rounded-tr-[60px] w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold">
              Our Highest Ambition is to Help People
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem
              tortor fringilla sed, vestibulum id, eleifend justo. Nullam nec
              mi et neque pharetra sollicitudin. Praesent imperdiet mi
            </p>
            <p className="text-sm text-gray-500">August 19, 2025</p>
            <button className="inline-flex items-center gap-2 px-4 py-2 mt-2 text-white bg-bg_primary hover:bg-[#962d25] transition rounded">
              More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        </div>

        </div>

        

        
      </div>
    </section>
  );
};

export default CampaignBanner;