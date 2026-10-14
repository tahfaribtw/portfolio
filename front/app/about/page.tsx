export default function Page() {
    return (
        <main className="min-h-svh px-6 pt-28 font-mono text-[#e5e5e5]">
            <div className="mx-auto w-full max-w-xs">
                <header>
                    <h1 className="text-lg font-normal">About</h1>
                    <p className="mt-1 text-sm text-[#4b4b4b]">A little bit about me.</p>
                </header>

                <section className="mt-12 border-t border-[#151515] pt-6">
                    <p className="text-sm leading-6 text-[#d9d9d9]">
                        I am Tahfari, an 18 year old frontend developer who likes to code and make things look cool. I really do enjoy frontend developing and barely even use backend fr. I started to really know about web devlopment around 2020-2021 and i have gotten the hang of it since. I still have a long way to go but i shall keep learning along the way.
                    </p>
                </section>

                <section className="mt-10">
                    <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#4b4b4b]">
                        Languages & frameworks
                    </h2>
                    <ul className="mt-4 space-y-2 text-sm text-[#d9d9d9]">
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Node.js</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </section>
            </div>
        </main>
    )
}
