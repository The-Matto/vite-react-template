export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            className="w-full bg-black text-white/40 text-sm font-mono px-4 py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>Matt Heritage © {year}</span>
            <span className="text-white/25">built with React + Cloudflare</span>
        </footer>
    );
}
