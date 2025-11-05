import React, { useState, useEffect } from "react";
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

  // Check if the user is already logged in, and redirect accordingly
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // If a token is found, check if the user is already logged in
      navigate("/");  // Redirect to home if already logged in
    }
  }, [navigate]);

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
      const res = await axiosInstance.post("/auth/login", formData);
      console.log("Login response:", res.data);

      const { token, user } = res.data.data;
      console.log("User from response:", user);

      if (user) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("userRole", user.Role);  // Save role to localStorage

        window.dispatchEvent(new Event("userChanged"));  // To update the navbar

        toast.success("Login successful!");

        // Redirect based on user role
        if (user.Role === "Admin") {
          navigate("/admin");  // Admin route
        } else {
          navigate("/");  // Regular user route
        }
      } else {
        toast.error("User data is missing.");
      }

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
      <form onSubmit={handleSubmit} className="py-8 px-4 overflow-hidden">
        <div className="p-8 md:p-12 bg-white/90 rounded-3xl border border-bg_primary shadow-lg">
          <div className="w-12 h-12 mb-6">
            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
          </div>

          <h2 className="text-3xl font-bold mb-2 text-bg_primary">Welcome Back</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Sign in to access your account and continue your journey.
          </p>

          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            placeholder="Example@email.com"
            className="w-full px-4 py-2 border border-bg_primary rounded-md mt-1 mb-4"
            required
          />

          <label className="block text-sm font-medium text-gray-700">Password</label>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              placeholder="At least 8 characters"
              className="w-full px-4 py-2 border border-bg_primary rounded-md mt-1"
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

          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300" />
            <span className="px-2 text-sm text-gray-500">Or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <div className="space-y-3">
            {/* Placeholder for Google login */}
            <button type="button" className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition">
              <FcGoogle className="text-xl" />
              Sign in with Google
            </button>
            {/* Placeholder for Facebook login */}
            <button type="button" className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition">
              <FaFacebook className="text-blue-600 text-xl" />
              Sign in with Facebook
            </button>
          </div>

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
