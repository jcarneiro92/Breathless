import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const adminKey = request.headers.get("X-Admin-Key");
  const expected = process.env.REVIEW_ADMIN_SECRET;
  if (!expected || adminKey !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ ok: true });
}
