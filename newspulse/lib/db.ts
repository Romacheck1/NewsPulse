// Stub implementation - no real DB logic yet
export async function getSavedArticles() {
  return [];
}

export async function saveArticle(article: unknown) {
  return { ok: true };
}

export async function deleteArticle(id: string) {
  return { ok: true };
}

