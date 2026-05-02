export interface Category {
  id: string;
  name: string;
  isPaid: boolean;
  sortOrder: number;
}

export const CATEGORIES: Category[] = [
  { id: "trending",      name: "Trending",      isPaid: false, sortOrder: 1 },
  { id: "seasonal",      name: "Seasonal",      isPaid: false, sortOrder: 2 },
  { id: "cheap",         name: "Cheap",         isPaid: false, sortOrder: 3 },
  { id: "outdoors",      name: "Outdoors",      isPaid: false, sortOrder: 4 },
  { id: "indoors",       name: "Indoors",       isPaid: false, sortOrder: 5 },
  { id: "food",          name: "Food",          isPaid: false, sortOrder: 6 },
  { id: "saved",         name: "Saved",         isPaid: false, sortOrder: 7 },
  { id: "ai-ideas",      name: "AI Ideas",      isPaid: true,  sortOrder: 8 },
  { id: "weather-aware", name: "Weather-Aware", isPaid: true,  sortOrder: 9 },
];

export const getCategoryById = (id: string): Category | undefined =>
  CATEGORIES.find((c) => c.id === id);
