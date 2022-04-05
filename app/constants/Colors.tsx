import { createContext, useState } from "react";

export type t_ColorMode = 'dark' | 'light' | 'auto' | null | undefined;
export type t_ColorTheme = 'dark' | 'light';

export const palette = {
  light: {
    dominant: "#FFF",
    complementary: "#62C948",
    accent: "#C4C4C4",
    dark: "#333",
    light: "#000",
    success: "#000",
    warning: "#000",
    danger: "#000",
    text: "#000"
  },
  dark: {
    dominant: "#000",
    complementary: "#000",
    accent: "#000",
    light: "#000",
    dark: "#000",
    success: "#000",
    warning: "#000",
    danger: "#000",
    text: "#000"
  }
}

export function toTheme(colorMode: t_ColorMode): t_ColorTheme {
  return colorMode === 'light' ? 'light' : 'dark';
}

export const ThemeContext = createContext<t_ColorTheme>('light');