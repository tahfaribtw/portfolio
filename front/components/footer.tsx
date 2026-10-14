import { SocialLinks } from "./social-links"

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[#151515] pt-6">
      <div className="mx-auto flex w-full max-w-xs flex-col gap-4">
        <SocialLinks />
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#4b4b4b]">
          inspired by <a href="https://t3.gg" className="text-[#d9d9d9] transition-colors hover:text-white" rel="noreferrer" target="_blank">t3.gg</a>
        </p>
      </div>
    </footer>
  )
}