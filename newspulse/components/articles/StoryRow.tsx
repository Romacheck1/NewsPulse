import React from "react";
import { Article } from "../../lib/types";
import Image from "next/image";

interface StoryRowProps {
  article: Article;
  onSave?: (article: Article) => void;
}

export function StoryRow({ article, onSave }: StoryRowProps) {
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
    <div className="flex gap-4 py-4 border-b">
      {article.imageUrl && (
        <div className="relative w-24 h-24 rounded flex-shrink-0 overflow-hidden">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>
      )}
      {!article.imageUrl && (
        <div className="w-24 h-24 bg-gray-200 rounded flex-shrink-0"></div>
      )}
      <div className="flex-1">
        <h3 className="font-semibold mb-1">
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
        <p className="text-sm text-gray-600">{article.source || "Unknown source"}</p>
        <div className="flex items-center justify-between mt-1">
          <p className="text-xs text-gray-500">{formatDate(article.publishedAt)}</p>
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
    </div>
  );
}
