"use client";

import * as React from "react";
import { Shield, Zap, Smartphone, Monitor, Code, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

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
  return (
    <section id="features" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
            What We&apos;re Building
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Arctis Project is more than just software. It&apos;s a vision for a better, 
            more open computing ecosystem.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="group hover:border-foreground/20 transition-all duration-300">
              <CardHeader>
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
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
