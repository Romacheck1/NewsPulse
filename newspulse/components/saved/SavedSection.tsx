import React from "react";
import { SavedHeader } from "./SavedHeader";
import { SavedArticleCard } from "../articles/SavedArticleCard";

export function SavedSection() {
  return (
    <section className="py-6">
      <div className="max-w-6xl mx-auto px-4">
        <SavedHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <SavedArticleCard />
          <SavedArticleCard />
          <SavedArticleCard />
        </div>
      </div>
    </section>
  );
}

