import GradientText from "./text-components/gradient-text-component.tsx";
import BubbleText from "./text-components/bubble-text-component.tsx";

export default function AboutMe() {
    return (
        <section id="about-me" className="scroll-mt-24 w-full bg-gradient-to-b from-black to-purple-950 px-4 py-24">
            <div className="max-w-4xl mx-auto">
                <GradientText classNames="text-4xl pl-0 section-heading" text="About Me"/>
                <p className="-mt-1 text-base text-white/70">The short version.</p>

                <div className="mt-6 bg-black/30 border border-white/10 rounded-xl p-6 md:p-8 space-y-6">
                    <div>
                        <p className="text-orange-400 font-mono text-sm mb-2">{"// at a glance"}</p>
                        <p className="text-white/80">A British Software Engineer with a Computer Science background and professional experience building high-performance C++ systems, currently based in Tokyo.</p>
                    </div>

                    <div>
                        <p className="text-orange-400 font-mono text-sm mb-2">{"// game dev"}</p>
                        <p className="text-white/80 leading-relaxed">
                            I've spent about a decade in <BubbleText bgClassNames="bg-indigo-800"
                                                                      text="Unreal Engine"/> and{" "}
                            <BubbleText bgClassNames="bg-blue-700" text="C++"/>, focusing on core systems, C++ architecture, and multiplayer performance. Hands-on experience across gameplay mechanics, UI UMG and Slate, client-server replication, AI (Behavior Trees, State Trees, EQS), animation pipelines, and the Gameplay Ability System (GAS).
                        </p>
                    </div>

                    <div>
                        <p className="text-orange-400 font-mono text-sm mb-2">{"// web dev"}</p>
                        <p className="text-white/80 leading-relaxed">
                            I'm branching out into <BubbleText bgClassNames="bg-purple-800" text="full-stack"/> and <BubbleText bgClassNames="bg-green-700" text="backend"/> development: data modeling, APIs, deployment, and keeping a live app running securely. I'm improving my skills by building and shipping.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
