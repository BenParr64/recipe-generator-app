interface PostProduct {
  name: string;
  regular_price: string;
  description: string;
}

interface PostProductResult {
  permalink: string;
}


export type { PostProduct, PostProductResult };
