"use client";

import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { ArticleRow } from "../articles/ArticleRow";
import { useNews } from "../../contexts/NewsContext";
import { useSavedArticles } from "../../hooks/useSavedArticles";
import { Skeleton } from "../ui/Skeleton";

export function LatestArticlesPanel() {
  const { articles, loading } = useNews();
  const { saveArticle } = useSavedArticles();

  // Get articles after the first 3 (which are featured)
  const latestArticles = articles.slice(3);

  const handleSave = async (article: typeof articles[0]) => {
    await saveArticle(article);
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

  if (latestArticles.length === 0) {
    return (
      <div>
        <SectionHeader title="Latest Articles" />
        <p className="text-gray-500 text-sm">No articles available</p>
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
