import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { ArticleRow } from "../articles/ArticleRow";

export function LatestArticlesPanel() {
  return (
    <div>
      <SectionHeader title="Latest Articles" />
      <div className="space-y-4">
        <ArticleRow />
        <ArticleRow />
        <ArticleRow />
        <ArticleRow />
      </div>
    </div>
  );
}

