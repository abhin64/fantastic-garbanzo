"use client";

import { useState } from "react";
import { explorePosts, CATEGORIES, type Post } from "@/lib/data/explorePosts";
import ExploreCard from "./ExploreCard";
import PostViewer from "./PostViewer";
import SectionHeader from "@/app/components/SectionHeader";

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
      <div className="space-y-10">
        {CATEGORIES.map((category) => {
          const posts = postsByCategory[category];
          if (!posts.length) return null;

          const shown = posts.slice(0, visibleCount[category]);
          const hasMore = shown.length < posts.length;
          const isPaidCategory = category === "AI Ideas" || category === "Weather-Aware";

          return (
            <section key={category}>
              <SectionHeader
                title={category}
                count={posts.length}
                isPaid={isPaidCategory}
              />

              <div className="columns-2 md:columns-3 gap-3">
                {shown.map((post) => (
                  <ExploreCard key={post.id} post={post} onClick={setActivePost} />
                ))}
              </div>

              {hasMore && (
                <button
                  onClick={() =>
                    setVisibleCount((prev) => ({
                      ...prev,
                      [category]: prev[category] + LOAD_MORE_STEP,
                    }))
                  }
                  className="mt-3 w-full py-2.5 rounded-xl text-label text-ink-secondary uppercase tracking-widest transition-colors duration-150 hover:bg-surface"
                  style={{ border: "1px solid var(--color-line-strong)" }}
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
