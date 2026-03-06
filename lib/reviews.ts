import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import { getStore } from "@netlify/blobs";

export type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
};

const REVIEWS_PATH = path.join(process.cwd(), "data", "reviews.json");
const BLOB_STORE_KEY = "reviews";

function isNetlifyBlobAvailable(): boolean {
  // Netlify sets this context env var when Blobs are wired for the runtime.
  return typeof process.env.NETLIFY_BLOBS_CONTEXT === "string";
}

async function getReviewsFromFile(): Promise<Review[]> {
  try {
    const raw = await readFile(REVIEWS_PATH, "utf-8");
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

async function getReviewsFromBlob(): Promise<Review[]> {
  const store = getStore("breathless-reviews");
  const data = await store.get(BLOB_STORE_KEY, { type: "json" });
  if (data == null) return [];
  return Array.isArray(data) ? data : [];
}

export async function getReviews(): Promise<Review[]> {
  if (isNetlifyBlobAvailable()) return getReviewsFromBlob();
  return getReviewsFromFile();
}

async function saveToFile(reviews: Review[]): Promise<void> {
  const dir = path.dirname(REVIEWS_PATH);
  await mkdir(dir, { recursive: true });
  await writeFile(REVIEWS_PATH, JSON.stringify(reviews, null, 2), "utf-8");
}

async function saveToBlob(reviews: Review[]): Promise<void> {
  const store = getStore("breathless-reviews");
  await store.setJSON(BLOB_STORE_KEY, reviews);
}

export async function addReview(review: Review): Promise<Review[]> {
  const reviews = await getReviews();
  const next = [review, ...reviews];
  if (isNetlifyBlobAvailable()) {
    await saveToBlob(next);
  } else {
    await saveToFile(next);
  }
  return next;
}

export async function deleteReview(id: string): Promise<Review[]> {
  const reviews = await getReviews();
  const next = reviews.filter((r) => r.id !== id);
  if (next.length === reviews.length) return reviews;
  if (isNetlifyBlobAvailable()) {
    await saveToBlob(next);
  } else {
    await saveToFile(next);
  }
  return next;
}
