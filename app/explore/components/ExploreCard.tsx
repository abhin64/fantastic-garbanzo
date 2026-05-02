"use client";

import type { Post } from "@/lib/data/explorePosts";
import Badge from "@/app/components/Badge";

interface Props {
  post: Post;
  onClick: (post: Post) => void;
}

export default function ExploreCard({ post, onClick }: Props) {
  const isPaid = post.isAI || post.isWeatherAware;

  return (
    <div
      onClick={() => onClick(post)}
      className="break-inside-avoid mb-3 cursor-pointer group relative rounded-xl overflow-hidden bg-surface select-none"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={post.image}
        alt={post.title}
        loading="lazy"
        className="w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />

      {isPaid && (
        <div className="absolute top-2 right-2">
          <Badge variant="paid" />
        </div>
      )}

      <div className="p-3 pt-2.5">
        <p className="text-label text-ink-disabled uppercase tracking-widest mb-0.5">
          {post.category}
        </p>
        <h3 className="text-h4 text-white leading-snug">
          {post.title}
        </h3>
        {post.location && (
          <p className="mt-1 flex items-center gap-1 text-caption text-ink-tertiary">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            {post.location}
          </p>
        )}
      </div>
    </div>
  );
}
