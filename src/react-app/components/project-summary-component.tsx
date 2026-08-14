import {Project, projectTagStyle} from "../data/projects-data.tsx";
import BubbleText from "./text-components/bubble-text-component.tsx";
import {useEffect, useState} from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/16/solid";

export default function ProjectSummaryComponent({project}: { project: Project }) {

    const [activeImageIndex, setActiveImageIndex] = useState<number>();

    useEffect(() => {
        setActiveImageIndex(0)
    }, [project]);


    const changeImage = (increment: boolean) => {
        if (activeImageIndex != undefined) {
            console.log(activeImageIndex);
            let nextImgIndex: number = (activeImageIndex + (increment ? 1 : -1)) % project.images.length;
            nextImgIndex = Math.abs(nextImgIndex);
            setActiveImageIndex(nextImgIndex);
        }
    }

    return (
        <div className="p-3 text-orange-50 select-none">
            <div className="relative inline-block">
                <img className="block" src={activeImageIndex != undefined ? project.images[activeImageIndex] : ""}
                     alt={project.title}/>

                {/* Render change image chevrons */}
                {project.images.length > 1 && (
                    <>
                        <ChevronLeftIcon onClick={() => {
                            changeImage(false);
                        }} className={"size-10 absolute bottom-5/10 left-2 z-10 bg-black/50"}>Left</ChevronLeftIcon>
                        <ChevronRightIcon onClick={() => {
                            changeImage(true);
                        }} className={"size-10 absolute bottom-5/10 right-2 z-10 bg-black/50"}>Right</ChevronRightIcon>
                    </>)}
            </div>

            {
                project.tags.map(tag => (
                    <BubbleText key={tag} bgClassNames={projectTagStyle[tag]} text={tag}/>
                ))
            }
            <br/><br/>
            <h2 className={"text-xl"}>{project.title}</h2>
            <br/>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank">GitHub</a>
        </div>
    )
}