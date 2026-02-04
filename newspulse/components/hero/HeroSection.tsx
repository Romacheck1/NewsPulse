import React from "react";
import { HeroHeadline } from "./HeroHeadline";
import { HeroSubhead } from "./HeroSubhead";
import { SearchBar } from "./SearchBar";
import { CategoryChips } from "./CategoryChips";

export function HeroSection() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <HeroHeadline />
          <HeroSubhead />
          <SearchBar />
          <CategoryChips />
        </div>
      </div>
    </section>
  );
}

