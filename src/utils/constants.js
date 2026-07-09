export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const LOGO_URL = "https://via.placeholder.com/72x72.png?text=FS";


export const API_BASE_URL = process.env.API_BASE_URL ||
  (window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://favourstory-nodejs.onrender.com");