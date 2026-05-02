"use client";

import { useState } from "react";
import { explorePosts, type Post } from "@/lib/data/explorePosts";
import { CATEGORIES } from "@/lib/data/categories";
import ExploreCard from "./ExploreCard";
import PostViewer from "./PostViewer";
import SectionHeader from "@/app/components/SectionHeader";

// ── Simulated auth state ──────────────────────────────────
const IS_PAID_USER = false;

// ── Sort posts within a category ──────────────────────────
// Order: isAI last → isWeatherAware second-to-last → alphabetical
function sortPosts(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => {
    if (a.isAI !== b.isAI) return a.isAI ? 1 : -1;
    if (a.isWeatherAware !== b.isWeatherAware) return a.isWeatherAware ? 1 : -1;
    return a.title.localeCompare(b.title);
  });
}

const INITIAL_COUNT = 6;
const LOAD_MORE_STEP = 4;

export default function ExploreGrid() {
  const [visibleCount, setVisibleCount] = useState<Record<string, number>>(
    Object.fromEntries(CATEGORIES.map((c) => [c.id, INITIAL_COUNT]))
  );
  const [activePost, setActivePost] = useState<Post | null>(null);

  // Categories sorted by sortOrder (defined in categories.ts)
  const sortedCategories = [...CATEGORIES].sort((a, b) => a.sortOrder - b.sortOrder);

  // Group + sort posts per category
  const postsByCategory = new Map(
    sortedCategories.map((cat) => [
      cat.id,
      sortPosts(explorePosts.filter((p) => p.categoryId === cat.id)),
    ])
  );

  return (
    <>
      <div className="space-y-10">
        {sortedCategories.map((category) => {
          const posts = postsByCategory.get(category.id) ?? [];
          if (!posts.length) return null;

          const shown = posts.slice(0, visibleCount[category.id]);
          const hasMore = shown.length < posts.length;

          return (
            <section key={category.id}>
              <SectionHeader
                title={category.name}
                count={posts.length}
                isPaid={category.isPaid}
              />

              <div className="columns-2 md:columns-3 gap-3">
                {shown.map((post) => (
                  <ExploreCard
                    key={post.id}
                    post={post}
                    isPaidUser={IS_PAID_USER}
                    onClick={setActivePost}
                  />
                ))}
              </div>

              {hasMore && (
                <button
                  onClick={() =>
                    setVisibleCount((prev) => ({
                      ...prev,
                      [category.id]: prev[category.id] + LOAD_MORE_STEP,
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
          isPaidUser={IS_PAID_USER}
          onClose={() => setActivePost(null)}
        />
      )}
    </>
  );
}
