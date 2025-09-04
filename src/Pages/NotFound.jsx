import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#C24C2E1A] flex items-center justify-center px-6 py-12">
      <div className="bg-white shadow-xl rounded-br-[3rem] rounded-tl-[3rem] p-10 text-center max-w-md w-full">
        <h1 className="text-7xl font-extrabold text-[#C24C2E]">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-gray-800">Page Not Found</h2>
        <p className="mt-2 text-gray-600">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center mt-6 px-6 py-3 border border-[#C24C2E] text-[#C24C2E] font-medium rounded-br-xl hover:bg-[#C24C2E1A] hover:text-black transition"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
