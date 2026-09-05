// Decorative shapes behind the hero. Dev/game symbols in a muted palette,
// pure SVG and CSS, no animation library.
const monoFont = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

export default function HeroBackgroundShapes() {
    return (
        <svg
            className="absolute inset-0 w-full h-full -z-10 pointer-events-none select-none"
            viewBox="0 0 1000 700"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
        >
            {/* Wireframe box */}
            <g className="hero-shape" style={{animationDuration: "18s"}}>
                <polygon points="800,95 838.97,117.5 838.97,162.5 800,185 761.03,162.5 761.03,117.5"
                         fill="none" stroke="#7fa8bd" strokeOpacity="0.35" strokeWidth="1.5"/>
                <path d="M800,140 L800,95 M800,140 L838.97,162.5 M800,140 L761.03,162.5"
                      fill="none" stroke="#7fa8bd" strokeOpacity="0.35" strokeWidth="1.5"/>
            </g>

            {/* </> */}
            <g className="hero-shape" style={{animationDuration: "13s", animationDelay: "-3s"}}>
                <text x="665" y="395" textAnchor="middle" dominantBaseline="middle" fontSize="58" fontWeight="700"
                      fill="#7fb89c" fillOpacity="0.3" style={{fontFamily: monoFont}}>{"</>"}</text>
            </g>

            {/* "//"*/}
            <g className="hero-shape" style={{animationDuration: "20s", animationDelay: "-6s"}}>
                <text x="800" y="520" textAnchor="middle" dominantBaseline="middle" fontSize="56" fontWeight="700"
                      fill="#c98b5c" fillOpacity="0.3" style={{fontFamily: monoFont}}>{"//"}</text>
            </g>

            {/* Curly braces */}
            <g className="hero-shape" style={{animationDuration: "17s", animationDelay: "-9s"}}>
                <text x="520" y="118" textAnchor="middle" dominantBaseline="middle" fontSize="52" fontWeight="700"
                      fill="#9d8bc7" fillOpacity="0.3" style={{fontFamily: monoFont}}>{"{ }"}</text>
            </g>

            {/* Geometric gem */}
            <g className="hero-shape" style={{animationDuration: "15s", animationDelay: "-4s"}}>
                <polygon points="815,304 833,324 826,356 804,356 797,324" fill="none" stroke="#9d8bc7"
                         strokeOpacity="0.35" strokeWidth="1.5"/>
                <path d="M797,324 L833,324 M815,304 L826,356 M815,304 L804,356" fill="none" stroke="#9d8bc7"
                      strokeOpacity="0.35" strokeWidth="1.5"/>
            </g>

            {/* Semicolon */}
            <g className="hero-shape" style={{animationDuration: "22s", animationDelay: "-11s"}}>
                <text x="93" y="520" textAnchor="middle" dominantBaseline="middle" fontSize="40" fontWeight="700"
                      fill="#7fa8bd" fillOpacity="0.3" style={{fontFamily: monoFont}}>;</text>
            </g>
        </svg>
    );
}
