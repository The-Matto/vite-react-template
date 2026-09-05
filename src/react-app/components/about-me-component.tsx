import GradientText from "./text-components/gradient-text-component.tsx";
import BubbleText from "./text-components/bubble-text-component.tsx";

export default function AboutMe() {
    return (
        <section id="about-me" className="scroll-mt-24 w-full bg-gradient-to-b from-black to-purple-950 px-4 py-24">
            <div className="max-w-3xl mx-auto">
                <GradientText classNames="text-4xl pl-0" text="About Me"/>

                <div className="mt-6 bg-black/30 border border-white/10 rounded-xl p-6 md:p-8 space-y-6">
                    <div>
                        <p className="text-orange-400 font-mono text-sm mb-2">{"// at a glance"}</p>
                        <p className="text-white/80">4 years professional experience · BSc Computer Science</p>
                    </div>

                    <div>
                        <p className="text-orange-400 font-mono text-sm mb-2">{"// game dev"}</p>
                        <p className="text-white/80 leading-relaxed">
                            I build gameplay systems in{" "}
                            <BubbleText bgClassNames="bg-indigo-800" text="Unreal Engine"/>
                            and <BubbleText bgClassNames="bg-blue-700" text="C++"/>. Most of what I know about
                            writing solid code came from shipping features on tight deadlines.
                        </p>
                    </div>

                    <div>
                        <p className="text-orange-400 font-mono text-sm mb-2">{"// web dev"}</p>
                        <p className="text-white/80 leading-relaxed">
                            I also build <BubbleText bgClassNames="bg-green-700" text="backend"/> and
                            <BubbleText bgClassNames="bg-purple-800" text="full-stack"/> web apps. Different stack,
                            but a lot of the same thinking applies.
                        </p>
                    </div>

                    <p className="text-white/40 text-sm font-mono">{"// full bio + project write-ups coming soon"}</p>
                </div>
            </div>
        </section>
    );
}
