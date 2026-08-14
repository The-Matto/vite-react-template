import GradientText from "./text-components/gradient-text-component.tsx";
import BubbleText from "./text-components/bubble-text-component.tsx";
import {ChevronDownIcon} from "@heroicons/react/16/solid";


export default function LandingPageHero() {
    return (
        <div
            id={"home"}
            className="bg-gradient-to-r from-gray-950 to-purple-950 w-full ">

            <div className="items-start flex  justify-center min-h-screen flex-col pl-4">
                <GradientText classNames={"animation-slide-up-title text-6xl justify-start"}
                              text="Matt Heritage"/>
                <div className="flex pl-20">
                    <p className={"text-white animation-slide-up-subtext text-1xl animate-ping"}>Unreal
                        Engine
                        <BubbleText bgClassNames={"bg-purple-700"} text={"C++"}/>
                        programmer and
                        <BubbleText bgClassNames={"bg-orange-700"} text={"Backend"}/>
                        /
                        <BubbleText bgClassNames={"bg-orange-700"} text={"Full-Stack"}/>
                        developer

                    </p>
                </div>
            </div>
            <ChevronDownIcon
                className="animate-bounce hover:text-orange-500 animation-slide-up-chevron size-12 color text-orange-50 mx-auto -mt-20"/>

            {/*Fade to black*/}
            <div className={"h-50 min-h-full w-full bg-gradient-to-b from-black/0 to-black/100"}/>

        </div>
    )
}