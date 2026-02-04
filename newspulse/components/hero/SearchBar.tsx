"use client";

import React, { useState } from "react";
import { Input } from "../ui/Input";

export function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-full flex items-center overflow-hidden shadow-md border border-white">
      <input
        type="text"
        placeholder="Search for news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 border-0 bg-transparent text-[var(--color-bright-purple)] h-12 px-4 focus:outline-none"
      />
      <button
        type="button"
        className="bg-[var(--color-bright-purple)] text-white rounded-full px-6 h-12 flex-shrink-0 hover:opacity-90 transition-opacity flex items-center gap-2"
        aria-label="Search"
      >
        <span className="text-sm font-medium">Search</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
}

