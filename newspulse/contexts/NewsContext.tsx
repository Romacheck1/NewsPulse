"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { Article, Category } from "../lib/types";
import { fetchNews, searchNews } from "../lib/newsApi";

interface NewsContextType {
  articles: Article[];
  loading: boolean;
  error: string | null;
  category: Category;
  setCategory: (category: Category) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  fetchNews: () => Promise<void>;
  searchNews: (query: string) => Promise<void>;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export function NewsProvider({ children }: { children: React.ReactNode }) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [category, setCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const loadNews = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchNews(category);
      setArticles(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load news");
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }, [category]);

  const performSearch = useCallback(async (query: string) => {
    if (!query.trim()) {
      loadNews();
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const data = await searchNews(query, category);
      setArticles(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to search news");
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }, [category, loadNews]);

  useEffect(() => {
    if (searchQuery) {
      performSearch(searchQuery);
    } else {
      loadNews();
    }
  }, [category, searchQuery, performSearch, loadNews]);

  return (
    <NewsContext.Provider
      value={{
        articles,
        loading,
        error,
        category,
        setCategory,
        searchQuery,
        setSearchQuery,
        fetchNews: loadNews,
        searchNews: performSearch,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}

export function useNews() {
  const context = useContext(NewsContext);
  if (context === undefined) {
    throw new Error("useNews must be used within a NewsProvider");
  }
  return context;
}

