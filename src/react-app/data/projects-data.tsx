export enum ProjectTag {
    Unity = "Unity",
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
}

export const projectTagStyle: Record<ProjectTag, string> = {
    [ProjectTag.Unity]: "bg-slate-700",
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
};

export interface Project {
    id: string;
    title: string;
    description: string;
    images?: string[];
    tags: ProjectTag[];
    githubLink?: string;
}

export const projects: Project[] = [
    {
        id: "project-portfolio",
        title: "This Portfolio",
        description: "The site you're looking at right now. Built with React and TypeScript, deployed on Cloudflare, with a tag filter instead of a plain project list.",
        tags: [ProjectTag.React, ProjectTag.TypeScript, ProjectTag.Cloudflare, ProjectTag.Frontend],
        githubLink: "https://github.com/",
    },
    {
        id: "project-unreal-gameplay",
        title: "Gameplay Systems Sandbox",
        description: "A small Unreal Engine project used to prototype gameplay ability systems and enemy AI behaviour trees in C++.",
        tags: [ProjectTag.UnrealEngine, ProjectTag.Cpp, ProjectTag.GameDev],
    },
    {
        id: "project-unity-tools",
        title: "Unity Editor Tooling",
        description: "Custom editor tooling built for a Unity project to speed up level dressing and asset validation for the rest of the team.",
        tags: [ProjectTag.Unity, ProjectTag.GameDev],
    },
    {
        id: "project-api-service",
        title: "Edge API Service",
        description: "A backend service built on Cloudflare Workers handling auth, rate limiting, and data access for a small side project.",
        tags: [ProjectTag.Node, ProjectTag.Backend, ProjectTag.Cloudflare, ProjectTag.TypeScript],
        githubLink: "https://github.com/",
    },
    {
        id: "project-fullstack-app",
        title: "Full-Stack Web App",
        description: "A full web app I built end to end, with a React frontend, a typed API, and a database-backed service layer.",
        tags: [ProjectTag.React, ProjectTag.TypeScript, ProjectTag.Fullstack, ProjectTag.Backend],
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
