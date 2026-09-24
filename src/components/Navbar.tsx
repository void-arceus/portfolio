import { useState } from "react";
import { SunMedium, Moon } from "lucide-react";
import { RiMenuAddFill } from "react-icons/ri";
import type { ITheme } from "../App";

interface INavProps {
    handleToggleTheme: () => void;
    theme: ITheme;
    handleActiveMenu: (val: string) => void;
}

function Navbar({ handleToggleTheme, theme, handleActiveMenu }: INavProps) {
    const [sideBar, setSideBar] = useState<boolean>(false);

    function handleSideBar() {
        setSideBar((prev) => !prev);
    }

    return (
        <nav className="z-50 fixed w-full max-w-5xl left-1/2 -translate-x-1/2 py-4 px-2 top-0 flex items-center bg-(--bg)">
            <div className="w-full sm:hidden flex font-monospace">
                <div className={`w-full flex flex-col items-end justify-end`}>
                    <div className="w-full flex items-center justify-between">
                        <button
                            onClick={() => handleToggleTheme()}
                            className="flex items-center gap-1 (--border-hover) bg-(--github) text-(--github-text) px-4 py-1.5 rounded-md"
                        >
                            {theme.theme === "light" ? (
                                <SunMedium size={15} />
                            ) : (
                                <Moon size={15} />
                            )}
                            <span className="text-xs font-bold text-shadow-sm/10 hover:cursor-pointer text-(--github-text)">
                                Theme
                            </span>
                        </button>
                        <button
                            onClick={handleSideBar}
                            className="text-xs font-bold text-shadow-sm/10 flex items-center gap-1 hover:cursor-pointer hover:text-(--text-muted)"
                        >
                            Menu <RiMenuAddFill size={18} />
                        </button>
                    </div>
                    {sideBar ? (
                        <div
                            className={
                                "w-full flex items-center bg-(--bg) pb-6 mt-3"
                            }
                        >
                            <ul className="w-full flex flex-col text-sm font-semibold text-shadow-sm/10 gap-2">
                                <li
                                    onClick={() => {
                                        handleActiveMenu("hero");
                                        handleSideBar();
                                    }}
                                    className="hover:cursor-pointer text-xs text-(--text) hover:text-(--text-muted) select-none border-b border-(--border) hover:border-(--border-hover) pb-1"
                                >
                                    Home
                                </li>
                                <li
                                    onClick={() => {
                                        handleActiveMenu("projects");
                                        handleSideBar();
                                    }}
                                    className="hover:cursor-pointer text-xs text-(--text) hover:text-(--text-muted) select-none border-b border-(--border) hover:border-(--border-hover) pb-1"
                                >
                                    Projects
                                </li>
                                <li
                                    onClick={() => {
                                        handleActiveMenu("skills");
                                        handleSideBar();
                                    }}
                                    className="hover:cursor-pointer text-xs text-(--text) hover:text-(--text-muted) select-none border-b border-(--border) hover:border-(--border-hover) pb-1"
                                >
                                    Skills
                                </li>
                                <li
                                    onClick={() => {
                                        handleActiveMenu("resume");
                                        handleSideBar();
                                    }}
                                    className="hover:cursor-pointer text-xs text-(--text) hover:text-(--text-muted) select-none border-b border-(--border) hover:border-(--border-hover) pb-1"
                                >
                                    Resume
                                </li>
                                <li
                                    onClick={() => {
                                        handleActiveMenu("contact");
                                        handleSideBar();
                                    }}
                                    className="hover:cursor-pointer text-xs text-(--text) hover:text-(--text-muted) select-none border-b border-(--border) hover:border-(--border) pb-1"
                                >
                                    Contact
                                </li>
                            </ul>
                        </div>
                    ) : null}
                </div>
            </div>
            <div className="hidden sm:w-full sm:flex items-center justify-between">
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
                    className="flex items-center justify-center gap-1 bg-(--github) hover:bg-(--github-hover) text-(--github-text) px-4 py-1.5 rounded-md text-sm font-medium hover:cursor-pointer shadow-(--shadow-sm) hover:shadow-(--shadow-md)"
                >
                    {theme.theme === "light" ? (
                        <SunMedium size={18} />
                    ) : (
                        <Moon size={18} />
                    )}
                    <span className="select-none">Toggle</span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
