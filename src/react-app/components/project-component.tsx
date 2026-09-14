import {getMediaThumbnailSrc, getProceduralCover, Project} from "../data/projects-data.tsx";

export default function ProjectComponent({project, onClick, isActive}: {
    project: Project,
    onClick: (selectedProject: Project) => void,
    isActive: boolean
}) {

    const coverMedia = project.media?.[0];

    return (
        <div onClick={() => {
            onClick(project)
        }}
             className={`group relative h-50 items-center
              rounded-lg shadow-md overflow-hidden transition-transform duration-500 hover:scale-105
              hover:cursor-pointer hover:border-orange-500 border ${isActive ? "border-white" : "border-black"}`}>

            {coverMedia ? (
                <img
                    className="absolute inset-0 w-full h-full object-cover saturate-50"
                    src={getMediaThumbnailSrc(coverMedia)} alt={project.title}/>
            ) : (
                <div
                    className={`absolute inset-0 bg-gradient-to-br saturate-50 ${getProceduralCover(project.id)} flex items-end justify-end`}>
                    {/* Texture is its own layer, it also sets background-image so it
                        would otherwise clobber the gradient above. */}
                    <div className="procedural-cover absolute inset-0"/>
                    <span
                        className="text-8xl font-black text-white/10 -mb-3 -mr-1 select-none">{project.title.charAt(0)}</span>
                </div>
            )}
            <div
                className="inset-0 absolute bg-gradient-to-t from-black/90 via-black/30 to-transparent"/>

            <div className="p-2 absolute bottom-0">
                <h3 className="text-lg font-bold text-white group-hover:text-orange-600 duration-150">{project.title}</h3>
            </div>

        </div>
    );
}
