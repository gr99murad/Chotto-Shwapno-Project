import React from 'react';
import {
  FaAmbulance,
  FaFireExtinguisher,
  FaHandsHelping,
  FaSearch,
  FaArrowRight,
  FaMale,
  FaUserShield, 
} from 'react-icons/fa';

const EmergencyContacts = () => {
  // Data for the emergency contact cards
  const emergencyCards = [
    {
      id: 1,
      icon: <FaUserShield />,
      title: 'Police',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      link: '#police',
    },
    {
      id: 2,
      icon: <FaAmbulance />,
      title: 'Ambulance',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      link: '#ambulance',
    },
    {
      id: 3,
      icon: <FaFireExtinguisher />,
      title: 'Fire Service',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      link: '#fire-service',
    },
    {
      id: 4,
      icon: <FaHandsHelping />,
      title: 'Volunteer Help Line',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      link: '#volunteer-helpline',
    },
  ];

  return (
    <div className="bg-[#fcf7f5] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-bg_primary text-center mb-12 leading-tight">
          Emergency Contact Numbers in <br className="md:hidden" /> Bangladesh
        </h1>

        {/* Emergency Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {emergencyCards.map((card, index) => (
            <div
              key={card.id}
              className={`p-8 flex flex-col items-start text-left
                ${index === 0 && 'md:border-r md:border-b'}
                ${index === 1 && 'md:border-b'}
                ${index === 2 && 'md:border-r'}
              `}
            >
              <div className="text-4xl text-bg_primary mb-4">{card.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">{card.title}</h2>
              <p className="text-gray-600 mb-6 flex-grow text-sm lg:text-base">
                {card.description}
              </p>
              <a
                href={card.link}
                className="inline-flex items-center px-6 py-2.5 bg-bg_primary text-white rounded-md text-base font-medium transition-colors duration-300 hover:bg-[#c95a3a]"
              >
                More
                <FaArrowRight className="ml-2 text-sm" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-16">
          <button className="bg-bg_primary text-white px-8 py-4 rounded-full text-lg font-medium transition-colors duration-300 hover:bg-[#ffe5e0] flex items-center justify-center shadow-lg">
            Become a Blood Donor <FaMale className="ml-3 text-xl" />
          </button>
          <button className="bg-white text-bg_primary border border-bg_primary px-8 py-4 rounded-full text-lg font-medium transition-colors duration-300 hover:bg-[#ffe5e0] flex items-center justify-center shadow-lg">
            Find a Blood Donor <FaSearch className="ml-3 text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContacts;
