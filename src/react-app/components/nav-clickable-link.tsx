import {Link} from "react-router";

export default function NavLink({path, text, renderAsBlock}: { path: string, text: string, renderAsBlock?: boolean }) {

    const classes = `rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 hover:text-orange-500`;
    return (
        <Link

            bg-gray-900
            to={path}
            className={`${classes} ${renderAsBlock && 'block'}`}
        >
            {text}
        </Link>
    )
}