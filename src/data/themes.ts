export const THEMES = [
  "default",
  "sakura",
  "ocean",
  "forest",
  "sunset",
] as const;
export type ThemePalette = (typeof THEMES)[number];
