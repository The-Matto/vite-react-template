//


export default function BubbleText({text, bgClassNames}: {
    text: string,
    bgClassNames?: string,
    textClassNames?: string
}) {
    return (
        <span
            className={` ${bgClassNames} inline-block bg-blue-500 text-white rounded-md px-2 m-2`}>
            {text}
        </span>
    );
}