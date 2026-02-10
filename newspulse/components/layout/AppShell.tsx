"use client";

import React from "react";
import { TopNav } from "./TopNav";
import { Footer } from "./Footer";
import { NewsProvider } from "../../contexts/NewsContext";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <NewsProvider>
      <div className="min-h-screen flex flex-col bg-[var(--color-light-purple)] text-gray-900">
        <TopNav />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </NewsProvider>
  );
}

