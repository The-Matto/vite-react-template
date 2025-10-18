import NavBar from "./navbar-component.jsx.tsx";
import {Route, Routes} from "react-router";
import PageContent from "./page-content.tsx";
import Footer from "./footer-component.tsx";


export default function Layout() {
    return (
        <>
            <NavBar/>

            <Routes>
                <Route path="/" element={
                    <>
                        <div
                            className="bg-gradient-to-br from-blue-950 via-blue-800 to-purple-950 flex-grow">
                            <div className="min-h-screen mx-auto max-w-6xl px-4"></div>
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