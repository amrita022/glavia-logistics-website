export type ProcessStep = "mapping" | "ior" | "timestudy" | "customs" | "forwarding";

const illustrations: Record<ProcessStep, React.ReactNode> = {
  mapping: (
    <>
      {/* Dynamic connecting flow lines */}
      <path d="M52 82 h36 M116 82 h36 M180 82 h36" className="proc-accent-stroke" strokeWidth="2.5" strokeDasharray="5 4" />
      
      {/* Node 1: Origin / Supplier Factory */}
      <g transform="translate(14, 56)">
        <rect width="44" height="52" rx="8" className="proc-fill-card proc-stroke" strokeWidth="1.6" />
        <rect x="6" y="8" width="32" height="12" rx="4" className="proc-fill-soft" />
        <path d="M14 14 h16 M10 28 h24 M10 34 h18 M10 40 h12" className="proc-stroke" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
        <text x="22" y="47" textAnchor="middle" className="proc-text" fontSize="7" fontWeight="bold" letterSpacing="0.05em">ORIGIN</text>
      </g>

      {/* Node 2: Central Optimization Hub (Glavia SOP) */}
      <g transform="translate(86, 48)">
        <circle cx="34" cy="34" r="32" className="proc-fill-soft proc-accent-stroke" strokeWidth="2" />
        <circle cx="34" cy="34" r="23" className="proc-badge-bg" />
        <path d="M26 34 l6 6 12-14" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="34" y="62" textAnchor="middle" className="proc-accent-fill" fontSize="8" fontWeight="bold" letterSpacing="0.08em">SOP HUB</text>
      </g>

      {/* Branching Time & Compliance Audit Pill */}
      <g transform="translate(94, 12)">
        <rect width="90" height="24" rx="6" className="proc-fill-card proc-accent-stroke" strokeWidth="1.5" />
        <path d="M12 12 h10 M45 0 v12" className="proc-accent-stroke" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="12" cy="12" r="3" className="proc-accent-fill" />
        <text x="54" y="16" textAnchor="middle" className="proc-text" fontSize="8.5" fontWeight="bold" letterSpacing="0.05em">FLOW AUDIT</text>
      </g>

      {/* Node 3: Customs & Regulatory Handoff */}
      <g transform="translate(150, 56)">
        <rect width="44" height="52" rx="8" className="proc-fill-card proc-stroke" strokeWidth="1.6" />
        <rect x="7" y="8" width="30" height="14" rx="3" className="proc-accent-fill" opacity="0.2" />
        <text x="22" y="18" textAnchor="middle" className="proc-accent-fill" fontSize="7.5" fontWeight="bold">EDI</text>
        <path d="M10 30 h24 M10 36 h16 M10 42 h20" className="proc-stroke" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
      </g>

      {/* Node 4: Final Door Delivery Destination */}
      <g transform="translate(216, 56)">
        <rect width="48" height="52" rx="8" className="proc-fill-card proc-accent-stroke" strokeWidth="1.8" />
        <circle cx="24" cy="22" r="10" className="proc-badge-bg" />
        <circle cx="24" cy="22" r="4" className="proc-accent-fill" />
        <path d="M24 32 v8 M14 44 h20" className="proc-accent-stroke" strokeWidth="2" strokeLinecap="round" />
        <text x="24" y="47" textAnchor="middle" className="proc-text" fontSize="7" fontWeight="bold" letterSpacing="0.05em">DEST</text>
      </g>
    </>
  ),

  ior: (
    <>
      {/* IOR - Importer of Record Compliance Certificate & Security Shield */}
      {/* Background document stack */}
      <g transform="translate(38, 20)">
        <rect width="112" height="126" rx="10" className="proc-fill-soft proc-stroke" strokeWidth="1.4" opacity="0.7" transform="rotate(-6 56 63)" />
      </g>

      {/* Foreground Statutory Trade Filing Card */}
      <g transform="translate(52, 16)">
        <rect width="116" height="132" rx="10" className="proc-fill-card proc-stroke" strokeWidth="1.8" />
        
        {/* Document Header Bar */}
        <rect x="12" y="12" width="92" height="18" rx="4" className="proc-fill-soft" />
        <rect x="18" y="18" width="40" height="6" rx="2" className="proc-badge-bg" opacity="0.85" />
        <circle cx="92" cy="21" r="4" className="proc-accent-fill" />

        {/* Regulatory Declaration Lines */}
        <path d="M16 42 h84 M16 52 h76 M16 62 h84 M16 72 h64 M16 82 h80 M16 92 h50" className="proc-stroke" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

        {/* ICEGATE / Statutory Filing Checkmarks */}
        <g transform="translate(16, 104)">
          <rect width="84" height="18" rx="4" className="proc-fill-soft" />
          <path d="M8 9 l3 3 6-7 M34 9 l3 3 6-7 M60 9 l3 3 6-7" className="proc-accent-stroke" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
      </g>

      {/* Authoritative IOR Golden / Cyan Seal Stamp */}
      <g transform="translate(164, 46)">
        {/* Outer security teeth */}
        <circle cx="44" cy="44" r="42" className="proc-badge-bg proc-accent-stroke" strokeWidth="2.5" />
        <circle cx="44" cy="44" r="35" fill="none" className="proc-accent-stroke" strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="44" cy="44" r="26" className="proc-fill-card" />
        
        {/* Shield Icon in center */}
        <path d="M44 26 L56 32 v14 c0 9 -12 16 -12 16 s-12 -7 -12 -16 V32 Z" className="proc-badge-bg" />
        <path d="M39 42 l3 3 7-8" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        
        {/* Typography */}
        <text x="44" y="68" textAnchor="middle" className="proc-accent-fill" fontSize="9" fontWeight="bold" letterSpacing="0.08em">IOR</text>
        <text x="44" y="77" textAnchor="middle" className="proc-text" fontSize="6.5" fontWeight="bold" letterSpacing="0.06em">COMPLIANT</text>
      </g>
    </>
  ),

  timestudy: (
    <>
      {/* Precision Stopwatch & Dwell-Time Compression Cockpit */}
      {/* Left: High-Precision Turnaround Chronometer */}
      <g transform="translate(24, 26)">
        <circle cx="58" cy="62" r="48" className="proc-fill-card proc-stroke" strokeWidth="2" />
        <circle cx="58" cy="62" r="40" className="proc-fill-soft" />
        
        {/* Radial Time Progress Arc (-68% Dwell Time) */}
        <circle cx="58" cy="62" r="40" fill="none" className="proc-accent-stroke" strokeWidth="6" strokeDasharray="170 260" strokeDashoffset="45" strokeLinecap="round" />
        
        {/* Dial Ticks */}
        <path d="M58 28 v6 M58 90 v6 M24 62 h6 M92 62 h6" className="proc-stroke" strokeWidth="2" strokeLinecap="round" />
        
        {/* Clock Hands */}
        <circle cx="58" cy="62" r="4" className="proc-badge-bg" />
        <path d="M58 62 L74 46 M58 62 V38" className="proc-stroke" strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Crown & Pusher Buttons */}
        <rect x="53" y="8" width="10" height="8" rx="2.5" className="proc-badge-bg" />
        <rect x="86" y="20" width="7" height="6" rx="2" className="proc-accent-fill" transform="rotate(38 89 23)" />
        
        {/* Time Saved Pill Badge */}
        <g transform="translate(22, 102)">
          <rect width="72" height="18" rx="5" className="proc-badge-bg" />
          <text x="36" y="12.5" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold" letterSpacing="0.04em">-68% DWELL</text>
        </g>
      </g>

      {/* Right: Cycle-Time Comparison Analytics Chart */}
      <g transform="translate(142, 28)">
        <rect width="122" height="110" rx="10" className="proc-fill-card proc-stroke" strokeWidth="1.6" />
        
        {/* Chart Header */}
        <rect x="10" y="10" width="102" height="16" rx="4" className="proc-fill-soft" />
        <text x="61" y="21.5" textAnchor="middle" className="proc-text" fontSize="7.5" fontWeight="bold" letterSpacing="0.05em">PORT DWELL ANALYSIS</text>
        
        {/* Chart Axes */}
        <path d="M16 92 h94 M16 92 v-54" className="proc-stroke" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        
        {/* Baseline Bar (Standard Clearance: 6-8 Days) */}
        <rect x="28" y="44" width="18" height="48" rx="3" className="proc-fill-soft proc-stroke" strokeWidth="1.2" opacity="0.8" />
        <text x="37" y="40" textAnchor="middle" className="proc-text-muted" fontSize="7" fontWeight="bold">6-8d</text>
        <text x="37" y="102" textAnchor="middle" className="proc-text-muted" fontSize="6.5">CFS</text>

        {/* Glavia Direct Port Delivery (DPD: <24 Hours) */}
        <rect x="58" y="66" width="18" height="26" rx="3" className="proc-accent-fill" />
        <text x="67" y="62" textAnchor="middle" className="proc-accent-fill" fontSize="7.5" fontWeight="bold">&lt;24h</text>
        <text x="67" y="102" textAnchor="middle" className="proc-text" fontSize="6.5" fontWeight="bold">DPD</text>

        {/* Target Milestone */}
        <rect x="88" y="78" width="18" height="14" rx="3" className="proc-badge-bg" />
        <text x="97" y="74" textAnchor="middle" className="proc-badge-bg" fontSize="7" fontWeight="bold">FAST</text>
        <text x="97" y="102" textAnchor="middle" className="proc-text-muted" fontSize="6.5">GATE</text>

        {/* Compression Trend Curve */}
        <path d="M37 36 Q60 54 97 68" fill="none" className="proc-accent-stroke" strokeWidth="2.2" strokeDasharray="3 3" />
        <path d="M92 68 h6 v-6" fill="none" className="proc-accent-stroke" strokeWidth="2" strokeLinecap="round" />
      </g>
    </>
  ),

  customs: (
    <>
      {/* ICEGATE EDI Customs Clearance & Gate Pass */}
      {/* Document Stack */}
      <g transform="translate(34, 18)">
        <rect width="108" height="128" rx="10" className="proc-fill-soft proc-stroke" strokeWidth="1.4" opacity="0.7" transform="rotate(-8 54 64)" />
      </g>

      {/* Main ICEGATE EDI Clearance Card */}
      <g transform="translate(50, 16)">
        <rect width="118" height="132" rx="10" className="proc-fill-card proc-stroke" strokeWidth="1.8" />
        
        {/* Terminal Header */}
        <rect x="12" y="12" width="94" height="20" rx="4" className="proc-fill-soft" />
        <text x="18" y="25" className="proc-accent-fill" fontSize="8.5" fontWeight="bold" letterSpacing="0.08em">ICEGATE EDI</text>
        <circle cx="94" cy="22" r="4" fill="#10b981" />

        {/* Data Checkpoints */}
        <g transform="translate(14, 40)">
          {[
            { label: "Bill of Entry (EDI)", done: true, y: 0 },
            { label: "Customs Valuation & Duty", done: true, y: 18 },
            { label: "Port Examination Release", done: true, y: 36 },
            { label: "Direct Port Out of Charge", done: true, y: 54 },
          ].map((row, idx) => (
            <g key={idx} transform={`translate(0, ${row.y})`}>
              <rect width="90" height="13" rx="3" className="proc-fill-soft" opacity="0.6" />
              <circle cx="7" cy="6.5" r="4" fill="#10b981" />
              <path d="M5.5 6.5 l1.5 1.5 3-3" stroke="#ffffff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <text x="16" y="9.5" className="proc-text" fontSize="6.5" fontWeight="semibold">{row.label}</text>
            </g>
          ))}
        </g>
      </g>

      {/* Big Official Stamp Badge: CUSTOMS CLEARED */}
      <g transform="translate(154, 42)">
        <rect width="98" height="88" rx="12" className="proc-badge-bg proc-accent-stroke" strokeWidth="2.5" />
        <rect x="6" y="6" width="86" height="76" rx="8" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        
        <circle cx="49" cy="34" r="16" fill="#10b981" />
        <path d="M42 34 l5 5 10-10" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        
        <text x="49" y="62" textAnchor="middle" fill="#ffffff" fontSize="8.5" fontWeight="bold" letterSpacing="0.08em">CUSTOMS</text>
        <text x="49" y="73" textAnchor="middle" className="proc-accent-fill" fontSize="7.5" fontWeight="bold" letterSpacing="0.06em">PASSED &amp; OUT</text>
      </g>
    </>
  ),

  forwarding: (
    <>
      {/* Global Multimodal Freight Movement */}
      {/* Global Trade Trajectory Arc */}
      <path d="M26 122 Q120 40 254 96" fill="none" className="proc-accent-stroke" strokeWidth="2.5" strokeDasharray="6 5" />
      
      {/* Ocean Container Vessel */}
      <g transform="translate(34, 76)">
        {/* Ship Hull */}
        <path d="M8 32 L46 32 L56 16 L2 16 Z" className="proc-badge-bg" />
        <path d="M2 16 L12 28 L46 28 L56 16 Z" className="proc-accent-fill" opacity="0.9" />
        {/* Cargo Containers */}
        <rect x="12" y="4" width="12" height="12" rx="2" className="proc-fill-card proc-stroke" strokeWidth="1" />
        <rect x="26" y="4" width="12" height="12" rx="2" className="proc-badge-bg proc-stroke" strokeWidth="1" />
        <rect x="40" y="4" width="10" height="12" rx="2" className="proc-accent-fill proc-stroke" strokeWidth="1" />
        <rect x="18" y="-6" width="12" height="10" rx="2" className="proc-fill-soft proc-stroke" strokeWidth="1" />
        {/* Water Wake */}
        <path d="M0 36 h60 M6 40 h48" className="proc-accent-stroke" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
      </g>

      {/* Modern Cargo Air Jet */}
      <g transform="translate(104, 22)">
        {/* Fuselage & Wing */}
        <path d="M12 26 L46 16 L76 14 Q84 14 86 18 Q84 22 74 24 L36 34 Z" className="proc-fill-card proc-stroke" strokeWidth="1.6" />
        <path d="M38 18 L24 2 L34 2 L54 16 Z" className="proc-accent-fill" />
        <path d="M34 24 L22 46 L30 48 L48 27 Z" className="proc-badge-bg" />
        {/* Jet engine */}
        <rect x="42" y="27" width="12" height="5" rx="2.5" className="proc-stroke" strokeWidth="1.2" />
        {/* Motion lines */}
        <path d="M6 26 h-12 M0 30 h-10" className="proc-accent-stroke" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      </g>

      {/* Destination Express Courier Dispatch */}
      <g transform="translate(196, 68)">
        <rect width="64" height="52" rx="8" className="proc-fill-card proc-accent-stroke" strokeWidth="1.8" />
        <rect x="8" y="8" width="48" height="12" rx="3" className="proc-badge-bg" />
        <text x="32" y="16.5" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="bold" letterSpacing="0.05em">DOOR STEP</text>
        
        {/* Package Carton */}
        <g transform="translate(18, 26)">
          <rect width="28" height="18" rx="2" className="proc-fill-soft proc-stroke" strokeWidth="1.2" />
          <path d="M14 0 v18 M0 9 h28" className="proc-accent-stroke" strokeWidth="1.2" strokeLinecap="round" />
        </g>
      </g>

      {/* Live Active Route Tracker */}
      <g transform="translate(102, 114)">
        <rect width="88" height="22" rx="11" className="proc-badge-bg" />
        <circle cx="14" cy="11" r="4" fill="#10b981" />
        <text x="50" y="14.5" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontWeight="bold" letterSpacing="0.06em">ROUTE ACTIVE</text>
      </g>
    </>
  ),
};

export function ProcessArtwork({ step }: { step: ProcessStep }) {
  return (
    <svg
      viewBox="0 0 280 164"
      aria-hidden="true"
      className="h-full w-full max-w-sm select-none"
      fill="none"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      {/* Ground Horizon Ambient Shadow */}
      <ellipse cx="140" cy="150" rx="105" ry="6" className="proc-stroke" opacity="0.12" stroke="none" fill="currentColor" />
      {illustrations[step] ?? illustrations.mapping}
    </svg>
  );
}
