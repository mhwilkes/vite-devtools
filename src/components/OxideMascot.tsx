/**
 * Oxi — the Oxide Stack mascot.
 *
 * A friendly Ferris-inspired crab (Rust) carrying a Vite lightning bolt
 * on its belly (JS ecosystem). Scales via the `size` prop.
 */
export function OxideMascot({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-label="Oxi, the Oxide Stack mascot"
      role="img"
    >
      {/* ── Legs ────────────────────────────────────────────────── */}
      <line x1="32" y1="72" x2="22" y2="88" stroke="var(--accent)" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="38" y1="76" x2="30" y2="90" stroke="var(--accent)" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="62" y1="72" x2="72" y2="88" stroke="var(--accent)" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="56" y1="76" x2="64" y2="90" stroke="var(--accent)" strokeWidth="4.5" strokeLinecap="round" />

      {/* ── Left claw ───────────────────────────────────────────── */}
      <path
        d="M20 56 Q7 48 6 36"
        stroke="var(--accent)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      {/* pincer — two overlapping blobs */}
      <ellipse cx="4"  cy="29" rx="7" ry="4.5" fill="var(--accent)" transform="rotate(-35 4 29)" />
      <ellipse cx="10" cy="24" rx="6" ry="4"   fill="var(--accent)" transform="rotate(-10 10 24)" />

      {/* ── Right claw ──────────────────────────────────────────── */}
      <path
        d="M80 56 Q93 48 94 36"
        stroke="var(--accent)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="96" cy="29" rx="7" ry="4.5" fill="var(--accent)" transform="rotate(35 96 29)" />
      <ellipse cx="90" cy="24" rx="6" ry="4"   fill="var(--accent)" transform="rotate(10 90 24)" />

      {/* ── Body ────────────────────────────────────────────────── */}
      <ellipse cx="50" cy="66" rx="28" ry="21" fill="var(--accent)" />

      {/* ── Eye stalks ──────────────────────────────────────────── */}
      <rect x="34" y="43" width="7" height="16" rx="3.5" fill="var(--accent)" />
      <rect x="59" y="43" width="7" height="16" rx="3.5" fill="var(--accent)" />

      {/* ── Eyes ────────────────────────────────────────────────── */}
      <circle cx="37.5" cy="41" r="12" fill="white" />
      <circle cx="62.5" cy="41" r="12" fill="white" />
      {/* pupils */}
      <circle cx="39"   cy="41" r="7.5" fill="oklch(0.12 0.02 270)" />
      <circle cx="64"   cy="41" r="7.5" fill="oklch(0.12 0.02 270)" />
      {/* shine */}
      <circle cx="43"   cy="36" r="3"   fill="white" />
      <circle cx="68"   cy="36" r="3"   fill="white" />

      {/* ── Vite lightning bolt on belly ────────────────────────── */}
      <path
        d="M54 56 L47 67 H52.5 L49.5 78 L61 66 H55.5 Z"
        fill="var(--warm)"
      />
    </svg>
  )
}

/**
 * Mini crab mark — used in the header at small sizes (20 × 20).
 * Simplified to body + eyes + stub claws + micro bolt.
 */
export function OxideMark({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* stub claws */}
      <path d="M4 11 Q1 9 1 6"  stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <circle cx="1"  cy="5"  r="2.2" fill="var(--accent)" />
      <path d="M20 11 Q23 9 23 6" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <circle cx="23" cy="5"  r="2.2" fill="var(--accent)" />
      {/* body */}
      <ellipse cx="12" cy="17" rx="9" ry="6.5" fill="var(--accent)" />
      {/* eye stalks */}
      <rect x="7.5" y="9"  width="3" height="5.5" rx="1.5" fill="var(--accent)" />
      <rect x="13.5" y="9" width="3" height="5.5" rx="1.5" fill="var(--accent)" />
      {/* eyes */}
      <circle cx="9"  cy="8.5" r="4" fill="white" />
      <circle cx="15" cy="8.5" r="4" fill="white" />
      <circle cx="9.5"  cy="8.5" r="2.5" fill="oklch(0.12 0.02 270)" />
      <circle cx="15.5" cy="8.5" r="2.5" fill="oklch(0.12 0.02 270)" />
      <circle cx="11"   cy="7"   r="1"   fill="white" />
      <circle cx="17"   cy="7"   r="1"   fill="white" />
      {/* micro bolt */}
      <path d="M13 14 L11 17.5 H12.8 L11.8 21 L15 17 H13.2 Z" fill="var(--warm)" />
    </svg>
  )
}
