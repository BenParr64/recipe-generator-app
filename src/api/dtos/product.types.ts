export type Products = Product[]

export interface Product {
  id: number;
  name: string;
  type: string;
  price: number;
  description: string;
  extract: number;
}