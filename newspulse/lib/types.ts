export type Article = {
  id?: string;
  title: string;
  source?: string;
  url?: string;
  imageUrl?: string;
  publishedAt?: string;
  category?: string;
  description?: string;
};

export type Category = "All" | "Technology" | "Business" | "Science" | "Health" | "Sports";

