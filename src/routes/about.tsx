import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

const PRINCIPLES = [
  {
    title: 'vite-plus is the glue',
    body: 'A single vite.config.ts and one CLI — vp — drives dev, build, lint, format, test, and staged hooks. No separate eslint config, prettier config, or vitest config files scattered around.',
  },
  {
    title: 'Rust where it counts',
    body: 'Rolldown bundles, Oxlint lints, Oxfmt formats. These are 30-100× faster than their JS equivalents and part of the VoidZero / OXC ecosystem that Vite 8 is built on.',
  },
  {
    title: 'mise pins the runtime',
    body: '.mise.toml locks Node 24 and pnpm 10 for every developer and every CI runner. No more "works on my machine" from version drift.',
  },
  {
    title: 'Static by default',
    body: 'TanStack Start prerenders all routes to static HTML at build time. Deployed to GitHub Pages — no server required, free hosting, fast edge delivery.',
  },
]

function About() {
  return (
    <main className="page-wrap px-4 py-12 space-y-6">
      {/* Intro */}
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <p className="island-kicker mb-2">About</p>
        <h1 className="display-title mb-4 text-4xl font-bold text-[var(--ink)] sm:text-5xl">
          The French Stack
        </h1>
        <p className="max-w-3xl text-base leading-8 text-[var(--ink-soft)]">
          <em>Vite</em> is French for <em>fast</em>. The French Stack is a reference starter that takes
          that name seriously — every tool chosen because it is genuinely the fastest option available.
          <strong className="text-[var(--ink)]"> vite-plus</strong> ties it all together: one package,
          one config file, one CLI to rule them.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--ink-soft)]">
          Built as a reference for teams adopting the VoidZero / Vite 8 ecosystem. Clone it, strip
          what you don't need, and ship.
        </p>
      </section>

      {/* Principles */}
      <section>
        <p className="island-kicker mb-4">Design principles</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {PRINCIPLES.map(({ title, body }) => (
            <div key={title} className="island-shell rounded-2xl p-6">
              <h2 className="mb-2 text-base font-semibold text-[var(--ink)]">{title}</h2>
              <p className="m-0 text-sm leading-relaxed text-[var(--ink-soft)]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech table */}
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <p className="island-kicker mb-4">Full inventory</p>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--line)] text-left">
              <th className="pb-2 font-semibold text-[var(--ink)] pr-6">Tool</th>
              <th className="pb-2 font-semibold text-[var(--ink)] pr-6">Role</th>
              <th className="pb-2 font-semibold text-[var(--ink)]">Why</th>
            </tr>
          </thead>
          <tbody className="text-[var(--ink-soft)]">
            {[
              ['vite-plus', 'Meta-toolchain CLI', 'Unified vp commands replace 5+ separate tool configs'],
              ['Vite 8', 'Dev server + bundler', 'Instant HMR, Rolldown-powered production builds'],
              ['Rolldown', 'Bundle engine', 'Rust-native, Rollup-compatible — default in Vite 8'],
              ['Oxlint', 'Linter', '50-100× faster than ESLint, Rust-native'],
              ['Oxfmt', 'Formatter', '30× faster than Prettier, Prettier-compatible'],
              ['TanStack Start', 'Full-stack framework', 'Type-safe routing, static prerender, React 19'],
              ['Tailwind v4', 'Styling', 'CSS-first config, OKLCH palette, P3 gamut'],
              ['Vitest', 'Test runner', 'Vite-native, shares config via vp'],
              ['mise', 'Runtime manager', 'Pins Node + pnpm versions in .mise.toml'],
            ].map(([tool, role, why]) => (
              <tr key={tool} className="border-b border-[var(--line)] last:border-0">
                <td className="py-2.5 pr-6 font-mono font-medium text-[var(--ink)]">{tool}</td>
                <td className="py-2.5 pr-6">{role}</td>
                <td className="py-2.5">{why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  )
}
