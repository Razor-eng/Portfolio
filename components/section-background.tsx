export function SectionBackground({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary/0 via-primary/5 to-primary/20 min-h-screen">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-white/[0.05]" />
      </div>
      <div className="relative pt-24 pb-10">{children}</div>
    </section>
  )
}

