import React from "react";

const AdminBloodDonorPage = () => (
  <div>
    <label className="text-sm mb-1 text-gray-700">Donor Name</label>
    <input
      type="text"
      placeholder="Enter donor name"
      className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
    />

    <label className="text-sm mb-1 text-gray-700">Blood Type</label>
    <select className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]">
      <option value="">Select Blood Type</option>
      <option value="A+">A+</option>
      <option value="B+">B+</option>
      <option value="O+">O+</option>
      <option value="AB+">AB+</option>
      <option value="A-">A-</option>
      <option value="B-">B-</option>
      <option value="O-">O-</option>
      <option value="AB-">AB-</option>
    </select>

    <label className="text-sm mb-1 text-gray-700">Contact Information</label>
    <input
      type="text"
      placeholder="Enter contact info"
      className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
    />

    <button className="bg-[#c24b2a] text-white px-5 py-1.5 rounded text-sm hover:bg-[#a03f24] transition">
      Update
    </button>
  </div>
);

export default AdminBloodDonorPage;
