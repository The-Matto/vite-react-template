//


export default function GradientText({text, classNames}: { text: string, classNames?: string }) {

    //TODO - Change this to use template literals instead of this
    let cssClasses: string = " font-bold pl-15 pb-3 bg-gradient-to-b from-purple-100 via- to-orange-200 bg-clip-text text-transparent "
    if (classNames !== undefined) {
        cssClasses += classNames
    }


    console.log(cssClasses)
    return (
        <p className={cssClasses}>
            {text}
        </p>
    )
}