import {Project, projects} from "../data/projects-data.tsx";
import ProjectComponent from "./project-component.tsx";
import {useState} from "react";
import ProjectSummaryComponent from "./project-summary-component.tsx";

export default function Projects() {

    const [activeProject, setActiveProject] = useState<Project>();
    //projects;

    const clickHandler = (selectedProject: Project) => {
        console.log(selectedProject);
        setActiveProject(selectedProject);
    }

    return (
        <>
            {/* TODO Add better mobile support for this! */}
            <div className="flex">

                {/* Left panel */}
                <div className="w-6/10 h-150 p-2 border-4 border-white rounded-2xl">
                    <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-3">
                        {
                            projects.map(project => (
                                <ProjectComponent project={project} onClick={clickHandler}
                                                  isActive={project.id == activeProject?.id}/>
                            ))
                        }
                    </div>
                </div>

                {/* Right panel */}
                <div className="w-4/10 ">
                    {activeProject && <ProjectSummaryComponent project={activeProject}/>}
                </div>
            </div>
        </>
    );
}