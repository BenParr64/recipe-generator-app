interface PostProduct {
  name: string;
  type: string;
  regular_price: string;
  description: string;
  short_description: string;
  categories: {
    id: number;
  }[];
}

export type { PostProduct };
