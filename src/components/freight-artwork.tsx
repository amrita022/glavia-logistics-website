export type FreightMode = "air" | "sea" | "courier";

export function FreightArtwork({ mode }: { mode: FreightMode }) {
  return (
    <svg viewBox="0 0 240 110" aria-hidden="true" className={`freight-art freight-${mode} h-full w-full`} fill="none" stroke="#26374c" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
      <g className="freight-trail" stroke="#7298bf" strokeDasharray="4 6">
        <path d={mode === "air" ? "M15 91 Q75 91 114 62" : mode === "sea" ? "M22 82 Q36 76 50 82 T78 82 T106 82" : "M29 84 84 53"} />
      </g>
      <g className="freight-subject">
        {mode === "air" && <>
          <path fill="#89bcff" d="m121 54-43-31 10-4 57 23zm-24 9-28-13 7-4 36 9z" />
          <path fill="#f3f7ff" d="m74 66 25-5 68-32q15-7 21-2 3 6-12 15l-72 34q-12 5-23-1z" />
          <path fill="#89bcff" d="m133 51-13 41-12 4 3-35zm-45 16L68 48l7-3 25 16z" />
          <path d="m166 32 6 2 7-3" />
        </>}
        {mode === "sea" && <>
          <path fill="#f3f7ff" d="m61 57 93-24 30 14-89 31z" />
          <path fill="#89bcff" d="m61 57 34 15 89-25-14 21-74 23-27-14z" />
          <path fill="#596579" d="m61 57 34 15 1 19-27-14z" />
          <path fill="#cedef1" d="m75 53 1-18 18-5 14 6v16l-19 7z" />
          <path d="m79 39 9 4 15-4m-14 4v5" />
          {[0, 1].map(i => <g key={i} transform={`translate(${i * 24} ${-i * 7})`}>
            <path fill="#89bcff" d="m104 48 20-6 14 7-21 7z" /><path fill="#cedef1" d="m104 48 13 8 21-7v10l-21 7-13-7z" /><path d="m117 56v10m6-12v9m7-11v9" />
          </g>)}
        </>}
        {mode === "courier" && <>
          <path fill="#cedef1" d="m79 64 57-24 30 15-55 26z" /><path fill="#89bcff" d="m79 64 32 17 55-26v5l-55 27-32-17z" />
          <g fill="#26374c"><ellipse cx="108" cy="87" rx="4" ry="6" /><ellipse cx="158" cy="65" rx="4" ry="6" /></g>
          <path d="M83 66 72 39l-12-6" strokeWidth="4" />
          <path fill="#f2c875" d="m100 45 31-14 21 10-31 15zm0 0v18l21 12V56zm21 11 31-15v20l-31 14z" />
          <path fill="#fff0cc" d="m111 40 6-3 22 10-6 3z" />
        </>}
      </g>
    </svg>
  );
}
