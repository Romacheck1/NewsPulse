import React from "react";

export function StoryRow() {
  return (
    <div className="flex gap-4 py-4 border-b">
      <div className="w-24 h-24 bg-gray-200 rounded flex-shrink-0"></div>
      <div className="flex-1">
        <h3 className="font-semibold mb-1">Story Title</h3>
        <p className="text-sm text-gray-600">Source Name</p>
        <p className="text-xs text-gray-500 mt-1">Published date</p>
      </div>
    </div>
  );
}

