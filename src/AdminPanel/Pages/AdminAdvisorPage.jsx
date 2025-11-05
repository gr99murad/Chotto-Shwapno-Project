import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance"; // Set up axiosInstance for API calls

const AdminAdvisorPage = () => {
  const [advisors, setAdvisors] = useState([]);
  const [newAdvisor, setNewAdvisor] = useState({
    AdvisorName: "",
    Designation: "",
    Description: "",
    Image: "",
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedAdvisor, setSelectedAdvisor] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Fetch advisors on component mount
  useEffect(() => {
    const fetchAdvisors = async () => {
      try {
        const response = await axiosInstance.get("/advisors");
        if (response.data.success) {
          setAdvisors(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching advisors data:", error);
      }
    };
    fetchAdvisors();
  }, []);

  // Handle adding a new advisor
  const handleAddAdvisor = async () => {
    const { AdvisorName, Designation, Description } = newAdvisor;
    if (!AdvisorName || !Designation || !Description) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const response = await axiosInstance.post("/advisors", newAdvisor);
      if (response.data.success) {
        setAdvisors([...advisors, response.data.data]);
        setNewAdvisor({ AdvisorName: "", Designation: "", Description: "", Image: "" });
        setShowAddForm(false);
      }
    } catch (error) {
      console.error("Error adding new advisor:", error);
    }
  };

  // Handle editing an advisor
  const handleUpdateAdvisor = async () => {
    try {
      const response = await axiosInstance.put(`/advisors/${selectedAdvisor.UniqueID}`, selectedAdvisor);
      if (response.data.success) {
        setAdvisors(advisors.map(advisor => advisor.UniqueID === selectedAdvisor.UniqueID ? selectedAdvisor : advisor));
        setShowEditModal(false);
      }
    } catch (error) {
      console.error("Error updating advisor:", error);
    }
  };

  // Handle deleting an advisor
  const handleDeleteAdvisor = async () => {
    try {
      const response = await axiosInstance.delete(`/advisors/${selectedAdvisor.UniqueID}`);
      if (response.data.success) {
        setAdvisors(advisors.filter(advisor => advisor.UniqueID !== selectedAdvisor.UniqueID));
        setShowDeleteModal(false);
      }
    } catch (error) {
      console.error("Error deleting advisor:", error);
    }
  };

  return (
    <div className="bg-gradient mx-auto px-4 py-24 text-[#c24824]">
      <div className="w-full">
        {/* Add Advisor Button */}
        <div className="mb-6">
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-[#c24b2a] text-white px-5 py-1.5 rounded text-sm hover:bg-[#a03f24] transition"
          >
            Add New Advisor
          </button>
        </div>

        {/* Add New Advisor Form */}
        {showAddForm && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Add New Advisor</h3>
            <input
              type="text"
              name="AdvisorName"
              value={newAdvisor.AdvisorName}
              onChange={(e) => setNewAdvisor({ ...newAdvisor, AdvisorName: e.target.value })}
              placeholder="Name"
              className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
            />
            <input
              type="text"
              name="Designation"
              value={newAdvisor.Designation}
              onChange={(e) => setNewAdvisor({ ...newAdvisor, Designation: e.target.value })}
              placeholder="Designation"
              className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
            />
            <textarea
              name="Description"
              value={newAdvisor.Description}
              onChange={(e) => setNewAdvisor({ ...newAdvisor, Description: e.target.value })}
              placeholder="Description"
              className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
            />
            <button
              onClick={handleAddAdvisor}
              className="bg-[#c24b2a] text-white px-5 py-1.5 rounded text-sm hover:bg-[#a03f24] transition"
            >
              Add Advisor
            </button>
          </div>
        )}

        {/* Table for Displaying Advisors */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Advisors</h3>
          <table className="min-w-full bg-[#fceae6] border border-[#c24824] rounded-md">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b text-left">Name</th>
                <th className="px-4 py-2 border-b text-left">Designation</th>
                <th className="px-4 py-2 border-b text-left">Description</th>
                <th className="px-4 py-2 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {advisors.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-4">No advisors available.</td>
                </tr>
              ) : (
                advisors.map((advisor) => (
                  <tr key={advisor.UniqueID}>
                    <td className="px-4 py-2">{advisor.AdvisorName}</td>
                    <td className="px-4 py-2">{advisor.Designation}</td>
                    <td className="px-4 py-2">{advisor.Description}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => {
                          setSelectedAdvisor(advisor);
                          setShowEditModal(true);
                        }}
                        className="bg-yellow-500 text-white px-4 py-1 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          setSelectedAdvisor(advisor);
                          setShowDeleteModal(true);
                        }}
                        className="bg-red-500 text-white px-4 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && selectedAdvisor && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-[400px]">
            <h3 className="text-xl font-semibold mb-4">Edit Advisor</h3>
            <input
              type="text"
              name="AdvisorName"
              value={selectedAdvisor.AdvisorName}
              onChange={(e) => setSelectedAdvisor({ ...selectedAdvisor, AdvisorName: e.target.value })}
              placeholder="Name"
              className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
            />
            <input
              type="text"
              name="Designation"
              value={selectedAdvisor.Designation}
              onChange={(e) => setSelectedAdvisor({ ...selectedAdvisor, Designation: e.target.value })}
              placeholder="Designation"
              className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
            />
            <textarea
              name="Description"
              value={selectedAdvisor.Description}
              onChange={(e) => setSelectedAdvisor({ ...selectedAdvisor, Description: e.target.value })}
              placeholder="Description"
              className="border border-[#c24b2a]/40 rounded-md p-2 w-full mb-4 text-sm bg-[#f9ebe7]"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={handleUpdateAdvisor}
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
            <p className="mb-4">Are you sure you want to delete this advisor?</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={handleDeleteAdvisor}
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
    </div>
  );
};

export default AdminAdvisorPage;
