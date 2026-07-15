"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-14 bg-[var(--md-surface-container)] flex items-center px-4 md:px-6">
      <div className="flex items-center gap-2 w-full max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <Image src="/arctis_square.png" alt="Arctis" width={28} height={28} className="rounded-[var(--md-shape-m)]" />
          <span className="text-base font-medium text-[var(--md-primary)] hidden sm:block">Arctis Project</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 ml-6">
          {["Features", "About", "Founders"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="state-layer px-4 py-2 text-sm font-medium text-[var(--text-sec)] hover:text-[var(--text)] rounded-full transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex-1" />

        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://github.com/Arctis-Project"
            target="_blank"
            rel="noopener noreferrer"
            className="state-layer h-10 w-10 flex items-center justify-center rounded-full text-[var(--text-sec)] hover:text-[var(--text)]"
          >
            <Github className="h-5 w-5" />
          </a>
          <Button variant="discord" size="sm" asChild>
            <a href="https://discord.gg/GgKCuySH2R" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              Discord
            </a>
          </Button>
          <ThemeSwitcher />
        </div>

        <div className="flex md:hidden items-center gap-1">
          <ThemeSwitcher />
          <button
            onClick={() => setOpen(!open)}
            className="state-layer h-10 w-10 flex items-center justify-center rounded-full text-[var(--text-sec)]"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-[var(--md-surface-container)] border-t border-[var(--border-c)] px-4 py-3 space-y-1 animate-fade-in z-50">
          {["Features", "About", "Founders"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-[var(--text-sec)] hover:text-[var(--text)] rounded-[var(--md-shape-xl)] hover:bg-[var(--md-surface-container-high)] transition-all"
            >
              {item}
            </Link>
          ))}
          <div className="flex gap-3 pt-3">
            <a href="https://github.com/Arctis-Project" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium border border-[var(--md-outline)] rounded-full text-[var(--text-sec)] hover:bg-[var(--md-surface-container-high)] transition-all">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://discord.gg/GgKCuySH2R" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium bg-[#5865F2] !text-white rounded-full hover:bg-[#4752C4] transition-colors">
              <MessageCircle className="h-4 w-4" /> Discord
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
