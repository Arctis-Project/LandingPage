"use client";

import * as React from "react";
import { Crown } from "lucide-react";
import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";

const founders = [
  {
    name: "LordPipon",
    role: "Co-Founder",
    description: "Visionary behind Arctis Project, driving the development of ArctisOS and shaping the future of the project.",
  },
  {
    name: "rm13",
    role: "Co-Founder",
    description: "Technical architect bringing the Arctis vision to life, ensuring robust and elegant solutions across all platforms.",
  },
];

export function Founders() {
  const { ref: headerRef, isInView: headerVisible } = useInView();
  const { ref: gridRef, isInView: gridVisible } = useInView();

  return (
    <section id="founders" className="py-28 px-4">
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
            Meet the Founders
          </h2>
          <p className="text-muted-foreground text-lg">
            The people behind Arctis Project
          </p>
        </div>

        <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto m3e-stagger">
          {founders.map((founder, i) => (
            <div
              key={founder.name}
              className={cn(
                "group relative overflow-hidden rounded-[var(--m3-sys-shape-extra-large)] border bg-m3-surface p-9 text-center transition-all duration-[500ms] ease-[cubic-bezier(0.35,1.9,0.22,0.88)] hover:shadow-[var(--m3-sys-elevation-3)] hover:scale-[1.03] hover:border-foreground/15 cursor-default",
                gridVisible ? "opacity-100" : "opacity-0"
              )}
              style={{ animationDelay: gridVisible ? `${i * 120}ms` : undefined }}
            >
              {/* Decorative gradient blob */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-gradient-to-b from-muted-foreground/[0.06] to-transparent blur-2xl transition-all duration-[500ms] group-hover:w-52 group-hover:h-52 group-hover:opacity-100 opacity-60" />

              <div className="relative mb-5 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-[var(--m3-sys-shape-extra-large)] bg-m3-surface-variant transition-all duration-[450ms] ease-[cubic-bezier(0.35,1.9,0.22,0.88)] group-hover:bg-m3-primary group-hover:text-m3-on-primary group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[var(--m3-sys-elevation-2)]">
                  <Crown className="h-10 w-10 transition-transform duration-[450ms] ease-[cubic-bezier(0.35,1.9,0.22,0.88)] group-hover:scale-110" />
                </div>
              </div>
              <h3 className="relative text-xl font-bold mb-1">{founder.name}</h3>
              <p className="relative text-sm font-medium text-muted-foreground mb-3">{founder.role}</p>
              <p className="relative text-sm text-muted-foreground/80 leading-relaxed">
                {founder.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
