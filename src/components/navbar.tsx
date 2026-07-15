"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300",
      scrolled ? "bg-[var(--bg)]/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)]" : "bg-transparent"
    )}>
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/arctis_square.png" alt="Arctis" width={32} height={32} className="rounded-2xl transition-transform duration-200 group-hover:scale-105" />
          <span className="text-[15px] font-medium text-[var(--text)]">Arctis Project</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Link href="#features" className="px-4 py-2 text-[0.8125rem] font-medium text-[var(--text-sec)] hover:text-[var(--text)] hover:bg-[var(--md-surface-container-high)] rounded-full transition-all">Features</Link>
          <Link href="#about" className="px-4 py-2 text-[0.8125rem] font-medium text-[var(--text-sec)] hover:text-[var(--text)] hover:bg-[var(--md-surface-container-high)] rounded-full transition-all">About</Link>
          <Link href="#founders" className="px-4 py-2 text-[0.8125rem] font-medium text-[var(--text-sec)] hover:text-[var(--text)] hover:bg-[var(--md-surface-container-high)] rounded-full transition-all">Founders</Link>
          <div className="w-px h-5 bg-[var(--border-c)] mx-2" />
          <a href="https://github.com/Arctis-Project" target="_blank" rel="noopener noreferrer" className="p-2 text-[var(--text-sec)] hover:text-[var(--text)] hover:bg-[var(--md-surface-container-high)] rounded-full transition-all">
            <Github className="h-5 w-5" />
          </a>
          <Button variant="discord" size="sm" className="ml-1" asChild>
            <a href="https://discord.gg/GgKCuySH2R" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              Discord
            </a>
          </Button>
          <ThemeSwitcher />
        </nav>

        <div className="flex md:hidden items-center gap-1">
          <ThemeSwitcher />
          <button onClick={() => setOpen(!open)} className="p-2 text-[var(--text-sec)] hover:text-[var(--text)] hover:bg-[var(--md-surface-container-high)] rounded-full transition-all">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--border-c)] bg-[var(--bg)] px-6 py-4 space-y-1 animate-fade-in">
          <Link href="#features" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm font-medium text-[var(--text-sec)] hover:text-[var(--text)] rounded-2xl hover:bg-[var(--md-surface-container-high)] transition-all">Features</Link>
          <Link href="#about" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm font-medium text-[var(--text-sec)] hover:text-[var(--text)] rounded-2xl hover:bg-[var(--md-surface-container-high)] transition-all">About</Link>
          <Link href="#founders" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm font-medium text-[var(--text-sec)] hover:text-[var(--text)] rounded-2xl hover:bg-[var(--md-surface-container-high)] transition-all">Founders</Link>
          <div className="flex gap-3 pt-3">
            <a href="https://github.com/Arctis-Project" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium border border-[var(--md-outline)] rounded-full text-[var(--text-sec)] hover:bg-[var(--md-surface-container-high)] transition-all">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://discord.gg/GgKCuySH2R" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium bg-[#5865F2] text-white rounded-full hover:bg-[#4752C4] transition-colors">
              <MessageCircle className="h-4 w-4" /> Discord
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
