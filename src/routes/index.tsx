import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: OxideDashboard })

const STACK = [
  {
    name: 'Vite 8',
    label: 'Bundler',
    desc: 'Rolldown-powered dev server and production builds. Near-instant HMR.',
    badge: 'v8',
    href: 'https://vite.dev',
  },
  {
    name: 'Oxlint',
    label: 'Linter',
    desc: '50-100× faster than ESLint. Written in Rust. Zero config to start.',
    badge: 'rust',
    href: 'https://oxc.rs/docs/guide/usage/linter',
  },
  {
    name: 'Oxfmt',
    label: 'Formatter',
    desc: '30× faster than Prettier. Prettier-compatible. Part of the OXC stack.',
    badge: 'rust',
    href: 'https://oxc.rs/docs/guide/usage/formatter',
  },
  {
    name: 'Rolldown',
    label: 'Bundler core',
    desc: 'Rust-based Rollup-compatible bundler. Vite 8 uses it under the hood.',
    badge: 'rust',
    href: 'https://rolldown.rs',
  },
  {
    name: 'TanStack Start',
    label: 'Framework',
    desc: 'Full-stack React with type-safe routing, server functions, and SSR.',
    badge: 'react',
    href: 'https://tanstack.com/start',
  },
  {
    name: 'Tailwind v4',
    label: 'Styling',
    desc: 'CSS-first config. OKLCH color palette. P3 gamut support built-in.',
    badge: 'css',
    href: 'https://tailwindcss.com',
  },
  {
    name: 'Vitest',
    label: 'Testing',
    desc: 'Vite-native test runner. Shares config with your build pipeline.',
    badge: 'v3',
    href: 'https://vitest.dev',
  },
  {
    name: 'mise',
    label: 'Runtime mgr',
    desc: 'Pins Node, pnpm, and any CLI tool versions via .mise.toml.',
    badge: 'toml',
    href: 'https://mise.jdx.dev',
  },
]

function OxideDashboard() {
  return (
    <main className="page-wrap px-4 pb-16 pt-12">
      {/* Hero */}
      <section className="island-shell rise-in relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,oklch(0.72_0.22_25_/_0.18),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,oklch(0.78_0.14_55_/_0.12),transparent_66%)]" />

        <p className="island-kicker mb-4">Oxide — Vite + OXC Starter</p>
        <h1 className="display-title mb-5 max-w-3xl text-4xl leading-[1.02] font-bold tracking-tight text-[var(--ink)] sm:text-6xl">
          The fast stack,<br />
          <span className="text-[var(--accent)]">made visible.</span>
        </h1>
        <p className="mb-8 max-w-2xl text-base text-[var(--ink-soft)] sm:text-lg">
          A full-stack dashboard starter built with TanStack Start, Vite 8 + Rolldown,
          and the OXC Rust toolchain — oxlint and oxfmt included. OKLCH theming throughout.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="/ecosystem"
            className="rounded-full border border-[oklch(0.72_0.22_25_/_0.30)] bg-[oklch(0.72_0.22_25_/_0.12)] px-5 py-2.5 text-sm font-semibold text-[var(--accent-deep)] no-underline transition hover:-translate-y-0.5 hover:bg-[oklch(0.72_0.22_25_/_0.20)]"
          >
            Ecosystem Stats →
          </a>
          <a
            href="https://github.com/mhwilkes/vite-devtools"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-5 py-2.5 text-sm font-semibold text-[var(--ink)] no-underline transition hover:-translate-y-0.5"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* Stack grid */}
      <section className="mt-8">
        <p className="island-kicker mb-4">The Stack</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STACK.map(({ name, label, desc, badge, href }, i) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="island-shell feature-card rise-in block rounded-2xl p-5 no-underline"
              style={{ animationDelay: `${i * 60 + 80}ms` }}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--ink-soft)] font-mono">
                  {label}
                </span>
                <span className="stat-badge">{badge}</span>
              </div>
              <h2 className="mb-2 text-base font-semibold text-[var(--ink)]">{name}</h2>
              <p className="m-0 text-sm leading-relaxed text-[var(--ink-soft)]">{desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Quick start */}
      <section className="island-shell mt-8 rounded-2xl p-6 sm:p-8">
        <p className="island-kicker mb-3">Quick Start</p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="mb-2 text-sm font-semibold text-[var(--ink)]">Clone &amp; run</h3>
            <pre className="m-0 overflow-x-auto rounded-xl border border-[var(--line)] bg-[var(--sand)] p-4 font-mono text-xs text-[var(--ink-soft)]">
              <code>{`git clone github.com/mhwilkes/vite-devtools
cd vite-devtools
mise install     # pins Node 24 + pnpm
pnpm install
pnpm dev         # → localhost:3000`}</code>
            </pre>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold text-[var(--ink)]">Toolchain commands</h3>
            <pre className="m-0 overflow-x-auto rounded-xl border border-[var(--line)] bg-[var(--sand)] p-4 font-mono text-xs text-[var(--ink-soft)]">
              <code>{`pnpm lint        # oxlint (Rust, ~50ms)
pnpm fmt         # oxfmt  (Rust, ~30ms)
pnpm test        # vitest
pnpm build       # rolldown production build
pnpm typecheck   # tsc --noEmit`}</code>
            </pre>
          </div>
        </div>
      </section>
    </main>
  )
}
