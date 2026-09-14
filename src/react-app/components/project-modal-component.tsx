import {Dialog, DialogPanel, DialogTitle} from "@headlessui/react";
import {ArrowTopRightOnSquareIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {Project, projectTagStyle} from "../data/projects-data.tsx";
import BubbleText from "./text-components/bubble-text-component.tsx";
import ProjectImageCarousel from "./project-image-carousel-component.tsx";

export default function ProjectModal({project, open, onClose}: {
    project: Project,
    open: boolean,
    onClose: () => void
}) {
    return (
        <Dialog open={open} onClose={onClose} className="relative z-50">
            {/* Backdrop fade */}
            <div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm transition duration-300 data-[closed]:opacity-0"
                aria-hidden="true"/>

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel
                    className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-zinc-950 p-6 text-orange-50 transition duration-300 data-[closed]:opacity-0 data-[closed]:scale-95">
                    <div className="flex items-start justify-between gap-4">
                        <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
                        <button type="button" onClick={onClose} aria-label="Close"
                                className="shrink-0 rounded-full p-1.5 text-white/60 hover:text-white hover:bg-white/10 transition-colors duration-150 cursor-pointer">
                            <XMarkIcon className="size-6"/>
                        </button>
                    </div>

                    <ProjectImageCarousel project={project} className="mt-4 h-64 sm:h-80"/>

                    <div className="mt-4">
                        {project.tags.map(tag => (
                            <BubbleText key={tag} bgClassNames={projectTagStyle[tag]} text={tag}/>
                        ))}
                    </div>

                    <p className="mt-4 leading-relaxed">{project.description}</p>

                    {(project.liveLink || project.githubLink) && (
                        <div className="mt-4 flex flex-wrap items-center gap-3">
                            {project.liveLink && (
                                <a href={project.liveLink} target="_blank" rel="noreferrer"
                                   className="inline-flex items-center gap-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 px-4 py-2 font-mono text-sm text-white transition-colors duration-150">
                                    <ArrowTopRightOnSquareIcon className="size-4"/>
                                    Live
                                </a>
                            )}
                            {project.githubLink && (
                                <a className="font-mono text-orange-400 hover:text-orange-300"
                                   href={project.githubLink} target="_blank" rel="noreferrer">GitHub →</a>
                            )}
                        </div>
                    )}
                </DialogPanel>
            </div>
        </Dialog>
    );
}
