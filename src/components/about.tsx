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
    <section id="about" className="py-28 px-4 bg-m3-surface-container-low/50">
      <div className="mx-auto max-w-4xl">
        <div
          ref={headerRef}
          className={cn(
            "text-center mb-16 transition-all duration-[700ms] ease-[cubic-bezier(0.35,1.9,0.22,0.88)]",
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2
            className="font-bold tracking-tight mb-4"
            style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)" }}
          >
            About Arctis Project
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Born from a passion for open-source and a desire to create something meaningful.
          </p>
        </div>

        <div ref={gridRef} className="grid gap-8 md:grid-cols-3 m3e-stagger">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={cn(
                "text-center p-8 rounded-[var(--m3-sys-shape-extra-large)] bg-m3-surface border border-border/50 transition-all duration-[500ms] ease-[cubic-bezier(0.35,1.9,0.22,0.88)] hover:shadow-[var(--m3-sys-elevation-2)] hover:scale-[1.03] hover:border-foreground/15 cursor-default",
                gridVisible ? "opacity-100" : "opacity-0"
              )}
              style={{ animationDelay: gridVisible ? `${i * 100}ms` : undefined }}
            >
              <div className="mb-5 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-[var(--m3-sys-shape-extra-large)] bg-m3-surface-variant transition-all duration-[450ms] ease-[cubic-bezier(0.35,1.9,0.22,0.88)] group-hover:bg-m3-primary group-hover:text-m3-on-primary group-hover:scale-110 group-hover:rotate-6">
                  <item.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-[0.9rem] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
