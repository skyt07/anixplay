import AnimeCard from "../ui/AnimeCard";

const latestAnime = [
  {
    id: 1,
    title: "Solo Leveling",
    cover:
      "https://i.pinimg.com/736x/5f/87/46/5f8746f45e5972bb0ef8cb9e21c4a7fd.jpg",
    episodes: 12,
    rating: 9.1,
    type: "TV",
  },

  {
    id: 2,
    title: "Jujutsu Kaisen",
    cover:
      "https://i.pinimg.com/736x/63/17/35/6317358f94e6ecae4e2f8d6d6a69d4d2.jpg",
    episodes: 24,
    rating: 8.9,
    type: "TV",
  },

  {
    id: 3,
    title: "Demon Slayer",
    cover:
      "https://i.pinimg.com/736x/70/7d/f6/707df6f1d9c0ea1d0ef6df2d6d8b4d0e.jpg",
    episodes: 11,
    rating: 9.0,
    type: "TV",
  },

  {
    id: 4,
    title: "Attack on Titan",
    cover:
      "https://i.pinimg.com/736x/3a/5d/8b/3a5d8b9d802802c37efc7158983ff956.jpg",
    episodes: 75,
    rating: 9.5,
    type: "TV",
  },

  {
    id: 5,
    title: "My Hero Academia",
    cover:
      "https://i.pinimg.com/1200x/79/7a/53/797a53836592c337d6fbb01b48bf25e2.jpg",
    episodes: 138,
    rating: 8.4,
    type: "TV",
  },
];

const LatestRelease = () => {
  return (
    <section className="mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold tracking-wide">Latest Release</h2>

        <button className="text-sm text-gray-400 transition-colors hover:text-white">
          View All
        </button>
      </div>

      {/* Anime Grid */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4 min-[900px]:grid-cols-[repeat(auto-fill,minmax(160px,1fr))]">
        {latestAnime.map((anime) => (
          <AnimeCard
            key={anime.id}
            id={anime.id}
            title={anime.title}
            cover={anime.cover}
            episodes={anime.episodes}
            rating={anime.rating}
            type={anime.type}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestRelease;
