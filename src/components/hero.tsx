"use client";
import * as React from "react";
import Image from "next/image";
import { Download, MessageCircle, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";

export function Hero() {
  const { ref, inView } = useInView();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-b from-[var(--primary-glow)] to-transparent pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
        <div className={cn("mb-8", inView ? "animate-scale-in" : "opacity-0")}>
          <Image
            src="/arctis_square.png"
            alt="Arctis Project"
            width={100}
            height={100}
            className="mx-auto rounded-3xl shadow-2xl"
            priority
          />
        </div>

        <p className={cn("text-sm font-medium tracking-widest uppercase mb-4 text-[var(--primary)]", inView ? "animate-fade-up" : "opacity-0")}>
          Coming Soon
        </p>

        <h1 className={cn("text-5xl md:text-7xl font-bold tracking-tight mb-6", inView ? "animate-fade-up" : "opacity-0")} style={{ animationDelay: "100ms" }}>
          Arctis Project
        </h1>

        <p className={cn("text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed", inView ? "animate-fade-up" : "opacity-0")} style={{ animationDelay: "200ms" }}>
          A Linux distribution and Android ROM built for performance, privacy, and elegance. Open source, community driven.
        </p>

        <div className={cn("flex flex-col sm:flex-row items-center justify-center gap-4", inView ? "animate-fade-up" : "opacity-0")} style={{ animationDelay: "300ms" }}>
          <Button variant="discord" size="lg" asChild>
            <a href="https://discord.gg/GgKCuySH2R" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Join Discord
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
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
