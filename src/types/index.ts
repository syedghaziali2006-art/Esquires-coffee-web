export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'specialty' | 'savoury' | 'dessert';
  subCategory?: string;
  description: string;
  price?: string;
  image?: string;
  badge?: string;
  highlight?: boolean;
}

export interface ReviewTheme {
  id: string;
  title: string;
  quote: string;
  authorNote: string;
  rating: number;
}

export interface CraftStep {
  id: string;
  stepNumber: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
}

export interface CoffeeCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  notes: string[];
  idealFor: string;
  image: string;
  accent: string;
}
