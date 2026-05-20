import type { AnimeCardProps, AnimeProps } from "@/types";

export const mapAnimeToCard = (anime: AnimeProps): AnimeCardProps => {
  return {
    id: anime.id,
    title: anime.title.english || anime.title.romaji || "Unknown Anime",
    cover: anime.coverImage.large?.trimStart() || "/fallback.jpg",
    episodes: anime.episodes,
    type: anime.type,
    rating: anime.averageScore,
    watchLink: anime.watchLink?.[0]?.url ?? "#",
  };
};
