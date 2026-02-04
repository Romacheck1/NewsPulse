import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { FeaturedStoryCard } from "../articles/FeaturedStoryCard";

export function TopStoriesPanel() {
  return (
    <div>
      <SectionHeader title="Top Stories" />
      <div className="space-y-4">
        <FeaturedStoryCard />
        <FeaturedStoryCard />
        <FeaturedStoryCard />
      </div>
    </div>
  );
}

