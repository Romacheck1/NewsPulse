import React from "react";

interface CategoryChipProps {
  label: string;
  active?: boolean;
}

export function CategoryChip({ label, active = false }: CategoryChipProps) {
  return (
    <button
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
        active
          ? "bg-purple-600 text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
}

