"use client";

import { useEffect, useRef, useMemo, useState, useCallback } from "react";
import { type Post, CATEGORIES } from "@/lib/data/explorePosts";

interface Props {
  initialPost: Post;
  allPosts: Post[];
  onClose: () => void;
}

export default function PostViewer({ initialPost, allPosts, onClose }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Build a flat ordered list:
  // 1. All posts in the clicked post's category (clicked post first)
  // 2. Then remaining categories in their defined order, wrapping around
  const orderedPosts = useMemo(() => {
    const catIndex = CATEGORIES.indexOf(initialPost.category);
    const orderedCats = [
      ...CATEGORIES.slice(catIndex),
      ...CATEGORIES.slice(0, catIndex),
    ];

    const byCat = orderedCats.flatMap((cat) =>
      allPosts.filter((p) => p.category === cat)
    );

    // Ensure the clicked post is truly first
    const clickedIdx = byCat.findIndex((p) => p.id === initialPost.id);
    if (clickedIdx > 0) {
      return [
        byCat[clickedIdx],
        ...byCat.slice(0, clickedIdx),
        ...byCat.slice(clickedIdx + 1),
      ];
    }
    return byCat;
  }, [initialPost, allPosts]);

  // Track visible slide via IntersectionObserver
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const slides = container.querySelectorAll<HTMLElement>("[data-slide]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setCurrentIndex(Number((e.target as HTMLElement).dataset.slide));
          }
        });
      },
      { root: container, threshold: 0.6 }
    );
    slides.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [orderedPosts]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Prevent body scroll while viewer is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const current = orderedPosts[currentIndex];
  const isPaid = current?.isAI || current?.isWeatherAware;

  // Category change label: show a brief banner when category switches
  const prevCat = currentIndex > 0 ? orderedPosts[currentIndex - 1]?.category : null;
  const isCategoryChange = prevCat !== null && prevCat !== current?.category;

  return (
    <div className="fixed inset-0 z-50 bg-black" role="dialog" aria-modal>
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 pt-5 pb-3">
        {/* Progress pills */}
        <div className="flex gap-1 flex-1 mr-4">
          {orderedPosts.slice(0, 30).map((_, i) => (
            <div
              key={i}
              className={`h-[2px] flex-1 rounded-full transition-colors duration-200 ${
                i === currentIndex
                  ? "bg-white"
                  : i < currentIndex
                  ? "bg-white/40"
                  : "bg-white/15"
              }`}
            />
          ))}
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors flex-shrink-0"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Category transition label */}
      {isCategoryChange && (
        <div className="absolute top-14 left-1/2 -translate-x-1/2 z-20 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-[10px] font-semibold text-white/70 uppercase tracking-widest">
            {current?.category}
          </span>
        </div>
      )}

      {/* Slides — vertical scroll snap */}
      <div
        ref={containerRef}
        className="h-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {orderedPosts.map((post, i) => {
          const postIsPaid = post.isAI || post.isWeatherAware;
          return (
            <div
              key={post.id}
              data-slide={i}
              className="relative w-full h-full snap-start snap-always flex-shrink-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading={i < 3 ? "eager" : "lazy"}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 px-6 pb-14">
                {postIsPaid && (
                  <span className="inline-block mb-3 bg-amber-400 text-black text-[9px] font-bold px-2.5 py-0.5 rounded-full tracking-widest uppercase">
                    Paid
                  </span>
                )}
                <p className="text-[10px] font-semibold text-white/50 uppercase tracking-widest mb-1.5">
                  {post.category}
                </p>
                <h2 className="text-2xl font-semibold text-white leading-tight mb-2">
                  {post.title}
                </h2>
                {post.location && (
                  <p className="flex items-center gap-1.5 text-sm text-white/55">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    {post.location}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Swipe hint — only on first slide */}
      {currentIndex === 0 && (
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 pointer-events-none animate-bounce">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span className="text-[9px] text-white/30 uppercase tracking-widest">Swipe up</span>
        </div>
      )}
    </div>
  );
}
