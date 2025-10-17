import NavBar from "./navbar-component.jsx.tsx";
import {Route, Routes} from "react-router";
import PageContent from "./page-content.tsx";


export default function Layout() {
    return (
        <>
            <NavBar/>

            <Routes>
                <Route path="/" element={
                    <p> Home page</p>
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