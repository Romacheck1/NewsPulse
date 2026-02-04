"use client";

import Image from "next/image";

export function TopNav() {
  return (
    <nav className="bg-[var(--color-light-purple)] border-b border-[var(--color-purple-pain)]/60">
      <div className="max-w-6xl mx-auto h-16 px-5 flex items-center justify-between">
        <button onClick={() => window.location.reload()} className="-ml-20 mt-2">
          <Image
            src="/LogoMax.png"
            alt="NewsPulse"
            width={300}
            height={300}
            priority
            className="h-50 w-auto"
          />
        </button>

        <div className="flex items-center gap-6">
          <a href="/saved" className="text-sm font-medium text-[var(--color-purple-pain)] hover:underline">
            Saved
          </a>
          <a href="/about" className="text-sm font-medium text-[var(--color-purple-pain)] hover:underline">
            About
          </a>
          <button className="h-9 px-4 rounded-full bg-[var(--color-purple-pain)] text-white text-sm font-medium hover:opacity-90">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}