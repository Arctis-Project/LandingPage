"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/arctis_square.png"
            alt="Arctis Project Logo"
            width={36}
            height={36}
            className="rounded-xl"
          />
          <span className="text-lg font-bold tracking-tight">Arctis Project</span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          <Link href="#features">
            <Button variant="ghost" className="rounded-2xl">Features</Button>
          </Link>
          <Link href="#about">
            <Button variant="ghost" className="rounded-2xl">About</Button>
          </Link>
          <Link href="#founders">
            <Button variant="ghost" className="rounded-2xl">Founders</Button>
          </Link>
          <div className="ml-2 flex items-center gap-1">
            <Button variant="ghost" size="icon" className="rounded-2xl" asChild>
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
            <ThemeSwitcher />
          </div>
        </nav>

        <div className="flex md:hidden items-center gap-2">
          <ThemeSwitcher />
          <Button
            variant="ghost"
            size="icon"
            className="rounded-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="border-t bg-background/95 backdrop-blur-xl px-4 py-4 space-y-2">
          <Link href="#features" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" className="w-full justify-start rounded-2xl">Features</Button>
          </Link>
          <Link href="#about" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" className="w-full justify-start rounded-2xl">About</Button>
          </Link>
          <Link href="#founders" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" className="w-full justify-start rounded-2xl">Founders</Button>
          </Link>
          <div className="flex gap-2 pt-2">
            <Button variant="outline" className="flex-1 rounded-2xl gap-2" asChild>
              <a href="https://github.com/Arctis-Project" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="default" className="flex-1 rounded-2xl gap-2" asChild>
              <a href="https://discord.gg/GgKCuySH2R" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Discord
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
