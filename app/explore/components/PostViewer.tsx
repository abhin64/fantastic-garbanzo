"use client";

import { useEffect, useRef, useMemo, useState } from "react";
import { type Post } from "@/lib/data/explorePosts";
import { CATEGORIES } from "@/lib/data/categories";
import Modal from "@/app/components/Modal";
import IconButton from "@/app/components/IconButton";
import Badge from "@/app/components/Badge";

interface Props {
  initialPost: Post;
  allPosts: Post[];
  isPaidUser: boolean;
  onClose: () => void;
}

function LockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden>
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
    </svg>
  );
}

export default function PostViewer({ initialPost, allPosts, isPaidUser, onClose }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Build ordered list: clicked post first → rest of its category → remaining
  // categories in sortOrder, wrapping around
  const orderedPosts = useMemo(() => {
    const sortedCategoryIds = [...CATEGORIES]
      .sort((a, b) => a.sortOrder - b.sortOrder)
      .map((c) => c.id);

    const catIndex = sortedCategoryIds.indexOf(initialPost.categoryId);
    const orderedCatIds = [
      ...sortedCategoryIds.slice(catIndex),
      ...sortedCategoryIds.slice(0, catIndex),
    ];

    const byCat = orderedCatIds.flatMap((id) =>
      allPosts.filter((p) => p.categoryId === id)
    );

    const clickedIdx = byCat.findIndex((p) => p.id === initialPost.id);
    if (clickedIdx > 0) {
      return [byCat[clickedIdx], ...byCat.slice(0, clickedIdx), ...byCat.slice(clickedIdx + 1)];
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
          if (e.isIntersecting)
            setCurrentIndex(Number((e.target as HTMLElement).dataset.slide));
        });
      },
      { root: container, threshold: 0.6 }
    );
    slides.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [orderedPosts]);

  // Keyboard close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const current = orderedPosts[currentIndex];
  const prevCat = currentIndex > 0 ? orderedPosts[currentIndex - 1]?.categoryId : null;
  const isCategoryChange = prevCat !== null && prevCat !== current?.categoryId;

  const isCurrentPaid = current?.isAI || current?.isWeatherAware;
  const isPaywalled = isCurrentPaid && !isPaidUser;

  const categoryName = CATEGORIES.find((c) => c.id === current?.categoryId)?.name ?? "";

  return (
    <Modal background="bg-black">
      {/* Top bar: progress + close */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center gap-3 px-5 pt-5 pb-3">
        <div className="flex gap-px flex-1">
          {orderedPosts.slice(0, 30).map((_, i) => (
            <div
              key={i}
              className={`h-px flex-1 rounded-full transition-colors duration-200 ${
                i === currentIndex ? "bg-white" : i < currentIndex ? "bg-white/35" : "bg-white/15"
              }`}
            />
          ))}
        </div>
        <IconButton onClick={onClose} aria-label="Close" variant="dark">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </IconButton>
      </div>

      {/* Category transition label */}
      {isCategoryChange && (
        <div className="absolute top-14 left-1/2 -translate-x-1/2 z-20 animate-slide-up">
          <div
            className="backdrop-blur-sm px-3 py-1 rounded-full border border-white/15"
            style={{ background: "rgba(255,255,255,0.10)" }}
          >
            <span className="text-label text-white/70 uppercase tracking-widest">
              {categoryName}
            </span>
          </div>
        </div>
      )}

      {/* Slides */}
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
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(20,8,4,0.88) 0%, rgba(30,10,5,0.35) 45%, transparent 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 px-6 pb-12">
                {postIsPaid && (
                  <div className="mb-3">
                    <Badge variant="paid" />
                  </div>
                )}
                <p className="text-label text-white/45 uppercase tracking-widest mb-2">
                  {CATEGORIES.find((c) => c.id === post.categoryId)?.name}
                </p>
                <h2 className="text-h1 text-white leading-tight mb-2">{post.title}</h2>
                {post.location && (
                  <p className="flex items-center gap-1.5 text-caption text-white/55">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
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

      {/* Paywall overlay — shown when scrolling into a paid post */}
      {isPaywalled && (
        <div
          className="absolute inset-0 z-30 flex items-end justify-center pb-16 animate-fade-in"
          style={{ background: "rgba(0,0,0,0.80)", backdropFilter: "blur(16px)" }}
        >
          <div className="bg-surface rounded-2xl p-7 mx-5 w-full max-w-sm text-center shadow-overlay">
            <div
              className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center shadow-card"
              style={{ background: "var(--gradient-brand)" }}
            >
              <LockIcon />
            </div>
            <h3 className="text-h3 text-ink mb-1">LinkUp Premium</h3>
            <p className="text-body text-ink-secondary mb-6">
              This feature requires LinkUp Premium
            </p>
            <button
              className="w-full py-3 rounded-xl text-white text-h4 shadow-card mb-3"
              style={{ background: "var(--gradient-brand)" }}
            >
              Upgrade
            </button>
            <button
              onClick={onClose}
              className="w-full py-2.5 text-body text-ink-secondary hover:text-ink transition-colors duration-150"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Swipe hint — first slide only */}
      {currentIndex === 0 && (
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 pointer-events-none">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-25">
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span className="text-label text-white/20 uppercase tracking-widest">Swipe up</span>
        </div>
      )}
    </Modal>
  );
}
