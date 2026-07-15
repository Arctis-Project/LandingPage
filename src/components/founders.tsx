"use client";
import * as React from "react";
import { Crown } from "lucide-react";
import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";

const founders = [
  { name: "LordPipon", role: "Founder", text: "Visionary behind Arctis Project, driving the development of ArctisOS and shaping the future of the project." },
  { name: "rm13", role: "Founder", text: "Technical architect bringing the Arctis vision to life, ensuring robust and elegant solutions across all platforms." },
];

export function Founders() {
  const { ref, inView } = useInView();

  return (
    <section id="founders" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div ref={ref} className={cn("text-center mb-16", inView ? "animate-fade-up" : "opacity-0")}>
          <p className="text-sm font-medium tracking-widest uppercase mb-3 text-[var(--primary)]">Team</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Founders</h2>
          <p className="text-[var(--text-secondary)] text-lg">The people behind Arctis Project</p>
        </div>

        <div className={cn("grid gap-5 sm:grid-cols-2", inView ? "stagger" : "opacity-0")}>
          {founders.map((f) => (
            <div key={f.name} className="group rounded-[20px] bg-[var(--bg-elevated)] border border-[var(--border)] p-8 text-center hover:border-[var(--border-strong)] transition-all duration-300">
              <div className="mb-5 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--surface)] text-[var(--primary)] transition-all duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                  <Crown className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-1">{f.name}</h3>
              <p className="text-sm text-[var(--primary)] font-medium mb-3">{f.role}</p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
