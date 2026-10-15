export const categories = ['cakes', 'pies', 'sweets', 'puddings', 'brownies', 'other'] as const;
export const categoryLabels = {
  cakes: 'Cakes',
  pies: 'Pies',
  sweets: 'Sweets',
  puddings: 'Pudding',
  brownies: 'Brownie',
  other: 'Other',
};
export type Category = (typeof categories)[number];
export type Dessert = {
  id: string;
  name: string;
  description: string;
  category: Category;
  group?: 'celebration-cakes';
  coverImage: string;
  images?: string[];
  alt: string;
};
