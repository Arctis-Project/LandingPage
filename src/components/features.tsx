"use client";

import * as React from "react";
import { Shield, Zap, Smartphone, Monitor, Code, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useInView } from "@/lib/use-in-view";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Monitor,
    title: "ArctisOS Desktop",
    description: "A Linux distribution built from the ground up for modern hardware, offering a clean and efficient computing experience.",
  },
  {
    icon: Smartphone,
    title: "ArctisOS Mobile",
    description: "An Android ROM that brings the Arctis experience to your mobile device with enhanced privacy and performance.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data belongs to you. ArctisOS is designed with privacy as a core principle, not an afterthought.",
  },
  {
    icon: Zap,
    title: "Blazing Fast",
    description: "Optimized for speed and efficiency, ArctisOS delivers a snappy experience without the bloat.",
  },
  {
    icon: Code,
    title: "Fully Open Source",
    description: "Transparent development with community contributions. See exactly what's running on your devices.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built by the community, for the community. Join us in shaping the future of open-source computing.",
  },
];

export function Features() {
  const { ref: headerRef, isInView: headerVisible } = useInView();
  const { ref: gridRef, isInView: gridVisible } = useInView({ threshold: 0.05 });

  return (
    <section id="features" className="py-28 px-4">
      <div className="mx-auto max-w-6xl">
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
            What We&apos;re Building
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Arctis Project is more than just software. It&apos;s a vision for a better,
            more open computing ecosystem.
          </p>
        </div>

        <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 m3e-stagger">
          {features.map((feature, i) => (
            <Card
              key={feature.title}
              className={cn(
                "group",
                gridVisible ? "opacity-100" : "opacity-0"
              )}
              style={{
                animationDelay: gridVisible ? `${i * 80}ms` : undefined,
              }}
            >
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-[var(--m3-sys-shape-large)] bg-m3-surface-variant text-foreground transition-all duration-[450ms] ease-[cubic-bezier(0.35,1.9,0.22,0.88)] group-hover:bg-m3-primary group-hover:text-m3-on-primary group-hover:scale-110 group-hover:shadow-[var(--m3-sys-elevation-2)] group-hover:rotate-3">
                  <feature.icon className="h-7 w-7 transition-transform duration-[450ms] ease-[cubic-bezier(0.35,1.9,0.22,0.88)] group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[0.9rem] leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
