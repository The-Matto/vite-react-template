export enum ProjectTag {
    BrowserExtension = "BrowserExtension",
    UnrealEngine = "Unreal Engine",
    Cpp = "C++",
    GameDev = "Game Dev",
    React = "React",
    TypeScript = "TypeScript",
    Node = "Node",
    Cloudflare = "Cloudflare",
    Backend = "Backend",
    Frontend = "Frontend",
    Fullstack = "Fullstack",
    Redis = "Redis",
    Postgres = "Postgres",
}

export const projectTagStyle: Record<ProjectTag, string> = {
    [ProjectTag.BrowserExtension]: "bg-slate-700",
    [ProjectTag.UnrealEngine]: "bg-indigo-800",
    [ProjectTag.Cpp]: "bg-blue-700",
    [ProjectTag.GameDev]: "bg-fuchsia-800",
    [ProjectTag.React]: "bg-cyan-700",
    [ProjectTag.TypeScript]: "bg-sky-700",
    [ProjectTag.Node]: "bg-emerald-700",
    [ProjectTag.Cloudflare]: "bg-amber-600",
    [ProjectTag.Backend]: "bg-green-700",
    [ProjectTag.Frontend]: "bg-red-600",
    [ProjectTag.Fullstack]: "bg-purple-800",
    [ProjectTag.Redis]: "bg-rose-700",
    [ProjectTag.Postgres]: "bg-teal-700"
};

export interface ProjectImageMedia {
    type: "image";
    src: string;
}

export interface ProjectYoutubeMedia {
    type: "youtube";
    videoId: string;
}

export type ProjectMedia = ProjectImageMedia | ProjectYoutubeMedia;

export function image(src: string): ProjectMedia {
    return {type: "image", src};
}

export function youtube(videoId: string): ProjectMedia {
    return {type: "youtube", videoId};
}

// YouTube serves a thumbnail for any video at this URL with no API key
// needed, used for video slides before they're played and for card covers.
export function getMediaThumbnailSrc(media: ProjectMedia): string {
    return media.type === "image" ? media.src : `https://img.youtube.com/vi/${media.videoId}/hqdefault.jpg`;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    media?: ProjectMedia[];
    tags: ProjectTag[];
    githubLink?: string;
    liveLink?: string;
}

export const projects: Project[] = [
    {
        id: "project-nova-game",
        title: "Nova Game",
        description: "A web-based time-trial First Person Shooter built around speedrunning user created levels, hitting targets, and climbing leaderboards. It comes with an in-browser level editor that includes a free-fly pawn, transform gizmos, palette controls, and local/cloud save-state sharing so players can build and share their levels. Under the hood, it runs on a TypeScript, Three.js and React frontend hosted on Cloudflare Pages, with a Node backend on Railway backed by PostgreSQL and Redis. User levels and thumbnails are stored in Cloudflare R2, and accounts start out anonymous with the option to claim them later via GitHub login.",
        tags: [ProjectTag.React, ProjectTag.TypeScript, ProjectTag.Cloudflare, ProjectTag.Frontend, ProjectTag.Redis, ProjectTag.Postgres],
        githubLink: "https://github.com/The-Matto/nova-game",
        liveLink: "https://nova.mattheritage.dev/",
        media: [image("/projects/Nova-game/nova-game_1.jpg"), image("/projects/Nova-game/nova-game_2.jpg"), image("/projects/Nova-game/nova-game_3.jpg")]


    },
    {
        id: "project-clarity-engine",
        title: "C++ OpenGL Game engine",
        description: "Architected and developed a modular 3D engine using OpenGL, C++ and GLFW, featuring decoupled subsystems, JSON-based level serialization, Phong lighting, and model loading via Assimp. Built a custom reflection system for real-time variable updates and an asset manager for automatic asset discovery and management. Used Premake to maintain a consistent, cross-platform, multi-IDE build environment. \n \n Currently extending the engine with a module-based DLL architecture to support hot-reloadable systems, along with shader hot reloading.",
        tags: [ProjectTag.Cpp, ProjectTag.GameDev],
        media: [image("/projects/Clarity/ClarityEngine_1.jpg") /*, youtube("YOUTUBE VIDEO ID!")*/]
    },
    {
        id: "project-dungeon-generator",
        title: "Procedural Dungeon Builder",
        description: "Developed a procedural dungeon generator that algorithmically stitches artist-designed levels into a walkable path. The system also dynamically populates each room with variable enemy spawns and randomized loot distributions.",
        tags: [ProjectTag.UnrealEngine, ProjectTag.GameDev],
        media: [image("/projects/Dungeon-builder/dungeon_1.jpg")]
    }, 
    {
        id: "project-inventory-system",
        title: "Grid Based Inventory System",
        description: "Building a grid-based inventory system inspired by Resident Evil 4 for an ongoing hobby project. Items are managed as UObject instances contained within a custom UActorComponent (UGridContainer), with state serialization handled via FInstancedStruct.",
        tags: [ProjectTag.UnrealEngine],
        media: [image("/projects/grid-inventory/inventory_1.jpg")]
    },
     {
        id: "project-portfolio",
        title: "This Portfolio",
        description: "This portfolio website was built with React, TypeScript and Tailwind, deployed on Cloudflare Pages.",
        tags: [ProjectTag.React, ProjectTag.TypeScript, ProjectTag.Cloudflare, ProjectTag.Frontend],
        githubLink: "https://github.com/The-Matto/vite-react-template",
    },
    {
        id: "project-basic-chrome-mouse-gestures",
        title: "Basic Chrome Mouse Gestures",
        description: "Chrome still lacks native mouse-gesture navigation, so I built a lightweight extension to fill the gap. Using an injected content script, it maps right-click hold combinations and cardinal mouse movements to core browser actions (e.g., holding right-click and moving West switches to the previous tab, while Far North restores a closed tab). Built with vanilla JavaScript and the Chrome Extensions API.",
        tags: [ProjectTag.BrowserExtension],
        githubLink: "https://github.com/The-Matto/chrome-basic-mouse-gestures",
        media: [image("/projects/chrome-mouse-gestures/mouse-gestures_1.jpg")]
    },
];

/**
 * Deterministic hash so the same project id always maps to the same
 * placeholder cover, no external image needed.
 */
function hashString(value: string): number {
    let hash = 0;
    for (let i = 0; i < value.length; i++) {
        hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
    }
    return hash;
}

// Curated so procedural covers stay inside the site's own palette rather than
// landing on an arbitrary/rainbow hue.
const proceduralCovers = [
    "from-purple-600 via-purple-500 to-orange-500",
    "from-slate-500 via-slate-400 to-purple-600",
    "from-orange-600 via-red-600 to-purple-600",
    "from-purple-500 via-fuchsia-600 to-slate-500",
    "from-zinc-500 via-slate-400 to-orange-600",
];

export function getProceduralCover(id: string): string {
    return proceduralCovers[hashString(id) % proceduralCovers.length];
}
