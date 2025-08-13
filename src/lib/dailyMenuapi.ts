import axios from "axios";
import { DailyMenu } from "../../typing";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getDailyMenu(): Promise<DailyMenu> {
  try {
    const response = await api.get("/dailyMenu");
    return response.data;
  } catch (error) {
    console.error("Error fetching daily menu:", error);
    return {
      id: 0,
      name: "Menú no disponible",
      date: new Date().toISOString(),
      price: 0,
      dishes: [],
    };
  }
}
