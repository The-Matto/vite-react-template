export interface SocialLink {
    id: "email" | "github" | "linkedin";
    label: string;
    value: string;
    href: string;
}

// Single source of truth, used by both the navbar icons and the Contact
// section's full list, so the two never drift apart.
export const socialLinks: SocialLink[] = [
    {id: "email", label: "Email", value: "you@example.com", href: "mailto:you@example.com"},
    {id: "github", label: "GitHub", value: "github.com/The-Matto", href: "https://github.com/The-Matto"},
    {id: "linkedin", label: "LinkedIn", value: "linkedin.com/in/your-handle", href: "https://linkedin.com"},
];
