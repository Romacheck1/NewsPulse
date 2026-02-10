"use client";

import React from "react";
import { SavedHeader } from "./SavedHeader";
import { SavedArticleCard } from "../articles/SavedArticleCard";
import { useSavedArticles } from "../../hooks/useSavedArticles";
import { useToastContext } from "../../contexts/ToastContext";
import { Skeleton } from "../ui/Skeleton";

export function SavedSection() {
  const { savedArticles, loading, deleteArticle } = useSavedArticles();
  const { showToast } = useToastContext();

  const handleDelete = async (id: string) => {
    const success = await deleteArticle(id);
    if (success) {
      showToast("Article deleted successfully!", "success");
    } else {
      showToast("Failed to delete article", "error");
    }
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

  if (savedArticles.length === 0 && !loading) {
    return (
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4">
          <SavedHeader />
          <div className="text-center py-12">
            <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </div>
            <p className="text-gray-600 text-lg font-medium mb-2">No saved articles yet</p>
            <p className="text-gray-500 text-sm">
              Click the "Save" button on any article to save it for later reading.
            </p>
          </div>
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
