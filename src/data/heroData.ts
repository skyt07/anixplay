import type { AnimeProps } from "@/types/props";

export const heroData: AnimeProps[] = [
  {
    id: 1,
    title: {
      english: "Attack on Titan",
      romaji: "Attack on Titan",
    },
    coverImage: {
      large: "https://example.com/aot.jpg",
    },
    episodes: 75,
    averageScore: 92,
    genres: ["Action", "Drama", "Fantasy"],
    description: "Humans fight against giant humanoid Titans to survive.",
    watchLinks: [{ url: "https://example.com/watch-aot" }],
  },
  {
    id: 2,
    title: {
      english: "My Hero Academia",
      romaji: "My Hero Academia",
    },
    coverImage: {
      large: "https://example.com/mha.jpg",
    },
    episodes: 138,
    averageScore: 87,
    genres: ["Action", "Comedy", "School"],
    description:
      "A boy without powers in a world of superhumans struggles to become a hero.",
    watchLinks: [{ url: "https://example.com/watch-mha" }],
  },
  {
    id: 3,
    title: {
      english: "",
      romaji: "",
    },
    coverImage: {
      large: "",
    },
    episodes: 0,
    averageScore: 0,
    genres: [""],
    description: "",
    watchLinks: [{ url: "" }],
  },
];
