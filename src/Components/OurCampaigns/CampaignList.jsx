import React from 'react';

const campaigns = [1, 2, 3, 4]; // Dummy list to render multiple

const CampaignList = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto space-y-6">
        {campaigns.map((_, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start gap-6 p-4 border rounded-lg bg-primary-8 shadow-sm"
          >
            {/* Image */}
            <div className="w-full md:w-48 flex-shrink-0 ">
              <img
                src="https://i.ibb.co/h1R1GBV7/DSC-8948.jpg"
                alt="Campaign"
                className="rounded-md w-full h-auto object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-2">
              <h3 className="text-xl md:text-2xl font-bold">
                Our Highest Ambition is to Help People
              </h3>
              <p className="text-gray-700">
                Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem
                tortor fringilla sed, vestibulum id, eleifend justo. Nullam nec
              </p>
              <p className="text-sm text-gray-500">August 19, 2025</p>

              <button className="inline-flex items-center gap-2 px-4 py-2 text-white bg-bg_primary hover:bg-[#962d25] transition rounded text-sm mt-2">
                More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}

        {/* Load More Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-6 py-2 text-white text-sm rounded bg-bg_primary hover:bg-[#962d25] transition">
            More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CampaignList;
