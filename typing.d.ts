export interface Dish {
  id: number;
  name: string;
  description: string;
  category: Category;
  price: number;
  imageUrl?: string;
  ingredients: string[];
}

export interface Category {
  id: number;
  name: string;
  dishes: Dish[];
}

export interface DailyMenu {
  id: number;
  name: string;
  date: string;
  description?: string;
  price: number;
  dishes: Dish[];
}
