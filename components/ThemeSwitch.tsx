"use client"

import React, {useEffect, useState} from 'react'
import {SunIcon, MoonIcon} from "@heroicons/react/24/outline"
import {motion} from "framer-motion";

type Theme = "light" | "dark";

export default function ThemeSwitch() {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light")
            window.localStorage.setItem("dark", "theme");
            document.documentElement.classList.remove("dark");
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme | null;

        if (localTheme) {
            setTheme(localTheme)

            if (localTheme === "dark") {
                document.documentElement.classList.add("dark");
            }
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        }
    }, []);

    return (
        <button
            className="fixed bottom-5 right-5 w-[3rem] h-[3rem]  dark:bg-[#3C3E3F] bg-gray-100 bg-opacity-40 backdrop-blur-[0.5rem] border dark:border-gray-500 border-black border-opacity-20 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
            onClick={toggleTheme}
        >
            {
                theme === "light" ?
                    <SunIcon className="text-black h-5"/> : <MoonIcon className="text-gray-400 h-5"/>
            }
        </button>
    )
}
