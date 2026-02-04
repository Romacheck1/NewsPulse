import { useState } from "react";

export function useSavedArticles() {
  const [savedArticles, setSavedArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  return {
    savedArticles,
    loading,
    saveArticle: async (article: unknown) => {},
    deleteArticle: async (id: string) => {},
    fetchSaved: async () => {},
  };
}

