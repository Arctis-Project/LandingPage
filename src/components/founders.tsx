"use client";

import * as React from "react";
import { Crown } from "lucide-react";

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
  return (
    <section id="founders" className="py-24 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
            Meet the Founders
          </h2>
          <p className="text-muted-foreground text-lg">
            The people behind Arctis Project
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="group relative overflow-hidden rounded-3xl border bg-card p-8 text-center transition-all duration-300 hover:shadow-lg hover:border-foreground/20"
            >
              <div className="mb-4 flex justify-center">
                <div className="relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Crown className="h-10 w-10" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">{founder.name}</h3>
              <p className="text-sm font-medium text-muted-foreground mb-3">{founder.role}</p>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">
                {founder.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
