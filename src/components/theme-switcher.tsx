"use client";
import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  if (!mounted) return (
    <button className="h-10 w-10 rounded-full flex items-center justify-center" aria-label="Toggle theme">
      <div className="h-5 w-5" />
    </button>
  );

  const cycle = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  return (
    <button
      onClick={cycle}
      className="h-10 w-10 rounded-full flex items-center justify-center text-[var(--text-sec)] hover:bg-[var(--md-surface-container-high)] transition-colors"
      aria-label={`Theme: ${theme}`}
      title={`Theme: ${theme}`}
    >
      {theme === "light" && <Sun className="h-5 w-5" />}
      {theme === "dark" && <Moon className="h-5 w-5" />}
      {theme === "system" && <Monitor className="h-5 w-5" />}
    </button>
  );
}
