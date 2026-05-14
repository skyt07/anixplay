// //components
// export interface AnimeProps {
//   id?: number | null;
//   title: {
//     romaji?: string;
//     english?: string;
//   };
//   coverImage: {
//     large: string;
//   };
//   episodes?: number | null;
//   type?: string;
//   averageScore?: number | null;
//   genres?: string[];
//   description?: string;
//   watchLink?: { url: string }[];
// }

// // components/AnimeCard.tsx
// export interface AnimeCardProps {
//   title: string;
//   cover: string;
//   episodes?: number | null;
//   type?: string;
//   rating?: number | null;
// }

// // component/ui/SiteLogo.tsx
// export interface LogoProps extends React.SVGProps<SVGSVGElement> {
//   text?: string;
//   size?: number;
// }
import type { SVGProps } from "react";

export interface AnimeTitle {
  romaji?: string;
  english?: string;
}

export interface AnimeImage {
  large: string;
}

export interface AnimeWatchLink {
  url: string;
}

// Main Anime Type
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

// Anime Card
export interface AnimeCardProps {
  title: string;
  cover: string;
  episodes?: number;
  type?: string;
  rating?: number;
}

// Site Logo
export interface LogoProps extends SVGProps<SVGSVGElement> {
  text?: string;
  size?: number;
}
