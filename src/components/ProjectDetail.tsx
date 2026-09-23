import type { IProject, IProjectMetric } from "../data/projects";

interface IProjectDetailProps {
    handleShowDetails: () => void;
    data: IProject | undefined;
}

function ProjectDetail({ handleShowDetails, data }: IProjectDetailProps) {
    return (
        <div className="w-full max-w-5xl mx-auto p-2 flex flex-col gap-4 font-monospace overflow-scroll border border-(--border) rounded-xl shadow-md">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-xs sm:text-sm font-bold text-shadow-sm/10 text-(--text) text-wrap">
                    $ cd Programming/
                    <span
                        className="cursor-pointer"
                        onClick={handleShowDetails}
                    >
                        Projects/
                    </span>
                    {data?.id}
                </h1>
                <button
                    onClick={handleShowDetails}
                    className="w-20 text-xs sm:text-sm font-bold text-shadow-sm/10 text-(--text) hover:cursor-pointer hover:text-(--text-muted) select-none"
                >
                    cd ../
                </button>
            </div>
            <div className="w-full flex flex-col gap-1">
                <h1 className="text-md sm:text-xl font-bold text-shadow-sm/20 text-(--text) leading-5">
                    {data?.title}
                </h1>
                <h2 className="text-xs sm:text-base font-bold text-shadow-sm/10 text-(--text-muted)">
                    {data?.subtitle}
                </h2>
            </div>
            <div className="w-full flex items-center justify-start">
                <h2 className="text-sm sm:text-base font-bold text-shadow-sm/20 text-(--text)">
                    $ Category:
                </h2>
                <p className="text-sm sm:text-base font-semibold text-shadow-sm/10 text-(--text)">
                    {data?.category}
                </p>
            </div>
            <div className="w-full flex items-center justify-start flex-wrap gap-4">
                {data?.tags?.map((tag) => (
                    <span
                        key={tag}
                        className="text-sm sm:text-base font-bold text-shadow-sm/10 leading-2"
                    >
                        [{tag}]
                    </span>
                ))}
            </div>

            {data?.metrics && data?.metrics?.length > 0 && (
                <div className="w-full flex flex-col gap-1">
                    <h2 className="text-sm sm:text-base font-bold text-shadow-sm/20 text-(--text)">
                        $ ./metrics --summary
                    </h2>
                    <div className="flex flex-col items-start justify-center">
                        {data?.metrics?.map((m, idx) => (
                            <pre
                                key={idx}
                                className="whitespace-pre-wrap text-xs sm:text-sm font-semibold text-(--text-muted) text-shadow-sm/10"
                            >
                                [METRIC] {m.label.padEnd(14, " ")}: {m.value}
                            </pre>
                        ))}
                    </div>
                </div>
            )}

            <div className="w-full flex flex-col items-start justify-center gap-1">
                <h2 className="text-sm sm:text-base font-bold text-(--text) text-shadow-sm/20">
                    $ nvim overview.txt
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-(--text-muted) text-shadow-sm/10">
                    {data?.description}
                </p>
            </div>
            <div className="w-full flex flex-col gap-1">
                <h2 className="text-sm sm:text-base font-bold text-shadow-sm/20 text-(--text)">
                    $ nvim architecture_highlights.log
                </h2>
                <ul className="list-disc list-inside space-y-1">
                    {data?.architectureHighlights.map((h, key) => (
                        <li
                            key={key}
                            className="text-xs sm:text-sm font-semibold text-shadow-sm/10 text-(--text-muted)"
                        >
                            {h}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="w-full flex items-center justify-end gap-3">
                {data?.liveUrl && (
                    <a className="text-sm sm:text-sm font-bold text-shadow-sm/10 text-(--text) hover:cursor-pointer hover:text-(--text-muted)">
                        $ live-demo --open
                    </a>
                )}
                {data?.githubUrl && (
                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm sm:text-sm font-bold text-shadow-sm/10 text-(--text) hover:cursor-pointer hover:text-(--text-muted)"
                    >
                        $ github --repo
                    </a>
                )}
            </div>
        </div>
    );
}
export default ProjectDetail;
