import { createFileRoute } from '@tanstack/react-router'

// ─── Fetch npm weekly download counts (client-side, CORS-enabled API) ────────

const PACKAGES = ['vite', 'rolldown', 'oxlint', 'vitest', '@tanstack/react-start']

async function getNpmDownloads() {
  const results = await Promise.allSettled(
    PACKAGES.map(async (pkg) => {
      const encoded = pkg.startsWith('@') ? pkg.replace('/', '%2F') : pkg
      const res = await fetch(`https://api.npmjs.org/downloads/point/last-week/${encoded}`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = (await res.json()) as { downloads: number; package: string }
      return { name: pkg, downloads: data.downloads }
    }),
  )

  return results.map((r, i) =>
    r.status === 'fulfilled'
      ? r.value
      : { name: PACKAGES[i], downloads: null },
  )
}

// ─── Route ───────────────────────────────────────────────────────────────────

export const Route = createFileRoute('/ecosystem')({
  loader: () => getNpmDownloads(),
  component: EcosystemPage,
})

function fmt(n: number | null) {
  if (n === null) return '—'
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`
  return n.toString()
}

function EcosystemPage() {
  const stats = Route.useLoaderData()

  const max = Math.max(...stats.map((s) => s.downloads ?? 0), 1)

  return (
    <main className="page-wrap px-4 pb-16 pt-12">
      <section className="island-shell rise-in rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12">
        <p className="island-kicker mb-3">Ecosystem</p>
        <h1 className="display-title mb-3 text-4xl font-bold text-[var(--ink)] sm:text-5xl">
          Weekly downloads
        </h1>
        <p className="mb-8 max-w-xl text-[var(--ink-soft)]">
          Live npm stats for the Oxide stack packages — fetched from the npm downloads API on page load.
        </p>

        <ul className="m-0 list-none space-y-5 p-0">
          {stats.map(({ name, downloads }) => {
            const pct = downloads ? Math.round((downloads / max) * 100) : 0
            return (
              <li key={name}>
                <div className="mb-1.5 flex items-baseline justify-between gap-4">
                  <span className="font-mono text-sm font-medium text-[var(--ink)]">{name}</span>
                  <span className="stat-badge">{fmt(downloads)}</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--line)]">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${pct}%`,
                      background: `linear-gradient(90deg, var(--accent), var(--warm))`,
                    }}
                  />
                </div>
              </li>
            )
          })}
        </ul>

        <p className="mt-8 text-xs text-[var(--ink-soft)] font-mono">
          Source: npmjs.org/downloads API · updates on page load
        </p>
      </section>
    </main>
  )
}
