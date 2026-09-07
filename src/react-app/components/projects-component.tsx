import {Project, ProjectTag, projects} from "../data/projects-data.tsx";
import ProjectComponent from "./project-component.tsx";
import {useMemo, useState} from "react";
import ProjectSummaryComponent from "./project-summary-component.tsx";
import TagFilterComponent from "./tag-filter-component.tsx";
import GradientText from "./text-components/gradient-text-component.tsx";

export default function Projects() {

    const [activeProject, setActiveProject] = useState<Project>();
    const [activeTags, setActiveTags] = useState<Set<ProjectTag>>(new Set());

    const allTags = useMemo(() => {
        const seen = new Set<ProjectTag>();
        projects.forEach(project => project.tags.forEach(tag => seen.add(tag)));
        return Array.from(seen);
    }, []);

    const filteredProjects = useMemo(() => {
        if (activeTags.size === 0) return projects;
        return projects.filter(project => project.tags.some(tag => activeTags.has(tag)));
    }, [activeTags]);

    const toggleTag = (tag: ProjectTag) => {
        setActiveTags(prev => {
            const next = new Set(prev);
            if (next.has(tag)) {
                next.delete(tag);
            } else {
                next.add(tag);
            }
            return next;
        });
    };

    const clickHandler = (selectedProject: Project) => {
        setActiveProject(selectedProject);
    }

    return (
        <section id="projects" className="scroll-mt-24 w-full bg-black px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <GradientText classNames="text-4xl pl-0 section-heading" text="Projects"/>
                <p className="-mt-1 text-base text-white/70">Some of my projects, game dev and web.</p>

                <div className="mt-6 flex flex-col gap-4">
                    <TagFilterComponent tags={allTags} activeTags={activeTags} onToggle={toggleTag}
                                         onClear={() => setActiveTags(new Set())}/>

                    {/* min-height keeps this row a consistent size regardless of how
                        long the selected project's description happens to be. */}
                    <div className="flex flex-col lg:flex-row gap-4 lg:min-h-[34rem]">

                        {/* Left panel */}
                        <div className="lg:w-6/10 p-2 border-2 border-white/20 rounded-2xl">
                            {filteredProjects.length === 0 ? (
                                <p className="text-white/50 font-mono text-center py-12">No projects match those
                                    tags.</p>
                            ) : (
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                                    {
                                        filteredProjects.map(project => (
                                            <ProjectComponent key={project.id} project={project}
                                                               onClick={clickHandler}
                                                               isActive={project.id == activeProject?.id}/>
                                        ))
                                    }
                                </div>
                            )}
                        </div>

                        {/* Right panel */}
                        <div className="lg:w-4/10 h-full">
                            {activeProject ? (
                                <div className="h-full border border-white rounded-2xl">
                                    <ProjectSummaryComponent project={activeProject}/>
                                </div>
                            ) : (
                                <p className="hidden lg:block text-white/40 font-mono p-3">{"// select a project to see details"}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
