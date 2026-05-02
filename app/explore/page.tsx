import PageContainer from "@/app/components/PageContainer";
import ExploreGrid from "./components/ExploreGrid";

export default function ExplorePage() {
  return (
    <PageContainer>
      <header className="px-5 pt-12 pb-7 mb-2">
        <p className="text-label text-ink-tertiary uppercase tracking-widest mb-3">
          LinkUp
        </p>
        <h1 className="text-display text-ink">Explore</h1>
        <p className="text-body text-ink-secondary mt-2">
          Plans worth making
        </p>
      </header>

      <div className="px-5">
        <ExploreGrid />
      </div>
    </PageContainer>
  );
}
