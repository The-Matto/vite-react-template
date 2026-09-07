// Decorative shapes behind the hero. Dev/game symbols in a muted palette,
// pure SVG and CSS, no animation library.
// Kept clear of the 350-650 middle band (viewBox units) since the hero
// content is centered, not the left column it used to be.
const monoFont = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

export default function HeroBackgroundShapes() {
    return (
        <svg
            className="absolute inset-0 w-full h-full -z-10 pointer-events-none select-none"
            viewBox="0 0 1000 700"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
        >
            {/* Wireframe box, top right */}
            <g className="hero-shape" style={{animationDuration: "18s"}}>
                <polygon points="820,85 858.97,107.5 858.97,152.5 820,175 781.03,152.5 781.03,107.5"
                         fill="none" stroke="#7fa8bd" strokeOpacity="0.35" strokeWidth="1.5"/>
                <path d="M820,130 L820,85 M820,130 L858.97,152.5 M820,130 L781.03,152.5"
                      fill="none" stroke="#7fa8bd" strokeOpacity="0.35" strokeWidth="1.5"/>
            </g>

            {/* </>, middle left */}
            <g className="hero-shape" style={{animationDuration: "13s", animationDelay: "-3s"}}>
                <text x="150" y="380" textAnchor="middle" dominantBaseline="middle" fontSize="58" fontWeight="700"
                      fill="#7fb89c" fillOpacity="0.3" style={{fontFamily: monoFont}}>{"</>"}</text>
            </g>

            {/* "//", bottom right */}
            <g className="hero-shape" style={{animationDuration: "20s", animationDelay: "-6s"}}>
                <text x="810" y="560" textAnchor="middle" dominantBaseline="middle" fontSize="56" fontWeight="700"
                      fill="#c98b5c" fillOpacity="0.3" style={{fontFamily: monoFont}}>{"//"}</text>
            </g>

            {/* Curly braces, top left */}
            <g className="hero-shape" style={{animationDuration: "17s", animationDelay: "-9s"}}>
                <text x="200" y="110" textAnchor="middle" dominantBaseline="middle" fontSize="52" fontWeight="700"
                      fill="#9d8bc7" fillOpacity="0.3" style={{fontFamily: monoFont}}>{"{ }"}</text>
            </g>

            {/* Geometric gem, middle right */}
            <g className="hero-shape" style={{animationDuration: "15s", animationDelay: "-4s"}}>
                <polygon points="840,314 858,334 851,366 829,366 822,334" fill="none" stroke="#9d8bc7"
                         strokeOpacity="0.35" strokeWidth="1.5"/>
                <path d="M822,334 L858,334 M840,314 L851,366 M840,314 L829,366" fill="none" stroke="#9d8bc7"
                      strokeOpacity="0.35" strokeWidth="1.5"/>
            </g>

            {/* Semicolon, bottom left */}
            <g className="hero-shape" style={{animationDuration: "22s", animationDelay: "-11s"}}>
                <text x="110" y="580" textAnchor="middle" dominantBaseline="middle" fontSize="40" fontWeight="700"
                      fill="#7fa8bd" fillOpacity="0.3" style={{fontFamily: monoFont}}>;</text>
            </g>
        </svg>
    );
}
