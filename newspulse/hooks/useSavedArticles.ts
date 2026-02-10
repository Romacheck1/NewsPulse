"use client";

import { useState, useEffect, useCallback } from "react";
import { Article } from "../lib/types";
import { getSavedArticles, saveArticle, deleteArticle } from "../lib/db";

export function useSavedArticles() {
  const [savedArticles, setSavedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSaved = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const articles = await getSavedArticles();
      setSavedArticles(articles);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load saved articles");
      setSavedArticles([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSaveArticle = useCallback(async (article: Article) => {
    setLoading(true);
    setError(null);
    try {
      const result = await saveArticle(article);
      if (result.ok) {
        await fetchSaved();
        return true;
      } else {
        setError("Article already saved");
        return false;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save article");
      return false;
    } finally {
      setLoading(false);
    }
  }, [fetchSaved]);

  const handleDeleteArticle = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const result = await deleteArticle(id);
      if (result.ok) {
        await fetchSaved();
        return true;
      } else {
        setError("Failed to delete article");
        return false;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete article");
      return false;
    } finally {
      setLoading(false);
    }
  }, [fetchSaved]);

  useEffect(() => {
    fetchSaved();
  }, [fetchSaved]);

  return {
    savedArticles,
    loading,
    error,
    saveArticle: handleSaveArticle,
    deleteArticle: handleDeleteArticle,
    fetchSaved,
  };
}
