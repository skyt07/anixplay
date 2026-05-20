"use client";

import Image from "next/image";
import Link from "next/link";

import {
  BookmarkIcon,
  ChevronLeft,
  ChevronRight,
  PlayIcon,
  StarIcon,
} from "lucide-react";

import { Button } from "../ui/Button";
import { heroData } from "@/data/heroData";
import { useHeroCarousel } from "@/hooks/useHeroCarousel";

const HeroCarousel = () => {
  const { emblaRef, index, scrollPrev, scrollNext } = useHeroCarousel();

  return (
    <section className="relative w-full overflow-hidden text-white select-none aspect-[3/1.3] max-lg:aspect-video">
      {/* VIEWPORT */}
      <div ref={emblaRef} className="w-full h-full overflow-hidden">
        {/* CONTAINER */}
        <div className="flex h-full">
          {heroData.map((anime, i) => {
            const title =
              anime.title.english || anime.title.romaji || "Unknown Anime";

            const image =
              anime.coverImage.large?.trimStart() || "/fallback.jpg";

            const watchUrl = anime.watchLink?.[0]?.url ?? "#";

            return (
              <div key={anime.id ?? i} className="relative h-full min-w-full">
                {/* BACKGROUND */}
                <div className="absolute inset-0">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    quality={100}
                    priority={i === 0}
                    sizes="100vw"
                    className="object-cover"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.75)_35%,transparent_75%),linear-gradient(to_top,rgba(0,0,0,0.7)_10%,transparent_60%)] max-md:bg-[linear-gradient(to_top,rgba(0,0,0,0.85)_15%,transparent_70%)]" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 flex items-end h-full p-4 md:p-6">
                  <div className="w-full max-w-2xl p-5 border shadow-2xl md:p-6 backdrop-blur-md rounded-2xl bg-white/10 border-white/20">
                    {/* TITLE */}
                    <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
                      {title}
                    </h1>

                    {/* DESCRIPTION */}
                    <p className="mb-5 text-sm leading-relaxed text-gray-200 md:text-base line-clamp-3 md:line-clamp-4">
                      {anime.description}
                    </p>

                    {/* RATING */}
                    <div className="flex items-center gap-2 mb-5">
                      <StarIcon
                        size={20}
                        className="fill-yellow-300 stroke-yellow-300"
                      />

                      <span className="font-medium">
                        {anime.averageScore ?? "?"}
                      </span>
                    </div>

                    {/* ACTIONS */}
                    <div className="flex items-center gap-4">
                      <Link
                        href={watchUrl}
                        className="flex items-center gap-2 px-5 py-3 transition-all border rounded-lg border-white/20 bg-white/5 hover:bg-white/10 hover:scale-105 hover:text-green-300 active:scale-95"
                      >
                        <PlayIcon className="w-5 h-5 fill-current" />

                        <span>Watch Now</span>
                      </Link>

                      <button className="p-3 transition-all border rounded-lg border-white/20 bg-white/5 hover:bg-white/10 hover:text-green-300 active:scale-95">
                        <BookmarkIcon className="w-5 h-5 fill-current" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CONTROLS */}
      <div className="absolute z-20 flex items-center gap-3 bottom-5 right-5 md:right-10">
        <Button variant="hero" onClick={scrollPrev}>
          <ChevronLeft />
        </Button>

        <div className="flex items-center justify-center h-10 px-3 border rounded-lg border-white/20 bg-white/10 backdrop-blur-md">
          <span className="text-lg font-semibold">{index + 1}</span>
          <span className="mx-1 text-sm opacity-70">/ {heroData.length}</span>
        </div>

        <Button variant="hero" onClick={scrollNext}>
          <ChevronRight />
        </Button>
      </div>
    </section>
  );
};

export default HeroCarousel;
