import React from "react";
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

  return (
    <div className="flex gap-2 overflow-x-auto whitespace-nowrap">
      {categories.map((category) => (
        <CategoryChip key={category} label={category} active={category === "All"} />
      ))}
    </div>
  );
}

