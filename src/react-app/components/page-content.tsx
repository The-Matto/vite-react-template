import {ReactNode} from "react";

export default function PageContent({children}: { children: ReactNode }) {
    return (
        <main className="bg-* bg-orange-500">
            <div className=" bg-red-500 w-full min-h-screen mx-auto max-w-6xl px-4">
                {children}
            </div>

        </main>
    )
}