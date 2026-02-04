"use client";

import React, { useState } from "react";
import { Input } from "../ui/Input";

export function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Input
        type="text"
        placeholder="Search for news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full"
      />
    </div>
  );
}

