import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Manage User", path: "/admin/userManage" },
    { name: "Campaign", path: "/admin/campaign" },
    { name: "Blood Donor", path: "/admin/blood-donor" },
    { name: "Emergency Numbers", path: "/admin/emergency-numbers" },
    { name: "Our Advisor", path: "/admin/our-advisor" },
  ];

  const handleBackToHome = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className=" bg-white flex">
      {/* Left Sidebar */}
      <div className="border border-[#c24b2a]/30 rounded-md p-3 bg-[#f9ebe7] w-1/4 h-screen fixed top-0 left-0 z-10">
        <h2 className="font-medium mb-3">Menu</h2>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `block px-3 py-1.5 rounded text-sm ${
                    isActive ? "bg-[#c24b2a] text-white" : "hover:bg-[#c24b2a]/10"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 ml-[30%] lg:ml-[25%] px-4 py-6">
        <h1 className="text-4xl font-bold text-[#c24b2a] mb-8">Admin Panel</h1>
        <Outlet /> {/* Render the corresponding page */}
      </div>
    </div>
  );
};

export default AdminPanel;
