"use client";

import React from "react";
import { TopStoriesPanel } from "./TopStoriesPanel";
import { LatestArticlesPanel } from "./LatestArticlesPanel";

export function ContentGrid() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopStoriesPanel />
        <LatestArticlesPanel />
      </div>
    </div>
  );
}
