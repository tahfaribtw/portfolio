import LiquidWaveSpinner from "@/components/ui/liquid-wave-spinner"

export default function Loading() {
  return (
    <main className="grid min-h-[calc(100svh-4rem)] place-items-center bg-background">
      <LiquidWaveSpinner
        className="max-w-xs"
        role="status"
        aria-label="Loading page"
        aria-live="polite"
      />
    </main>
  )
}
