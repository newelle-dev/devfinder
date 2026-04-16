import axios from "axios";

const BASE_URL = "https://api.github.com/users/";

export const GithubService = {
  getUser: async (username) => {
    if (!username) throw new Error("Username required");
    try {
      const headers = {};
      const token = import.meta.env.VITE_GITHUB_TOKEN;
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
      
      const response = await axios.get(`${BASE_URL}${username}`, { headers });
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) return null;
      const msg =
        error.response?.data?.message || error.message || "GitHub API request failed";
      throw new Error(msg);
    }
  },
};