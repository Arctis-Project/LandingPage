"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, Github, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";

export function Hero() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden pt-16">
      {/* Gradient orbs — slow glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[10%] left-[15%] h-[600px] w-[600px] rounded-full bg-gradient-to-br from-muted-foreground/[0.03] to-transparent blur-[120px] animate-m3e-glow" />
        <div className="absolute bottom-[10%] right-[10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-muted-foreground/[0.025] to-transparent blur-[100px] animate-m3e-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[40%] left-[50%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-gradient-to-b from-muted-foreground/[0.02] to-transparent blur-[80px] animate-m3e-glow" style={{ animationDelay: "3s" }} />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-4xl px-5 text-center">
        {/* Logo — morph in */}
        <div
          className={cn(
            "mb-10 flex justify-center",
            isInView ? "animate-m3e-morph" : "opacity-0"
          )}
        >
          <div className="relative group">
            <div className="absolute inset-0 rounded-[var(--m3-sys-shape-2xl)] bg-gradient-to-br from-foreground/8 to-transparent blur-3xl scale-125 transition-all duration-[1200ms] group-hover:scale-150 group-hover:opacity-80 opacity-50" />
            <Image
              src="/arctis_square.png"
              alt="Arctis Project"
              width={128}
              height={128}
              className="relative rounded-[var(--m3-sys-shape-2xl)] shadow-[var(--m3-sys-elevation-4)] transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:shadow-[var(--m3-sys-elevation-4)] group-hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Title */}
        <h1
          className={cn(
            "mb-5 font-bold tracking-tight",
            isInView ? "animate-m3e-up-slow" : "opacity-0"
          )}
          style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
        >
          <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
            Arctis Project
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={cn(
            "mb-5 text-xl text-muted-foreground sm:text-2xl font-light tracking-wide",
            isInView ? "animate-m3e-up" : "opacity-0"
          )}
          style={{ animationDelay: "200ms" }}
        >
          Building the future of open-source computing
        </p>

        {/* Description */}
        <p
          className={cn(
            "mb-14 text-base text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed",
            isInView ? "animate-m3e-up" : "opacity-0"
          )}
          style={{ animationDelay: "400ms" }}
        >
          We are developing <strong className="text-foreground font-semibold">ArctisOS</strong> — a fresh Linux distribution
          and Android ROM crafted for performance, privacy, and elegance.
        </p>

        {/* CTA */}
        <div
          className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-4",
            isInView ? "animate-m3e-up" : "opacity-0"
          )}
          style={{ animationDelay: "600ms" }}
        >
          <Button size="xl" variant="discord" className="rounded-[var(--m3-sys-shape-full)] gap-2.5 text-[1rem]" asChild>
            <a href="https://discord.gg/GgKCuySH2R" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Join Discord
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
          </Button>
          <Button size="xl" variant="outline" className="rounded-[var(--m3-sys-shape-full)] gap-2.5 text-[1rem]" asChild>
            <a href="https://github.com/Arctis-Project" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              View on GitHub
            </a>
          </Button>
        </div>

        {/* Stat chips */}
        <div
          className={cn(
            "mt-20 grid grid-cols-2 gap-4 sm:grid-cols-3 max-w-lg mx-auto",
            isInView ? "m3e-stagger" : "opacity-0"
          )}
          style={{ animationDelay: "800ms" }}
        >
          {[
            { label: "Desktop OS", value: "Linux" },
            { label: "Custom ROM", value: "Android" },
            { label: "Source", value: "Open" },
          ].map((item) => (
            <div
              key={item.value}
              className="m3-glass rounded-[var(--m3-sys-shape-2xl)] p-5 text-center m3e-hover cursor-default"
            >
              <div className="text-xl font-bold">{item.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
