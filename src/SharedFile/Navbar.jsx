import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo (1).png";
import defaultAvatar from "../assets/defaultavatar.jpg";
import love from "../assets/love.png";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [isUserLoading, setIsUserLoading] = useState(true); // New state to handle loading user
  const navigate = useNavigate();
  const location = useLocation();

  // Load user data and handle session
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      if (storedUser.Role === "Admin") {
        setIsAdmin(true);
      }
    }
    setIsUserLoading(false); // Once the user is fetched, set loading to false
  }, []);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setIsAdmin(false);
    navigate("/"); // Redirect to home page after logout
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
      }
    } else {
      navigate("/", { replace: true });
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          setActiveSection(sectionId);
        }
      }, 300);
    }
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#C24C2E] font-bold" : "hover:text-[#C24C2E]"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <button
          onClick={() => scrollToSection("donation-section")}
          className={
            activeSection === "donation-section"
              ? "text-[#C24C2E] font-bold"
              : "hover:text-[#C24C2E]"
          }
        >
          About Us
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection("campaign-section")}
          className={
            activeSection === "campaign-section"
              ? "text-[#C24C2E] font-bold"
              : "hover:text-[#C24C2E]"
          }
        >
          Campaign
        </button>
      </li>
      <li>
        <button
          onClick={() => scrollToSection("categories-section")}
          className={
            activeSection === "categories-section"
              ? "text-[#C24C2E] font-bold"
              : "hover:text-[#C24C2E]"
          }
        >
          Categories
        </button>
      </li>
      <li>
        <NavLink
          to="/ourAdvisors"
          className={({ isActive }) =>
            isActive ? "text-[#C24C2E] font-bold" : "hover:text-[#C24C2E]"
          }
        >
          Education
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/safeNow"
          className={({ isActive }) =>
            isActive ? "text-[#C24C2E] font-bold" : "hover:text-[#C24C2E]"
          }
        >
          Safe Now
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/emergencyInfo"
          className={({ isActive }) =>
            isActive ? "text-[#C24C2E] font-bold" : "hover:text-[#C24C2E]"
          }
        >
          Emergency Info
        </NavLink>
      </li>
      <li>
        <button
          onClick={() => scrollToSection("contact-section")}
          className={
            activeSection === "contact-section"
              ? "text-[#C24C2E] font-bold"
              : "hover:text-[#C24C2E]"
          }
        >
          Contact
        </button>
      </li>
      {!user && (
        <li>
          <NavLink
            to="/auth/login"
            className={({ isActive }) =>
              isActive ? "text-[#C24C2E] font-bold" : "hover:text-[#C24C2E]"
            }
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );

  if (isUserLoading) {
    return (
      <div className="navbar bg-[#C24C2E1A] fixed top-0 w-full">
        <div className="navbar-center">
          <div className="loader">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-[#C24C2E1A] fixed top-0 w-full duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="navbar max-w-full mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-xl">
            <img
              src={logo}
              alt="company Logo"
              className="h-[45px] w-[45px] md:h-[55px] md:w-[55px]"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex items-center space-x-4">
          {user && (
            <div className="relative">
              <img
                src={user.profilePicture || defaultAvatar}
                alt="Profile"
                className="w-9 h-9 rounded-full border cursor-pointer"
                onClick={toggleDropdown}
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-32 z-10">
                  <ul>
                    <li>
                      <NavLink
                        to="/profile"
                        className="block px-4 py-2 text-sm text-black"
                      >
                        Profile
                      </NavLink>
                    </li>
                    {isAdmin && (
                      <li>
                        <NavLink
                          to="/admin"
                          className="block px-4 py-2 text-sm text-black"
                        >
                          Admin Panel
                        </NavLink>
                      </li>
                    )}
                    <li>
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 text-sm text-black"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
          <a className="btn px-8 py-6 border border-[#C24C2E] text-[#C24C2E] font-semibold rounded-br-3xl hover:bg-[#C24C2E1A] hover:text-black transition">
            Donate Now <img src={love} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
