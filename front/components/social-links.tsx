export function SocialLinks() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-6 pb-5">
      <div className="mx-auto w-full max-w-xs">
        <nav
          aria-label="Social links"
          className="pointer-events-auto flex items-center justify-between gap-3 rounded-full border border-[#151515] bg-[#111111]/80 px-3 py-2 text-sm text-[#4b4b4b] backdrop-blur-sm"
        >
          <a href="https://github.com/tahfaribtw" className="transition-colors hover:text-white">
            gh
          </a>
          <a href="https://twitter.com/tahfaribtw" className="transition-colors hover:text-white">
            x
          </a>
          <a href="https://youtube.com/tahfaribtw" className="transition-colors hover:text-white">
            yt
          </a>
          <a href="#" className="transition-colors hover:text-white">
            twitch
          </a>
          <a href="#" className="transition-colors hover:text-white">
            discord
          </a>
        </nav>
      </div>
    </div>
  )
}