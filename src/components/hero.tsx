"use client";
import * as React from "react";
import Image from "next/image";
import { MessageCircle, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";

export function Hero() {
  const { ref, inView } = useInView();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <div className={cn("mb-8", inView ? "animate-scale-in" : "opacity-0")}>
          <Image src="/arctis_square.png" alt="Arctis Project" width={96} height={96} className="mx-auto rounded-[28px] shadow-lg" priority />
        </div>

        <h1 className={cn("text-5xl md:text-7xl font-bold tracking-tight mb-6", inView ? "animate-fade-up" : "opacity-0")} style={{ animationDelay: "80ms" }}>
          Arctis Project
        </h1>

        <p className={cn("text-lg md:text-xl text-[var(--text-sec)] max-w-2xl mx-auto mb-10 leading-relaxed font-light", inView ? "animate-fade-up" : "opacity-0")} style={{ animationDelay: "160ms" }}>
          A Linux distribution and Android ROM built for performance, privacy, and elegance. Open source, community driven.
        </p>

        <div className={cn("flex flex-col sm:flex-row items-center justify-center gap-3", inView ? "animate-fade-up" : "opacity-0")} style={{ animationDelay: "240ms" }}>
          <Button variant="discord" size="lg" asChild>
            <a href="https://discord.gg/GgKCuySH2R" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Join Discord
            </a>
          </Button>
          <Button variant="outlined" size="lg" asChild>
            <a href="https://github.com/Arctis-Project" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              View on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
