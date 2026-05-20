export const THEMES = ["default", "sakura", "ocean", "neon", "amoled"] as const;
export type ThemeName = (typeof THEMES)[number];
