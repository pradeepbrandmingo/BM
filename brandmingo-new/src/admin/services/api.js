// import axios from "axios";

// // ===============================
// // AXIOS INSTANCE
// // ===============================
// const API = axios.create({
//   baseURL: `${import.meta.env.VITE_API_URL}/api`,
//   withCredentials: true,
// });

// // ===============================
// // REQUEST INTERCEPTOR
// // AUTO SEND TOKEN
// // ===============================
// API.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("adminToken");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },

//   (error) => {
//     return Promise.reject(error);
//   },
// );

// export default API;

import axios from "axios";

// ===============================
// AXIOS INSTANCE
// ===============================
const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  withCredentials: true,
});

// ===============================
// REQUEST INTERCEPTOR
// AUTO SEND TOKEN
// ===============================
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("adminToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  },
);

// ===============================
// RESPONSE INTERCEPTOR
// AUTO LOGOUT IF TOKEN INVALID
// ===============================
API.interceptors.response.use(
  (response) => response,

  (error) => {
    // TOKEN INVALID / EXPIRED
    if (error.response?.status === 401) {
      // REMOVE TOKEN
      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminInfo");

      // REDIRECT LOGIN
      window.location.href = "/admin/login";
    }

    return Promise.reject(error);
  },
);

export default API;
