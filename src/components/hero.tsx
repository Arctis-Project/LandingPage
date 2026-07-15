"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, Github, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/lib/use-in-view";

export function Hero() {
  const { ref: heroRef, isInView } = useInView();

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden pt-16">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      <div className="absolute top-[15%] left-[20%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-muted-foreground/[0.04] to-transparent blur-[100px]" />
      <div className="absolute top-[30%] right-[15%] h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-muted-foreground/[0.03] to-transparent blur-[80px]" />

      <div ref={heroRef} className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        {/* Logo with morph-in animation */}
        <div
          className={cn(
            "mb-10 flex justify-center transition-all duration-[800ms] ease-[cubic-bezier(0.35,1.9,0.22,0.88)]",
            isInView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90"
          )}
        >
          <div className="relative group">
            <div className="absolute inset-0 rounded-[var(--m3-sys-shape-extra-large)] bg-gradient-to-br from-foreground/10 to-transparent blur-2xl scale-110 transition-all duration-[500ms] group-hover:scale-125 group-hover:opacity-60 opacity-40" />
            <Image
              src="/arctis_square.png"
              alt="Arctis Project"
              width={128}
              height={128}
              className="relative rounded-[var(--m3-sys-shape-extra-large)] shadow-[var(--m3-sys-elevation-3)] transition-all duration-[450ms] ease-[cubic-bezier(0.35,1.9,0.22,0.88)] group-hover:shadow-[var(--m3-sys-elevation-3)] group-hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Title with staggered fade */}
        <h1
          className={cn(
            "mb-4 font-bold tracking-tight transition-all duration-[700ms] ease-[cubic-bezier(0.35,1.9,0.22,0.88)] delay-100",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          <span className="bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent">
            Arctis Project
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={cn(
            "mb-4 text-lg text-muted-foreground sm:text-xl transition-all duration-[700ms] ease-[cubic-bezier(0.35,1.9,0.22,0.88)] delay-200",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          Building the future of open-source computing
        </p>

        {/* Description */}
        <p
          className={cn(
            "mb-12 text-base text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed transition-all duration-[700ms] ease-[cubic-bezier(0.35,1.9,0.22,0.88)] delay-300",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          We are developing <strong className="text-foreground font-semibold">ArctisOS</strong> — a fresh Linux distribution
          and Android ROM crafted for performance, privacy, and elegance.
        </p>

        {/* CTA buttons */}
        <div
          className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-[700ms] ease-[cubic-bezier(0.35,1.9,0.22,0.88)] delay-[400ms]",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <Button size="xl" className="rounded-[var(--m3-sys-shape-full)] gap-2.5" asChild>
            <a href="https://discord.gg/GgKCuySH2R" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Join Discord
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
          <Button size="xl" variant="outline" className="rounded-[var(--m3-sys-shape-full)] gap-2.5" asChild>
            <a href="https://github.com/Arctis-Project" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              View on GitHub
            </a>
          </Button>
        </div>

        {/* Stats chips */}
        <div
          className={cn(
            "mt-20 grid grid-cols-2 gap-4 sm:grid-cols-3 max-w-lg mx-auto transition-all duration-[800ms] ease-[cubic-bezier(0.35,1.9,0.22,0.88)] delay-[600ms]",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          {[
            { label: "Desktop OS", value: "Linux" },
            { label: "Custom ROM", value: "Android" },
            { label: "Source", value: "Open" },
          ].map((item, i) => (
            <div
              key={item.value}
              className={cn(
                "rounded-[var(--m3-sys-shape-extra-large)] bg-m3-surface-variant/60 backdrop-blur-sm border border-border/50 p-5 text-center transition-all duration-[450ms] ease-[cubic-bezier(0.35,1.9,0.22,0.88)] hover:shadow-[var(--m3-sys-elevation-2)] hover:scale-[1.04] hover:border-foreground/15 cursor-default",
              )}
              style={{ transitionDelay: `${700 + i * 80}ms` }}
            >
              <div className="text-xl font-bold">{item.value}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}
