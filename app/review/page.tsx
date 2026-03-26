"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { LanguageSelector } from "../components/LanguageSelector";
import { RulesDropdown } from "../components/RulesDropdown";
import { AuthButton } from "../components/AuthButton";
import { useSession } from "next-auth/react";

type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
};

async function fetchReviews(): Promise<Review[]> {
  const res = await fetch("/api/reviews");
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

export default function ReviewPage() {
  const { t } = useLanguage();
  const { data: session } = useSession();
  const isReviewOwner = (session as any)?.isReviewOwner === true;
  const [reviews, setReviews] = useState<Review[]>([]);
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchReviews().then((data) => {
      if (!cancelled) {
        setReviews(data);
        setMounted(true);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Prefill name with connected user name when available, but don't override manual edits
  useEffect(() => {
    if (!name && session?.user?.name) {
      setName(session.user.name);
    }
  }, [session, name]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || rating === 0 || !comment.trim()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          rating,
          comment: comment.trim(),
        }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      const next = await res.json();
      setReviews(next);
      setName("");
      setRating(0);
      setComment("");
    } catch {
      // could set error state here
    } finally {
      setSubmitting(false);
    }
  };

  const displayRating = hoverRating || rating;

  const handleDelete = async (id: string) => {
    if (!isReviewOwner) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/reviews?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      if (!res.ok) return;
      const next = await res.json();
      setReviews(next);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/image.png)" }}
      />
      <div className="fixed inset-0 -z-10 bg-zinc-950/80" />

      <nav className="relative z-10 flex flex-wrap items-center justify-center gap-4 px-4 py-4 sm:px-6 md:px-12 md:py-6 md:justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/KongIcon.png"
              alt="Breathless"
              width={280}
              height={80}
              className="h-10 w-auto sm:h-12 md:h-16"
            unoptimized
            />
          </Link>
          <Link
            href="https://discord.gg/2nQcNzc7qf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open VYKIX Discord in a new tab"
            className="rounded transition-opacity hover:opacity-80"
          >
            <Image
              src="/v.ico"
              alt="VYKIX Discord"
              width={32}
              height={32}
              className="h-8 w-8"
            />
          </Link>
        </div>
        <div className="-mt-1 flex flex-wrap items-center justify-center gap-3 text-sm sm:gap-4 md:ml-auto md:justify-end">
          <RulesDropdown />
          <Link
            href="/story"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-500"
          >
            {t.nav.story}
          </Link>
          <Link
            href="/review"
            className="text-sm font-medium text-amber-500"
          >
            {t.nav.review}
          </Link>
          <Link
            href="https://discord.gg/E9HXhsQssW"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-500"
          >
            {t.nav.discord}
          </Link>
          <Link
            href="https://breathless.tip4serv.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-amber-500"
          >
            {t.nav.donate}
          </Link>
          <LanguageSelector />
          <AuthButton />
        </div>
      </nav>
      {/* External partner links removed */}

      <main className="relative z-10 px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-2 text-center text-3xl font-bold text-amber-500 md:text-4xl">
            {t.review.title}
          </h1>
          <p className="mb-8 text-center text-zinc-400">
            {t.review.subtitle}
          </p>

          {!session && (
            <div className="mb-12 rounded-xl border border-zinc-800 bg-zinc-950/90 p-6 text-center text-zinc-300 shadow-2xl backdrop-blur-sm md:p-8">
              <p className="mb-4">
                You must be signed in with Discord to leave a review.
              </p>
              <div className="flex justify-center">
                <AuthButton />
              </div>
            </div>
          )}

          {session && (
            <form
              onSubmit={handleSubmit}
              className="mb-12 rounded-xl border border-amber-500/30 bg-zinc-950/90 p-6 shadow-2xl backdrop-blur-sm md:p-8"
            >
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                {t.review.formName}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={60}
                className="mb-4 w-full rounded-lg border border-zinc-600 bg-zinc-900/80 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                placeholder="Survivor name"
              />
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                {t.review.formRating}
              </label>
              <div className="mb-4 flex gap-1 text-2xl">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-transform hover:scale-110"
                    aria-label={`${star} star${star > 1 ? "s" : ""}`}
                  >
                    <span className={star <= displayRating ? "text-amber-500" : "text-zinc-500"}>
                      {star <= displayRating ? "★" : "☆"}
                    </span>
                  </button>
                ))}
              </div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                {t.review.formComment}
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                rows={4}
                maxLength={1000}
                className="mb-6 w-full rounded-lg border border-zinc-600 bg-zinc-900/80 px-4 py-2.5 text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                placeholder="Tell others about your experience..."
              />
              <button
                type="submit"
                disabled={submitting || !name.trim() || rating === 0 || !comment.trim()}
                className="w-full rounded-lg bg-amber-500 px-6 py-3 font-semibold text-zinc-950 transition-colors hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {t.review.submit}
              </button>
            </form>
          )}

          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-xl font-semibold text-white">
                {mounted && reviews.length === 0
                  ? t.review.noReviews
                  : `${t.review.reviewsCount} (${reviews.length})`}
              </h2>
            </div>
            {mounted && reviews.map((r) => (
              <article
                key={r.id}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 md:p-6"
              >
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <span className="font-medium text-white">{r.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-500">
                      {"★".repeat(r.rating)}
                      {"☆".repeat(5 - r.rating)}
                    </div>
                    {isReviewOwner && (
                      <button
                        type="button"
                        onClick={() => handleDelete(r.id)}
                        disabled={deletingId === r.id}
                        className="ml-2 rounded px-2 py-1 text-xs text-red-400 hover:bg-red-500/20 disabled:opacity-50"
                      >
                        {deletingId === r.id ? "…" : t.review.deleteReview}
                      </button>
                    )}
                  </div>
                </div>
                <p className="text-zinc-300 whitespace-pre-wrap">{r.comment}</p>
                <p className="mt-2 text-xs text-zinc-500">
                  {new Date(r.date).toLocaleDateString(undefined, {
                    dateStyle: "medium",
                  })}
                </p>
              </article>
            ))}
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-zinc-800/80 bg-zinc-950/60 px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
          <div className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/40 px-4 py-2">
            <span className="text-xs font-medium uppercase tracking-wide text-zinc-400">
              Partner
            </span>
            <Link
              href="https://www.vykix.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Vykix website in a new tab"
            >
              <Image
                src="/vykix.gif"
                alt="Vykix"
                width={120}
                height={40}
                className="h-8 w-auto rounded"
                unoptimized
              />
            </Link>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
            <span className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Breathless. {t.footer.rights}
            </span>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/" className="text-sm text-zinc-500 hover:text-amber-500">
                Home
              </Link>
              <Link href="/story" className="text-sm text-zinc-500 hover:text-amber-500">
                {t.footer.story}
              </Link>
              <Link href="/review" className="text-sm text-amber-500">
                {t.footer.review}
              </Link>
              <Link
                href="https://discord.gg/E9HXhsQssW"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 hover:text-amber-500"
              >
                {t.footer.discord}
              </Link>
              <Link
                href="https://breathless.tip4serv.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 hover:text-amber-500"
              >
                {t.footer.donate}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
