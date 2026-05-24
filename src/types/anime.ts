export interface AnimeTitle {
  romaji?: string;
  english?: string;
}

export interface AnimeImage {
  large?: string;
}

export interface AnimeWatchLink {
  url: string;
}

export interface AnimeProps {
  id: number;
  title: AnimeTitle;
  coverImage: AnimeImage;
  episodes?: number;
  type?: string;
  averageScore?: number;
  genres?: string[];
  description?: string;
  watchLink?: AnimeWatchLink[];
}
