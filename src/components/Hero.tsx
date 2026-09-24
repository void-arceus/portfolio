import { Dot } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
    return (
        <main className="max-w-5xl bg-transparent mx-auto min-h-screen w-full flex items-center justify-center pt-16">
            <div className="w-full md:w-[55%] h-full flex flex-col items-start justify-center gap-4 p-2">
                <div className="font-monospace flex flex-col items-start">
                    <div className="flex items-center gap-0">
                        <span className="text-xs md:text-sm font-bold text-shadow-sm/20">
                            $whoami
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-7xl font-extrabold text-shadow-lg/30">
                        Vinay Thakur
                    </h1>
                </div>
                <div className="font-monospace flex items-center font-bold">
                    <span className="text-md text-shadow-md/20">
                        Full Stack Developer
                    </span>
                    <Dot size={30} />
                    <span className="text-md text-shadow-md/30">
                        Backend Engineer
                    </span>
                </div>
                <div className="font-monospace w-full">
                    <span className="text-sm font-bold text-shadow-sm/10">
                        I like building things from the ground up, understanding
                        what happens beneath the surface, and learning something
                        new with every project. I also enjoy solving challenging
                        problems, especially DSA, where I can break down complex
                        problems and find efficient solutions.
                    </span>
                </div>
                <div className="flex items-center gap-1">
                    <button className="hover:cursor-pointer text-sm font-medium px-3 py-1.5 bg-(--github) hover:bg-(--github-hover) text-(--github-text) rounded-md">
                        <a
                            href="https://github.com/void-arceus"
                            target="_blank"
                            className="flex items-center justify-center gap-1"
                        >
                            <FaGithub />
                            GitHub
                        </a>
                    </button>
                    <Dot />
                    <button className="hover:cursor-pointer text-sm font-medium bg-(--accent) hover:bg-(--accent-hover) px-3 py-1.5 rounded-md text-[#ffffff] shadow-sm hover:shadow-md">
                        <a
                            href="https://www.linkedin.com/in/vinay-thakur-3550a4285/"
                            target="_blank"
                            className="flex items-center gap-1"
                        >
                            <FaLinkedin />
                            LinkedIn
                        </a>
                    </button>
                </div>
            </div>
            <div className="hidden h-full w-[45%] md:flex items-center justify-center p-2">
                <div className="w-full border border-(--border) rounded-lg font-monospace flex flex-col gap-2 shadow-(--shadow-md)">
                    <div className="w-full border-b border-b-(--border) p-1 flex items-center justify-end">
                        <span className="text-(--text) text-sm font-bold text-shadow-sm/20">
                            vinay@arch-workspace:~
                        </span>
                    </div>
                    <div className="w-full p-2 flex flex-col gap-2">
                        <h1 className="text-(--text) text-sm font-bold text-shadow-sm/20">
                            $ neofetch --short
                        </h1>
                        <table className="border border-(--border) rounded-lg overflow-hidden border-separate border-spacing-0">
                            <tbody className="text-md text-(--text) font-semibold text-shadow-sm/20">
                                <tr className="">
                                    <td className="p-1">OS</td>
                                    <td>:</td>
                                    <td>Arch Linux x86_64</td>
                                </tr>
                                <tr className="">
                                    <td className="p-1">Focus</td>
                                    <td>:</td>
                                    <td>Backend and Distributed Systems</td>
                                </tr>
                                <tr className="">
                                    <td className="p-1">Core Stack</td>
                                    <td>:</td>
                                    <td className="">
                                        C++, TypeScript, Node.js, Express, React
                                    </td>
                                </tr>
                                <tr className="">
                                    <td className="p-1">Goal</td>
                                    <td>:</td>
                                    <td>Make my future self proud</td>
                                </tr>
                                <tr className="">
                                    <td className="p-1">Status</td>
                                    <td>:</td>
                                    <td>Open for Roles</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Hero;
