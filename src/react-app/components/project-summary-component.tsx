import {getProceduralCover, Project, projectTagStyle} from "../data/projects-data.tsx";
import BubbleText from "./text-components/bubble-text-component.tsx";
import {useEffect, useState} from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/16/solid";

export default function ProjectSummaryComponent({project}: { project: Project }) {

    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const imageCount = project.images?.length ?? 0;
    const hasImages = imageCount > 0;

    useEffect(() => {
        setActiveImageIndex(0);
    }, [project]);

    const changeImage = (increment: boolean) => {
        if (imageCount === 0) return;
        // +imageCount before the modulo so a "previous" from index 0 wraps to
        // the last image instead of going negative.
        setActiveImageIndex(prev => (prev + (increment ? 1 : -1) + imageCount) % imageCount);
    };

    return (
        <div className="p-3 text-orange-50 select-none">
            <div className="relative w-full h-56 rounded-lg overflow-hidden">
                {hasImages ? (
                    <img className="w-full h-full object-cover saturate-50"
                         src={project.images![activeImageIndex]}
                         alt={`${project.title} screenshot ${activeImageIndex + 1} of ${imageCount}`}/>
                ) : (
                    <div
                        className={`w-full h-full flex items-end justify-end bg-gradient-to-br saturate-50 ${getProceduralCover(project.id)}`}>
                        <span
                            className="text-9xl font-black text-white/10 -mb-4 -mr-2 select-none">{project.title.charAt(0)}</span>
                    </div>
                )}

                {/* Carousel controls, only shown when there's more than one image */}
                {imageCount > 1 && (
                    <>
                        <button type="button" onClick={() => changeImage(false)} aria-label="Previous screenshot"
                                className="absolute top-1/2 left-2 -translate-y-1/2 z-10 flex size-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-orange-600 transition-colors duration-150 cursor-pointer">
                            <ChevronLeftIcon className="size-5"/>
                        </button>
                        <button type="button" onClick={() => changeImage(true)} aria-label="Next screenshot"
                                className="absolute top-1/2 right-2 -translate-y-1/2 z-10 flex size-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-orange-600 transition-colors duration-150 cursor-pointer">
                            <ChevronRightIcon className="size-5"/>
                        </button>

                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
                            {project.images!.map((_, index) => (
                                <button key={index} type="button" onClick={() => setActiveImageIndex(index)}
                                        aria-label={`Go to screenshot ${index + 1}`}
                                        className={`size-1.5 rounded-full transition-colors duration-150 cursor-pointer ${
                                            index === activeImageIndex ? "bg-orange-500" : "bg-white/40 hover:bg-white/70"
                                        }`}/>
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="mt-3">
                {
                    project.tags.map(tag => (
                        <BubbleText key={tag} bgClassNames={projectTagStyle[tag]} text={tag}/>
                    ))
                }
            </div>
            <br/>
            <h2 className={"text-xl"}>{project.title}</h2>
            <br/>
            <p className="line-clamp-3">{project.description}</p>
            {project.githubLink && (
                <a className="inline-block mt-3 font-mono text-orange-400 hover:text-orange-300"
                   href={project.githubLink} target="_blank" rel="noreferrer">GitHub →</a>
            )}
        </div>
    )
}
