"use client";

import * as React from "react";
import Image from "next/image";
import { Github, MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/arctis_square.png"
              alt="Arctis Project"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-lg font-bold">Arctis Project</span>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="rounded-2xl" asChild>
              <a href="https://github.com/Arctis-Project" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="default" size="sm" className="rounded-2xl gap-2" asChild>
              <a href="https://discord.gg/GgKCuySH2R" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Discord
              </a>
            </Button>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">
              Building the future of open-source computing.
            </p>
            <p className="flex items-center justify-center gap-1">
              Made with <Heart className="h-3 w-3 fill-current" /> by the Arctis Community
            </p>
          </div>

          <div className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} Arctis Project. Open Source under GPL.
          </div>
        </div>
      </div>
    </footer>
  );
}
