"use client"

import { useEffect, useState } from "react"

const decoderCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*+-?"

export function TextDecoder({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const characters = Array.from(text)
    let frame = 0

    const timer = window.setInterval(() => {
      frame += 1
      const resolvedCount = Math.floor(frame / 2)

      setDisplayText(
        characters
          .map((character, index) => {
            if (index < resolvedCount || character === " ") {
              return character
            }

            return decoderCharacters[
              Math.floor(Math.random() * decoderCharacters.length)
            ]
          })
          .join(""),
      )

      if (resolvedCount >= characters.length) {
        window.clearInterval(timer)
      }
    }, 45)

    return () => window.clearInterval(timer)
  }, [text])

  return <span aria-hidden="true">{displayText}</span>
}
