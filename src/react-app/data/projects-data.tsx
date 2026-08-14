export enum ProjectTag {
    Fullstack = "Fullstack",
    Frontend = "Frontend",
    Backend = "Backend",
}


export const projectTagStyle: Record<ProjectTag, string> = {
    Fullstack: 'bg-purple-800',
    Frontend: 'bg-red-500',
    Backend: 'bg-green-500',
};

export interface Project {
    id: string;
    title: string;
    description: string;
    images: string[];
    tags: ProjectTag[];
    githubLink?: string;
}


export const projects: Project[] = [
    {
        id: 'project-1',
        title: 'Project A: Portfolio Website',
        description: 'A brief overview of Project A.',
        images: ['/projects/MsBuild.png', '/projects/TundraBackpack.png'],
        tags: [ProjectTag.Frontend, ProjectTag.Backend],
        githubLink: 'https://github.com/',
    },
    {
        id: 'project-2',
        title: 'Project B: E-commerce Platform',
        description: 'A scalable e-commerce solution.',
        images: ['/assets/p2-1.jpg'],
        tags: []
    }
];