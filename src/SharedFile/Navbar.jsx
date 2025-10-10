import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from '../assets/logo.png';
import love from '../assets/love.png';

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [user, setUser] = useState(null);  // Store the logged-in user state
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the user is logged in (via localStorage) when the Navbar mounts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));  // Parse and set user if found
      } catch (error) {
        console.error("Failed to parse user data from localStorage:", error);
        setUser(null);  // In case of error, reset user state
      }
    } else {
      setUser(null);  // No user found in localStorage
    }
  }, []); // Empty dependency array means this will run only once when the component mounts

  // Logout function that clears session data and redirects to login
  const handleLogout = () => {
    // Clear the user and token from localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    // Reset the user state
    setUser(null);

    // Navigate to the login page
    navigate("/auth/login");
  };

  // Handle scroll events for active section highlighting
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) setVisible(false);
    else setVisible(true);
    setLastScrollY(window.scrollY);

    const aboutEl = document.getElementById("donation-section");
    const campaignEl = document.getElementById("campaign-section");
    const categoriesEl = document.getElementById("categories-section");
    const contactEl = document.getElementById("contact-section");

    if (contactEl && contactEl.getBoundingClientRect().top <= 80) setActiveSection("contact");
    else if (categoriesEl && categoriesEl.getBoundingClientRect().top <= 80) setActiveSection("categories");
    else if (campaignEl && campaignEl.getBoundingClientRect().top <= 80) setActiveSection("campaign");
    else if (aboutEl && aboutEl.getBoundingClientRect().top <= 80) setActiveSection("about");
    else setActiveSection("home");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });

      if (id === "donation-section") setActiveSection("about");
      else if (id === "campaign-section") setActiveSection("campaign");
      else if (id === "categories-section") setActiveSection("categories");
      else if (id === "contact-section") setActiveSection("contact");
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (id) {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });

      if (id === "donation-section") setActiveSection("about");
      else if (id === "campaign-section") setActiveSection("campaign");
      else if (id === "categories-section") setActiveSection("categories");
      else if (id === "contact-section") setActiveSection("contact");
    }
  }, [location.state]);

  const links = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive && !["about", "campaign", "categories", "contact"].includes(activeSection) ? "text-[#C24C2E] font-bold" : "hover:text-[#C24C2E]"}>Home</NavLink>
      </li>
      <li>
        <button onClick={() => scrollToSection("donation-section")} className={activeSection === "about" ? "text-[#C24C2E] font-bold" : "hover:text-[#C24C2E]"}>About Us</button>
      </li>
      <li>
        <button onClick={() => scrollToSection("campaign-section")} className={activeSection === "campaign" ? "text-[#C24C2E] font-bold" : "hover:text-[#C24C2E]"}>Campaign</button>
      </li>
      <li>
        <button onClick={() => scrollToSection("categories-section")} className={activeSection === "categories" ? "text-[#C24C2E] font-bold" : "hover:text-[#C24C2E]"}>Categories</button>
      </li>
      <li>
        <NavLink to="/education" className={({ isActive }) => isActive ? "text-[#C24C2E] font-bold" : "hover:text-[#C24C2E]"}>Education</NavLink>
      </li>
      <li>
        <NavLink to="/safeNow" className={({ isActive }) => isActive ? "text-[#C24C2E] font-bold" : "hover:text-[#C24C2E]"}>Safe Now</NavLink>
      </li>
      <li>
        <button onClick={() => scrollToSection("contact-section")} className={activeSection === "contact" ? "text-[#C24C2E] font-bold" : "hover:text-[#C24C2E]"}>Contact</button>
      </li>
      {!user ? (
        <li>
          <NavLink to="/auth/login" className={({ isActive }) => isActive ? "text-[#C24C2E] font-bold" : "hover:text-[#C24C2E]"}>Login</NavLink>
        </li>
      ) : (
        <li>
          <button onClick={handleLogout} className="hover:text-[#C24C2E] font-bold">Logout</button>
        </li>
      )}
    </>
  );

  return (
    <div className={`bg-[#C24C2E1A] fixed top-0 w-full z-50 transition-all duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="navbar max-w-full mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="text-xl"><img src={logo} alt="company Logo" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn px-8 py-6 border border-[#C24C2E] text-[#C24C2E] font-semibold rounded-br-3xl hover:bg-[#C24C2E1A] hover:text-black transition">
            Donate Now <img src={love} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
