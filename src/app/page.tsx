import HeroCarousel from "@/components/HeroCarosuel";
import ShareSite from "@/components/ShareSite";
import LatestRelease from "@/components/LatestRelease";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <section className="min-[1038px]:grid min-[1038px]:grid-cols-[2.8fr_1fr] gap-8 mx-4 md:mx-8">
        <main>
          <ShareSite />
          <LatestRelease />
        </main>

        <aside>{/* Sidebar content */}</aside>
      </section>
    </>
  );
}
