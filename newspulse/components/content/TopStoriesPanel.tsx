"use client";

import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { FeaturedStoryCard } from "../articles/FeaturedStoryCard";
import { useNews } from "../../contexts/NewsContext";
import { useSavedArticles } from "../../hooks/useSavedArticles";
import { useToastContext } from "../../contexts/ToastContext";
import { Skeleton } from "../ui/Skeleton";

export function TopStoriesPanel() {
  const { articles, loading, error } = useNews();
  const { saveArticle } = useSavedArticles();
  const { showToast } = useToastContext();

  // Get top 3 stories (featured stories)
  const topStories = articles.slice(0, 3);

  const handleSave = async (article: typeof articles[0]) => {
    const success = await saveArticle(article);
    if (success) {
      showToast("Article saved successfully!", "success");
    } else {
      showToast("Article already saved or failed to save", "error");
    }
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

  if (error) {
    return (
      <div>
        <SectionHeader title="Top Stories" />
        <div className="text-center py-8">
          <p className="text-red-500 text-sm mb-2">Error loading stories</p>
          <p className="text-gray-400 text-xs">{error}</p>
        </div>
      </div>
    );
  }

  if (topStories.length === 0 && !loading) {
    return (
      <div>
        <SectionHeader title="Top Stories" />
        <div className="text-center py-8">
          <p className="text-gray-500 text-sm mb-2">No stories available</p>
          <p className="text-gray-400 text-xs">Try adjusting your search or category filter</p>
        </div>
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
