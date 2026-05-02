import PageContainer from "@/app/components/PageContainer";
import ExploreGrid from "./components/ExploreGrid";

export default function ExplorePage() {
  return (
    <PageContainer>
      <header className="mb-10">
        <p className="text-label text-ink-disabled uppercase tracking-widest mb-2">
          LinkUp
        </p>
        <h1 className="text-h1 text-white">Explore</h1>
        <p className="text-body text-ink-secondary mt-1.5">
          Discover plans curated for you
        </p>
      </header>
      <ExploreGrid />
    </PageContainer>
  );
}
