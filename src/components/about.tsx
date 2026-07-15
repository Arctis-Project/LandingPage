"use client";
import * as React from "react";
import { Terminal, Globe, Heart } from "lucide-react";
import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";

const items = [
  { icon: Terminal, title: "Mission", text: "Create a seamless computing experience across desktop and mobile, powered by open-source technology and driven by community values." },
  { icon: Globe, title: "Vision", text: "A unified ecosystem where your devices work together harmoniously, with privacy and performance at their core." },
  { icon: Heart, title: "Values", text: "Transparency, community, and innovation. Building in the open and empowering users through choice and freedom." },
];

export function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-32 px-6 bg-[var(--bg-elevated)]">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className={cn("text-center mb-16", inView ? "animate-fade-up" : "opacity-0")}>
          <p className="text-sm font-medium tracking-widest uppercase mb-3 text-[var(--primary)]">About</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Arctis Project</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-xl mx-auto">
            Born from a passion for open-source and a desire to create something meaningful.
          </p>
        </div>

        <div className={cn("grid gap-5 md:grid-cols-3", inView ? "stagger" : "opacity-0")}>
          {items.map((item) => (
            <div key={item.title} className="rounded-[20px] bg-[var(--bg-card-solid)] border border-[var(--border)] p-8 text-center hover:border-[var(--border-strong)] transition-all duration-300">
              <div className="mb-5 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface)] text-[var(--primary)]">
                  <item.icon className="h-7 w-7" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
