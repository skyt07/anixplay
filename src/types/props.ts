//components
export interface AnimeProps {
  id?: number | null;
  title: {
    romaji?: string;
    english?: string;
  };
  coverImage: {
    large: string;
  };
  episodes?: number | null;
  type?: string;
  averageScore?: number | null;
  genres?: string[];
  description?: string;
  watchLinks?: { url: string }[];
}

// components/AnimeCard.tsx
export interface AnimeCardProps {
  title: string;
  cover: string;
  episodes?: number | null;
  type?: string;
  rating?: number | null;
}

// component/ui/SiteLogo.tsx
export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  text?: string;
  size?: number;
}
