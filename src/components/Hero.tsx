import { Dot } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
    return (
        <main className="max-w-5xl bg-transparent mx-auto min-h-screen w-full flex items-center justify-center">
            <div className="h-full flex-2 flex flex-col items-start justify-center gap-4">
                <div className="font-monospace flex flex-col items-start">
                    <div className="flex items-center gap-0">
                        <Dot size={50} />
                        <span className="text-md font-bold text-shadow-sm/20">
                            $whoami
                        </span>
                    </div>
                    <h1 className="text-7xl font-extrabold text-shadow-lg/30">
                        Vinay Thakur
                    </h1>
                </div>
                <div className="font-monospace flex items-center text-lg font-bold">
                    <span className="text-shadow-md/20">
                        Full Stack Developer
                    </span>
                    <Dot size={30} />
                    <span className="text-shadow-md/30">Backend Engineer</span>
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
                            href="#"
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
                            href="#"
                            target="_blank"
                            className="flex items-center gap-1"
                        >
                            <FaLinkedin />
                            LinkedIn
                        </a>
                    </button>
                </div>
            </div>
            <div className="h-full flex-1 flex items-center justify-center">
                Right Side
            </div>
        </main>
    );
}

export default Hero;
