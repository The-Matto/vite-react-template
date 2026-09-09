import {getProceduralCover, Project} from "../data/projects-data.tsx";
import {useEffect, useState} from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/16/solid";

// Shared by the summary panel and the project modal so both get the same
// carousel behaviour without duplicating the logic.
export default function ProjectImageCarousel({project, className}: { project: Project, className?: string }) {

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
        <div className={`relative w-full rounded-lg overflow-hidden ${className ?? "h-56"}`}>
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
    );
}
