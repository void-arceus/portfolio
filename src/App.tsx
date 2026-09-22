import { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

export interface ITheme {
    theme: "dark" | "light";
}

function getThemePreference(): ITheme {
    const currTheme = localStorage.getItem("arceus-portfolio-theme");
    if (!currTheme || currTheme.trim() === "") {
        localStorage.setItem("arceus-portfolio-theme", "light");
    }
    if (currTheme === "light" || currTheme === "dark") {
        return { theme: currTheme };
    }
    return { theme: "light" };
}

function App() {
    const [theme, setTheme] = useState<ITheme>({ theme: "light" });
    const [menu, setMenu] = useState<string>("hero");

    useEffect(() => {
        const currTheme: ITheme = getThemePreference();
        const htmlElement = document.documentElement;
        const currClass = htmlElement.className;
        if (currClass !== currTheme.theme) {
            htmlElement.classList.remove(currClass);
            htmlElement.classList.add(currTheme.theme);
        }
        setTheme(currTheme);
    }, []);

    function handleActiveMenu(val: string) {
        setMenu(val);
    }

    function handleToggleTheme() {
        const newTheme = theme.theme === "light" ? "dark" : "light";
        setTheme({ theme: newTheme });
        const htmlElement = document.documentElement;
        if (htmlElement.classList.contains("dark"))
            htmlElement.classList.remove("dark");
        else {
            htmlElement.classList.add("dark");
        }
        localStorage.setItem("arceus-portfolio-theme", newTheme);
    }

    return (
        <>
            <Navbar
                handleToggleTheme={handleToggleTheme}
                theme={theme}
                handleActiveMenu={handleActiveMenu}
            />
            <Homepage menu={menu} />
        </>
    );
}

export default App;
