//


export default function GradientText({text, classNames}: { text: string, classNames?: string }) {

    //TODO - Change this to use template literals instead of this
    let cssClasses: string = " font-bold p-15 bg-gradient-to-r from-purple-100 to-black bg-clip-text text-transparent "
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