import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeartbeat, FaLeaf, FaBook, FaUsers } from 'react-icons/fa';

const categories = [
  {
    id: 1,
    icon: <FaHeartbeat className="text-white text-3xl" />,
    title: 'Health & Emergency Support',
    number: '01',
    description:
      'Support health initiatives and emergency relief programs to save lives and provide timely assistance.',
  },
  {
    id: 2,
    icon: <FaLeaf className="text-white text-3xl" />,
    title: 'Environment & Sustainability',
    number: '02',
    description:
      'Join us in preserving nature, promoting clean energy, and sustainable practices for a greener future.',
  },
  {
    id: 3,
    icon: <FaBook className="text-white text-3xl" />,
    title: 'Education Support',
    number: '03',
    description:
      'Help provide education for underprivileged children and support literacy programs worldwide.',
  },
  {
    id: 4,
    icon: <FaUsers className="text-white text-3xl" />,
    title: 'Community Service',
    number: '04',
    description:
      'Engage in community development projects that uplift society and empower local communities.',
  },
];

const DonationCategories = () => {
  const navigate = useNavigate();

  return (
    <section id="categories-section" className="py-16 px-4 md:px-16 bg-gray-50">
      <p className="text-[#C24C2E] font-semibold">Categories</p>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-2">
        Several donation programs that can make it <br />
        <span className="text-black">easier for you</span>
      </h1>
      <p className="text-gray-600 mt-3 max-w-2xl">
        Explore our various programs and choose how you want to make a difference in the world.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
        {categories.map(({ id, icon, title, number, description }) => (
          <div
            key={id}
            className="relative bg-[#C24C2E] text-white rounded-xl p-6 min-h-[300px] overflow-hidden group shadow-lg hover:shadow-2xl transition-all"
          >
            {/* Icon and Number */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3">
                  {icon}
                  <span className="font-semibold text-lg">{title}</span>
                </div>
                <h2 className="text-5xl font-bold mt-4 opacity-50">{number}</h2>
              </div>

              {/* Hidden description overlay */}
              <div
                className="absolute inset-0 bg-[#C24C2E] bg-opacity-95 flex flex-col justify-center items-center text-center p-4
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <p className="text-white text-sm leading-relaxed">{description}</p>
                <button
                  onClick={() => navigate(`/category/${id}`)}
                  className="mt-4 bg-white text-[#C24C2E] px-4 py-2 rounded hover:opacity-90 text-sm"
                >
                  Learn more ↗
                </button>
              </div>
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
