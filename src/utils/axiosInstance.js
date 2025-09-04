import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://chotto-shopno-amdbaac6esa8ecc0.centralindia-01.azurewebsites.net/api/v1", // Change this to match your backend API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;