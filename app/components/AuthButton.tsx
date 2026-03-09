"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <button
        className="rounded-lg border border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-400"
        disabled
      >
        Connecting...
      </button>
    );
  }

  if (!session) {
    return (
      <button
        onClick={() => signIn("discord")}
        className="rounded-lg border border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors hover:border-amber-500 hover:text-amber-400"
      >
        Sign in with Discord
      </button>
    );
  }

  const isOwner = (session as any)?.isReviewOwner === true;
  const roleLabel = isOwner ? "Owner" : "Member";

  return (
    <div className="flex items-center gap-2">
      <span className="hidden text-xs text-zinc-400 sm:inline">
        {session.user?.name} · {roleLabel}
      </span>
      <button
        onClick={() => signOut()}
        className="rounded-lg border border-zinc-700 px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors hover:border-red-500 hover:text-red-400"
      >
        Sign out
      </button>
    </div>
  );
}

