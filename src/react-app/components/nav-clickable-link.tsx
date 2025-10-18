import {Link} from "react-router";

export default function NavLink({path, text, onClickFunc, renderAsBlock}: {
    path: string,
    text: string,
    onClickFunc?: () => void,
    renderAsBlock?: boolean
}) {

    const classes = `rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5 hover:text-orange-500`;
    return (
        <Link
            to={path}
            className={`${classes} ${renderAsBlock && 'block'}`}
            onClick={onClickFunc}
        >
            {text}
        </Link>
    )
}