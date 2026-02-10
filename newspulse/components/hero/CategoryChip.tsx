import React from "react";

interface CategoryChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function CategoryChip({ label, active = false, onClick }: CategoryChipProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
        active
          ? "bg-purple-600 text-black font-semibold"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
}

