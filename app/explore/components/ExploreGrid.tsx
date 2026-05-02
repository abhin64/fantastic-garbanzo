"use client";

import { useState } from "react";
import { explorePosts, CATEGORIES, type Post } from "@/lib/data/explorePosts";
import ExploreCard from "./ExploreCard";
import PostViewer from "./PostViewer";

const INITIAL_COUNT = 6;
const LOAD_MORE_STEP = 4;

export default function ExploreGrid() {
  const [visibleCount, setVisibleCount] = useState<Record<string, number>>(
    Object.fromEntries(CATEGORIES.map((c) => [c, INITIAL_COUNT]))
  );
  const [activePost, setActivePost] = useState<Post | null>(null);

  const postsByCategory = Object.fromEntries(
    CATEGORIES.map((cat) => [cat, explorePosts.filter((p) => p.category === cat)])
  );

  return (
    <>
      <div className="space-y-12">
        {CATEGORIES.map((category) => {
          const posts = postsByCategory[category];
          if (!posts.length) return null;

          const shown = posts.slice(0, visibleCount[category]);
          const hasMore = shown.length < posts.length;
          const isPaidCategory = category === "AI Ideas" || category === "Weather-Aware";

          return (
            <section key={category}>
              {/* Section header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <h2 className="text-base font-semibold text-white tracking-tight">
                    {category}
                  </h2>
                  {isPaidCategory && (
                    <span className="inline-flex items-center bg-amber-400/10 border border-amber-400/25 text-amber-400 text-[9px] font-bold px-2 py-0.5 rounded-full tracking-widest uppercase">
                      Premium
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-neutral-600">
                  {posts.length} ideas
                </span>
              </div>

              {/* Masonry grid */}
              <div className="columns-2 md:columns-3 gap-3">
                {shown.map((post) => (
                  <ExploreCard key={post.id} post={post} onClick={setActivePost} />
                ))}
              </div>

              {/* Load more */}
              {hasMore && (
                <button
                  onClick={() =>
                    setVisibleCount((prev) => ({
                      ...prev,
                      [category]: prev[category] + LOAD_MORE_STEP,
                    }))
                  }
                  className="mt-4 w-full py-2.5 rounded-xl border border-neutral-800 text-neutral-500 text-xs font-medium hover:border-neutral-600 hover:text-neutral-300 transition-colors"
                >
                  Load more
                </button>
              )}
            </section>
          );
        })}
      </div>

      {activePost && (
        <PostViewer
          initialPost={activePost}
          allPosts={explorePosts}
          onClose={() => setActivePost(null)}
        />
      )}
    </>
  );
}
