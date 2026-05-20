import { AnimeCardProps } from "@/types";
import { watch } from "fs/promises";

import Image from "next/image";
import Link from "next/link";

import { FC } from "react";

const AnimeCard: FC<AnimeCardProps> = ({
  id,
  title,
  cover,
  episodes,
  rating,
  type,
  watchLink,
}) => {
  return (
    <article className="w-full overflow-hidden group">
      {/* Cover */}
      <Link href={watchLink || `/watch/${id}`}>
        {/* <Link href="/watch" className="block"> */}
        <div className="relative overflow-hidden bg-gray-800 rounded-xl aspect-2/3">
          <Image
            src={cover}
            alt={title}
            fill
            quality={100}
            sizes="(max-width: 768px) 45vw, 220px"
            className="object-cover transition-transform duration-300 will-change-transform group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 transition-opacity opacity-0 bg-black/10 group-hover:opacity-100" />
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col justify-between mt-2.5 h-15.75">
        {/* Title */}
        <Link href="/watch">
          <h3 className="text-sm font-medium leading-tight transition-colors line-clamp-2 hover:text-white/70">
            {title}
          </h3>
        </Link>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <span>sub</span>
            <span>dub</span>
            <span>{episodes ?? "?"}</span>
            {/* <span>•</span> */}
            <span>★{rating ?? "N/A"}</span>
          </div>
          <span className="font-bold text-gray-400">{type ?? "TV"}</span>
        </div>
      </div>
    </article>
  );
};

export default AnimeCard;
