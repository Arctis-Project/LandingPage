"use client";
import * as React from "react";
import { Monitor, Smartphone, Shield, Zap, Code, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";

const features = [
  { icon: Monitor, title: "ArctisOS Desktop", desc: "A Linux distribution built for modern hardware — clean, fast, and reliable." },
  { icon: Smartphone, title: "ArctisOS Mobile", desc: "An Android ROM bringing the Arctis experience to your phone with enhanced privacy." },
  { icon: Shield, title: "Privacy First", desc: "Your data belongs to you. Privacy is a core principle, not an afterthought." },
  { icon: Zap, title: "Blazing Fast", desc: "Optimized for speed and efficiency — a snappy experience without the bloat." },
  { icon: Code, title: "Open Source", desc: "Transparent development with full community contributions." },
  { icon: Users, title: "Community", desc: "Built by the community, for the community." },
];

export function Features() {
  const { ref, inView } = useInView();

  return (
    <section id="features" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={cn("text-center mb-16", inView ? "animate-fade-up" : "opacity-0")}>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 text-[var(--md-primary)]">Features</p>
          <h2 className="text-3xl md:text-[45px] font-bold mb-4 leading-tight">What We&apos;re Building</h2>
          <p className="text-[var(--text-sec)] text-lg max-w-xl mx-auto">Arctis Project is a vision for a better, more open computing ecosystem.</p>
        </div>

        <div className={cn("grid gap-5 sm:grid-cols-2 lg:grid-cols-3", inView ? "stagger" : "opacity-0")}>
          {features.map((f) => (
            <Card key={f.title} className="group">
              <CardHeader>
                <div className="mb-1 flex h-14 w-14 items-center justify-center rounded-[var(--md-shape-l)] bg-[var(--md-secondary-container)] text-[var(--md-on-secondary-container)] transition-all duration-200 group-hover:bg-[var(--md-primary)] group-hover:text-[var(--md-on-primary)]">
                  <f.icon className="h-7 w-7" />
                </div>
                <CardTitle>{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{f.desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
