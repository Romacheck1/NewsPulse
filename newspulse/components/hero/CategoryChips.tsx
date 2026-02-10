"use client";

import { CategoryChip } from "./CategoryChip";
import { useNews } from "../../contexts/NewsContext";
import { Category } from "../../lib/types";

export function CategoryChips() {
  const categories: Category[] = [
    "All",
    "Technology",
    "Business",
    "Science",
    "Health",
    "Sports",
  ];

  const { category, setCategory } = useNews();

  return (
    <div className="w-full overflow-x-auto bg-[var(--color-light-purple)] px-4 py-2 -mt-px">
      <div className="max-w-6xl mx-auto flex justify-center gap-2 whitespace-nowrap">
        {categories.map((cat) => (
          <CategoryChip
            key={cat}
            label={cat}
            active={cat === category}
            onClick={() => setCategory(cat)}
          />
        ))}
      </div>
    </div>
  );
}
