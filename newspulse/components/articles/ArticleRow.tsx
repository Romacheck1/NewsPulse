import React from "react";

export function ArticleRow() {
  return (
    <div className="py-3 border-b">
      <h3 className="font-medium mb-1">Article Title</h3>
      <p className="text-sm text-gray-600">Source Name • Published date</p>
    </div>
  );
}

