import React, { useEffect, useState } from "react";
import axiosInstance from '../../utils/axiosInstance';
const OurAdvisors = () => {
  const [advisors, setAdvisors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdvisors = async () => {
      try {
        const response = await axiosInstance.get("/advisors");
        setAdvisors(response.data); // Assuming the API returns an array of advisors
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAdvisors();
  }, []);

  if (loading) return <p className="text-center py-10">Loading advisors...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <section className="bg-gradient-to-b from-pink-50 to-white py-12 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#C24C2E] mb-10">
        Our Advisors
      </h2>

      <div className="space-y-6">
        {advisors.map((advisor, index) => (
          <div
            key={advisor.id}
            className="flex flex-col md:flex-row items-center justify-between bg-white shadow rounded-lg border p-4"
          >
            {index % 2 === 0 ? (
              <>
                <div className="flex-shrink-0">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-[120px] h-[140px] object-cover rounded-md"
                  />
                </div>
                <div className="flex-1 md:ml-6 mt-4 md:mt-0">
                  <h3 className="font-bold text-gray-800">{advisor.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{advisor.designation}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {advisor.description}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="flex-1 md:mr-6 mt-4 md:mt-0">
                  <h3 className="font-bold text-gray-800">{advisor.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{advisor.designation}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {advisor.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-[120px] h-[140px] object-cover rounded-md"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurAdvisors;
