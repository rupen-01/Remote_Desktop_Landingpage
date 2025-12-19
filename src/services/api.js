import axios from "axios";

const API = axios.create({
  baseURL: "https://remote-desktop-landingpage-backend.onrender.com/api/ads",
  // baseURL: "http://localhost:5000/api/ads",
});


export const getBanners = async () => {
  return API.get("/");
};

export const createBanner = async (formData) => {
  return API.post("/create", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const deleteBanner = async (id) => {
  return API.delete(`/${id}`);
};
