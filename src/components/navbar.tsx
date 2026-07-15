"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-[var(--bg)]/80 backdrop-blur-xl border-b border-[var(--border)]" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/arctis_square.png" alt="Arctis" width={32} height={32} className="rounded-xl" />
          <span className="text-base font-semibold text-[var(--text)]">Arctis Project</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Link href="#features" className="px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors rounded-full hover:bg-[var(--surface)]">Features</Link>
          <Link href="#about" className="px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors rounded-full hover:bg-[var(--surface)]">About</Link>
          <Link href="#founders" className="px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors rounded-full hover:bg-[var(--surface)]">Founders</Link>
          <div className="w-px h-5 bg-[var(--border)] mx-2" />
          <a href="https://github.com/Arctis-Project" target="_blank" rel="noopener noreferrer" className="p-2 text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors rounded-full hover:bg-[var(--surface)]">
            <Github className="h-5 w-5" />
          </a>
          <Button variant="discord" size="sm" className="ml-1" asChild>
            <a href="https://discord.gg/GgKCuySH2R" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              Discord
            </a>
          </Button>
        </nav>

        <div className="flex md:hidden items-center gap-2">
          <button onClick={() => setOpen(!open)} className="p-2 text-[var(--text-secondary)] hover:text-[var(--text)] rounded-full hover:bg-[var(--surface)] transition-colors">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg-elevated)] px-6 py-4 space-y-1 animate-fade-in">
          <Link href="#features" onClick={() => setOpen(false)} className="block px-4 py-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text)] rounded-xl hover:bg-[var(--surface)] transition-colors">Features</Link>
          <Link href="#about" onClick={() => setOpen(false)} className="block px-4 py-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text)] rounded-xl hover:bg-[var(--surface)] transition-colors">About</Link>
          <Link href="#founders" onClick={() => setOpen(false)} className="block px-4 py-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text)] rounded-xl hover:bg-[var(--surface)] transition-colors">Founders</Link>
          <div className="flex gap-3 pt-3">
            <a href="https://github.com/Arctis-Project" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm border border-[var(--border)] rounded-full text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--surface)] transition-colors">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://discord.gg/GgKCuySH2R" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm bg-[#5865F2] text-white rounded-full hover:bg-[#4752C4] transition-colors">
              <MessageCircle className="h-4 w-4" /> Discord
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
