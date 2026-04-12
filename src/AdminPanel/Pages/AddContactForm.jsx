import React, { useState } from "react";

const AddContactForm = ({ onAddContact, onCancel, categories, selectedCategory }) => {
  const [newContact, setNewContact] = useState({
    Title: "",
    Location: "",
    PhoneNumbers: "",
    Latitude: "",
    Longitude: "",
    Type: selectedCategory || "", // Default to the selected category
  });

  // Handle input change for new contact form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newContact.Title || !newContact.Location || !newContact.PhoneNumbers || !newContact.Type) {
      alert("Please fill in all fields and select a category.");
      return;
    }

    onAddContact(newContact); // Parent function to handle adding the contact
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold">Add New {selectedCategory ? selectedCategory : "Emergency"} Contact</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Title"
          value={newContact.Title}
          onChange={handleInputChange}
          placeholder="Name"
          className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
        />
        <input
          type="text"
          name="Location"
          value={newContact.Location}
          onChange={handleInputChange}
          placeholder="Location"
          className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
        />
        <input
          type="text"
          name="PhoneNumbers"
          value={newContact.PhoneNumbers}
          onChange={handleInputChange}
          placeholder="Phone"
          className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
        />
        <input
          type="text"
          name="Latitude"
          value={newContact.Latitude}
          onChange={handleInputChange}
          placeholder="Latitude"
          className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
        />
        <input
          type="text"
          name="Longitude"
          value={newContact.Longitude}
          onChange={handleInputChange}
          placeholder="Longitude"
          className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
        />
        {/* Category Dropdown */}
        <select
          name="Type"
          value={newContact.Type}
          onChange={handleInputChange}
          className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-[#c24b2a] text-white px-5 py-1.5 rounded text-sm hover:bg-[#a03f24] transition"
          >
            Add Contact
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white px-5 py-1.5 rounded text-sm hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContactForm;
