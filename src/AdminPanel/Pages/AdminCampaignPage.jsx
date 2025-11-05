import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance"; // Assuming axiosInstance is set up for API requests

const AdminCampaignPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [newCampaign, setNewCampaign] = useState({
    Title: "",
    Description: "",
    Images: [],
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteSuccessModal, setShowDeleteSuccessModal] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState("");
  const [showUpdateSuccessModal, setShowUpdateSuccessModal] = useState(false);
  const [updateMessage, setUpdateMessage] = useState("");

  // Fetch campaigns from backend
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axiosInstance.get("/campaigns");
        if (response.data.success) {
          setCampaigns(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchCampaigns();
  }, []);

  // Handle input change for new campaign form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCampaign({ ...newCampaign, [name]: value });
  };

  // Add new campaign
  const handleAddCampaign = async () => {
    const { Title, Description, Images } = newCampaign;

    if (!Title || !Description || !Images || Images.length === 0) {
      alert("Please fill in all the fields and upload at least one image.");
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      alert("You are not authorized. Please log in.");
      window.location.href = "/login"; // Redirect to login page if token is missing
      return;
    }

    try {
      const formData = new FormData();
      formData.append("Title", Title);
      formData.append("Description", Description);
      Images.forEach((image) => formData.append("Images", image));

      const response = await axiosInstance.post("/campaigns", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        setCampaigns([...campaigns, response.data.data]);
        setNewCampaign({
          Title: "",
          Description: "",
          Images: [],
        });
        setShowAddForm(false); // Hide form after adding the campaign
      }
    } catch (error) {
      console.error("Error adding campaign:", error);
      alert("Error adding campaign. Please try again.");
    }
  };

  // Handle updating a campaign
  const handleUpdateCampaign = async () => {
    const { Title, Description, Images } = selectedCampaign;

    if (!Title || !Description || !Images || Images.length === 0) {
      alert("Please fill in all the fields and upload at least one image.");
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      alert("You are not authorized. Please log in.");
      window.location.href = "/login";
      return;
    }

    try {
      const formData = new FormData();
      formData.append("Title", Title);
      formData.append("Description", Description);
      Images.forEach((image) => formData.append("Images", image));

      const response = await axiosInstance.put(`/campaigns/${selectedCampaign.UniqueID}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        setCampaigns(campaigns.map((campaign) => (campaign.UniqueID === selectedCampaign.UniqueID ? selectedCampaign : campaign)));
        setUpdateMessage("Campaign updated successfully.");
        setShowUpdateSuccessModal(true);
        setShowEditModal(false);
      } else {
        setUpdateMessage("Error updating campaign.");
        setShowUpdateSuccessModal(true);
      }
    } catch (error) {
      console.error("Error updating campaign:", error);
      setUpdateMessage("Error updating campaign. Please try again.");
      setShowUpdateSuccessModal(true);
    }
  };

  // Handle delete campaign
  const handleDeleteCampaign = async (id) => {
    setSelectedCampaign(campaigns.find((campaign) => campaign.UniqueID === id));
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You are not authorized. Please log in.");
      return;
    }

    try {
      const response = await axiosInstance.delete(`/campaigns/${selectedCampaign.UniqueID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        setCampaigns(campaigns.filter((campaign) => campaign.UniqueID !== selectedCampaign.UniqueID));
        setDeleteMessage("Campaign deleted successfully.");
        setShowDeleteSuccessModal(true);
      } else {
        setDeleteMessage("Error deleting campaign.");
        setShowDeleteSuccessModal(true);
      }

      setShowDeleteModal(false);
    } catch (error) {
      console.error("Error deleting campaign:", error);
      if (error.response && error.response.status === 401) {
        alert("Session expired. Please log in again.");
        window.location.href = "/login";
      } else {
        setDeleteMessage("Error deleting the campaign. Please try again.");
        setShowDeleteSuccessModal(true);
      }
      setShowDeleteModal(false);
    }
  };

  return (
    <div className="bg-gradient mx-auto px-4 py-24 text-[#c24824]">
      <div className="w-full">
        {/* Add New Campaign Button */}
        <div className="mb-6">
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-[#c24b2a] text-white px-5 py-1.5 rounded text-sm hover:bg-[#a03f24] transition"
          >
            Add New Campaign
          </button>
        </div>

        {/* Add New Campaign Form */}
        {showAddForm && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Add New Campaign</h3>
            <input
              type="text"
              name="Title"
              value={newCampaign.Title}
              onChange={handleInputChange}
              placeholder="Title"
              className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
            />
            <textarea
              name="Description"
              value={newCampaign.Description}
              onChange={handleInputChange}
              placeholder="Description"
              className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
            />
            <input
              type="file"
              name="Images"
              accept="image/*"
              multiple
              onChange={(e) => setNewCampaign({ ...newCampaign, Images: [...e.target.files] })}
              className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
            />
            <button
              onClick={handleAddCampaign}
              className="bg-[#c24b2a] text-white px-5 py-1.5 rounded text-sm hover:bg-[#a03f24] transition"
            >
              Add Campaign
            </button>
          </div>
        )}

        {/* Campaigns Table */}
        {/* Campaigns Table */}
<div>
  <h3 className="text-xl font-semibold mb-4">Campaigns</h3>
  <table className="min-w-full bg-[#fceae6] border border-[#c24824] rounded-md">
    <thead>
      <tr>
        <th className="px-4 py-2 border-b text-left">Title</th>
        <th className="px-4 py-2 border-b text-left">Description</th>
        <th className="px-4 py-2 border-b text-left">Images</th>
        <th className="px-4 py-2 border-b text-left">Actions</th>
      </tr>
    </thead>
    <tbody>
      {campaigns.length === 0 ? (
        <tr>
          <td colSpan="4" className="text-center py-4">No campaigns available.</td>
        </tr>
      ) : (
        campaigns.map((campaign) => (
          <tr key={campaign.UniqueID}>
            <td className="px-4 py-2">{campaign.Title}</td>
            <td className="px-4 py-2">{campaign.Description}</td>
            <td className="px-4 py-2">
              {/* Display images as thumbnails */}
              {campaign.Images && campaign.Images.length > 0 ? (
                <div className="flex space-x-2">
                  {campaign.Images.slice(0, 3).map((image, index) => ( // Display only 3 images as thumbnails
                    <img
                      key={index}
                      src={image}
                      alt={`Campaign Image ${index + 1}`}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  ))}
                  {campaign.Images.length > 3 && (
                    <span className="text-sm text-gray-500">+{campaign.Images.length - 3} more</span>
                  )}
                </div>
              ) : (
                <span>No images</span>
              )}
            </td>
            <td className="px-4 py-2">
              <div className="flex gap-2 sm:flex-col">
                <button
                onClick={() => {
                  setSelectedCampaign(campaign);
                  setShowEditModal(true);
                }}
                className="bg-yellow-500 text-white px-4 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteCampaign(campaign.UniqueID)}
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

      {/* Edit Campaign Modal */}
      {showEditModal && selectedCampaign && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-[400px]">
            <h3 className="text-xl font-semibold mb-4">Edit Campaign</h3>
            <input
              type="text"
              name="Title"
              value={selectedCampaign.Title}
              onChange={(e) => setSelectedCampaign({ ...selectedCampaign, Title: e.target.value })}
              placeholder="Title"
              className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
            />
            <textarea
              name="Description"
              value={selectedCampaign.Description}
              onChange={(e) => setSelectedCampaign({ ...selectedCampaign, Description: e.target.value })}
              placeholder="Description"
              className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
            />
            <input
              type="file"
              name="Images"
              accept="image/*"
              multiple
              onChange={(e) => setSelectedCampaign({ ...selectedCampaign, Images: [...e.target.files] })}
              className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={handleUpdateCampaign}
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
            <p className="mb-4">Are you sure you want to delete this campaign?</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white px-5 py-1.5 rounded text-sm hover:bg-red-600"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
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
                onClick={() => setShowDeleteSuccessModal(false)}
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
                onClick={() => setShowUpdateSuccessModal(false)}
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

export default AdminCampaignPage;
