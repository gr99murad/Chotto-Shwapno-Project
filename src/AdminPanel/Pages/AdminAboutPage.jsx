import React from "react";

const AdminAboutPage = () => (
  <div>
    <label className="text-sm mb-1 text-gray-700">Title</label>
    <input
      type="text"
      placeholder="Write the title here"
      className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
    />

    <label className="text-sm mb-1 text-gray-700">Image</label>
    <input
      type="file"
      className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm"
    />

    <label className="text-sm mb-1 text-gray-700">Description</label>
    <textarea
      rows="4"
      placeholder="Write the description"
      className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-5 text-sm bg-[#f9ebe7]"
    ></textarea>

    <button className="bg-[#c24b2a] text-white px-5 py-1.5 rounded text-sm hover:bg-[#a03f24] transition">
      Update
    </button>
  </div>
);

export default AdminAboutPage;
