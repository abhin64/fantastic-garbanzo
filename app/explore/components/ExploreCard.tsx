"use client";

import type { Post } from "@/lib/data/explorePosts";
import Badge from "@/app/components/Badge";

interface Props {
  post: Post;
  isPaidUser: boolean;
  onClick: (post: Post) => void;
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden>
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
    </svg>
  );
}

export default function ExploreCard({ post, isPaidUser, onClick }: Props) {
  const isPaidPost = post.isAI || post.isWeatherAware;
  const isLocked = isPaidPost && !isPaidUser;

  return (
    <div
      onClick={() => !isLocked && onClick(post)}
      className={`break-inside-avoid mb-3 relative rounded-xl overflow-hidden bg-surface select-none transition-shadow duration-200 ${
        isLocked ? "cursor-default" : "cursor-pointer hover:shadow-card-hover"
      }`}
      style={{
        border: "1px solid var(--color-line)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 2px 10px rgba(0,0,0,0.04)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={post.image}
        alt={post.title}
        loading="lazy"
        className="w-full object-cover"
      />

      {/* Card body */}
      <div className="p-3 pt-2.5">
        <p className="text-label text-ink-tertiary uppercase tracking-widest mb-0.5">
          {post.categoryId.replace("-", " ")}
        </p>
        <h3 className="text-h4 text-ink leading-snug">{post.title}</h3>
        {post.location && (
          <p className="mt-1 flex items-center gap-1 text-caption text-ink-secondary">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            {post.location}
          </p>
        )}
      </div>

      {/* Free-user lock overlay */}
      {isLocked && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 rounded-xl"
          style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(6px)" }}
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center shadow-card"
            style={{ background: "var(--gradient-brand)" }}
          >
            <LockIcon />
          </div>
          <p className="text-label text-ink text-center uppercase tracking-widest leading-relaxed">
            Upgrade to unlock
          </p>
        </div>
      )}

      {/* Paid badge (visible when unlocked) */}
      {isPaidPost && !isLocked && (
        <div className="absolute top-2 right-2">
          <Badge variant="paid" />
        </div>
      )}
    </div>
  );
}
