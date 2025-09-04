import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../SharedFile/Navbar";
import Footer from "../../SharedFile/Footer";

const categories = {
  1: "Health & Emergency Support",
  2: "Environment & Sustainability",
  3: "Education Support",
  4: "Community Service",
};

const subCategoriesData = {
  1: [
    {
      id: 1,
      text: "Health: Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 2,
      text: "Emergency: Sed do eiusmod tempor incididunt ut labore...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "https://picsum.photos/400/400?random=2",
    },
  ],
  2: [
    {
      id: 1,
      text: "Environment: Preserve nature, promote clean energy...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "https://picsum.photos/400/400?random=3",
    },
    {
      id: 2,
      text: "Sustainability: Reduce waste and eco-friendly practices...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "https://picsum.photos/400/400?random=4",
    },
  ],
  3: [
    {
      id: 1,
      text: "Education: Help provide education for underprivileged children...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "https://picsum.photos/400/400?random=5",
    },
    {
      id: 2,
      text: "Literacy programs: Support global learning initiatives...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "https://picsum.photos/400/400?random=6",
    },
  ],
  4: [
    {
      id: 1,
      text: "Community: Engage in community development projects...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "https://picsum.photos/400/400?random=7",
    },
    {
      id: 2,
      text: "Empowerment: Help local communities thrive...Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: "https://picsum.photos/400/400?random=8",
    },
  ],
};

const SubCategories = () => {
  const { id } = useParams();
  const categoryTitle = categories[id] || "Categories";
  const categoryData = subCategoriesData[id] || [];

  return (
    <div>
      <Navbar />
      <div className="py-12 bg-gradient-to-br from-[#fbeeee] to-white font-sans">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-10">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-[#C24C2E] mb-10">
          {categoryTitle}
        </h1>

        {/* Content */}
        <div className="">
          {categoryData.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className="flex-1 text-gray-700 leading-relaxed text-justify">
                {item.text}
              </div>

              {/* Image */}
              <div
                className={`w-48 h-48 md:w-64 md:h-64 overflow-hidden shadow-lg
                ${
                  index % 2 === 0
                    ? "rounded-tr-[70px] rounded-bl-[70px]"
                    : "rounded-tl-[70px] rounded-br-[70px]"
                }`}
              >
                <img
                  src={item.image}
                  alt={`sub-category-${item.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Donate Now */}
        <div className="flex justify-center mt-16">
          <button className="bg-[#C24C2E] text-white px-6 py-2 rounded-md hover:opacity-90">
            Donate Now
          </button>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubCategories;
