import NavBar from "./navbar-component.jsx.tsx";
import {ReactNode} from "react";
import {Route, Routes} from "react-router";


export default function Layout({children}: { children: ReactNode }) {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<p>Home</p>}/>


                <Route path="/projects" element={<p>Projects</p>}/>
                <Route path="/about" element={<p>About</p>}/>
                <Route path="/contact" element={<p>Contact Me</p>}/>


                <Route path="*" element={<p>Not Found</p>}/>
            </Routes>
            {children}

        </>
    )
}