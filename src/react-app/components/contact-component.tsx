import GradientText from "./text-components/gradient-text-component.tsx";
import {ArrowDownTrayIcon} from "@heroicons/react/24/outline";
import {socialLinks} from "../data/social-links-data.ts";
import {CV_DOWNLOAD_FILENAME, CV_PATH} from "../data/cv-data.ts";

export default function Contact() {
    return (
        <section id="contact" className="scroll-mt-24 w-full bg-purple-950 px-4 py-24">
            <div className="max-w-3xl mx-auto">
                <GradientText classNames="text-4xl pl-0 section-heading" text="Get In Touch"/>
                <p className="-mt-1 text-base text-white/70">Reach out to me.</p>

                <div className="mt-6 bg-black/30 border border-white/10 rounded-xl p-6 md:p-8">
                    <a href={CV_PATH} download={CV_DOWNLOAD_FILENAME}
                       className="inline-flex items-center gap-2 rounded-lg bg-orange-600 hover:bg-orange-500 px-5 py-2.5 font-mono text-white transition-colors duration-150">
                        <ArrowDownTrayIcon aria-hidden="true" className="size-5"/>
                        Download CV
                    </a>

                    <div className="mt-6 flex flex-col gap-1">
                        {socialLinks.map(link => (
                            <a key={link.id} href={link.href}
                               target={link.id === "email" ? undefined : "_blank"}
                               rel={link.id === "email" ? undefined : "noreferrer"}
                               className="group flex items-baseline gap-3 font-mono text-lg border-b border-white/10 py-3 hover:border-orange-500 transition-colors duration-150">
                                <span className="text-orange-500">{">"}</span>
                                <span className="text-white/50 w-20 shrink-0">{link.label}</span>
                                <span
                                    className="text-white group-hover:text-orange-400 transition-colors duration-150">{link.value}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
