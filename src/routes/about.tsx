import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

const PRINCIPLES = [
  {
    title: 'One config to rule them',
    body: 'vite-plus extends vite.config.ts with lint, fmt, test, and staged hook blocks. Your eslintrc, prettierrc, and vitest.config all collapse into the file you already have.',
  },
  {
    title: 'Rust where it counts',
    body: 'Rolldown bundles, Oxlint lints, Oxfmt formats — each 30-100× faster than the JS alternative. Not a marginal improvement. You feel it on every save.',
  },
  {
    title: 'mise pins the runtime',
    body: '.mise.toml locks Node and pnpm for every dev and every CI runner. No more "works on my machine" from version drift. One file, zero drift.',
  },
  {
    title: 'Static by default',
    body: 'TanStack Start prerenders all routes to static HTML at build time. Deployed to GitHub Pages — no server, no cost, global CDN edge delivery out of the box.',
  },
]

function About() {
  return (
    <main className="page-wrap px-4 py-12 space-y-6">
      {/* Intro */}
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <p className="island-kicker mb-2">About</p>
        <h1 className="display-title mb-4 text-4xl font-bold text-[var(--ink)] sm:text-5xl">
          The Oxide Stack
        </h1>
        <p className="max-w-3xl text-base leading-8 text-[var(--ink-soft)]">
          <em>Vite</em> is French for <em>fast</em> — and the Oxide Stack takes that seriously —
          every tool chosen because it is the fastest option available, not just a popular one.
          <strong className="text-[var(--ink)]"> vite-plus</strong> acts as the orchestration layer:
          one package, one config file, one CLI (<code className="font-mono text-sm">vp</code>) that
          replaces an entire folder of scattered tool configs.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--ink-soft)]">
          If your team already runs Vite with React or SolidJS, this is the natural next step.
          You keep everything you know — same dev server, same plugin ecosystem — and lose the
          maintenance burden of five separate config files and two separate linting installs.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/"
            className="rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-4 py-2 text-sm font-semibold text-[var(--ink)] no-underline transition hover:-translate-y-0.5"
          >
            ← See the stack
          </Link>
          <a
            href="https://github.com/mhwilkes/vite-devtools"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-4 py-2 text-sm font-semibold text-[var(--ink)] no-underline transition hover:-translate-y-0.5"
          >
            Clone on GitHub ↗
          </a>
        </div>
      </section>

      {/* If you use Vite today */}
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <p className="island-kicker mb-3">If you use Vite + React/Solid today</p>
        <p className="mb-6 max-w-2xl text-sm leading-7 text-[var(--ink-soft)]">
          Wherever you're starting from — ESLint/Prettier or already on Biome — the Oxide Stack
          consolidates what's left into a single config and adds the pieces you're probably missing.
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--ink-soft)] font-mono">ESLint + Prettier era</h3>
            <ul className="space-y-2 text-sm text-[var(--ink-soft)]">
              {[
                ['ESLint', '.eslintrc + @typescript-eslint/*'],
                ['Prettier', '.prettierrc + editor plugin'],
                ['Vitest', 'npm i vitest + vitest.config.ts'],
                ['.nvmrc', 'pinned Node — if everyone remembers'],
                ['vite.config.ts', 'Vite'],
              ].map(([tool, note]) => (
                <li key={tool} className="flex gap-3">
                  <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--line)]" />
                  <span>
                    <span className="font-mono font-medium text-[var(--ink)]">{tool}</span>
                    <span className="block text-xs text-[var(--ink-soft)] opacity-70">{note}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--warm)] font-mono">Biome era</h3>
            <ul className="space-y-2 text-sm text-[var(--ink-soft)]">
              {[
                ['biome.json', 'lint + fmt — fast, but still separate'],
                ['Vitest', 'vitest.config.ts still needed'],
                ['.nvmrc', 'still no runtime enforcement'],
                ['vite.config.ts', 'Vite — not connected to Biome'],
              ].map(([tool, note]) => (
                <li key={tool} className="flex gap-3">
                  <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--warm)] opacity-60" />
                  <span>
                    <span className="font-mono font-medium text-[var(--ink)]">{tool}</span>
                    <span className="block text-xs text-[var(--ink-soft)] opacity-70">{note}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-[var(--ink-soft)] opacity-60 font-mono">Rust speed ✓ · still fragmented ✗</p>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--accent)] font-mono">Oxide Stack</h3>
            <ul className="space-y-2 text-sm text-[var(--ink-soft)]">
              {[
                ['vite.config.ts', 'lint, fmt, test, staged hooks — all here'],
                ['.mise.toml', 'Node + pnpm pinned, CI included'],
                ['tsconfig.json', 'still here, still yours'],
              ].map(([tool, note]) => (
                <li key={tool} className="flex gap-3">
                  <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>
                    <span className="font-mono font-medium text-[var(--ink)]">{tool}</span>
                    <span className="block text-xs text-[var(--ink-soft)] opacity-70">{note}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-[var(--accent)] font-mono">Rust speed ✓ · unified ✓ · runtime pinned ✓</p>
          </div>
        </div>
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
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--line)] text-left">
                <th className="pb-2 font-semibold text-[var(--ink)] pr-6">Tool</th>
                <th className="pb-2 font-semibold text-[var(--ink)] pr-6">Role</th>
                <th className="pb-2 font-semibold text-[var(--ink)] pr-6">Replaces</th>
                <th className="pb-2 font-semibold text-[var(--ink)]">Speed</th>
              </tr>
            </thead>
            <tbody className="text-[var(--ink-soft)]">
              {[
                ['vite-plus', 'Meta-toolchain CLI', 'N separate configs', 'one vite.config'],
                ['Vite 8', 'Dev server', 'webpack / parcel', 'instant HMR'],
                ['Rolldown', 'Bundle engine', 'esbuild / rollup', 'Rust-native'],
                ['Oxlint', 'Linter', 'ESLint + plugins / Biome lint', '50-100× faster'],
                ['Oxfmt', 'Formatter', 'Prettier / Biome fmt', '30× faster'],
                ['TanStack Start', 'Framework', 'Next.js / Remix', 'React + Solid'],
                ['Tailwind v4', 'Styling', 'tailwind.config.js', 'CSS-first, no config file'],
                ['Vitest 4', 'Test runner', 'Jest', 'Vite-native'],
                ['mise', 'Runtime manager', '.nvmrc + nvm', 'all tools, one file'],
              ].map(([tool, role, replaces, speed]) => (
                <tr key={tool} className="border-b border-[var(--line)] last:border-0">
                  <td className="py-2.5 pr-6 font-mono font-medium text-[var(--ink)]">{tool}</td>
                  <td className="py-2.5 pr-6">{role}</td>
                  <td className="py-2.5 pr-6 text-xs">{replaces}</td>
                  <td className="py-2.5 text-xs font-mono text-[var(--accent)]">{speed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}
