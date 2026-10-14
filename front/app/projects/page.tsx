import { ArrowUpRight } from "lucide-react"

export default function Page() {
  return (
    <main className="min-h-svh px-6 pt-28 font-mono text-[#e5e5e5]">
      <div className="mx-auto w-full max-w-xs">
        <header>
          <h1 className="text-lg font-normal">Projects</h1>
          <p className="mt-1 text-sm text-[#4b4b4b]">Things i have worked on.</p>
        </header>

        <section className="mt-12 border-t border-[#151515] pt-6">
          <div className="flex items-center gap-2">
            <h2 className="text-sm text-[#d9d9d9]">primebit.js</h2>
            <a
              href="https://www.npmjs.com/package/primebit.js"
              aria-label="Open primebit.js on npm"
              className="inline-flex text-[#4b4b4b] transition-colors hover:text-white"
              rel="noreferrer"
              target="_blank"
            >
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          <p className="mt-3 text-sm leading-6 text-[#4b4b4b]">
            A clean and simple logging utility for Node.js applications.
          </p>
        </section>
      </div>
    </main>
  )
}
