"use client";
import * as React from "react";
import { Crown } from "lucide-react";
import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";

const founders = [
  { name: "LordPipon", role: "Founder", text: "Visionary behind Arctis Project, driving development of ArctisOS and shaping the future." },
  { name: "rm13", role: "Founder", text: "Technical architect bringing the Arctis vision to life with robust and elegant solutions." },
];

export function Founders() {
  const { ref, inView } = useInView();

  return (
    <section id="founders" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <div ref={ref} className={cn("text-center mb-16", inView ? "animate-fade-up" : "opacity-0")}>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-[var(--md-primary)]">Team</p>
          <h2 className="text-3xl md:text-[45px] font-bold mb-4 leading-tight">Founders</h2>
          <p className="text-[var(--text-sec)] text-lg">The people behind Arctis Project</p>
        </div>

        <div className={cn("grid gap-5 sm:grid-cols-2", inView ? "stagger" : "opacity-0")}>
          {founders.map((f) => (
            <div key={f.name} className="state-layer rounded-[var(--md-shape-xl)] bg-[var(--bg-elevated)] p-8 text-center">
              <div className="mb-5 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-[var(--md-shape-l)] bg-[var(--md-secondary-container)] text-[var(--md-on-secondary-container)] transition-all duration-200 group-hover:bg-[var(--md-primary)] group-hover:text-[var(--md-on-primary)]">
                  <Crown className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-lg font-medium mb-1">{f.name}</h3>
              <p className="text-sm font-medium text-[var(--md-primary)] mb-3">{f.role}</p>
              <p className="text-sm text-[var(--text-sec)] leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
