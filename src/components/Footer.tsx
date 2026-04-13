export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-[var(--line)] px-4 pb-14 pt-10 text-[var(--ink-soft)]">
      <div className="page-wrap flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="m-0 text-sm">
          &copy; {year}{' '}
          <a href="https://github.com/mhwilkes" className="text-[var(--ink-soft)] hover:text-[var(--ink)]">
            mhwilkes
          </a>
          . MIT License.
        </p>
        <p className="island-kicker m-0">
          {'The Oxide Stack · '}
          <a href="https://npmjs.com/package/vite-plus" className="text-[var(--accent)] hover:text-[var(--accent-deep)] no-underline">
            vite-plus
          </a>
          {' + '}
          <a href="https://vite.dev" className="text-[var(--accent)] hover:text-[var(--accent-deep)] no-underline">
            Vite 8
          </a>
          {' + '}
          <a href="https://oxc.rs" className="text-[var(--accent)] hover:text-[var(--accent-deep)] no-underline">
            OXC
          </a>
          {' + '}
          <a href="https://mise.jdx.dev" className="text-[var(--accent)] hover:text-[var(--accent-deep)] no-underline">
            mise
          </a>
        </p>
      </div>
    </footer>
  )
}
