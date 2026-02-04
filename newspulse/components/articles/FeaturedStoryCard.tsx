import React from "react";
import { Card } from "../ui/Card";

export function FeaturedStoryCard() {
  return (
    <Card>
      <div className="h-48 bg-gray-200 rounded mb-4"></div>
      <h3 className="text-lg font-semibold mb-2">Featured Story Title</h3>
      <p className="text-sm text-gray-600 mb-2">Source Name</p>
      <p className="text-sm text-gray-500">Published date</p>
    </Card>
  );
}

