import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${
      import.meta.env.VITE_TMDB_AUTH_BEARER
    }`,
  },
});

export default apiClient;
