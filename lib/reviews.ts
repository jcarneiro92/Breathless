import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";

export type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
};

const REVIEWS_PATH = path.join(process.cwd(), "data", "reviews.json");

export async function getReviews(): Promise<Review[]> {
  try {
    const raw = await readFile(REVIEWS_PATH, "utf-8");
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export async function addReview(review: Review): Promise<Review[]> {
  const dir = path.dirname(REVIEWS_PATH);
  await mkdir(dir, { recursive: true });
  const reviews = await getReviews();
  const next = [review, ...reviews];
  await writeFile(REVIEWS_PATH, JSON.stringify(next, null, 2), "utf-8");
  return next;
}

export async function deleteReview(id: string): Promise<Review[]> {
  const reviews = await getReviews();
  const next = reviews.filter((r) => r.id !== id);
  if (next.length === reviews.length) return reviews;
  const dir = path.dirname(REVIEWS_PATH);
  await mkdir(dir, { recursive: true });
  await writeFile(REVIEWS_PATH, JSON.stringify(next, null, 2), "utf-8");
  return next;
}
