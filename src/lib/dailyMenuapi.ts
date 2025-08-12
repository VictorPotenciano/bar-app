import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getDailyMenu() {
  try {
    const response = await api.get("/dailyMenu");
    return response.data;
  } catch (error) {
    if (!axios.isCancel(error)) {
      console.error("Error fetching daily menu:", error);
    }
    return [];
  }
}
