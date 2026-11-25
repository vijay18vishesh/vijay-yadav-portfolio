"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";
const ThemeContext = createContext<{theme:Theme; toggle:()=>void}>({theme:"dark",toggle:()=>{}});
export function ThemeProvider({children}:{children:React.ReactNode}) {
  const [theme,setTheme] = useState<Theme>("dark");
  useEffect(() => {
    const saved = localStorage.getItem("vjy-theme") as Theme | null;
    const initial = saved || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  },[]);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next); document.documentElement.dataset.theme = next; localStorage.setItem("vjy-theme",next);
  };
  return <ThemeContext.Provider value={{theme,toggle}}>{children}</ThemeContext.Provider>;
}
export const useTheme = () => useContext(ThemeContext);
