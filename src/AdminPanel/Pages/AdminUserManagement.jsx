import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

const AdminUserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(""); 
  const [selectedRole, setSelectedRole] = useState("User"); 

  // Fetch all users from backend
  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('token');
      console.log("Token:", token); // Debugging: check if token is present

      if (!token) {
        console.log("No token found.");
        setErrorMessage("You are not authorized. Please log in.");
        setLoading(false);
        return;
      }

      try {
        console.log("Fetching users...");
        const response = await axiosInstance.get("/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        console.log("Response from server:", response); // Debugging: Check API response

        if (response.data.success) {
          setUsers(response.data.data);
        } else {
          setErrorMessage(response.data.message || "An error occurred.");
        }
      } catch (error) {
        console.error("Error fetching users:", error);

        if (error.response) {
          if (error.response.status === 401) {
            alert("Session expired. Please log in again.");
            window.location.href = "/login";
          } else if (error.response.status === 500) {
            setErrorMessage("Server error occurred while fetching users. Please try again later.");
          } else {
            setErrorMessage("An unexpected error occurred. Please try again.");
          }
        } else {
          setErrorMessage("Network error. Please check your connection.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handle role change for user
  const handleRoleChange = async (userId, newRole) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You are not authorized. Please log in.");
      window.location.href = "/login";
      return;
    }

    try {
      console.log(`Changing role for user ${userId} to ${newRole}`);
      const response = await axiosInstance.put(
        `/users/${userId}`,
        { Role: newRole },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("Role update response:", response); // Debugging: Check role update response

      if (response.data.success) {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.UniqueID === userId ? { ...user, Role: newRole } : user
          )
        );
      } else {
        setErrorMessage(response.data.message || "Failed to update user role.");
      }
    } catch (error) {
      console.error("Error updating role:", error);
      setErrorMessage("An error occurred while updating the user role. Please try again.");
    }
  };

  // Handle delete user
  const handleDeleteUser = async (userId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You are not authorized. Please log in.");
      window.location.href = "/login";
      return;
    }

    try {
      console.log(`Deleting user with ID ${userId}`);
      const response = await axiosInstance.delete(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Delete user response:", response); // Debugging: Check delete user response

      if (response.data.success) {
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user.UniqueID !== userId)
        );
      } else {
        setErrorMessage(response.data.message || "Failed to delete user.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      setErrorMessage("An error occurred while deleting the user. Please try again.");
    }
  };

  return (
    <div className="bg-gradient mx-auto px-4 py-24 text-[#c24824]">
      <h2 className="text-2xl font-semibold mb-6">User Management</h2>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-[#fceae6] border border-[#c24824] rounded-md">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-left text-sm sm:text-base">Name</th>
                <th className="p-2 text-left text-sm sm:text-base">Email</th>
                <th className="p-2 text-left text-sm sm:text-base">Role</th>
                <th className="p-2 text-left text-sm sm:text-base">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.UniqueID} className="border-b">
                  <td className="p-2">{user.Name}</td>
                  <td className="p-2">{user.Email}</td>
                  <td className="p-2">
                    <select
                      value={user.Role}
                      onChange={(e) => handleRoleChange(user.UniqueID, e.target.value)}
                      className="bg-[#f9ebe7] border border-[#c24b2a]/40 rounded-md p-1 text-sm sm:text-base"
                    >
                      <option value="Admin">Admin</option>
                      <option value="User">User</option>
                      <option value="Volunteer">Volunteer</option>
                    </select>
                  </td>
                  <td className="p-2">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDeleteUser(user.UniqueID)}
                        className="bg-red-500 text-white px-4 py-2 rounded-md text-sm sm:text-base hover:bg-red-700 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminUserManagement;
