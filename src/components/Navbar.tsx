import { SunMedium, Moon } from "lucide-react";
import type { ITheme } from "../App";

interface INavProps {
    handleToggleTheme: () => void;
    theme: ITheme;
    handleActiveMenu: (val: string) => void;
}

function Navbar({ handleToggleTheme, theme, handleActiveMenu }: INavProps) {
    return (
        <nav className="z-50 fixed w-full max-w-5xl left-1/2 -translate-x-1/2 py-4 px-2 rounded-md top-0 flex items-center justify-between bg-(--bg)">
            <ul className="w-full flex items-center gap-6 font-monospace text-sm font-bold text-shadow-sm/20">
                <li
                    onClick={() => handleActiveMenu("hero")}
                    className="hover:cursor-pointer hover:underline text-(--text) hover:text-(--text-muted) select-none"
                >
                    Home
                </li>
                <li
                    onClick={() => handleActiveMenu("projects")}
                    className="hover:cursor-pointer hover:underline text-(--text) hover:text-(--text-muted) select-none"
                >
                    Projects
                </li>
                <li
                    onClick={() => handleActiveMenu("skills")}
                    className="hover:cursor-pointer hover:underline text-(--text) hover:text-(--text-muted) select-none"
                >
                    Skills
                </li>
                <li
                    onClick={() => handleActiveMenu("resume")}
                    className="hover:cursor-pointer hover:underline text-(--text) hover:text-(--text-muted) select-none"
                >
                    Resume
                </li>
                <li
                    onClick={() => handleActiveMenu("contact")}
                    className="hover:cursor-pointer hover:underline text-(--text) hover:text-(--text-muted) select-none"
                >
                    Contact
                </li>
            </ul>
            <button
                onClick={handleToggleTheme}
                className="flex items-center justify-center gap-1 bg-(--accent) hover:bg-(--accent-hover) text-white px-4 py-1.5 rounded-md text-sm font-medium hover:cursor-pointer shadow-(--shadow-sm) hover:shadow-(--shadow-md)"
            >
                {theme.theme === "light" ? (
                    <SunMedium size={18} />
                ) : (
                    <Moon size={18} />
                )}
                <span className="select-none">Toggle</span>
            </button>
        </nav>
    );
}

export default Navbar;
