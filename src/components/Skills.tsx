import { skills } from "../data/skills";
function Skills() {
    return (
        <main className="w-full max-w-5xl h-full mx-auto pt-16 p-2 flex flex-col gap-2">
            <div className="w-full flex items-center justify-start font-monospace">
                <h1 className="text-(--text) text-xs sm:text-sm font-bold text-shadow-sm/20">
                    $ ls ~/skills
                </h1>
            </div>
            <div className="w-full overflow-scroll flex-1 grid grid-cols-1 md:grid-cols-2 auto-rows-max gap-4 font-monospace">
                <div className="h-40 border p-2 border-(--border) rounded-xl shadow-sm hover:shadow-md flex flex-col items-start justify-start gap-1">
                    <h1 className="text-(--text) text-xs sm:text-base font-bold text-shadow-sm/10">
                        $ nvim languages.txt
                    </h1>
                    <div className="w-full flex flex-col items-start justify-center gap-1">
                        {skills?.languages.map((language, key) => (
                            <p
                                key={key}
                                className="text-xs sm:text-sm font-semibold text-shadow-sm/10 text-(--text)"
                            >
                                - {language}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="h-40 border p-2 border-(--border) rounded-xl shadow-sm hover:shadow-md flex flex-col items-start justify-start gap-1">
                    <h1 className="text-(--text) text-xs sm:text-base font-bold text-shadow-sm/10">
                        $ nvim frontend.txt
                    </h1>
                    <div className="w-full flex flex-col items-start justify-center gap-1">
                        {skills?.frontend.map((skill, key) => (
                            <p
                                key={key}
                                className="text-xs sm:text-sm text-(--text) font-semibold text-shadow-sm/10"
                            >
                                - {skill}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="h-40 border p-2 border-(--border) rounded-xl shadow-sm hover:shadow-md flex flex-col items-start justify-start gap-1">
                    <h1 className="text-(--text) text-xs sm:text-base font-bold text-shadow-sm/10">
                        $ nvim backend.txt
                    </h1>
                    <div className="w-full flex flex-col items-start justify-center gap-1">
                        {skills?.backend.map((skill, key) => (
                            <p
                                key={key}
                                className="text-xs sm:text-smtext-(--text) font-semibold text-shadow-sm/10"
                            >
                                - {skill}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="h-40 border p-2 border-(--border) rounded-xl shadow-sm hover:shadow-md flex flex-col items-start justify-start gap-1">
                    <h1 className="text-(--text) text-sm sm:text-base font-bold text-shadow-sm/10">
                        $ nvim databases.txt
                    </h1>
                    <div className="w-full flex flex-col items-start justify-center gap-1">
                        {skills?.databases.map((skill, key) => (
                            <p
                                key={key}
                                className="text-xs sm:text-sm text-(--text) font-semibold text-shadow-sm/10"
                            >
                                - {skill}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="h-40 border p-2 border-(--border) rounded-xl shadow-sm hover:shadow-md flex flex-col items-start justify-start gap-1">
                    <h1 className="text-(--text) text-sm sm:text-base font-bold text-shadow-sm/10">
                        $ nvim tools.txt
                    </h1>
                    <div className="w-full flex flex-col items-start justify-center gap-1">
                        {skills?.tools.map((skill, key) => (
                            <p
                                key={key}
                                className="text-xs sm:text-sm text-(--text) font-semibold text-shadow-sm/10"
                            >
                                - {skill}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="h-40 border p-2 border-(--border) rounded-xl shadow-sm hover:shadow-md flex flex-col items-start justify-start gap-1">
                    <h1 className="text-(--text) text-sm sm:text-base font-bold text-shadow-sm/10">
                        $ nvim security.txt
                    </h1>
                    <div className="w-full flex flex-col items-start justify-center gap-1">
                        {skills?.security.map((skill, key) => (
                            <p
                                key={key}
                                className="text-xs sm:text-sm text-(--text) font-semibold text-shadow-sm/10"
                            >
                                - {skill}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="h-40 border p-2 border-(--border) rounded-xl shadow-sm hover:shadow-md flex flex-col items-start justify-start gap-1">
                    <h1 className="text-(--text) text-sm sm:text-base font-bold text-shadow-sm/10">
                        $ nvim system.txt
                    </h1>
                    <div className="w-full grid grid-rows-5 grid-cols-2">
                        {skills?.system.map((skill, key) => (
                            <p
                                key={key}
                                className="text-xs sm:text-sm text-(--text) font-semibold text-shadow-sm/10"
                            >
                                - {skill}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Skills;
