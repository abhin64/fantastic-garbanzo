"use client";

import { useEffect, useRef, useMemo, useState } from "react";
import { type Post, CATEGORIES } from "@/lib/data/explorePosts";
import Modal from "@/app/components/Modal";
import IconButton from "@/app/components/IconButton";
import Badge from "@/app/components/Badge";

interface Props {
  initialPost: Post;
  allPosts: Post[];
  onClose: () => void;
}

export default function PostViewer({ initialPost, allPosts, onClose }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Flat ordered post list: clicked post first, then rest of its category,
  // then remaining categories in defined order, wrapping around.
  const orderedPosts = useMemo(() => {
    const catIndex = CATEGORIES.indexOf(initialPost.category);
    const orderedCats = [
      ...CATEGORIES.slice(catIndex),
      ...CATEGORIES.slice(0, catIndex),
    ];
    const byCat = orderedCats.flatMap((cat) =>
      allPosts.filter((p) => p.category === cat)
    );
    const clickedIdx = byCat.findIndex((p) => p.id === initialPost.id);
    if (clickedIdx > 0) {
      return [byCat[clickedIdx], ...byCat.slice(0, clickedIdx), ...byCat.slice(clickedIdx + 1)];
    }
    return byCat;
  }, [initialPost, allPosts]);

  // Track visible slide
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
  const prevCat = currentIndex > 0 ? orderedPosts[currentIndex - 1]?.category : null;
  const isCategoryChange = prevCat !== null && prevCat !== current?.category;

  return (
    <Modal>
      {/* Top bar: progress + close */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center gap-3 px-5 pt-5 pb-3">
        <div className="flex gap-px flex-1">
          {orderedPosts.slice(0, 30).map((_, i) => (
            <div
              key={i}
              className={`h-px flex-1 rounded-full transition-colors duration-200 ${
                i === currentIndex
                  ? "bg-white"
                  : i < currentIndex
                  ? "bg-white/35"
                  : "bg-white/12"
              }`}
            />
          ))}
        </div>
        <IconButton onClick={onClose} aria-label="Close">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </IconButton>
      </div>

      {/* Category transition label */}
      {isCategoryChange && (
        <div className="absolute top-14 left-1/2 -translate-x-1/2 z-20 animate-slide-up">
          <div className="bg-white/[0.08] backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
            <span className="text-label text-white/60 uppercase tracking-widest">
              {current?.category}
            </span>
          </div>
        </div>
      )}

      {/* Slide container */}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 px-6 pb-12">
                {postIsPaid && (
                  <div className="mb-3">
                    <Badge variant="paid" />
                  </div>
                )}
                <p className="text-label text-white/40 uppercase tracking-widest mb-2">
                  {post.category}
                </p>
                <h2 className="text-h1 text-white leading-tight mb-2">
                  {post.title}
                </h2>
                {post.location && (
                  <p className="flex items-center gap-1.5 text-caption text-white/50">
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
