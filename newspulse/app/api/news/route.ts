import { NextRequest, NextResponse } from "next/server";
import { fetchNews, searchNews } from "@/lib/newsApi";
import { Category } from "@/lib/types";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("q");
    const category = (searchParams.get("category") || "All") as Category;

    let articles;
    if (query) {
      articles = await searchNews(query, category);
    } else {
      articles = await fetchNews(category);
    }

    return NextResponse.json({ ok: true, articles });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
