"use client";

import Image from "next/image";

export function TopNav() {
  return (
    <nav className="bg-[var(--color-light-purple)] border-b border-[var(--color-purple-pain)]">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-start">
        <button onClick={() => window.location.reload()} className="-ml-30 mt-3">
          <Image
            src="/logo.png"
            alt="NewsPulse"
            width={300}
            height={300}
            priority
          />
        </button>
      </div>
    </nav>
  );
}