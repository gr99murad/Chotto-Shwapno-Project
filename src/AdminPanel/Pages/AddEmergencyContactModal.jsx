import React, { useState } from "react";
import axiosInstance from "../../utils/axiosInstance"; // Assuming you are using axios for API calls

const AddEmergencyContactModal = ({ showModal, setShowModal, categories }) => {
  const [newContact, setNewContact] = useState({
    Title: "",
    Location: "",
    PhoneNumbers: "",
    Latitude: "",
    Longitude: "",
    Type: "",
  });

  const [errors, setErrors] = useState(null); // State to store errors from API

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async () => {
    const { Title, Location, PhoneNumbers, Type, Latitude, Longitude } = newContact;
    const trimmedLatitude = Latitude.trim();
    const trimmedLongitude = Longitude.trim();

    // Validate form inputs
    if (!Title || !Location || !PhoneNumbers || !Type || !trimmedLatitude || !trimmedLongitude) {
      alert("Please fill in all fields.");
      return;
    }

    // Further validation for numbers
    if (isNaN(trimmedLatitude) || isNaN(trimmedLongitude)) {
      alert("Latitude and Longitude must be valid numbers.");
      return;
    }

    // Basic phone number validation (example: check for length and digits)
    const phoneRegex = /^[0-9]{11}$/; // Adjust this regex based on your phone format requirements
    if (!phoneRegex.test(PhoneNumbers)) {
      alert("Phone number is not valid.");
      return;
    }

    const token = localStorage.getItem("token");

    // Check if the user is logged in
    if (!token) {
      alert("You are not authorized. Please log in.");
      window.location.href = "/login"; // Redirect to login page
      return;
    }

    try {
      // Log the data you're sending to the API for debugging purposes
      console.log("New Contact Data:", newContact);

      // API call to add the new contact
      const response = await axiosInstance.post(
        "/emergency",  // Ensure the endpoint is correct
        {
          Title,
          Location,
          PhoneNumbers,
          Latitude: trimmedLatitude,
          Longitude: trimmedLongitude,
          Type,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the header
          },
        }
      );

      // If API response is successful
      if (response.data.success) {
        alert("Emergency contact added successfully!");
        setShowModal(false); // Close the modal after successful submission

        // Reset the form
        setNewContact({
          Title: "",
          Location: "",
          PhoneNumbers: "",
          Latitude: "",
          Longitude: "",
          Type: "",
        });
      } else {
        alert("Failed to add contact. Please try again.");
      }
    } catch (error) {
      console.error("Error adding new contact:", error);

      // Log detailed response error to help with debugging
      if (error.response) {
        console.error("Response Error Data:", error.response.data);
        alert(`Error: ${error.response.data.message || "Please try again."}`);
        
        // Set the errors from the response to state
        setErrors(error.response.data.errors); 
      } else {
        alert("Error adding contact. Please try again.");
      }
    }
  };

  return (
    showModal && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-md w-[400px]">
          <h3 className="text-xl font-semibold mb-4">Add New Emergency Contact</h3>

          {/* Render errors if available */}
          {errors && errors.length > 0 && (
            <div className="text-red-600 mb-4">
              <ul>
                {errors.map((error, index) => (
                  <li key={index}>{error.message}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Title Input */}
          <input
            type="text"
            name="Title"
            value={newContact.Title}
            onChange={handleInputChange}
            placeholder="Name"
            className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
          />

          {/* Location Input */}
          <input
            type="text"
            name="Location"
            value={newContact.Location}
            onChange={handleInputChange}
            placeholder="Location"
            className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
          />

          {/* Phone Input */}
          <input
            type="text"
            name="PhoneNumbers"
            value={newContact.PhoneNumbers}
            onChange={handleInputChange}
            placeholder="Phone"
            className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
          />

          {/* Latitude Input */}
          <input
            type="text"
            name="Latitude"
            value={newContact.Latitude}
            onChange={handleInputChange}
            placeholder="Latitude"
            className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
          />

          {/* Longitude Input */}
          <input
            type="text"
            name="Longitude"
            value={newContact.Longitude}
            onChange={handleInputChange}
            placeholder="Longitude"
            className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
          />

          {/* Type (Category) Selection */}
          <select
            name="Type"
            value={newContact.Type}
            onChange={handleInputChange}
            className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
          >
            <option value="">Select Type</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* Action Buttons */}
          <div className="flex justify-between mt-4">
            <button
              onClick={handleSubmit}
              className="bg-[#c24b2a] text-white px-5 py-1.5 rounded text-sm hover:bg-[#a03f24] transition"
            >
              Add Contact
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="bg-gray-500 text-white px-5 py-1.5 rounded text-sm hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default AddEmergencyContactModal;
