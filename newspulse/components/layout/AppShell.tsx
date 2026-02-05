import React from "react";
import { TopNav } from "./TopNav";
import { Footer } from "./Footer";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-light-purple)] text-slate-100">
      <TopNav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

