const illustrations = {
  mapping: (
    <>
      {/* Supply Chain Flowchart & Process Mapping */}
      <path d="M42 82 h48 M116 82 h48 M190 82 h48" stroke="#00acc4" strokeWidth="2" strokeDasharray="4 4" />
      {/* Node 1: Origin / Supplier */}
      <rect x="24" y="66" width="36" height="32" rx="6" fill="#c8dfed" stroke="#002449" strokeWidth="1.5" />
      <path d="M34 76 h16 M34 82 h10 M34 88 h14" stroke="#002449" strokeWidth="1.2" />
      {/* Node 2: Process Mapping Hub (Center) */}
      <circle cx="106" cy="82" r="18" fill="#002449" stroke="#00acc4" strokeWidth="2" />
      <path d="M98 82 l6 6 10-12" stroke="#00acc4" strokeWidth="2.2" />
      {/* Flow line branching to Time Study */}
      <path d="M106 64 v-24 h54" stroke="#00acc4" strokeWidth="1.5" strokeDasharray="3 3" />
      <rect x="160" y="28" width="56" height="24" rx="5" fill="#f2f7fa" stroke="#002449" strokeWidth="1.4" />
      <text x="166" y="44" fill="#002449" fontSize="9" fontWeight="bold" fontFamily="sans-serif">TIME STUDY</text>
      {/* Node 3: Customs / IOR Milestone */}
      <rect x="180" y="66" width="36" height="32" rx="6" fill="#00acc4" stroke="#002449" strokeWidth="1.5" />
      <path d="M190 77 h16 M190 83 h12 M190 89 h8" stroke="#002449" strokeWidth="1.4" />
      {/* Node 4: Delivery Point */}
      <circle cx="254" cy="82" r="12" fill="#d8eaf4" stroke="#002449" strokeWidth="1.5" />
      <circle cx="254" cy="82" r="4" fill="#00acc4" />
    </>
  ),
  ior: (
    <>
      {/* IOR - Importer of Record & Compliance Shield */}
      <rect x="68" y="28" width="94" height="110" rx="8" fill="#c8dfed" transform="rotate(-6 68 28)" />
      <rect x="80" y="26" width="96" height="114" rx="7" fill="#f2f7fa" stroke="#002449" strokeWidth="1.5" />
      {/* Document Lines */}
      <path d="M98 46 h60 M98 56 h52 M98 66 h44 M98 76 h48 M98 86 h36" stroke="#002449" opacity="0.4" strokeWidth="1.5" />
      {/* Official IOR Compliance Stamp Badge */}
      <circle cx="178" cy="98" r="26" fill="#002449" stroke="#00acc4" strokeWidth="2.5" />
      <circle cx="178" cy="98" r="21" fill="none" stroke="#00acc4" strokeDasharray="3 3" strokeWidth="1" />
      <text x="163" y="94" fill="#00acc4" fontSize="11" fontWeight="bold" fontFamily="sans-serif">IOR</text>
      <text x="157" y="106" fill="#f2f7fa" fontSize="7" fontWeight="bold" fontFamily="sans-serif">COMPLIANT</text>
      <path d="M178 72 v-8 M178 124 v8 M152 98 h-8 M204 98 h8" stroke="#00acc4" strokeWidth="1.5" />
    </>
  ),
  timestudy: (
    <>
      {/* Process Time Study & Optimization */}
      {/* Circular Stopwatch / Clock Dial */}
      <circle cx="94" cy="82" r="38" fill="#f2f7fa" stroke="#002449" strokeWidth="2" />
      <circle cx="94" cy="82" r="32" fill="none" stroke="#c8dfed" strokeWidth="4" />
      <circle cx="94" cy="82" r="32" fill="none" stroke="#00acc4" strokeWidth="4" strokeDasharray="140 200" strokeDashoffset="40" />
      {/* Stopwatch tick marks */}
      <path d="M94 48 v6 M94 110 v6 M60 82 h6 M122 82 h6" stroke="#002449" strokeWidth="1.5" />
      {/* Hands */}
      <circle cx="94" cy="82" r="3" fill="#002449" />
      <path d="M94 82 l16-16 M94 82 v-22" stroke="#002449" strokeWidth="2" strokeLinecap="round" />
      {/* Top Button */}
      <rect x="90" y="38" width="8" height="6" rx="2" fill="#002449" />
      {/* Dwell-Time Compression Bar Chart */}
      <g transform="translate(150, 42)">
        <rect x="0" y="0" width="98" height="78" rx="6" fill="#f2f7fa" stroke="#002449" strokeWidth="1.5" />
        <path d="M12 66 h74 M12 66 v-52" stroke="#002449" strokeWidth="1.2" />
        {/* Baseline Bar */}
        <rect x="22" y="30" width="14" height="36" rx="2" fill="#c8dfed" />
        {/* Optimized Bar (Glavia) */}
        <rect x="44" y="44" width="14" height="22" rx="2" fill="#00acc4" />
        {/* Further reduction */}
        <rect x="66" y="52" width="14" height="14" rx="2" fill="#002449" />
        {/* Trend Down Arrow */}
        <path d="M26 24 Q50 34 76 46" stroke="#00acc4" strokeWidth="1.8" fill="none" strokeDasharray="3 3" />
        <path d="M72 46 h6 v-6" stroke="#00acc4" strokeWidth="1.8" fill="none" />
      </g>
    </>
  ),
  customs: (
    <>
      <rect x="81" y="28" width="93" height="106" rx="8" fill="#c8dfed" transform="rotate(-11 81 28)" />
      <rect x="95" y="32" width="86" height="108" rx="7" fill="#f2f7fa" stroke="#002449" strokeWidth="1.5" />
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

export type ProcessStep = keyof typeof illustrations;

export function ProcessArtwork({ step }: { step: ProcessStep }) {
  return (
    <svg viewBox="0 0 280 164" aria-hidden="true" className="h-full w-full max-w-xs" fill="none" stroke="#002449" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
      <ellipse cx="140" cy="139" rx="94" ry="7" fill="#002449" opacity=".10" stroke="none" />
      {illustrations[step] ?? illustrations.mapping}
    </svg>
  );
}
