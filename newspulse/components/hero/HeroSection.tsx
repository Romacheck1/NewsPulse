import React from "react";
import { HeroHeadline } from "./HeroHeadline";
import { HeroSubhead } from "./HeroSubhead";
import { SearchBar } from "./SearchBar";
import { HeroTriangle } from "./HeroTriangle";
import { CategoryChips } from "./CategoryChips";

export function HeroSection() {
  return (
    <section
      className="pt-20 pb-0 relative"
      style={{
        background: `linear-gradient(to right, var(--color-freeze-purple), var(--color-light-purple))`,
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center pb-0">
          <div className="flex flex-col items-center gap-3">
            <HeroHeadline />
            <HeroSubhead />
            <SearchBar />
          </div>
        </div>
      </div>
      <div className="w-full">
        <HeroTriangle />
        <CategoryChips />
      </div>
    </section>
  );
}
