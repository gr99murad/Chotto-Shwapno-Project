import { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaRegCopy } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import axiosInstance from '../../utils/axiosInstance';
import Navbar from '../../SharedFile/Navbar';

const EmergencyList = ({ type, icon }) => {
  const [stations, setStations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState(null); // Track copied phone

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get('/emergency');
        if (res.data.success) {
          const filtered = res.data.data.filter(item => item.Type === type);
          setStations(filtered);
        }
      } catch (error) {
        console.error(`Error fetching ${type} stations:`, error);
      }
    };
    fetchData();
  }, [type]);

  const handleCopy = (number, id) => {
    navigator.clipboard.writeText(number);
    setCopiedId(id);

    setTimeout(() => {
      setCopiedId(null);
    }, 2000); // Reset after 2 seconds
  };

  const filteredStations = stations.filter(station =>
    station.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="bg-gradient mx-auto px-4 py-24 text-[#c24824]">
        <div className='flex mb-6 justify-between items-center'>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold flex items-center gap-3">
            {icon && (
              typeof icon === 'string' ? (
                <img src={icon} alt="" className="w-8 h-8" />
              ) : (
                icon // This renders the React icon component
              )
            )}
            {type}
          </h1>

          <div className="relative md:w-full max-w-sm">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-[#d88c6b] bg-transparent rounded-md py-2 pr-10 pl-3 text-[#c24824] placeholder-[#d88c6b] focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#c24824]" />
          </div>
        </div>

        <div className="space-y-5 bg-grid">
          {filteredStations.map((station) => (
            <div
              key={station.UniqueID}
              className="flex justify-between items-center border border-[#c24824] bg-[#fceae6] rounded-md px-6 py-4"
            >
              <div className="space-y-2">
                <h2 className="text-lg font-semibold">{station.Title}</h2>
                <button
                  className="bg-[#c24824] text-white text-sm px-4 py-1 rounded-tr-[10px] rounded-bl-[10px] flex items-center gap-1"
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/search/${encodeURIComponent(station.Location)}`,
                      '_blank'
                    )
                  }
                >
                  Location <FaMapMarkerAlt className="text-xs" />
                </button>
              </div>

              <div className="flex items-center gap-3 text-md font-medium">
                <span>{station.PhoneNumbers}</span>
                <button
                  onClick={() => handleCopy(station.PhoneNumbers, station.UniqueID)}
                  title="Copy number"
                  className="relative"
                >
                  <FaRegCopy className="text-xl hover:text-black cursor-pointer" />
                  {copiedId === station.UniqueID && (
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#c24824] text-white text-xs px-2 py-1 rounded">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EmergencyList;
