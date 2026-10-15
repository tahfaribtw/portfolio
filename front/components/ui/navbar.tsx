"use client"

import { Mail, Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { FaGithub, FaTwitch, FaXTwitter, FaYoutube } from "react-icons/fa6"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type NavbarProps = {
  name?: string
  discordHref?: string
}

export function Navbar({
  name = "tahfari.",
  discordHref = "https://discord.com/app",
}: NavbarProps) {
  const [emailCopied, setEmailCopied] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const isDark = hasMounted && resolvedTheme === "dark"

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6"
      >
        <a
          className="min-w-0 flex-1 truncate text-base font-semibold text-foreground sm:flex-none"
          href="/"
        >
          {name}
        </a>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <a
            aria-label="Discord"
            className="inline-flex size-9 items-center justify-center rounded-md border border-border transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            href={discordHref}
            rel="noreferrer"
            target="_blank"
            title="Discord"
          >
            <svg
              aria-hidden="true"
              className="size-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.393-.4063-.8742-.6264-1.2495a.077.077 0 0 0-.0785-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0692.0692 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0582a.0824.0824 0 0 0 .0312.0561c2.0184 1.4812 3.973 2.381 5.8913 2.9722a.0777.0777 0 0 0 .0842-.0271c.4528-.6178.8567-1.2687 1.1993-1.9533a.075.075 0 0 0-.041-.1047 13.039 13.039 0 0 1-1.8387-.8781.077.077 0 0 1-.0076-.1277c.123-.0924.2461-.1885.3638-.2854a.0743.0743 0 0 1 .0776-.0104c3.858 1.7628 8.036 1.7628 11.848 0a.074.074 0 0 1 .0785.0095c.1177.0969.2408.193.3647.2854a.077.077 0 0 1-.0067.1277 12.066 12.066 0 0 1-1.8387.8772.075.075 0 0 0-.0419.1047c.3506.6837.7545 1.3346 1.1993 1.9524a.076.076 0 0 0 .0842.028c1.9274-.5912 3.881-1.491 5.8994-2.9722a.077.077 0 0 0 .0312-.0552c.5004-5.1773-.8382-9.6735-3.5485-13.6604a.061.061 0 0 0-.0312-.0286zM8.02 15.331c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.419 2.1569-2.419 1.2103 0 2.1842 1.0952 2.1652 2.419 0 1.3333-.9546 2.419-2.1652 2.419zm7.975 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9364-2.419 2.1569-2.419 1.2103 0 2.1842 1.0952 2.1652 2.419 0 1.3333-.9546 2.419-2.1652 2.419z" />
            </svg>
          </a>
          <a
            aria-label="GitHub"
            className="inline-flex size-9 items-center justify-center rounded-md border border-border transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            href="https://github.com/tahfaribtw"
            rel="noreferrer"
            target="_blank"
            title="GitHub"
          >
            <FaGithub aria-hidden="true" className="size-4" />
          </a>
          <a
            aria-label="X"
            className="inline-flex size-9 items-center justify-center rounded-md border border-border transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            href="https://twitter.com/tahfaribtw"
            rel="noreferrer"
            target="_blank"
            title="X"
          >
            <FaXTwitter aria-hidden="true" className="size-4" />
          </a>
          <a
            aria-label="YouTube"
            className="inline-flex size-9 items-center justify-center rounded-md border border-border transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            href="https://youtube.com/tahfaribtw"
            rel="noreferrer"
            target="_blank"
            title="YouTube"
          >
            <FaYoutube aria-hidden="true" className="size-4" />
          </a>
          <a
            aria-label="Twitch"
            className="inline-flex size-9 items-center justify-center rounded-md border border-border transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            href="https://twitch.tv/tahfaribtw"
            rel="noreferrer"
            target="_blank"
            title="Twitch"
          >
            <FaTwitch aria-hidden="true" className="size-4" />
          </a>
          <Tooltip open={emailCopied}>
            <TooltipTrigger
              aria-label="Copy email address"
              className="inline-flex size-9 items-center justify-center rounded-md border border-border transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText("tahfarithedev@gmail.com")
                  setEmailCopied(true)
                  window.setTimeout(() => setEmailCopied(false), 2000)
                } catch {
                  setEmailCopied(false)
                }
              }}
              type="button"
            >
              <Mail aria-hidden="true" className="size-4" />
            </TooltipTrigger>
            <TooltipContent side="top">Email Copied!</TooltipContent>
          </Tooltip>
          <button
            aria-checked={isDark}
            aria-label="Dark mode"
            className={`inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${isDark ? "bg-primary" : "bg-muted"}`}
            onClick={toggleTheme}
            role="switch"
            title="Dark mode"
            type="button"
          >
            <span
              aria-hidden="true"
              className={`inline-flex size-5 items-center justify-center rounded-full bg-background shadow-sm ${isDark ? "translate-x-5" : "translate-x-0.5"}`}
            >
              {isDark ? (
                <Moon className="size-3" />
              ) : (
                <Sun className="size-3" />
              )}
            </span>
          </button>
        </div>
      </nav>
    </header>
  )
}