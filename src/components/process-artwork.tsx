const illustrations = {
  consultation: (
    <>
      <path d="m46 101 50-23 40 14 50-25 53 28-55 28-40-13-55 27z" fill="#d8eaf4" />
      <path d="m46 101 50-23 40 14 50-25 53 28-55 28-40-13-55 27zM96 78l-7 59m47-45 8 18m42-43-2 56" stroke="#002449" />
      <path d="M80 109q30-28 49-5t66-10" stroke="#00acc4" strokeDasharray="5 5" strokeWidth="2" />
      <circle cx="80" cy="109" r="5" fill="#00acc4" />
      <path d="M196 94c-3-6-17-15-17-27a17 17 0 0 1 34 0c0 12-14 21-17 27z" fill="#00acc4" />
      <circle cx="196" cy="67" r="6" fill="#f2f7fa" />
    </>
  ),
  customs: (
    <>
      <rect x="81" y="28" width="93" height="106" rx="8" fill="#c8dfed" transform="rotate(-11 81 28)" />
      <rect x="95" y="32" width="86" height="108" rx="7" fill="#f2f7fa" />
      <path d="M112 53h48m-48 13h41m-27 17h34m-34 17h34m-34 17h27M111 83l4 4 5-7m-9 20 4 4 5-7m-9 20 4 4 5-7" stroke="#002449" />
      <circle cx="181" cy="110" r="22" fill="#00acc4" />
      <path d="m171 110 7 7 13-15" strokeWidth="3" stroke="#002449" />
    </>
  ),
  forwarding: (
    <>
      <path d="M36 100h48m-29 12h48" stroke="#00acc4" strokeDasharray="8 7" />
      <path d="m72 60 96-21 24 17-97 23z" fill="#f2f7fa" />
      <path d="m72 60 23 19v43l-23-17z" fill="#c8dfed" />
      <path d="m95 79 97-23v43l-97 23z" fill="#00acc4" />
      <path d="m192 72 22-5 18 17v16l-40 10z" fill="#d8eaf4" />
      <path d="m200 75 12-3 11 11-23 5z" fill="#48627e" />
      <path d="m117 90 54-13m-54 22 33-8" stroke="#002449" />
      <ellipse cx="120" cy="117" rx="8" ry="10" fill="#002449" />
      <ellipse cx="209" cy="106" rx="8" ry="10" fill="#002449" />
      <ellipse cx="120" cy="117" rx="3" ry="4" fill="#c8dfed" />
      <ellipse cx="209" cy="106" rx="3" ry="4" fill="#c8dfed" />
    </>
  ),
};

export function ProcessArtwork({ step }: { step: keyof typeof illustrations }) {
  return (
    <svg viewBox="0 0 280 164" aria-hidden="true" className="h-full w-full max-w-xs" fill="none" stroke="#002449" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
      <ellipse cx="140" cy="139" rx="94" ry="7" fill="#002449" opacity=".10" stroke="none" />
      {illustrations[step]}
    </svg>
  );
}
