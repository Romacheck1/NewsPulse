import { NextRequest, NextResponse } from "next/server";
import { getSavedArticles, saveArticle, deleteArticle } from "@/lib/db";
import { Article } from "@/lib/types";

export async function GET() {
  try {
    const articles = await getSavedArticles();
    return NextResponse.json({ ok: true, items: articles });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "Failed to fetch saved articles" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const article = body as Article;
    
    const result = await saveArticle(article);
    if (result.ok) {
      return NextResponse.json({ ok: true });
    } else {
      return NextResponse.json(
        { ok: false, error: "Article already saved" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "Failed to save article" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");
    
    if (!id) {
      return NextResponse.json(
        { ok: false, error: "Article ID required" },
        { status: 400 }
      );
    }
    
    const result = await deleteArticle(id);
    if (result.ok) {
      return NextResponse.json({ ok: true });
    } else {
      return NextResponse.json(
        { ok: false, error: "Failed to delete article" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "Failed to delete article" },
      { status: 500 }
    );
  }
}
