import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const DescriptionStats = () => {
  return (
    <div className="px-4">
        <div className="md:mx-32">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris <button className="btn btn-xs bg-[#C24C2E] text-white">pdf<FaFilePdf size={14} /></button> </p>
        </div>
        <div className="flex justify-center">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg my-14 bg-[#C24C2E] text-white">Subscribe <FaBell size={16} /></button>
        </div>
      <div className="mb-14 pb-14">
        <div className="stats grid">
        <div className="stat">
          <div className="stat-value text-[#C24C2E]">594+</div>
          <div className="stat-title text-[#454545]">Donation Received</div>
        </div>

        <div className="stat">
          <div className="stat-value text-[#C24C2E]">$49M</div>
          <div className="stat-title text-[#454545]">Money Donated</div>
        </div>

        <div className="stat">
          <div className="stat-value text-[#C24C2E]">34+</div>
          <div className="stat-title text-[#454545]">Active Compaigns</div>
        </div>

        <div className="stat">
          <div className="stat-value text-[#C24C2E]">$34M</div>
          <div className="stat-title text-[#454545]">Charity in last year</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DescriptionStats;
