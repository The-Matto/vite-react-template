import {useState} from "react";

import {
    Dialog,
    DialogPanel,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import NavLink from "./nav-clickable-link.tsx";
import {Link} from "react-router";

export default function NavBar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className="">

            <nav aria-label="Global"
                 className="border-b border-white/30 mx-auto flex  items-center justify-between p-4 w-full lg:px-8 fixed top-0 z-10">
                <div className="flex lg:flex-1">
                    <div className="absolute inset-0 bg-gray-900  opacity-50 -z-10"></div>
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Matt Heritage</span>
                        <img
                            alt="logo"
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                            className="h-8 w-auto"
                        />
                    </Link>
                </div>

                <div className="hidden space-x-6 lg:block text-white">
                    <NavLink path={"/projects"} text={"Projects"}/>
                    <NavLink path={"/about"} text={"About Me"}/>
                    <NavLink path={"/contact"} text={"Contact Me"}/>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6"/>
                    </button>
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end"/>

            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50"/>
                <DialogPanel
                    className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <img
                                alt=""
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                className="h-8 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-400"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6"/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-white/10 block">
                            <div className="space-y-2 py-6 block">
                                <NavLink path={"/projects"} onClickFunc={closeMobileMenu} renderAsBlock={true}
                                         text={"Projects"}/>
                                <NavLink path={"/about"} onClickFunc={closeMobileMenu} renderAsBlock={true}
                                         text={"About me"}/>
                                <NavLink path={"/contact"} onClickFunc={closeMobileMenu} renderAsBlock={true}
                                         text={"Contact Me"}/>

                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}