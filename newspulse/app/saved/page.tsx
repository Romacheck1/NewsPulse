"use client";

import React from "react";
import { SavedSection } from "../../components/saved/SavedSection";
import { SavedHeader } from "../../components/saved/SavedHeader";

export default function SavedPage() {
  return (
    <div className="py-6">
      <div className="max-w-6xl mx-auto px-4">
        <SavedHeader />
        <SavedSection />
      </div>
    </div>
  );
}

