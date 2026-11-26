import type { services } from "../lib/company";

type ServiceId = (typeof services)[number]["id"];

const artwork = {
  forwarding: <>
    <path fill="#002449" d="m42 41 47-13 26 12-48 16z" opacity=".25" />
    <path fill="#00acc4" d="m42 41 25 15 48-16v-17L90 11 42 25z" />
    <path fill="#c8dfed" d="m42 25 25 13 48-15-25-12z" />
    <path d="M67 38v18m8-18v13m9-16v13m9-16v13m9-16v13" stroke="#002449" />
  </>,
  customs: <>
    <path fill="#00acc4" d="M60 16h35l11 12v34H60z" />
    <path fill="#f2f7fa" d="M54 12h35l11 12v34H54z" />
    <path d="M89 12v12h11M63 28h18m-18 7h15m-15 7h11" stroke="#002449" />
    <circle cx="94" cy="49" r="12" fill="#00acc4" />
    <path d="m89 49 3 3 6-7" strokeWidth="2.3" stroke="#002449" />
  </>,
  integrated: <>
    <path d="m52 42 26-19 26 19M52 45l26 15 26-15" strokeDasharray="3 4" stroke="#00acc4" />
    <path fill="#00acc4" d="m65 19 13-7 13 7v12l-13 7-13-7zM39 40l13-7 13 7v12l-13 7-13-7zm52 0 13-7 13 7v12l-13 7-13-7z" />
    <path d="m65 19 13 7 13-7m-13 7v12M39 40l13 7 13-7m-13 7v12m39-19 13 7 13-7m-13 7v12" stroke="#002449" />
  </>,
  express: <>
    <path d="M38 34h13m-18 9h19m-11 9h13" stroke="#00acc4" />
    <path fill="#00acc4" d="m59 27 30-11 23 12v24L82 64 59 51z" />
    <path fill="#c8dfed" d="m59 27 30-11 23 12-30 12z" />
    <path fill="#f2f7fa" d="m71 23 6-2 23 12-6 2z" />
    <path d="M82 40v24m9-16 11-4m-11 8 7-3" stroke="#002449" />
  </>,
  consultation: <>
    <path fill="#c8dfed" d="M44 26h68v33H44z" />
    <path fill="#f2f7fa" d="M48 13h60v41H48z" />
    <path d="M56 44h44m-42-7 12-9 10 5 15-12" stroke="#002449" />
    <path fill="#00acc4" d="M65 28a4 4 0 1 0 8 0 4 4 0 1 0-8 0zm26-7a4 4 0 1 0 8 0 4 4 0 1 0-8 0z" />
    <path d="M73 59v5m10-5v5m-17 0h24" stroke="#002449" />
  </>,
};

export function ServiceArtwork({ id }: { id: ServiceId }) {
  return (
    <svg viewBox="0 0 156 78" className="h-full w-full" aria-hidden="true">
      <ellipse className="service-shadow" cx="78" cy="66" rx="42" ry="5" fill="#002449" opacity=".12" />
      <g className="service-object" fill="none" stroke="#002449" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {artwork[id]}
      </g>
    </svg>
  );
}
