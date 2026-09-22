import { useState } from "react";
import { projectData } from "../data/projects";
import ProjectDetail from "./ProjectDetail";
import type { IProject, IProjectMetric } from "../data/projects";

function Projects() {
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<
        IProject | undefined
    >(undefined);
    function handleShowDetails() {
        setShowDetail((prev) => !prev);
    }

    return (
        <div className="w-full h-screen max-w-5xl mx-auto pt-16 overflow-scroll">
            {showDetail ? (
                <ProjectDetail
                    handleShowDetails={handleShowDetails}
                    data={selectedProject}
                />
            ) : (
                <div className="w-full h-full flex flex-col items-center">
                    <div className="w-full flex items-center justify-start p-2 border-b border-(--border)">
                        <h1 className="font-monospace text-sm font-bold text-shadow-sm/10">
                            $ cd Programming/Projects/
                        </h1>
                    </div>
                    <div className="w-full flex-1 p-2 grid grid-cols-1 md:grid-cols-2 gap-2 font-monospace auto-rows-max">
                        {projectData.map((data) => (
                            <div
                                key={data.id}
                                className="p-2 h-80 border border-(--border) hover:border-(--border-hover) rounded-xl shadow-(--shadow-sm) hover:shadow-(--shadow-md) flex flex-col gap-4"
                            >
                                <div className="w-full flex items-center justify-start">
                                    <p className="text-xs font-semibold text-shadow-sm/10">
                                        ~/Programming/Projects/{data.id}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-md text-(--text) font-bold text-shadow-sm/10 line-clamp-1">
                                        {data.title}
                                    </h1>
                                    <h2 className="text-xs text-(--text-muted) font-semibold text-shadow-sm/10 line-clamp-1">
                                        {data.subtitle}
                                    </h2>
                                </div>
                                <div className="w-full flex items-center justify-start gap-2">
                                    <h2 className="text-sm font-bold text-shadow-sm/10 text-(--text)">
                                        $ category:
                                    </h2>
                                    <p className="text-sm font-semibold text-shadow-sm/10 text-(--text)">
                                        {data.category}
                                    </p>
                                </div>
                                <div className="w-full">
                                    <p className="line-clamp-3 text-sm font-semibold text-shadow-sm/10 text-(--text-muted)">
                                        {data.description}
                                    </p>
                                </div>
                                <div className="w-full flex flex-wrap items-center gap-4">
                                    {data.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-md leading-1 font-bold text-shadow-sm/10"
                                        >
                                            [{tag}]
                                        </span>
                                    ))}
                                </div>
                                <div className="w-full flex-1 flex items-center justify-between">
                                    <button
                                        onClick={() => {
                                            handleShowDetails();
                                            setSelectedProject(data);
                                        }}
                                        className="text-sm font-bold text-shadow-sm/10 hover:cursor-pointer text-(--text) hover:text-(--text-muted) select-none"
                                    >
                                        $ view details
                                    </button>
                                    <button className="text-sm font-bold text-shadow-sm/10 hover:cursor-pointer text-(--text) hover:text-(--text-muted) select-none">
                                        $ github
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
export default Projects;
