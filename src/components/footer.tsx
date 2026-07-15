"use client";
import * as React from "react";
import Image from "next/image";
import { Github, MessageCircle, Heart } from "lucide-react";
import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";

export function Footer() {
  const { ref, inView } = useInView();

  return (
    <footer className="border-t border-[var(--border)] py-16 px-6">
      <div ref={ref} className={cn("max-w-5xl mx-auto flex flex-col items-center gap-8", inView ? "animate-fade-up" : "opacity-0")}>
        <div className="flex items-center gap-3">
          <Image src="/arctis_square.png" alt="Arctis" width={28} height={28} className="rounded-lg" />
          <span className="text-base font-semibold">Arctis Project</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/Arctis-Project" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--surface)] hover:border-[var(--border-strong)] transition-all">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://discord.gg/GgKCuySH2R" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5865F2] text-white text-sm font-medium hover:bg-[#4752C4] transition-colors">
            <MessageCircle className="h-4 w-4" />
            Discord
          </a>
        </div>

        <p className="text-sm text-[var(--text-muted)] flex items-center gap-1.5">
          Made with <Heart className="h-3.5 w-3.5 text-[var(--primary)]" /> by the Arctis Community
        </p>

        <p className="text-xs text-[var(--text-muted)]">
          &copy; {new Date().getFullYear()} Arctis Project
        </p>
      </div>
    </footer>
  );
}
