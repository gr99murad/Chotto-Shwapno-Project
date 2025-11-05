import React, { useState, useEffect } from "react";
import axios from "axios";
import defaultAvatar from '../assets/defaultavatar.jpg';  // Default avatar path
import { FaPlus } from 'react-icons/fa'; // Plus icon for profile image

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    UniqueID: "",  // Initialize UniqueID here
    fullName: "",
    email: "",
    gender: "",
    mobile: "",
    lastName: "",
    profilePicture: "",
    location: "", // New field
    teacherOrStudentID: "", // New field
    bloodDonor: false, // New field
    volunteer: false, // New field
  });
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  // Fetch user data from the backend
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/v1/users/profile"); // Fetching user data
        console.log("Fetched User Data:", response.data);  // Log the response to check the fields
        if (response.data && response.data.UniqueID) {
          setUserInfo(response.data);  // Set the userInfo state with the fetched data
          setLoading(false);
        } else {
          alert("User ID is missing in the response!");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        alert("Error fetching user data!");
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // Handle file change for profile image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Set the selected image as preview
        setUserInfo({ ...userInfo, profilePicture: reader.result });
      };
      reader.readAsDataURL(file); // Convert the image to base64 string
    }
  };

  const handleSubmit = async () => {
    if (!userInfo.UniqueID) {
      alert("User ID is not defined");  // Ensure ID is present before submitting
      return;
    }

    try {
      const formData = new FormData();
      formData.append("fullName", userInfo.fullName);
      formData.append("lastName", userInfo.lastName);
      formData.append("email", userInfo.email);
      formData.append("mobile", userInfo.mobile);
      formData.append("gender", userInfo.gender);
      formData.append("location", userInfo.location);
      formData.append("teacherOrStudentID", userInfo.teacherOrStudentID);
      formData.append("bloodDonor", userInfo.bloodDonor);
      formData.append("volunteer", userInfo.volunteer);

      // Only append profile picture if it's selected
      if (selectedImage) {
        formData.append("profilePicture", selectedImage);
      }

      // Update the profile using the user ID in the URL
      const response = await axios.put(`/api/v1/users/${userInfo.UniqueID}`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Error updating profile!");
    }
  };

  // Toggle edit mode
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#C24C2E1A] p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-12">
      {/* Heading "My Profile" */}
      <h1 className="text-3xl font-semibold text-center text-[#4A4A4A] mb-8">My Profile</h1>

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={selectedImage || userInfo.profilePicture || defaultAvatar} // Update with user's avatar if available
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            {/* Plus icon for image upload */}
            {isEditing && (
              <label
                htmlFor="profilePicture"
                className="absolute bottom-0 right-0 bg-white p-2 rounded-full cursor-pointer shadow-md"
              >
                <FaPlus className="text-[#C24C2E] text-lg" />
              </label>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#4A4A4A]">{userInfo.fullName}</h2>
            <p className="text-sm text-[#7A7A7A]">{userInfo.email}</p>
          </div>
        </div>
        <button
          onClick={handleEdit}
          className="text-[#C24C2E] font-semibold hover:text-[#C24C2E] transition duration-200"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>

      {/* Profile Image Update */}
      {isEditing && (
        <div className="mt-4">
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-[#4A4A4A]">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={userInfo.fullName}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-3 border border-[#C24C2E] rounded-md"
            />
          </div>

          <div>
            <label htmlFor="gender" className="block text-[#4A4A4A]">Gender</label>
            <select
              id="gender"
              name="gender"
              value={userInfo.gender}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-3 border border-[#C24C2E] rounded-md"
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="mobile" className="block text-[#4A4A4A]">Mobile Number</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={userInfo.mobile}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-3 border border-[#C24C2E] rounded-md"
            />
          </div>

          {/* New fields */}
          <div>
            <label htmlFor="location" className="block text-[#4A4A4A]">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={userInfo.location}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-3 border border-[#C24C2E] rounded-md"
            />
          </div>

          <div>
            <label htmlFor="teacherOrStudentID" className="block text-[#4A4A4A]">Teacher/Student ID</label>
            <input
              type="text"
              id="teacherOrStudentID"
              name="teacherOrStudentID"
              value={userInfo.teacherOrStudentID}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-3 border border-[#C24C2E] rounded-md"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="lastName" className="block text-[#4A4A4A]">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={userInfo.lastName}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full p-3 border border-[#C24C2E] rounded-md"
            />
          </div>

          {/* Volunteer and Blood Donor Toggle */}
          <div>
            <label htmlFor="bloodDonor" className="block text-[#4A4A4A]">Blood Donor</label>
            <input
              type="checkbox"
              id="bloodDonor"
              name="bloodDonor"
              checked={userInfo.bloodDonor}
              onChange={(e) => handleInputChange({ target: { name: 'bloodDonor', value: e.target.checked } })}
              disabled={!isEditing}
              className="w-full p-3 border border-[#C24C2E] rounded-md"
            />
          </div>

          <div>
            <label htmlFor="volunteer" className="block text-[#4A4A4A]">Volunteer</label>
            <input
              type="checkbox"
              id="volunteer"
              name="volunteer"
              checked={userInfo.volunteer}
              onChange={(e) => handleInputChange({ target: { name: 'volunteer', value: e.target.checked } })}
              disabled={!isEditing}
              className="w-full p-3 border border-[#C24C2E] rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Save/Cancel Button */}
      {isEditing && (
        <div className="mt-6 text-center">
          <button
            onClick={handleSubmit}
            className="px-8 py-3 bg-[#C24C2E] text-white rounded-md"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
