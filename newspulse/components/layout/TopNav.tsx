"use client";

import Image from "next/image";
import Link from "next/link";

export function TopNav() {
  return (
    <nav className="bg-[var(--color-light-purple)] border-b border-[var(--color-purple-pain)]/60">
      <div className="max-w-6xl mx-auto h-16 px-5 flex items-center justify-between">
        <Link href="/" className="-ml-20 mt-2">
          <Image
            src="/LogoMax.png"
            alt="NewsPulse"
            width={300}
            height={300}
            priority
            className="h-50 w-auto"
          />
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/saved" className="text-sm font-medium text-[var(--color-purple-pain)] hover:underline">
            Saved
          </Link>
          <Link href="/about" className="text-sm font-medium text-[var(--color-purple-pain)] hover:underline">
            About
          </Link>
          <button 
            onClick={() => alert("Login functionality coming soon!")}
            className="h-9 px-4 rounded-full bg-[var(--color-purple-pain)] text-black text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}