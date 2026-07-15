"use client";
import * as React from "react";
import { Moon, Sun, Monitor, Check } from "lucide-react";
import { useTheme } from "next-themes";

const options = [
  { value: "light" as const, icon: Sun, label: "Light" },
  { value: "dark" as const, icon: Moon, label: "Dark" },
  { value: "system" as const, icon: Monitor, label: "System" },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => setMounted(true), []);
  React.useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  if (!mounted) return (
    <div className="h-10 w-10 rounded-full" />
  );

  const current = options.find((o) => o.value === theme) ?? options[0];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-full flex items-center justify-center text-[var(--text-sec)] hover:bg-[var(--md-surface-container-high)] transition-colors"
        aria-label={`Theme: ${current.label}`}
      >
        <current.icon className="h-5 w-5" />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-40 rounded-2xl bg-[var(--md-surface-container)] border border-[var(--border-c)] shadow-lg overflow-hidden animate-scale-in z-50">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => { setTheme(opt.value); setOpen(false); }}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[var(--text)] hover:bg-[var(--md-surface-container-high)] transition-colors"
            >
              <opt.icon className="h-4 w-4 text-[var(--text-sec)]" />
              <span className="flex-1 text-left">{opt.label}</span>
              {theme === opt.value && <Check className="h-4 w-4 text-[var(--md-primary)]" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
