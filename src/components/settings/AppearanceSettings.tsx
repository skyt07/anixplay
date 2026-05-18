import PaletteSelector from "./PaletteSelector";
import ThemeSwitch from "./ThemeSwitch";

export default function AppearanceSettings() {
  return (
    // unhide until we have more settings to show
    <section className="p-6 space-y-6 border  rounded-2xl bg-card">
      <div>
        <h2 className="text-2xl font-bold">Appearance</h2>

        <p className="mt-1 text-sm opacity-70">
          Customize your AnixPlay theme.
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold">Dark / Light Mode</h3>

        <ThemeSwitch />
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold">Color Palette</h3>

        <PaletteSelector />
      </div>
    </section>
  );
}
