import HeroCarousel from "@/components/HeroCarousel";

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
