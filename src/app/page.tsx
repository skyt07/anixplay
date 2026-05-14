import HeroCarousel from "@/components/HeroCarosuel";
import ShareSite from "@/components/ShareSite";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <section>
        <main>
          <ShareSite />
        </main>
        <aside></aside>
      </section>
    </>
  );
}
