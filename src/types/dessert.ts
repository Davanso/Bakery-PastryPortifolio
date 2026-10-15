export const categories = ['brownies', 'cakes', 'puddings', 'sweets', 'other'] as const;
export type Category = (typeof categories)[number];
export type Dessert = {
  id: string;
  name: string;
  description: string;
  category: Category;
  coverImage: string;
  images?: string[];
  alt: string;
};
