import PageContainer from "@/app/components/PageContainer";
import ExploreGrid from "./components/ExploreGrid";

export default function ExplorePage() {
  return (
    <PageContainer>
      {/* Gradient hero header */}
      <header
        className="-mx-5 px-5 pt-14 pb-8 mb-8"
        style={{ background: "var(--gradient-brand)" }}
      >
        <p className="text-label text-white/70 uppercase tracking-widest mb-2">
          LinkUp
        </p>
        <h1 className="text-h1 text-white">Explore</h1>
        <p className="text-body mt-1.5" style={{ color: "rgba(255,255,255,0.78)" }}>
          Discover plans curated for you
        </p>
      </header>

      <ExploreGrid />
    </PageContainer>
  );
}
