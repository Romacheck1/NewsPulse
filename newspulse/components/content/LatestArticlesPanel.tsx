"use client";

import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { ArticleRow } from "../articles/ArticleRow";
import { useNews } from "../../contexts/NewsContext";
import { useSavedArticles } from "../../hooks/useSavedArticles";
import { useToastContext } from "../../contexts/ToastContext";
import { Skeleton } from "../ui/Skeleton";

export function LatestArticlesPanel() {
  const { articles, loading, error } = useNews();
  const { saveArticle } = useSavedArticles();
  const { showToast } = useToastContext();

  // Get articles after the first 3 (which are featured)
  const latestArticles = articles.slice(3);

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
        <SectionHeader title="Latest Articles" />
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <SectionHeader title="Latest Articles" />
        <div className="text-center py-8">
          <p className="text-red-500 text-sm mb-2">Error loading articles</p>
          <p className="text-gray-400 text-xs">{error}</p>
        </div>
      </div>
    );
  }

  if (latestArticles.length === 0 && !loading) {
    return (
      <div>
        <SectionHeader title="Latest Articles" />
        <div className="text-center py-8">
          <p className="text-gray-500 text-sm mb-2">No articles available</p>
          <p className="text-gray-400 text-xs">Try adjusting your search or category filter</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <SectionHeader title="Latest Articles" />
      <div className="space-y-4">
        {latestArticles.map((article) => (
          <ArticleRow
            key={article.id || article.title}
            article={article}
            onSave={handleSave}
          />
        ))}
      </div>
    </div>
  );
}
