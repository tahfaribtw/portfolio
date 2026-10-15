import { SocialLinks } from "@/components/social-links"
import { TextDecoder } from "@/components/text-decoder"

export default function Page() {
  return (
    <main className="min-h-svh px-6 pt-28 font-mono text-foreground">
      <div className="mx-auto w-full max-w-xs">
        <header>
          <h1 className="text-lg font-normal">
            <span className="sr-only">Hi, I'm Tahfari.</span>
            Hi, I'm <TextDecoder text="Tahfari" />.
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">I code things that look cool.</p>
        </header>

        <nav aria-label="Main navigation" className="mt-16">
          <ul className="space-y-5 text-sm">
            <li>
              <a href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                about
              </a>
            </li>
            <li>
              <a href="/blog" className="text-muted-foreground transition-colors hover:text-foreground">
                blog
              </a>
            </li>
            <li>
              <a href="/projects" className="text-muted-foreground transition-colors hover:text-foreground">
                projects
              </a>
            </li>
            <li>
              <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                sponsors
              </a>
            </li>
          </ul>
        </nav>

        <div className="mt-10 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
          <p>
            If you want to contribute to my work, please donate{" "}
            <a
              className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
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