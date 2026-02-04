import React from "react";
import { Card } from "../ui/Card";

export function SavedArticleCard() {
  return (
    <Card>
      <h3 className="font-semibold mb-2">Saved Article Title</h3>
      <p className="text-sm text-gray-600 mb-2">Source Name</p>
      <p className="text-xs text-gray-500">Saved date</p>
    </Card>
  );
}

