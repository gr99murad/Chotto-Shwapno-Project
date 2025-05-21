import React from "react";
import DonationImg1 from "../../assets/IMG_20250125_095057.jpg";
import DonationImg2 from "../../assets/IMG_20250125_095059.jpg";
import DonationImg3 from "../../assets/IMG_20250125_101139.jpg";
import DonationImg4 from "../../assets/IMG_20250125_101211.jpg";

const DonationSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="aspect-square overflow-hidden rounded-tr-[60%] h-56">
            <img src={DonationImg1} alt="Group 1" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square overflow-hidden rounded-br-[60%] h-64">
            <img src={DonationImg2} alt="Group 2" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square overflow-hidden rounded-tr-[60%] h-56">
            <img src={DonationImg3} alt="Group 3" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-square overflow-hidden rounded-[100%] h-56">
            <img src={DonationImg4} alt="Group 4" className="w-full h-full object-cover" />
          </div>
        </div>
      
        <div className=" ">
            <div className=" p-10 bg-white rounded-2xl shadow border border-red-100 h-full">
          <p className="text-sm text-red-600 font-semibold mb-1">About Us</p>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Our Highest Ambition is to Help People
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Our programs contribute to peace and development through
            volunteerism worldwide. Take part in changing the lives of young
            people across the world.
          </p>

          <div className="flex justify-between items-center mt-6 border border-red-200 rounded-lg px-4 py-3">
            <div>
              <p className="text-xs text-gray-500">Donation Goal</p>
              <p className="text-lg font-semibold text-gray-900">$56,000</p>
            </div>
            <div className="w-px bg-red-200 h-10"></div>
            <div>
              <p className="text-xs text-gray-500">Donation Raised</p>
              <p className="text-lg font-semibold text-gray-900">$34,000</p>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="btn px-8 py-6 bg-[#C24C2E] text-white font-semibold rounded-br-2xl hover:bg-[#C24C2E1A] hover:text-black transition">
              Donate Now
            </button>
            <button
              variant="outline"
              className="btn px-8 py-6 bg-[#C24C2E] text-white font-semibold rounded-tr-2xl hover:bg-[#C24C2E1A] hover:text-black transition"
            >
              More →
            </button>
          </div>
        </div>
      </div>
        </div>
    
  );
};

export default DonationSection;
