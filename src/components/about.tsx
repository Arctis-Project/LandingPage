"use client";

import * as React from "react";
import { Heart, Globe, Terminal } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
            About Arctis Project
          </h2>
          <p className="text-muted-foreground text-lg">
            Born from a passion for open-source and a desire to create something meaningful.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center p-6">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-secondary">
                <Terminal className="h-8 w-8 text-secondary-foreground" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To create a seamless computing experience across desktop and mobile, 
              powered by open-source technology and driven by community values.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-secondary">
                <Globe className="h-8 w-8 text-secondary-foreground" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">The Vision</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A unified ecosystem where your desktop and mobile devices work together 
              harmoniously, with privacy and performance at their core.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-secondary">
                <Heart className="h-8 w-8 text-secondary-foreground" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">The Values</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transparency, community, and innovation. We believe in building in the open 
              and empowering users through choice and freedom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
