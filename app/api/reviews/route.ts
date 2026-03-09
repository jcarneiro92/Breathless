import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getReviews, addReview, deleteReview, type Review } from "@/lib/reviews";

export async function GET() {
  const reviews = await getReviews();
  return NextResponse.json(reviews);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, rating, comment } = body;
    if (
      typeof name !== "string" ||
      !name.trim() ||
      typeof rating !== "number" ||
      rating < 1 ||
      rating > 5 ||
      typeof comment !== "string" ||
      !comment.trim()
    ) {
      return NextResponse.json(
        { error: "Invalid name, rating (1–5), or comment" },
        { status: 400 }
      );
    }
    const review: Review = {
      id: crypto.randomUUID(),
      name: name.trim().slice(0, 60),
      rating: Math.floor(rating),
      comment: comment.trim().slice(0, 1000),
      date: new Date().toISOString(),
    };
    const reviews = await addReview(review);
    return NextResponse.json(reviews);
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to save review" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const session = await getServerSession(authOptions);
  const isReviewOwner = (session as any)?.isReviewOwner === true;
  if (!isReviewOwner) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id || typeof id !== "string") {
    return NextResponse.json(
      { error: "Missing review id" },
      { status: 400 }
    );
  }
  try {
    const reviews = await deleteReview(id);
    return NextResponse.json(reviews);
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to delete review" },
      { status: 500 }
    );
  }
}
