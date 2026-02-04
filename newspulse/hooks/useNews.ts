import { useState } from "react";

export function useNews() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  return {
    articles,
    loading,
    fetchNews: async () => {},
    searchNews: async (query: string) => {},
  };
}

