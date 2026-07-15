"use client";
import * as React from "react";
import Image from "next/image";
import { Github, MessageCircle } from "lucide-react";
import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";

export function Footer() {
  const { ref, inView } = useInView();

  return (
    <footer className="py-16 px-6">
      <div ref={ref} className={cn("max-w-6xl mx-auto flex flex-col items-center gap-6", inView ? "animate-fade-up" : "opacity-0")}>
        <div className="flex items-center gap-3">
          <Image src="/arctis_square.png" alt="Arctis" width={24} height={24} className="rounded-[var(--md-shape-s)]" />
          <span className="text-sm font-medium">Arctis Project</span>
        </div>

        <div className="flex items-center gap-2">
          <a href="https://github.com/Arctis-Project" target="_blank" rel="noopener noreferrer" className="state-layer h-10 w-10 flex items-center justify-center rounded-full text-[var(--text-sec)] hover:text-[var(--text)]">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://discord.gg/GgKCuySH2R" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5865F2] !text-white text-sm font-medium hover:bg-[#4752C4] transition-colors">
            <MessageCircle className="h-4 w-4" />
            Discord
          </a>
        </div>

        <p className="text-xs text-[var(--text-sec)]">
          &copy; {new Date().getFullYear()} Arctis Project
        </p>
      </div>
    </footer>
  );
}
