import React from "react";
import { Article } from "../../lib/types";

interface ArticleRowProps {
  article: Article;
  onSave?: (article: Article) => void;
}

export function ArticleRow({ article, onSave }: ArticleRowProps) {
  const formatDate = (dateString?: string) => {
    if (!dateString) return "Date unknown";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "Date unknown";
    }
  };

  return (
    <div className="py-3 border-b">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <h3 className="font-medium mb-1">
            {article.url ? (
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-bright-purple)] transition-colors"
              >
                {article.title}
              </a>
            ) : (
              article.title
            )}
          </h3>
          <p className="text-sm text-gray-600">
            {article.source || "Unknown source"} • {formatDate(article.publishedAt)}
          </p>
        </div>
        {onSave && (
          <button
            onClick={() => onSave(article)}
            className="text-[var(--color-bright-purple)] hover:opacity-80 text-sm px-2 py-1"
            aria-label="Save article"
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
}
