"use client";
import * as React from "react";
import { Terminal, Globe, Heart } from "lucide-react";
import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";

const items = [
  { icon: Terminal, title: "Mission", text: "Create a seamless computing experience across desktop and mobile, powered by open-source technology." },
  { icon: Globe, title: "Vision", text: "A unified ecosystem where your devices work together, with privacy and performance at their core." },
  { icon: Heart, title: "Values", text: "Transparency, community, and innovation. Building in the open and empowering users." },
];

export function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={cn("text-center mb-16", inView ? "animate-fade-up" : "opacity-0")}>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-[var(--md-primary)]">About</p>
          <h2 className="text-3xl md:text-[45px] font-bold mb-4 leading-tight">About Arctis Project</h2>
          <p className="text-[var(--text-sec)] text-lg max-w-xl mx-auto">Born from a passion for open-source and a desire to create something meaningful.</p>
        </div>

        <div className={cn("grid gap-5 md:grid-cols-3", inView ? "stagger" : "opacity-0")}>
          {items.map((item) => (
            <div key={item.title} className="state-layer rounded-[var(--md-shape-xl)] bg-[var(--bg-card)] p-8 text-center">
              <div className="mb-5 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-[var(--md-shape-l)] bg-[var(--md-secondary-container)] text-[var(--md-on-secondary-container)]">
                  <item.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-lg font-medium mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--text-sec)] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
