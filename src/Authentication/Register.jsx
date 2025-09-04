import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import logo from "../assets/logo.png";
import bg_banner from "../assets/bannerbg.png";

const Register = () => {
  const [formData, setFormData] = useState({
    Name: "",
    PhoneNumber: "",
    Email: "",
    Password: "",
    Gender: "",
    Location: "",
    TeacherOrStudentID: "",
    BloodDonor: false,
    Volunteer: false,
    LastBloodDonateDate: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [Image, setImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.Password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const payload = new FormData();
    for (const key in formData) {
      payload.append(key, formData[key]);
    }
    if (Image) {
      payload.append("Image", Image);
    }

    // ✅ DEBUG: Confirm FormData contents
    console.log("FormData being sent:");
    for (let pair of payload.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      await axiosInstance.post("/auth/register", payload);
      alert("Registration successful!");
      navigate("/auth/login");
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg_banner})` }}
    >
      <form
        onSubmit={handleSubmit}
        className="py-8 px-4 max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden"
        encType="multipart/form-data"
      >
        <div className="p-8 md:p-10 bg-white/95 rounded-3xl border border-bg_primary shadow-lg">
          <div className="w-14 h-14 mb-6">
            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
          </div>

          <h2 className="text-3xl font-bold mb-2 text-bg_primary">Welcome</h2>
          <p className="text-gray-700 mb-6 text-sm">
            Create an account to access our services and updates.
          </p>

          {["Name", "PhoneNumber", "Email", "Location", "TeacherOrStudentID"].map((field) => (
            <div key={field} className="mb-4">
              <label className="block text-sm font-medium text-gray-700">{field}</label>
              <input
                type={field === "Email" ? "email" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-bg_primary bg-primary-8 rounded-md mt-1"
              />
            </div>
          ))}

          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            name="Gender"
            value={formData.Gender}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-bg_primary bg-primary-8 rounded-md mt-1 mb-4"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Last Blood Donation Date</label>
            <input
              type="date"
              name="LastBloodDonateDate"
              value={formData.LastBloodDonateDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-bg_primary bg-primary-8 rounded-md mt-1"
            />
          </div>

          <label className="block text-sm font-medium text-gray-700">Password</label>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-bg_primary bg-primary-8 rounded-md mt-1"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <div className="relative mb-4">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-bg_primary bg-primary-8 rounded-md mt-1"
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <label className="block text-sm font-medium text-gray-700">Profile Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            accept="image/*"
            className="mb-4"
          />

          <label className="block text-sm">
            <input
              type="checkbox"
              name="BloodDonor"
              checked={formData.BloodDonor}
              onChange={handleChange}
              className="mr-2"
            />
            Blood Donor
          </label>
          <label className="block text-sm mb-4">
            <input
              type="checkbox"
              name="Volunteer"
              checked={formData.Volunteer}
              onChange={handleChange}
              className="mr-2"
            />
            Volunteer
          </label>

          <button
            type="submit"
            className="w-full bg-bg_primary text-white py-2 rounded-md hover:opacity-90 font-semibold"
          >
            Sign up
          </button>

          <p className="text-sm text-center text-gray-700 mt-4">
            Already have an account?{" "}
            <NavLink to="/auth/login" className="text-bg_primary font-semibold hover:underline">
              Sign In
            </NavLink>
          </p>
        </div>

        <div className="hidden md:block">
          <img
            src="https://i.ibb.co/xSnv2BVx/Group-407.png"
            alt="Visual"
            className="w-full h-full object-cover rounded-3xl border border-bg_primary"
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
