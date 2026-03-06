import { NextResponse } from "next/server";

function normalize(s: string | null | undefined): string {
  return (s ?? "").trim();
}

export async function GET(request: Request) {
  const adminKey = normalize(request.headers.get("X-Admin-Key"));
  const expected = normalize(process.env.REVIEW_ADMIN_SECRET);
  if (!expected || adminKey !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ ok: true });
}
