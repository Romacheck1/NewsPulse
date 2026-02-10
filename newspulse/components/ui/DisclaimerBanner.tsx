"use client";

import React, { useState } from "react";

export function DisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-yellow-50 border-b border-yellow-200">
      <div className="max-w-6xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs text-yellow-800 flex-1">
            <strong>Disclaimer:</strong> All news articles are fictional and for demonstration purposes only.
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="text-yellow-600 hover:text-yellow-800 text-sm font-semibold"
            aria-label="Dismiss"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}

