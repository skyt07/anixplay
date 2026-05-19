"use client";

import { useEffect, useState } from "react";

export function useThemePalette() {
  const [palette, setPalette] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("palette") || "default"
      : "default",
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.setAttribute("data-theme", palette);
  }, [palette]);

  const changePalette = (newPalette: string) => {
    document.documentElement.setAttribute("data-theme", newPalette);
    localStorage.setItem("palette", newPalette);
    setPalette(newPalette);
  };

  return {
    palette,
    changePalette,
  };
}
