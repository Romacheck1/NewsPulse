import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-700">© 2024 NewsPulse</p>
          <p className="text-xs text-gray-500 italic">
            Disclaimer: All news articles displayed on this website are fictional and for demonstration purposes only. 
            They are not real news stories and should not be treated as factual information.
          </p>
        </div>
      </div>
    </footer>
  );
}

