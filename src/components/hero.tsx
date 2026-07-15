"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, Download, Github, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-muted-foreground/5 to-transparent blur-3xl" />
      
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-muted-foreground/20 to-transparent blur-2xl" />
            <Image
              src="/arctis_square.png"
              alt="Arctis Project"
              width={120}
              height={120}
              className="relative rounded-3xl shadow-2xl"
              priority
            />
          </div>
        </div>

        <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl">
          <span className="bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent">
            Arctis Project
          </span>
        </h1>
        
        <p className="mb-4 text-lg text-muted-foreground sm:text-xl">
          Building the future of open-source computing
        </p>

        <p className="mb-10 text-base text-muted-foreground/80 max-w-2xl mx-auto">
          We are developing <strong className="text-foreground">ArctisOS</strong> — a fresh Linux distribution 
          and Android ROM crafted for performance, privacy, and elegance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="xl" className="rounded-3xl gap-2" asChild>
            <a href="https://discord.gg/GgKCuySH2R" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Join Discord
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button size="xl" variant="outline" className="rounded-3xl gap-2" asChild>
            <a href="https://github.com/Arctis-Project" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              View on GitHub
            </a>
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 max-w-lg mx-auto">
          <div className="rounded-3xl bg-card/50 backdrop-blur-sm border p-4 text-center">
            <div className="text-2xl font-bold">Linux</div>
            <div className="text-xs text-muted-foreground">Desktop OS</div>
          </div>
          <div className="rounded-3xl bg-card/50 backdrop-blur-sm border p-4 text-center">
            <div className="text-2xl font-bold">Android</div>
            <div className="text-xs text-muted-foreground">Custom ROM</div>
          </div>
          <div className="rounded-3xl bg-card/50 backdrop-blur-sm border p-4 text-center col-span-2 sm:col-span-1">
            <div className="text-2xl font-bold">Open</div>
            <div className="text-xs text-muted-foreground">Source</div>
          </div>
        </div>
      </div>
    </section>
  );
}
