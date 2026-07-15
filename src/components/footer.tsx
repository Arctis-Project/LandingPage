"use client";

import * as React from "react";
import Image from "next/image";
import { Github, MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";

export function Footer() {
  const { ref, isInView } = useInView();

  return (
    <footer className="border-t border-border/30">
      <div
        ref={ref}
        className={cn(
          "mx-auto max-w-6xl px-5 py-14",
          isInView ? "animate-m3e-up" : "opacity-0"
        )}
      >
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-[var(--m3-sys-shape-md)] transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110">
              <Image
                src="/arctis_square.png"
                alt="Arctis Project"
                width={32}
                height={32}
                className="rounded-[var(--m3-sys-shape-md)]"
              />
            </div>
            <span className="text-lg font-semibold">Arctis Project</span>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" className="rounded-[var(--m3-sys-shape-full)]" asChild>
              <a href="https://github.com/Arctis-Project" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="discord" size="sm" className="rounded-[var(--m3-sys-shape-full)] gap-2" asChild>
              <a href="https://discord.gg/GgKCuySH2R" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Discord
              </a>
            </Button>
          </div>

          <div className="text-center text-sm text-muted-foreground leading-relaxed font-light">
            <p className="mb-2">
              Building the future of open-source computing.
            </p>
            <p className="flex items-center justify-center gap-1.5">
              Made with <Heart className="h-3.5 w-3.5 fill-muted-foreground/30 text-muted-foreground/30 transition-all duration-[800ms] hover:fill-[#dc2626] hover:text-[#dc2626] hover:scale-125" /> by the Arctis Community
            </p>
          </div>

          <div className="text-xs text-muted-foreground/40">
            &copy; {new Date().getFullYear()} Arctis Project. Open Source.
          </div>
        </div>
      </div>
    </footer>
  );
}
