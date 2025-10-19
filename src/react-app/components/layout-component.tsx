import NavBar from "./navbar-component.jsx.tsx";
import {Route, Routes} from "react-router";
import PageContent from "./page-content.tsx";
import Footer from "./footer-component.tsx";
import GradientText from "./text-components/gradient-text-component.tsx";
import BubbleText from "./text-components/bubble-text-component.tsx";


export default function Layout() {
    return (
        <>
            <NavBar/>

            <Routes>
                <Route path="/" element={
                    <>
                        {/* TODO - Move this to its own component*/}
                        <div
                            className="bg-gradient-to-r from-gray-950 to-purple-950 w-full   px-4">

                            <div className="items-start flex  justify-center min-h-screen flex-col">
                                <GradientText classNames={"text-8xl justify-start"} text="Matt Heritage"/>
                                <div className="flex">
                                    <p className={"text-white text-2xl "}>Unreal Engine
                                        <BubbleText bgClassNames={"bg-purple-900"} text={"C++"}/>
                                        programmer turned
                                        <BubbleText bgClassNames={"bg-purple-900"} text={"Backend"}/>
                                        /
                                        <BubbleText bgClassNames={"bg-purple-900"} text={"Full-Stack"}/>
                                        developer

                                    </p>
                                </div>
                            </div>
                        </div>
                        <Footer/>
                    </>
                }/>

                <Route path="/projects" element={
                    <PageContent>
                        <p>Projects</p>
                    </PageContent>
                }/>

                <Route path="/about" element={
                    <PageContent>
                        <p>About</p>
                    </PageContent>
                }/>

                <Route path="/contact" element={
                    <PageContent>
                        <p> Contact Me</p>
                    </PageContent>
                }/>

                <Route path="*" element={
                    <p>Not Found</p>
                }/>

            </Routes>
        </>
    )
}