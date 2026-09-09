import {Project, projectTagStyle} from "../data/projects-data.tsx";
import BubbleText from "./text-components/bubble-text-component.tsx";
import {useEffect, useRef, useState} from "react";
import ProjectImageCarousel from "./project-image-carousel-component.tsx";
import ProjectModal from "./project-modal-component.tsx";

export default function ProjectSummaryComponent({project}: { project: Project }) {

    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const [isTruncated, setIsTruncated] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Line-clamp is CSS-only, so we measure the actual DOM node to know
    // whether it's genuinely cutting text off, re-checking on resize since
    // the panel's width (and therefore how much fits in 3 lines) can change.
    useEffect(() => {
        const measure = () => {
            const el = descriptionRef.current;
            if (el) {
                setIsTruncated(el.scrollHeight > el.clientHeight + 1);
            }
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, [project]);

    return (
        <div className="p-3 text-orange-50 select-none">
            <ProjectImageCarousel project={project}/>

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
            <p ref={descriptionRef} className="line-clamp-3">{project.description}</p>
            {isTruncated && (
                <button type="button" onClick={() => setIsModalOpen(true)}
                        className="mt-1 font-mono text-sm text-orange-400 hover:text-orange-300 underline underline-offset-4 cursor-pointer">
                    Show more
                </button>
            )}
            {project.githubLink && (
                <a className="inline-block mt-3 font-mono text-orange-400 hover:text-orange-300"
                   href={project.githubLink} target="_blank" rel="noreferrer">GitHub →</a>
            )}

            <ProjectModal project={project} open={isModalOpen} onClose={() => setIsModalOpen(false)}/>
        </div>
    )
}
