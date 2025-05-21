import React from 'react';
import { FaHeartbeat, FaLeaf, FaBook, FaUsers } from 'react-icons/fa';

const categories = [
  {
    id: 1,
    icon: <FaHeartbeat className="text-white text-xl" />,
    title: 'Health & Emergency Support',
    number: '01',
    description: '',
  },
  {
    id: 2,
    icon: <FaLeaf className="text-white text-xl" />,
    title: 'Environment & Sustainability',
    number: '02',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loremas been the industry\'s standard dummy text',
  },
  {
    id: 3,
    icon: <FaBook className="text-white text-xl" />,
    title: 'Education Support',
    number: '03',
    description: '',
  },
  {
    id: 4,
    icon: <FaUsers className="text-white text-xl" />,
    title: 'Community Service',
    number: '04',
    description: '',
  },
];

const DonationCategories = () => {
  return (
    <section className="py-16">
      <p className="text-[#C24C2E] font-semibold">Categories</p>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-2">
        Several donation programs that can make it <br />
        <span className="text-black">casier for you</span>
      </h1>
      <p className="text-gray-600 mt-3 max-w-2xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loremas been the industry\'s standard dummy text
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {categories.map(({ id, icon, title, number, description }) => (
          <div
            key={id}
            className="bg-[#C24C2E] text-white rounded-xl p-6 flex flex-col justify-between min-h-[300px]"
          >
            <div>
              <div className="flex items-center gap-2">{icon}<span className="font-semibold text-sm">{title}</span></div>
              <h2 className="text-5xl font-bold mt-4 opacity-50 text-white">{number}</h2>
            </div>
            <div>
              {description && (
                <>
                  <h3 className="text-base font-semibold mt-4">{title}</h3>
                  <p className="text-sm mt-2 leading-snug">{description}</p>
                  <button className="bg-white text-[#C24C2E] text-xs px-3 py-1 mt-3 rounded hover:opacity-90">
                    Learn more ↗
                  </button>
                </>
              )}
              {!description && (
                <h3 className="text-sm font-semibold mt-4">{title}</h3>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <button
          className="bg-[#C24C2E] text-white px-6 py-2 rounded hover:opacity-90"
        >
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default DonationCategories;
