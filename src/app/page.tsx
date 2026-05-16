import HeroCarousel from "@/components/HeroCarosuel";
import ShareSite from "@/components/ShareSite";
import LatestRelease from "@/components/LatestRelease";
export default function Home() {
  return (
    <>
      <HeroCarousel />
      <section>
        <main>
          <ShareSite />
          <LatestRelease />
        </main>
        <aside></aside>
      </section>
    </>
  );
}
