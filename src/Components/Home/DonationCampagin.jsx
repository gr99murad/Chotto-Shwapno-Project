import React from 'react';

const campaigns = [
  {
    id: 1,
    title: "Health response and kids",
    image: "https://i.ibb.co/vCTnFBpC/IMG-20250125-095057.jpg",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia conseq.....",
    raised: 75890,
    goal: 80000,
  },
  {
    id: 2,
    title: "Gift an education...Make a life !",
    image: "https://i.ibb.co/PszFxV3T/IMG-20250125-101211.jpg",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia conseq.....",
    raised: 75890,
    goal: 80000,
  },
  {
    id: 3,
    title: "Gift an education...Make a life !",
    image: "https://i.ibb.co/PszFxV3T/IMG-20250125-101211.jpg",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia conseq.....",
    raised: 75890,
    goal: 80000,
  },
];

const CampaignCard = ({ title, image, description, raised, goal }) => {
  const percentage = Math.round((raised / goal) * 100);

  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition-all">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-4">{title}</h2>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
      <div className="mt-4 w-full bg-gray-200 h-2 rounded">
        <div
          className="h-2 rounded"
          style={{ width: `${percentage}%`, backgroundColor: "#C24C2E" }}
        ></div>
      </div>
      <div className="flex items-center justify-between text-sm mt-2">
        <span className="font-semibold" style={{ color: "#C24C2E" }}>
          ${raised.toLocaleString()}/<span style={{ color: "gray" }}>{goal.toLocaleString()}</span>
        </span>
        <span className="text-gray-700">{percentage}%</span>
        <button
          className="text-sm text-white px-3 py-1 rounded hover:opacity-90"
          style={{ backgroundColor: "#C24C2E" }}
        >
          More ↗
        </button>
      </div>
    </div>
  );
};

const DonationCampagin = () => {
  return (
    <section className="">
      <p className="font-semibold" style={{ color: "#C24C2E" }}>Campaign</p>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-2">
        You Can Help Lots of People by <br />
        <span style={{ color: "#C24C2E" }}>Donating</span> Little
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {campaigns.map((item) => (
          <CampaignCard key={item.id} {...item} />
        ))}
      </div>

      <div className="mt-8">
        <button
          className="text-white px-6 py-2 rounded hover:opacity-90"
          style={{ backgroundColor: "#C24C2E" }}
        >
          More ↗
        </button>
      </div>
    </section>
  );
};

export default DonationCampagin;
