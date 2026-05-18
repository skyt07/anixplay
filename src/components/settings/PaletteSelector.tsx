"use client";

import { THEMES } from "@/data/themes";
import { useThemePalette } from "@/hooks/useThemePalette";

export default function PaletteSelector() {
  const { palette, changePalette } = useThemePalette();

  return (
    <div className="flex flex-wrap gap-3">
      {THEMES.map((theme) => (
        <button
          key={theme}
          onClick={() => changePalette(theme)}
          className={`px-4 py-2 rounded-lg border capitalize transition
            ${
              palette === theme
                ? "border-accent bg-accent text-white"
                : "bg-card"
            }
          `}
        >
          {theme}
        </button>
      ))}
    </div>
  );
}
