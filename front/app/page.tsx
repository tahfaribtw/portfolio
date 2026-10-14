import { SocialLinks } from "@/components/social-links"

export default function Page() {
  return (
    <main className="min-h-svh  px-6 pt-28 font-mono text-[#e5e5e5]">
      <div className="mx-auto w-full max-w-xs">
        <header>
          <h1 className="text-lg font-normal">Hi, I'm Tahfari.</h1>
          <p className="mt-1 text-sm text-[#4b4b4b]">I code things that look cool.</p>
        </header>

        <nav aria-label="Main navigation" className="mt-16">
          <ul className="space-y-5 text-sm">
            <li>
              <a href="/about" className="text-[#999] transition-colors hover:text-white">
                about
              </a>
            </li>
            <li>
              <a href="/blog" className="text-[#999] transition-colors hover:text-white">
                blog
              </a>
            </li>
            <li>
              <a href="/projects" className="text-[#999] transition-colors hover:text-white">
                projects
              </a>
            </li>
            <li>
              <a href="#" className="text-[#999] transition-colors hover:text-white">
                sponsors
              </a>
            </li>
          </ul>
        </nav>

        <div className="mt-10 border-t border-[#4b4b4b] pt-5 text-xs leading-relaxed text-[#999]">
          <p>
            If you want to contribute to my work, please donate{" "}
            <a
              className="text-[#e5e5e5] underline underline-offset-4 transition-colors hover:text-white"
              href="https://ko-fi.com/tahfarithedev"
              rel="noreferrer"
              target="_blank"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  )
}