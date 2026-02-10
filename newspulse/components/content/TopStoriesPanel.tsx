"use client";

import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { FeaturedStoryCard } from "../articles/FeaturedStoryCard";
import { useNews } from "../../contexts/NewsContext";
import { useSavedArticles } from "../../hooks/useSavedArticles";
import { Skeleton } from "../ui/Skeleton";

export function TopStoriesPanel() {
  const { articles, loading } = useNews();
  const { saveArticle } = useSavedArticles();

  // Get top 3 stories (featured stories)
  const topStories = articles.slice(0, 3);

  const handleSave = async (article: typeof articles[0]) => {
    await saveArticle(article);
  };

  if (loading && articles.length === 0) {
    return (
      <div>
        <SectionHeader title="Top Stories" />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (topStories.length === 0) {
    return (
      <div>
        <SectionHeader title="Top Stories" />
        <p className="text-gray-500 text-sm">No stories available</p>
      </div>
    );
  }

  return (
    <div>
      <SectionHeader title="Top Stories" />
      <div className="space-y-4">
        {topStories.map((article) => (
          <FeaturedStoryCard
            key={article.id || article.title}
            article={article}
            onSave={handleSave}
          />
        ))}
      </div>
    </div>
  );
}
