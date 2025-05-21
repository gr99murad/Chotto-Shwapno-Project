import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import love from '../assets/love.png';

const Navbar = () => {
  const links = (
    <>
      <li  className="text-[#C24C2E]">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/aboutUs">About us</Link>
      </li>
      <li>
        <Link to="/campaign">Campaign</Link>
      </li>
      <li>
        <Link to="/education">Education</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
      <li>
        <Link to="/safeNow">Safe Now</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/auth/login">Login</Link>
      </li>
    </>
  );
  return (
    <div className="bg-[#C24C2E1A] fixed top-0 w-full z-50 shadow-lg">
    <div className=" navbar max-w-7xl mx-auto  ">
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
        <a className=" text-xl"><img src={logo} alt="company Logo" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn px-8 py-6 border border-[#C24C2E] text-[#C24C2E] font-semibold rounded-br-3xl hover:bg-[#C24C2E1A] hover:text-black transition">Donate Now <img src={love} alt="" /></a>
      </div>
      
    </div>
    </div>
  );
};

export default Navbar;
