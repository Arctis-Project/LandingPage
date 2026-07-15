"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-[500ms] ease-[cubic-bezier(0.35,1.9,0.22,0.88)]",
        scrolled
          ? "bg-background/85 backdrop-blur-2xl shadow-[var(--m3-sys-elevation-2)] border-b border-border/50"
          : "bg-transparent backdrop-blur-none border-b-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative overflow-hidden rounded-[var(--m3-sys-shape-medium)] transition-all duration-[350ms] ease-[cubic-bezier(0.42,1.67,0.21,0.9)] group-hover:scale-110 group-hover:shadow-[var(--m3-sys-elevation-2)]">
            <Image
              src="/arctis_square.png"
              alt="Arctis Project Logo"
              width={36}
              height={36}
              className="rounded-[var(--m3-sys-shape-medium)]"
            />
          </div>
          <span className="text-lg font-semibold tracking-tight">Arctis Project</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Link href="#features">
            <Button variant="ghost" size="sm" className="rounded-[var(--m3-sys-shape-full)]">
              Features
            </Button>
          </Link>
          <Link href="#about">
            <Button variant="ghost" size="sm" className="rounded-[var(--m3-sys-shape-full)]">
              About
            </Button>
          </Link>
          <Link href="#founders">
            <Button variant="ghost" size="sm" className="rounded-[var(--m3-sys-shape-full)]">
              Founders
            </Button>
          </Link>
          <div className="ml-2 flex items-center gap-1">
            <Button variant="ghost" size="icon" className="rounded-[var(--m3-sys-shape-full)]" asChild>
              <a href="https://github.com/Arctis-Project" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button size="sm" className="rounded-[var(--m3-sys-shape-full)] gap-2" asChild>
              <a href="https://discord.gg/GgKCuySH2R" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Discord
              </a>
            </Button>
            <ThemeSwitcher />
          </div>
        </nav>

        <div className="flex md:hidden items-center gap-2">
          <ThemeSwitcher />
          <Button
            variant="ghost"
            size="icon"
            className="rounded-[var(--m3-sys-shape-full)]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative h-5 w-5">
              <Menu
                className={cn(
                  "absolute inset-0 transition-all duration-[350ms] ease-[cubic-bezier(0.42,1.67,0.21,0.9)]",
                  isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                )}
              />
              <X
                className={cn(
                  "absolute inset-0 transition-all duration-[350ms] ease-[cubic-bezier(0.42,1.67,0.21,0.9)]",
                  isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                )}
              />
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-[500ms] ease-[cubic-bezier(0.35,1.9,0.22,0.88)]",
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="border-t bg-background/95 backdrop-blur-2xl px-4 py-4 space-y-1 animate-m3e-slide-down">
          <Link href="#features" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" className="w-full justify-start rounded-[var(--m3-sys-shape-full)]">Features</Button>
          </Link>
          <Link href="#about" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" className="w-full justify-start rounded-[var(--m3-sys-shape-full)]">About</Button>
          </Link>
          <Link href="#founders" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" className="w-full justify-start rounded-[var(--m3-sys-shape-full)]">Founders</Button>
          </Link>
          <div className="flex gap-2 pt-2">
            <Button variant="outline" className="flex-1 rounded-[var(--m3-sys-shape-full)] gap-2" asChild>
              <a href="https://github.com/Arctis-Project" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button className="flex-1 rounded-[var(--m3-sys-shape-full)] gap-2" asChild>
              <a href="https://discord.gg/GgKCuySH2R" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Discord
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
