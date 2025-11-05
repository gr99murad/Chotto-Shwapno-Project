import { div } from 'framer-motion/client';
import React from 'react';
import {
  FaAmbulance,
  FaFireExtinguisher,
  FaHandsHelping,
  FaSearch,
  FaArrowRight,
  FaMale,
  FaUserShield,
  FaStethoscope, // Icon for Doctor
  FaHospital, // Icon for Hospital
  FaGavel, // Icon for Lawyer
  FaShoppingBag, // Icon for Shopping Mall
  FaLaptop, // Icon for Tech Shop
  FaPaw, // Icon for Pet Shop
  FaBus, // Icon for Bus Time
  FaTrain, // Icon for Train Time
  FaBox, // Icon for Courier Now
  FaPhoneAlt, // Icon for Helpline
  FaUniversity, // Icon for Institute
  FaHotel, // Icon for Hostel
  FaUtensils, // Icon for Restaurant
  FaBroadcastTower // Icon for Broadband
} from 'react-icons/fa';
import Navbar from '../../SharedFile/Navbar';

const EmergencyInfo = () => {
  // Data for the emergency contact cards
  const emergencyCards = [
    {
      id: 1,
      icon: <FaUserShield />,
      title: 'Police',
      description:
        'Contact nearby police stations quickly in case of emergency. Find location and call now.',
      link: '/safeNow/police',
    },
    {
      id: 2,
      icon: <FaAmbulance />,
      title: 'Ambulance',
      description:
        'In case of medical emergencies, get immediate access to the nearest ambulance services to provide urgent medical care and transport.',
      link: '/safeNow/ambulance',
    },
    {
      id: 3,
      icon: <FaFireExtinguisher />,
      title: 'Fire Service',
      description:
        'Contact the fire department in case of fire-related emergencies. They provide fire fighting, rescue services, and other safety measures.',
      link: '/safeNow/fire-service',
    },
    {
      id: 4,
      icon: <FaHandsHelping />,
      title: 'Volunteer Help Line',
      description:
        'Reach out to volunteer help lines for immediate assistance during emergencies. Volunteers provide critical support and resources during crises.',
      link: '/safeNow/volunteer-helpline',
    },
    // New Cards Added
    {
      id: 5,
      icon: <FaStethoscope />,
      title: 'Doctor',
      description:
        'Find the nearest doctor for medical assistance in case of emergency.',
      link: '/doctor',
    },
    {
      id: 6,
      icon: <FaHospital />,
      title: 'Hospital',
      description:
        'Quickly find nearby hospitals for emergencies or routine checkups.',
      link: '/hospital',
    },
    {
      id: 7,
      icon: <FaGavel />,
      title: 'Lawyer',
      description:
        'Connect with legal experts for assistance in case of legal matters.',
      link: '/lawyer',
    },
    {
      id: 8,
      icon: <FaShoppingBag />,
      title: 'Shopping Mall',
      description:
        'Find nearby shopping malls to grab essentials or leisure shopping.',
      link: '/shoppingMall',
    },
    {
      id: 9,
      icon: <FaLaptop />,
      title: 'Tech Shop',
      description:
        'Find nearby tech shops to buy gadgets, accessories, and tech support.',
      link: '/techShop',
    },
    {
      id: 10,
      icon: <FaPaw />,
      title: 'Pet Shop',
      description:
        'Locate nearby pet shops for pet care and supplies.',
      link: '/petShop',
    },
    {
      id: 11,
      icon: <FaBus />,
      title: 'Bus Time',
      description:
        'Check bus schedules and nearest bus stations in real-time.',
      link: '/busTime',
    },
    {
      id: 12,
      icon: <FaTrain />,
      title: 'Train Time',
      description:
        'Get live train schedules and the nearest stations in your area.',
      link: '/trainTime',
    },
    {
      id: 13,
      icon: <FaBox />,
      title: 'Courier Now',
      description:
        'Need quick delivery? Find courier services available near you.',
      link: '/safeNow/courier-now',
    },
    {
      id: 14,
      icon: <FaPhoneAlt />,
      title: 'Helpline',
      description:
        'Get access to helplines for various emergencies and services.',
      link: '/safeNow/helpline',
    },
    {
      id: 15,
      icon: <FaUniversity />,
      title: 'Institute',
      description:
        'Find nearby educational institutes for studies and exams.',
      link: '/safeNow/institute',
    },
    {
      id: 16,
      icon: <FaHotel />,
      title: 'Hostel',
      description:
        'Find affordable hostels and accommodation near your location.',
      link: '/safeNow/hostel',
    },
    {
      id: 17,
      icon: <FaUtensils />,
      title: 'Restaurant',
      description:
        'Search for the best restaurants near you for dining and takeout.',
      link: '/safeNow/restaurant',
    },
    {
      id: 18,
      icon: <FaBroadcastTower />,
      title: 'Broadband',
      description:
        'Find broadband and internet service providers in your area.',
      link: '/safeNow/broadband',
    },
  ];

  return (
    <div>
        <Navbar></Navbar>
    <div className="bg-[#fcf7f5] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-bg_primary text-center mb-12 py-12 leading-tight">
          Emergency Contact Numbers in <br className="md:hidden" /> Bangladesh
        </h1>

        {/* Emergency Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emergencyCards.map((card) => (
            <div
              key={card.id}
              className="p-8 flex flex-col items-start text-left bg-white border border-gray-200 shadow-md rounded-lg"
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
    </div>
  );
};

export default EmergencyInfo;
