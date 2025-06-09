import axios from "axios";

const API_KEY = "rkkLCegX3eAk7KklKFVjlVgIrQwlVmMWdteeANNw_DE";
export const fetchImages = async (query, page, options = {}) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        client_id: API_KEY,
        query,
        page,
        per_page: 12,
      },
      signal: options.signal,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
// const response = await axios.get(`https://api.unsplash.com/search/photos`);
