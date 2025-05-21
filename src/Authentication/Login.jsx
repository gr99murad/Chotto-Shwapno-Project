import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../assets/logo.png";
import bg_banner from "../assets/bannerbg.png";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg_banner})` }}
    >
      <div className="py-8 px-4 max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
        {/* Left Form Section */}
        <div className="p-8 md:p-12 bg-white/80 rounded-3xl border border-bg_primary">
          {/* Logo */}
          <div className="w-12 h-12 mb-6">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          {/* Email */}
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Example@email.com"
            className="w-full px-4 py-2 border border-bg_primary bg-primary-8 rounded-md mt-1 mb-4 focus:outline-none focus:ring-2 focus:ring-[#C24C2E]/40"
          />

          {/* Password */}
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="At least 8 characters"
              className="w-full px-4 py-2 border border-bg_primary bg-primary-8 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-[#C24C2E]/40"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-bg_primary cursor-pointer text-lg"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="text-sm text-right text-bg_primary mt-2 mb-6 cursor-pointer hover:underline">
            Forgot Password?
          </div>

          <button className="w-full bg-bg_primary text-white py-2 rounded-md hover:bg-[#a33922] transition mb-4">
            Sign in
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="px-2 text-sm text-gray-500">Or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Social Logins */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 bg-primary-8 rounded-md text-gray-700 hover:bg-gray-100 transition">
              <FcGoogle className="text-xl" />
              Sign in with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-md bg-primary-8 text-gray-700 hover:bg-gray-100 transition">
              <FaFacebook className="text-blue-600 text-xl" />
              Sign in with Facebook
            </button>
          </div>

          {/* Signup */}
          <p className="text-sm text-center mt-6 text-gray-700">
            Don’t have an account?{" "}
            <span className="text-bg_primary font-semibold cursor-pointer hover:underline">
              <NavLink to="/auth/register">Sign up</NavLink>
            </span>
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

export default LoginPage;
