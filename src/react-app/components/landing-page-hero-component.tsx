import GradientText from "./text-components/gradient-text-component.tsx";
import BubbleText from "./text-components/bubble-text-component.tsx";
import {ChevronDownIcon} from "@heroicons/react/16/solid";
import HeroBackgroundShapes from "./hero-background-shapes-component.tsx";


export default function LandingPageHero() {
    return (
        <div
            id={"home"}
            className="relative z-0 overflow-hidden bg-gradient-to-r from-gray-950 to-purple-950 w-full ">

            <HeroBackgroundShapes/>

            <div className="items-center flex justify-center min-h-screen flex-col px-4 text-center">
                <p className={"animation-slide-up-kicker font-mono text-sm text-orange-500/80 tracking-wide mb-2"}>{"> whoami"}</p>
                <GradientText classNames={"animation-slide-up-title text-6xl"}
                              text="Matt Heritage"/>
                <div className="flex">
                    <p className={"text-white animation-slide-up-subtext text-sm sm:text-lg bg-black/40 backdrop-blur-sm rounded-lg px-4 py-2"}>
                        <BubbleText bgClassNames={"bg-indigo-800"} text={"Unreal Engine"}/>
                        <BubbleText bgClassNames={"bg-blue-700"} text={"C++"}/>
                        game developer
                        <span className="text-white/40 mx-1">/</span>
                        <BubbleText bgClassNames={"bg-green-700"} text={"Backend"}/>
                        <BubbleText bgClassNames={"bg-purple-800"} text={"Full-Stack"}/>
                        engineer.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-3 -mt-24">
                <div
                    className="animation-slide-up-status flex items-center gap-2 font-mono text-sm text-white/60">
                    <span className="relative flex size-2">
                        <span
                            className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"/>
                        <span className="relative inline-flex size-2 rounded-full bg-green-500"/>
                    </span>
                    Looking for opportunities
                </div>
                <ChevronDownIcon
                    className="animate-bounce hover:text-orange-500 animation-slide-up-chevron size-16 text-orange-50"/>
            </div>

            {/*Fade to black*/}
            <div className={"h-50 min-h-full w-full bg-gradient-to-b from-black/0 to-black/100"}/>

        </div>
    )
}