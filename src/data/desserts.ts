import type { Dessert } from '@/types/dessert';

export const desserts: Dessert[] = [
  {
    id: 'lemon-cake',
    name: 'Lemon Cake',
    description: 'A ring cake finished with a white glaze, lemon zest and blueberries.',
    category: 'cakes',
    coverImage: '/images/cakes/big-cake-lemon.webp',
    alt: 'Glazed lemon ring cake decorated with a circle of blueberries and lemon zest',
  },
  {
    id: 'chocolate-topped-cake',
    name: 'Chocolate-Topped Cake',
    description: 'A golden ring cake covered with a generous chocolate topping.',
    category: 'cakes',
    coverImage: '/images/cakes/big-cake.webp',
    alt: 'Golden ring cake with chocolate topping dripping down the sides on a glass stand',
  },
  {
    id: 'toy-story-celebration-cake',
    name: 'Toy Story Celebration Cake',
    description: 'A colourful two-tier celebration cake with Toy Story character decorations.',
    category: 'cakes',
    coverImage: '/images/cakes/cake-toy-story.webp',
    alt: 'Two-tier Toy Story cake with character toppers, cow-print details and a blue base',
  },
  {
    id: 'mini-brownies',
    name: 'Mini Brownies',
    description:
      'Individual chocolate brownies baked in small trays and topped with chocolate pieces.',
    category: 'brownies',
    coverImage: '/images/brownies/mini-brownie.webp',
    alt: 'Individual chocolate brownies topped with chocolate pieces in rectangular foil trays',
  },
  {
    id: 'mini-lemon-cake',
    name: 'Mini Lemon Cake',
    description: 'An individual ring cake with white glaze, lemon zest and a blueberry finish.',
    category: 'cakes',
    coverImage: '/images/cakes/mini-cake-lemon.webp',
    alt: 'Mini lemon ring cake with white glaze, blueberries and lemon zest in a clear container',
  },
  {
    id: 'chocolate-topped-mini-cakes',
    name: 'Chocolate-Topped Mini Cakes',
    description: 'Individual golden cakes finished with chocolate topping and chocolate sprinkles.',
    category: 'cakes',
    coverImage: '/images/cakes/mini-cake.webp',
    alt: 'Two individual golden cakes with chocolate topping and sprinkles in clear containers',
  },
  {
    id: 'chocolate-chip-petits-fours',
    name: 'Chocolate Chip Petits Fours',
    description: 'Small piped biscuits decorated with chocolate chips, arranged on a baking tray.',
    category: 'other',
    coverImage: '/images/other/petit-four-french-sweet.webp',
    alt: 'Rows of small flower-shaped piped biscuits topped with chocolate chips on a baking tray',
  },
  {
    id: 'chocolate-chip-cookies-preparation',
    name: 'Chocolate Chip Cookies — In Preparation',
    description:
      'A behind-the-scenes look at shaped chocolate chip cookie dough, ready for the oven.',
    category: 'sweets',
    coverImage: '/images/sweets/pre-cook-cookies.webp',
    alt: 'Balls of unbaked cookie dough studded with chocolate chips on a lined baking tray',
  },
];
