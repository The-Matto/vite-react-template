//


import {Project} from "../data/projects-data.tsx";

export default function ProjectComponent({project, onClick, isActive}: {
    project: Project,
    onClick: (selectedProject: Project) => void,
    isActive: boolean
}) {

    return (
        <div key={project.id} onClick={() => {
            onClick(project)
        }}
             className={`group relative  h-50 items-center
              rounded-lg shadow-md  transition-transform duration-500 hover:scale-105
              hover:cursor-pointer hover:border-orange-500 border-2 ${isActive ? "border-white" : "border-black"}`}>

            <img
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                src={project.images[0]} alt={project.title}/>
            <div
                className="inset-0 absolute rounded-lg bg-gradient-to-t  from-black/70 via-black/20 to-transparent"/>

            <div className="p-1 absolute bottom-0">
                <h3 className="text-lg font-bold text-white group-hover:text-orange-600 duration-150">{project.title}</h3>
            </div>

        </div>
    );
}