import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import bg_banner from "../assets/bannerbg.png";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg_banner})` }}
    >
      <div className="py-8 px-4 max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
        {/* Form Section */}
        <div className="p-8 md:p-10 bg-white/95 rounded-3xl border border-bg_primary shadow-lg">
          {/* Logo */}
          <div className="w-14 h-14 mb-6">
            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
          </div>

          <h2 className="text-3xl font-bold mb-2 text-bg_primary">Welcome</h2>
          <p className="text-gray-700 mb-6 text-sm">
            Create an account to access our services and updates.
          </p>

          {/* Name */}
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-bg_primary bg-primary-8 rounded-md mt-1 mb-4 focus:outline-none focus:ring-2 focus:ring-bg_primary"
          />

          {/* Phone Number */}
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 border border-bg_primary bg-primary-8 rounded-md mt-1 mb-4 focus:outline-none focus:ring-2 focus:ring-bg_primary"
          />

          {/* Email */}
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Example@email.com"
            className="w-full px-4 py-2 border border-bg_primary bg-primary-8 rounded-md mt-1 mb-4 focus:outline-none focus:ring-2 focus:ring-bg_primary"
          />

          {/* Password */}
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="At least 8 characters"
              className="w-full px-4 py-2 border border-bg_primary bg-primary-8 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-bg_primary"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-bg_primary cursor-pointer text-lg"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Confirm Password */}
          <label className="block text-sm font-medium text-gray-700">Re-enter password</label>
          <div className="relative mb-4">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              className="w-full px-4 py-2 border border-bg_primary bg-primary-8 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-bg_primary"
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-bg_primary cursor-pointer text-lg"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Terms */}
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2 accent-bg_primary" />
            <span className="text-sm text-gray-700">
              I agree to the{" "}
              <span className="text-bg_primary underline cursor-pointer">terms & policy</span>
            </span>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-bg_primary text-white py-2 rounded-md hover:opacity-90 transition mb-4 font-semibold">
            Sign up
          </button>

          {/* Sign in Link */}
          <p className="text-sm text-center text-gray-700">
            Already have an account?{" "}
            <NavLink
              to="/auth/login"
              className="text-bg_primary font-semibold hover:underline"
            >
              Sign In
            </NavLink>
          </p>
        </div>

        {/* Right Side Image */}
        <div className="hidden md:block">
          <img
            src="https://i.ibb.co/xSnv2BVx/Group-407.png"
            alt="Smiling child"
            className="w-full h-full object-cover rounded-3xl border border-bg_primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
