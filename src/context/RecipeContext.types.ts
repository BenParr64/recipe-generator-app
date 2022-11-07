import { Products } from "../api/dtos/product.types";

interface RecipeContent {
    name?: string;
    ingredients?: ProductLine[];
}

interface ProductLine {
  name: string;
  id: number;
  quantity: number;
  price: number;
  ingredientType: "malt" | "hop"
}

export type { RecipeContent, ProductLine };
