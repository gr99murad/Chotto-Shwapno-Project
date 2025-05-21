import React from "react";

const StopChildMarriage = () => {
  return (
    <section className="bg-primary-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        {/* Left Form Section */}
        <div className="bg-white border border-bg_primary rounded-xl p-6 md:p-8 shadow-lg">
          <h2 className="text-3xl md:text-3xl font-bold text-bg_primary mb-1">
            <span className="text-bg_primary">Stop</span>{" "}
            <span className="text-black">Child Marriage</span>
          </h2>

          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-4 py-2 rounded-md border border-bg_primary bg-primary-8 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Phone Number</label>
              <input
                type="text"
                placeholder="Enter Your Number"
                className="w-full px-4 py-2 rounded-md border border-bg_primary bg-primary-8 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Location</label>
              <input
                type="text"
                placeholder="Write your location"
                className="w-full px-4 py-2 rounded-md border border-bg_primary bg-primary-8 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-bg_primary text-white px-6 py-2 rounded-md hover:opacity-90 transition"
            >
              Send
            </button>
          </form>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          <img
            src="https://i.ibb.co/pBys0Xdm/happy-girl-with-notebook-blurred-1.png"
            alt="Smiling girl"
            className="w-full max-w-md mx-auto rounded-2xl "
          />

          {/* Floating Texts */}
          <div className="absolute md:-mt-48 md:ml-32 border border-bg_primary bg-white px-3 py-1 text-xs rounded-md shadow text-gray-700">
            Books, Not Brides.
          </div>
          <div className="absolute md:-mt-44 md:ml-72 border border-bg_primary bg-white px-3 py-1 text-xs rounded-md shadow text-gray-700">
            Childhood is for dreams, not marriage.
          </div>
          <div className="absolute md:-mt-36 md:ml-8 border border-bg_primary bg-white px-3 py-1 text-xs rounded-md shadow text-gray-700">
            Voices for children, against child marriage.
          </div>
          <div className="absolute md:-mt-32 md:ml-96 border border-bg_primary bg-white px-3 py-1 text-xs rounded-md shadow text-gray-700">
            Let Girls Be Girls – Not Brides.
          </div>
          <div className="absolute md:-mt-20 md:ml-32 border border-bg_primary bg-white px-3 py-1 text-xs rounded-md shadow text-gray-700">
            End child marriage. Empower the future.
          </div>
          <div className="absolute md:-mt-16 md:ml-96 border border-bg_primary bg-white px-3 py-1 text-xs rounded-md shadow text-gray-700">
            Protect Her Childhood — Say No to Child Marriage.
          </div>
        </div>
      </div>
    </section>
  );
};

export default StopChildMarriage;
