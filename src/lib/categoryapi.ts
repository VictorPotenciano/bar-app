import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getCategoriesWithDishes() {
  try {
    const response = await api.get("/categories/dishes");
    return response.data;
  } catch (error) {
    if (!axios.isCancel(error)) {
      console.error("Error fetching categories:", error);
    }
    return [];
  }
}
