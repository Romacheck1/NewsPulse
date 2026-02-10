"use client";

import React from "react";
import { SavedHeader } from "./SavedHeader";
import { SavedArticleCard } from "../articles/SavedArticleCard";
import { useSavedArticles } from "../../hooks/useSavedArticles";
import { Skeleton } from "../ui/Skeleton";

export function SavedSection() {
  const { savedArticles, loading, deleteArticle } = useSavedArticles();

  const handleDelete = async (id: string) => {
    await deleteArticle(id);
  };

  if (loading && savedArticles.length === 0) {
    return (
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4">
          <SavedHeader />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (savedArticles.length === 0) {
    return (
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4">
          <SavedHeader />
          <p className="text-gray-500 text-center py-8">
            No saved articles yet. Save articles to view them here.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-6">
      <div className="max-w-6xl mx-auto px-4">
        <SavedHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {savedArticles.map((article) => (
            <SavedArticleCard
              key={article.id || article.title}
              article={article}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
