import React from "react";
import { Card } from "../ui/Card";
import { Article } from "../../lib/types";
import Image from "next/image";

interface SavedArticleCardProps {
  article: Article;
  onDelete?: (id: string) => void;
}

export function SavedArticleCard({ article, onDelete }: SavedArticleCardProps) {
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
    <Card>
      {article.imageUrl && (
        <div className="relative h-32 w-full rounded mb-2 overflow-hidden">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      <h3 className="font-semibold mb-2">
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
      <p className="text-sm text-gray-600 mb-2">{article.source || "Unknown source"}</p>
      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-500">{formatDate(article.publishedAt)}</p>
        {onDelete && article.id && (
          <button
            onClick={() => onDelete(article.id!)}
            className="text-red-600 hover:opacity-80 text-sm px-2 py-1"
            aria-label="Delete article"
          >
            Delete
          </button>
        )}
      </div>
    </Card>
  );
}
