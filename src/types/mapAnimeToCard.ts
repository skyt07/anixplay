import type { AnimeCardProps, AnimeProps } from "@/types";

export const mapAnimeToCard = (anime: AnimeProps): AnimeCardProps => ({
  title: anime.title.english || anime.title.romaji || "Unknown Anime",
  cover: anime.coverImage.large,
  episodes: anime.episodes,
  type: anime.type,
  rating: anime.averageScore,
});
