"use client";

import { useState } from "react";
import { CategoryChip } from "./CategoryChip";

export function CategoryChips() {
  const categories = [
    "All",
    "Technology",
    "Business",
    "Science",
    "Health",
    "Sports",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="w-full overflow-x-auto bg-[var(--color-bright-purple)] px-4 py-2 -mt-px">
      <div className="max-w-6xl mx-auto flex justify-center gap-2 whitespace-nowrap">
        {categories.map((category) => (
          <CategoryChip
            key={category}
            label={category}
            active={category === activeCategory}
            onClick={() => setActiveCategory(category)}
          />
        ))}
      </div>
    </div>
  );
}
