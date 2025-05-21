import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Left Side - Form */}
      <div className="bg-[#fff5f1] border border-[#c24c2e3b] rounded-xl p-6 md:p-10 w-full md:max-w-md shadow-sm">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Let’s get <span className="text-[#C24C2E]">in touch</span>
        </h2>

        <form className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full border border-[#C24C2E] bg-[#fff1eb] px-4 py-3 rounded-md focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="Enter Your Number"
              className="w-full border border-[#C24C2E] bg-[#fff1eb] px-4 py-3 rounded-md focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              placeholder="Write here"
              rows="4"
              className="w-full border border-[#C24C2E] bg-[#fff1eb] px-4 py-3 rounded-md focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#C24C2E] text-white px-6 py-2 rounded-md flex items-center gap-2 hover:opacity-90"
          >
            Send <FaPaperPlane className="text-sm" />
          </button>
        </form>
      </div>

      {/* Right Side - Images */}
      <div className="grid grid-cols-2 gap-4">
        <div className="aspect-square overflow-hidden rounded-tr-[60%]">
          <img
            src="https://i.ibb.co/QFjsHRTG/IMG-20250124-103458.jpg"
            alt="contact1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-full overflow-hidden">
          <img
            src="https://i.ibb.co/fdrM4wth/IMG-20250124-103311.jpg"
            alt="contact2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-[0px_100px_0px_100px] overflow-hidden">
          <img
            src="https://i.ibb.co/SpMkydm/IMG-20250124-103336.jpg"
            alt="contact3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-[100px_100px_0px_0px] overflow-hidden">
          <img
            src="https://i.ibb.co/gLtqwbZz/IMG-20250124-103342.jpg"
            alt="contact4"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
