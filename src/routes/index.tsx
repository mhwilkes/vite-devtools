import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: OxideDashboard })

const STACK = [
  {
    name: 'vite-plus',
    label: 'Meta-toolchain',
    desc: 'One CLI (vp) that orchestrates Vite, Rolldown, OXC, Vitest, and staged hooks from a single vite.config. Replaces eslintrc, prettierrc, vitest.config, and more.',
    badge: 'glue',
    href: 'https://npmjs.com/package/vite-plus',
  },
  {
    name: 'Vite 8',
    label: 'Dev server',
    desc: 'The same Vite you already know — now with Rolldown as its production bundler. Near-instant HMR, same plugin API.',
    badge: 'v8',
    href: 'https://vite.dev',
  },
  {
    name: 'Rolldown',
    label: 'Bundler core',
    desc: 'Rust-native Rollup-compatible bundler. Ships as the default in Vite 8 — you get it for free.',
    badge: 'rust',
    href: 'https://rolldown.rs',
  },
  {
    name: 'Oxlint',
    label: 'Linter',
    desc: '50-100× faster than ESLint. Rust-native. Replaces your .eslintrc with two lines in vite.config.',
    badge: 'rust',
    href: 'https://oxc.rs/docs/guide/usage/linter',
  },
  {
    name: 'Oxfmt',
    label: 'Formatter',
    desc: '30× faster than Prettier. Drop-in compatible. No .prettierrc needed — configured in vite.config.',
    badge: 'rust',
    href: 'https://oxc.rs/docs/guide/usage/formatter',
  },
  {
    name: 'TanStack Start',
    label: 'Framework',
    desc: 'Full-stack React with type-safe file-based routing. Works with both React and SolidJS. Static prerender built in.',
    badge: 'react',
    href: 'https://tanstack.com/start',
  },
  {
    name: 'Tailwind v4',
    label: 'Styling',
    desc: 'CSS-first config — no tailwind.config.js. OKLCH color palette, P3 gamut, Vite plugin.',
    badge: 'css',
    href: 'https://tailwindcss.com',
  },
  {
    name: 'Vitest 4',
    label: 'Testing',
    desc: 'Vite-native test runner. No separate config — vp wires it into your vite.config automatically.',
    badge: 'v4',
    href: 'https://vitest.dev',
  },
  {
    name: 'mise',
    label: 'Runtime mgr',
    desc: 'One .mise.toml pins Node and pnpm for every developer and every CI runner. No more version drift.',
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

        <p className="island-kicker mb-4">The French Stack — vite means fast</p>
        <h1 className="display-title mb-5 max-w-3xl text-4xl leading-[1.02] font-bold tracking-tight text-[var(--ink)] sm:text-6xl">
          You already use Vite.<br />
          <span className="text-[var(--accent)]">Here's the rest.</span>
        </h1>
        <p className="mb-8 max-w-2xl text-base text-[var(--ink-soft)] sm:text-lg">
          The French Stack takes your existing Vite + React (or Solid) setup and adds{' '}
          <strong className="text-[var(--ink)]">vite-plus</strong> — one CLI{' '}
          (<code className="font-mono text-xs">vp</code>) that replaces ESLint, Prettier, and scattered
          config files with a single <code className="font-mono text-xs">vite.config.ts</code> and a
          Rust toolchain that's 30-100× faster.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/about"
            className="rounded-full border border-[oklch(0.72_0.22_25_/_0.30)] bg-[oklch(0.72_0.22_25_/_0.12)] px-5 py-2.5 text-sm font-semibold text-[var(--accent-deep)] no-underline transition hover:-translate-y-0.5 hover:bg-[oklch(0.72_0.22_25_/_0.20)]"
          >
            Why this stack →
          </Link>
          <Link
            to="/ecosystem"
            className="rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-5 py-2.5 text-sm font-semibold text-[var(--ink)] no-underline transition hover:-translate-y-0.5"
          >
            Ecosystem Stats
          </Link>
          <a
            href="https://github.com/mhwilkes/vite-devtools"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-5 py-2.5 text-sm font-semibold text-[var(--ink)] no-underline transition hover:-translate-y-0.5"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      {/* Before / After */}
      <section className="island-shell mt-8 rounded-2xl p-6 sm:p-8">
        <p className="island-kicker mb-3">The upgrade</p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-[var(--ink-soft)] uppercase tracking-widest font-mono">Before — standard Vite project</h3>
            <pre className="m-0 overflow-x-auto rounded-xl border border-[var(--line)] bg-[var(--sand)] p-4 font-mono text-xs text-[var(--ink-soft)]">
              <code>{`vite.config.ts
.eslintrc.cjs          # separate install
.prettierrc            # separate install
vitest.config.ts       # separate config
.nvmrc                 # or .node-version
.npmrc
tsconfig.json
tsconfig.node.json     # often needed too`}</code>
            </pre>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-[var(--accent)] uppercase tracking-widest font-mono">After — French Stack</h3>
            <pre className="m-0 overflow-x-auto rounded-xl border border-[var(--line)] bg-[var(--sand)] p-4 font-mono text-xs text-[var(--ink-soft)]">
              <code>{`vite.config.ts         # everything lives here
.mise.toml             # replaces .nvmrc + more
tsconfig.json`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Stack grid */}
      <section className="mt-8">
        <p className="island-kicker mb-4">The Stack</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
mise install     # pins Node 24 + pnpm 10
pnpm install
pnpm dev         # → localhost:3000`}</code>
            </pre>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold text-[var(--ink)]">vp commands (via pnpm)</h3>
            <pre className="m-0 overflow-x-auto rounded-xl border border-[var(--line)] bg-[var(--sand)] p-4 font-mono text-xs text-[var(--ink-soft)]">
              <code>{`pnpm lint        # vp lint  → oxlint  (~50ms)
pnpm fmt         # vp fmt   → oxfmt   (~30ms)
pnpm test        # vp test  → vitest
pnpm build       # vp build → rolldown
pnpm check       # vp check → lint + fmt + types`}</code>
            </pre>
          </div>
        </div>
      </section>
    </main>
  )
}
