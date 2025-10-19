import {Route, Routes} from "react-router";

import "../App.css";

import NavBar from "./navbar-component.jsx.tsx";
import PageContent from "./page-content.tsx";
import Footer from "./footer-component.tsx";
import LandingPageHero from "./landing-page-hero-component.tsx";

export default function Layout() {
    return (
        <>
            <NavBar/>

            <Routes>
                <Route path="/" element={
                    <>
                        <LandingPageHero/>
                        <div className={"h-40 w-full bg-black"}/>
                        <div id={"about-me"} className={"h-500 w-full bg-gradient-to-b from-black to-purple-950"}/>
                        
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