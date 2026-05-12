import { AnimeCardProps } from "@/types/props";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const AnimeCard: FC<AnimeCardProps> = ({
  title,
  cover,
  episodes,
  rating,
  type,
}) => {
  // const AnimeCard = ({ title, cover, episodes, rating }: AnimeCardProps) => {
  return (
    <div className="w-full mx-auto overflow-hidden ">
      <Link href="/watch">
        {/* Animecard ratio box with auto scaling */}
        <div className="relative w-full h-0 md:pb-[145%] pb-[135%] rounded-xl overflow-hidden bg-gray-800 ">
          <Image
            src={cover}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 45vw, 160px"
          />
        </div>
      </Link>
      <div className="mt-1 flex flex-col justify-between h-15.75">
        <Link href="/watch">
          <h4 className="text-sm font-medium leading-tight line-clamp-2 hover:text-foreground/60">
            {title}
          </h4>
        </Link>
        <div className="flex items-center justify-between">
          <div className="flex justify-center gap-1">
            {/* Number of episodes */}
            <span className="text-xs text-gray-400 ">
              Ep: {episodes ?? "?"}
            </span>
            <span className="text-xs text-gray-400 ">
              Rating: {rating ?? "N/A"}
            </span>
          </div>
          <span className="text-xs text-foreground/70">{type ?? "TV"}</span>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
