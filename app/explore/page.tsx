import ExploreGrid from "./components/ExploreGrid";

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-4 pt-12 pb-24">
        <header className="mb-10">
          <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-widest mb-1">
            LinkUp
          </p>
          <h1 className="text-3xl font-bold tracking-tight">Explore</h1>
          <p className="text-neutral-500 text-sm mt-1.5">
            Discover plans curated for you
          </p>
        </header>

        <ExploreGrid />
      </div>
    </main>
  );
}
