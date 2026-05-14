import type { AnimeProps } from "@/types/props";

export const heroData: AnimeProps[] = [
  {
    id: 1,
    title: {
      english: "Attack on Titan",
      romaji: "Shingeki no Kyojin",
    },
    coverImage: {
      large:
        "https://i.pinimg.com/736x/3a/5d/8b/3a5d8b9d802802c37efc7158983ff956.jpg",
    },
    episodes: 75,
    type: "TV",
    averageScore: 92,
    genres: ["Action", "Drama", "Fantasy"],
    description:
      "Humans fight against giant humanoid Titans to survive behind enormous walls.",
    watchLink: [
      {
        url: "/watch/attack-on-titan",
      },
    ],
  },
  {
    id: 2,
    title: {
      english: "My Hero Academia",
      romaji: "Boku no Hero Academia",
    },
    coverImage: {
      large:
        "https://i.pinimg.com/1200x/79/7a/53/797a53836592c337d6fbb01b48bf25e2.jpg",
    },
    episodes: 138,
    type: "TV",
    averageScore: 87,
    genres: ["Action", "Comedy", "School"],
    description:
      "A powerless boy in a superhuman world dreams of becoming the greatest hero.",

    watchLink: [
      {
        url: "/watch/my-hero-academia",
      },
    ],
  },
  // {
  //   id: 3,
  //   title: {
  //     english: "Demon Slayer",
  //     romaji: "Kimetsu no Yaiba",
  //   },
  //   coverImage: {
  //     large:
  //       "https://i.pinimg.com/736x/70/7d/f6/707df6f1d9c0ea1d0ef6df2d6d8b4d0e.jpg",
  //   },
  //   episodes: 55,
  //   type: "TV",
  //   averageScore: 89,
  //   genres: ["Action", "Fantasy", "Adventure"],
  //   description:
  //     "Tanjiro joins the Demon Slayer Corps after demons massacre his family.",
  //   watchLink: [
  //     {
  //       url: "/watch/demon-slayer",
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   title: {
  //     english: "Jujutsu Kaisen",
  //     romaji: "Jujutsu Kaisen",
  //   },
  //   coverImage: {
  //     large:
  //       "https://i.pinimg.com/736x/63/17/35/6317358f94e6ecae4e2f8d6d6a69d4d2.jpg",
  //   },
  //   episodes: 47,
  //   type: "TV",
  //   averageScore: 90,
  //   genres: ["Action", "Supernatural", "Dark Fantasy"],
  //   description:
  //     "Yuji Itadori becomes involved in the dangerous world of cursed spirits.",
  //   watchLink: [
  //     {
  //       url: "/watch/jujutsu-kaisen",
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   title: {
  //     english: "Solo Leveling",
  //     romaji: "Ore dake Level Up na Ken",
  //   },
  //   coverImage: {
  //     large:
  //       "https://i.pinimg.com/736x/5f/87/46/5f8746f45e5972bb0ef8cb9e21c4a7fd.jpg",
  //   },
  //   episodes: 24,
  //   type: "TV",
  //   averageScore: 91,
  //   genres: ["Action", "Fantasy", "Adventure"],
  //   description:
  //     "The weakest hunter gains a mysterious system allowing him to level up endlessly.",
  //   watchLink: [
  //     {
  //       url: "/watch/solo-leveling",
  //     },
  //   ],
  // },
];
