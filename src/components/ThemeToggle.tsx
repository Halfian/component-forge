import { useState, useEffect, type ReactElement } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle(): ReactElement {
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark");
        }        ;
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded border border-[var(--app-line)] hover:bg-[var(--app-line)] transition"
        >
            {theme === "dark" ? (<MoonIcon className="w-5 h-5 text-[var(--app-accent)]" />) : (<SunIcon className="w-5 h-5 text-[var(--app-accent)]" />)}
        </button>
    )
};