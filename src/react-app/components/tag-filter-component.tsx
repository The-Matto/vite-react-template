import {ProjectTag, projectTagStyle} from "../data/projects-data.tsx";

export default function TagFilterComponent({tags, activeTags, onToggle, onClear}: {
    tags: ProjectTag[],
    activeTags: Set<ProjectTag>,
    onToggle: (tag: ProjectTag) => void,
    onClear: () => void,
}) {
    return (
        <div className="flex flex-wrap items-center gap-2">
            {tags.map(tag => {
                const isActive = activeTags.has(tag);
                return (
                    <button
                        key={tag}
                        type="button"
                        onClick={() => onToggle(tag)}
                        aria-pressed={isActive}
                        className={`font-mono text-sm px-3 py-1 rounded-md border cursor-pointer transition-all duration-150
                            ${isActive
                            ? `${projectTagStyle[tag]} border-transparent text-white shadow-[0_0_14px_-3px_rgba(255,255,255,0.5)] scale-105`
                            : "border-white/20 text-white/50 hover:text-white hover:border-white/40"}`}
                    >
                        #{tag}
                    </button>
                );
            })}
            {activeTags.size > 0 && (
                <button
                    type="button"
                    onClick={onClear}
                    className="font-mono text-sm text-orange-400 hover:text-orange-300 underline underline-offset-4 cursor-pointer ml-1"
                >
                    clear ✕
                </button>
            )}
        </div>
    );
}
