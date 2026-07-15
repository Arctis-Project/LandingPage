"use client";
import * as React from "react";
import { ThemeProvider as NextThemes } from "next-themes";

export function ThemeProvider({ children, ...p }: React.ComponentProps<typeof NextThemes>) {
  return <NextThemes {...p}>{children}</NextThemes>;
}
