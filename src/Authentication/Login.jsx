import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import logo from "../assets/logo.png";
import bg_banner from "../assets/bannerbg.png";
import toast from "react-hot-toast";

const Login = () => {
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send email and password to the backend login endpoint
      const res = await axiosInstance.post("/auth/login", formData);
      
      // Assuming the backend sends a token on successful login
      const { token, user } = res.data;

      // Store the token and user data in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Optional: You can store user info in a global state like Context API or Redux for app-wide access
      toast.success("Login successful!");
      
      // Redirect to the homepage or dashboard after successful login
      navigate("/"); // Redirect to home
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg_banner})` }}
    >
      <form
        onSubmit={handleSubmit}
        className="py-8 px-4 overflow-hidden"
      >
        {/* Left Form Section */}
        <div className="p-8 md:p-12 bg-white/90 rounded-3xl border border-bg_primary shadow-lg">
          {/* Logo */}
          <div className="w-12 h-12 mb-6">
            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
          </div>

          <h2 className="text-3xl font-bold mb-2 text-bg_primary">Welcome Back</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Sign in to access your account and continue your journey.
          </p>

          {/* Email */}
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            placeholder="Example@email.com"
            className="w-full px-4 py-2 border border-bg_primary bg-primary-8 rounded-md mt-1 mb-4"
            required
          />

          {/* Password */}
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              placeholder="At least 8 characters"
              className="w-full px-4 py-2 border border-bg_primary bg-primary-8 rounded-md mt-1"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-bg_primary cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="text-sm text-right text-bg_primary mb-6 cursor-pointer hover:underline">
            Forgot Password?
          </div>

          <button
            type="submit"
            className="w-full bg-bg_primary text-white py-2 rounded-md hover:opacity-90 font-semibold mb-4"
          >
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
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 bg-primary-8 rounded-md text-gray-700 hover:bg-gray-100 transition"
            >
              <FcGoogle className="text-xl" />
              Sign in with Google
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-md bg-primary-8 text-gray-700 hover:bg-gray-100 transition"
            >
              <FaFacebook className="text-blue-600 text-xl" />
              Sign in with Facebook
            </button>
          </div>

          {/* Signup */}
          <p className="text-sm text-center mt-6 text-gray-700">
            Don’t have an account?{" "}
            <NavLink to="/auth/register" className="text-bg_primary font-semibold hover:underline">
              Sign up
            </NavLink>
          </p>
        </div>

      </form>
    </div>
  );
};

export default Login;
