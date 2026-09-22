import type { IProject, IProjectMetric } from "../data/projects";

interface IProjectDetailProps {
    handleShowDetails: () => void;
    data: IProject | undefined;
}

function ProjectDetail({ handleShowDetails, data }: IProjectDetailProps) {
    return (
        <div className="w-full max-w-5xl mx-auto p-2 flex flex-col gap-4 font-monospace overflow-scroll">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-sm font-bold text-shadow-sm/10 text-(--text)">
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
                    className="text-sm font-bold text-shadow-sm/10 text-(--text) hover:cursor-pointer hover:text-(--text-muted)"
                >
                    cd ./
                </button>
            </div>
            <div className="w-full flex flex-col gap-0">
                <h1 className="text-xl font-bold text-shadow-sm/20 text-(--text)">
                    {data?.title}
                </h1>
                <h2 className="text-ld font-bold text-shadow-sm/10 text-(--text-muted)">
                    {data?.subtitle}
                </h2>
            </div>
            <div className="w-full flex items-center justify-start">
                <h2 className="text-md font-bold text-shadow-sm/20 text-(--text)">
                    $ Category:
                </h2>
                <p className="text-md font-semibold text-shadow-sm/10 text-(--text)">
                    {data?.category}
                </p>
            </div>
            <div className="w-full flex items-center justify-start flex-wrap gap-4">
                {data?.tags?.map((tag) => (
                    <span
                        key={tag}
                        className="text-md font-bold text-shadow-sm/10 leading-5"
                    >
                        [{tag}]
                    </span>
                ))}
            </div>
        </div>
    );
}
export default ProjectDetail;
