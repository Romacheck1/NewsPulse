import { Article } from "./types";

const STORAGE_KEY = "newspulse_saved_articles";

// Client-side storage using localStorage
// In production, replace with real database calls

export async function getSavedArticles(): Promise<Article[]> {
  if (typeof window === "undefined") {
    return [];
  }
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch (error) {
    console.error("Error loading saved articles:", error);
    return [];
  }
}

export async function saveArticle(article: Article): Promise<{ ok: boolean }> {
  if (typeof window === "undefined") {
    return { ok: false };
  }
  
  try {
    const saved = await getSavedArticles();
    
    // Check if article already exists
    if (article.id && saved.some(a => a.id === article.id)) {
      return { ok: false };
    }
    
    // Generate ID if not present
    const articleToSave: Article = {
      ...article,
      id: article.id || `saved_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    };
    
    saved.push(articleToSave);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    return { ok: true };
  } catch (error) {
    console.error("Error saving article:", error);
    return { ok: false };
  }
}

export async function deleteArticle(id: string): Promise<{ ok: boolean }> {
  if (typeof window === "undefined") {
    return { ok: false };
  }
  
  try {
    const saved = await getSavedArticles();
    const filtered = saved.filter(article => article.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return { ok: true };
  } catch (error) {
    console.error("Error deleting article:", error);
    return { ok: false };
  }
}
