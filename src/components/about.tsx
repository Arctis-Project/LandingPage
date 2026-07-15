"use client";

import * as React from "react";
import { Heart, Globe, Terminal } from "lucide-react";
import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";

const items = [
  {
    icon: Terminal,
    title: "Our Mission",
    description:
      "To create a seamless computing experience across desktop and mobile, powered by open-source technology and driven by community values.",
  },
  {
    icon: Globe,
    title: "The Vision",
    description:
      "A unified ecosystem where your desktop and mobile devices work together harmoniously, with privacy and performance at their core.",
  },
  {
    icon: Heart,
    title: "The Values",
    description:
      "Transparency, community, and innovation. We believe in building in the open and empowering users through choice and freedom.",
  },
];

export function About() {
  const { ref: headerRef, isInView: headerVisible } = useInView();
  const { ref: gridRef, isInView: gridVisible } = useInView();

  return (
    <section id="about" className="py-28 px-5">
      <div className="mx-auto max-w-4xl">
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-16",
            headerVisible ? "animate-m3e-up" : "opacity-0"
          )}
        >
          <h2
            className="font-bold tracking-tight mb-4"
            style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
          >
            About Arctis Project
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-light">
            Born from a passion for open-source and a desire to create something meaningful.
          </p>
        </div>

        <div ref={gridRef} className={cn("grid gap-8 md:grid-cols-3", gridVisible ? "m3e-stagger" : "opacity-0")}>
          {items.map((item) => (
            <div
              key={item.title}
              className="text-center p-8 m3-glass rounded-[var(--m3-sys-shape-2xl)] m3e-hover cursor-default"
            >
              <div className="mb-5 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-[var(--m3-sys-shape-xl)] bg-m3-surface-variant transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-m3-primary group-hover:text-m3-on-primary group-hover:scale-110 group-hover:rotate-6">
                  <item.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-[0.9rem] leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
