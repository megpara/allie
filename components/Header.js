import Link from "next/link"

export default function Header() {
    return (
        <div className="absolute top-0 left-0 w-full items-left justify-between flex z-20 p-8 text-white">
            <div className="font-display text-4xl tracking-widest">AP</div>
            <div className="flex gap-8 uppercase text-sm font-regular font-thin tracking-widest text-xs">
                <div>Portfolio</div>
                <Link href="/about">About</Link>
                <div>Get in touch</div>
            </div>
        </div>
    )
}