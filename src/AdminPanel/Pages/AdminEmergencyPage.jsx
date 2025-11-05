import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance"; // Assuming axiosInstance is set up for API requests
import AddEmergencyContactForm from "./AddEmergencyContactModal"; // Import the form
import AddEmergencyContactModal from "./AddEmergencyContactModal";


const AdminEmergencyPage = () => {
  const [emergencyData, setEmergencyData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const categories = [
  "Police", 
  "Ambulance", 
  "Fire Service", 
  "Volunteer Help Line", 
  "Doctor", 
  "Hospital", 
  "Lawyer", 
  "Shopping Mall", 
  "Tech Shop", 
  "Pet Shop", 
  "Bus Time", 
  "Train Time", 
  "Courier Now", 
  "Helpline", 
  "Institute", 
  "Hostel", 
  "Restaurant", 
  "Broadband"
];

  const [newContact, setNewContact] = useState({
  Title: "",
  Location: "",
  PhoneNumbers: "",
  Latitude: "",
  Longitude: "",
  
});


  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);


  const [showDeleteModal, setShowDeleteModal] = useState(false);  // To control delete confirmation modal visibility
  const [showDeleteSuccessModal, setShowDeleteSuccessModal] = useState(false); // To show deletion success message
  const [deleteMessage, setDeleteMessage] = useState(""); // Success or error message after delete

  const [showUpdateSuccessModal, setShowUpdateSuccessModal] = useState(false); // To show update success modal
  const [updateMessage, setUpdateMessage] = useState(""); // Success or error message after update


  // Fetch all emergency data from backend
  useEffect(() => {
    const fetchEmergencyData = async () => {
      try {
        const response = await axiosInstance.get("/emergency");
        if (response.data.success) {
          setEmergencyData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching emergency data:", error);
      }
    };

    fetchEmergencyData();
  }, []);

  // Handle input change for new contact form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  // Handle input change for the edit form
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  // Add new emergency contact
  const handleAddContact = async () => {
  if (!newContact.Title || !newContact.Location || !newContact.PhoneNumbers || !selectedCategory) {
    alert("Please fill in all the fields and select a category.");
    return; // Prevent submission if required fields are empty
  }

  const token = localStorage.getItem("token");

  if (!token) {
    alert("You are not authorized. Please log in.");
    window.location.href = "/login"; // Redirect to login page if token is missing
    return;
  }

  try {
    const response = await axiosInstance.post(
      "/emergency",
      {
        ...newContact,
        Type: selectedCategory, // Automatically set the category type
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Ensure the token is added to the headers
        },
      }
    );

    // Log response for debugging
    console.log("Add contact response:", response);

    if (response.data.success) {
      setEmergencyData([...emergencyData, response.data.data]);
      setNewContact({
        Title: "",
        Location: "",
        PhoneNumbers: "",
        Latitude: "",
        Longitude: "",
      }); // Reset form data
      setShowAddForm(false); // Hide form after adding the contact
    }
  } catch (error) {
    console.error("Error adding new contact:", error);
    alert("Error adding contact. Please try again.");
    if (error.response) {
      console.log("Error Response:", error.response); // For debugging
    }
  }
};

  // Update existing contact
  const handleUpdateContact = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("You are not authorized. Please log in.");
        window.location.href = "/login";
        return;
      }

      const response = await axiosInstance.put(
        `/emergency/${selectedContact.UniqueID}`,
        selectedContact,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setEmergencyData((prevData) =>
          prevData.map((contact) =>
            contact.UniqueID === selectedContact.UniqueID
              ? response.data.data
              : contact
          )
        );

        // Show success modal after update
        setUpdateMessage("Emergency contact updated successfully.");
        setShowUpdateSuccessModal(true);
        setShowEditModal(false);
      } else {
        setUpdateMessage("Error updating contact.");
        setShowUpdateSuccessModal(true); // Show error modal if update fails
      }
    } catch (error) {
      console.error("Error updating contact:", error);
      setUpdateMessage("Error updating contact. Please try again.");
      setShowUpdateSuccessModal(true); // Show error modal if update fails
    }
  };


  // Delete a contact with confirmation
  const handleDeleteContact = async (id) => {
    setSelectedContact(emergencyData.find(contact => contact.UniqueID === id));
    setShowDeleteModal(true);  // Show delete confirmation modal
  };

  const confirmDelete = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("You are not authorized. Please log in.");
        return;
      }

      const response = await axiosInstance.delete(`/emergency/${selectedContact.UniqueID}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in the header
        },
      });

      if (response.data.success) {
        setEmergencyData((prevData) =>
          prevData.filter((contact) => contact.UniqueID !== selectedContact.UniqueID)
        );
        setDeleteMessage("Emergency contact deleted successfully.");
        setShowDeleteSuccessModal(true); // Show success modal after successful deletion
      } else {
        setDeleteMessage("Error deleting contact.");
        setShowDeleteSuccessModal(true); // Show error modal after failure
      }

      setShowDeleteModal(false); // Close delete confirmation modal
    } catch (error) {
      console.error("Error deleting contact:", error);
      if (error.response && error.response.status === 401) {
        alert("Session expired. Please log in again.");
        window.location.href = "/login";
      } else {
        setDeleteMessage("Error deleting the contact. Please try again.");
        setShowDeleteSuccessModal(true); // Show error modal if deletion fails
      }
      setShowDeleteModal(false); // Close modal after error
    }
  };
  // Group contacts by type (e.g., Police, Ambulance, etc.)
  const groupedByType = emergencyData.reduce((acc, contact) => {
    if (!acc[contact.Type]) acc[contact.Type] = [];
    acc[contact.Type].push(contact);
    return acc;
  }, {});

  // Filter contacts based on selected category
  const filteredContacts = selectedCategory
    ? groupedByType[selectedCategory]
    : emergencyData;

  return (
    <div className="bg-gradient mx-auto px-4 py-12 text-[#c24824]">
      <div className="w-full">
        <div className="py-4">
          {/* Add Emergency Contact Button */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-[#c24b2a] text-white px-5 py-2 rounded text-sm hover:bg-[#a03f24] transition"
      >
        Add +
      </button>

      {/* Show Modal when showModal state is true */}
      <AddEmergencyContactModal
        showModal={showModal}
        setShowModal={setShowModal}
        categories={categories} // Pass categories to the modal
      />
        </div>
        {/* Horizontal Categories Navigation */}
        <div className="mb-8 flex space-x-6 border-b border-[#c24824] pb-4">
  {Object.keys(groupedByType).map((type) => (
    <button
      key={type}
      onClick={() => {
        setSelectedCategory(type); 
        setShowAddForm(false); // Reset form visibility when changing category
      }}
      className={`text-sm font-semibold ${
        selectedCategory === type
          ? "bg-[#c24824] text-white"  // Highlight selected category
          : "text-[#c24824] hover:text-[#a03f24]"
      } px-4 py-2 rounded transition`}
    >
      {type}
    </button>
  ))}
  <button
    onClick={() => {
      setSelectedCategory(null); // Reset to show all contacts
      setShowAddForm(false); // Hide the form when showing all contacts
    }}
    className={`text-sm font-semibold ${
      selectedCategory === null
        ? "bg-[#c24824] text-white"  // Highlight "Show All" when no category is selected
        : "text-[#c24824] hover:text-[#a03f24]"
    } px-4 py-2 rounded transition`}
  >
    Show All
  </button>
</div>


        {/* Add New Contact Button (Category-Specific) */}
        {selectedCategory && (
          <div className="mb-6">
            <button
              onClick={() => setShowAddForm(true)} // Show form for the selected category
              className="bg-[#c24b2a] text-white px-5 py-1.5 rounded text-sm hover:bg-[#a03f24] transition"
            >
              Add {selectedCategory} Contact
            </button>
          </div>
        )}

        {/* Category-Specific Add New Contact Form */}
        {showAddForm && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Add New {selectedCategory} Contact</h3>
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
            <button
              onClick={handleAddContact}
              className="bg-[#c24b2a] text-white px-5 py-1.5 rounded text-sm hover:bg-[#a03f24] transition"
            >
              Add Contact
            </button>
          </div>
        )}

        {/* Table for Displaying Emergency Contacts */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Emergency Contacts</h3>
          <table className="min-w-full bg-[#fceae6] border border-[#c24824] rounded-md">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b text-left">Title</th>
                <th className="px-4 py-2 border-b text-left">Location</th>
                <th className="px-4 py-2 border-b text-left">Phone</th>
                <th className="px-4 py-2 border-b text-left">Latitude</th>
                <th className="px-4 py-2 border-b text-left">Longitude</th>
                <th className="px-4 py-2 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    No contacts available in this category.
                  </td>
                </tr>
              ) : (
                filteredContacts.map((contact) => (
                  <tr key={contact.UniqueID}>
                    <td className="px-4 py-2">{contact.Title}</td>
                    <td className="px-4 py-2">{contact.Location}</td>
                    <td className="px-4 py-2">{contact.PhoneNumbers}</td>
                    <td className="px-4 py-2">{contact.Latitude}</td>
                    <td className="px-4 py-2">{contact.Longitude}</td>
                    <td className="px-4 py-2">
                      <div className="flex gap-2">
                        <button
                        onClick={() => {
                          setSelectedContact(contact);
                          setShowEditModal(true); // Show the edit modal
                        }}
                        className="bg-yellow-500 text-white px-4 py-1 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteContact(contact.UniqueID)}
                        className="bg-red-500 text-white px-4 py-1 rounded"
                      >
                        Delete
                      </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && selectedContact && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-[400px]">
            <h3 className="text-xl font-semibold mb-4">Edit {selectedContact.Title} Contact</h3>
            <input
              type="text"
              name="Title"
              value={selectedContact.Title || ""}
              onChange={handleEditInputChange}
              placeholder="Name"
              className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
            />
            <input
              type="text"
              name="Location"
              value={selectedContact.Location || ""}
              onChange={handleEditInputChange}
              placeholder="Location"
              className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
            />
            <input
              type="text"
              name="PhoneNumbers"
              value={selectedContact.PhoneNumbers || ""}
              onChange={handleEditInputChange}
              placeholder="Phone"
              className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
            />
            <input
              type="text"
              name="Latitude"
              value={selectedContact.Latitude || ""}
              onChange={handleEditInputChange}
              placeholder="Latitude"
              className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
            />
            <input
              type="text"
              name="Longitude"
              value={selectedContact.Longitude || ""}
              onChange={handleEditInputChange}
              placeholder="Longitude"
              className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={handleUpdateContact}
                className="bg-[#c24b2a] text-white px-5 py-1.5 rounded text-sm hover:bg-[#a03f24] transition"
              >
                Save Changes
              </button>
              <button
                onClick={() => setShowEditModal(false)}
                className="bg-gray-500 text-white px-5 py-1.5 rounded text-sm hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-[400px]">
            <h3 className="text-xl font-semibold mb-4">Confirm Deletion</h3>
            <p className="mb-4">Are you sure you want to delete this contact?</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white px-5 py-1.5 rounded text-sm hover:bg-red-600"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setShowDeleteModal(false)} // Close modal without deleting
                className="bg-gray-500 text-white px-5 py-1.5 rounded text-sm hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Success Modal */}
      {showDeleteSuccessModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-[400px]">
            <h3 className="text-xl font-semibold mb-4">Deletion Successful</h3>
            <p className="mb-4">{deleteMessage}</p>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setShowDeleteSuccessModal(false)} // Close the success modal
                className="bg-green-500 text-white px-5 py-1.5 rounded text-sm hover:bg-green-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Update Success Modal */}
      {showUpdateSuccessModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-[400px]">
            <h3 className="text-xl font-semibold mb-4">Update Successful</h3>
            <p className="mb-4">{updateMessage}</p>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setShowUpdateSuccessModal(false)} // Close the success modal
                className="bg-green-500 text-white px-5 py-1.5 rounded text-sm hover:bg-green-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEmergencyPage;
