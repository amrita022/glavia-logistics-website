import Image from "next/image";

export function Brand({ full = false }: { full?: boolean }) {
  return (
    <a
      href="#home"
      aria-label="Glavia Logistics LLP home"
      className="brand-logo inline-flex shrink-0 items-center gap-2 rounded-lg px-1.5 py-1"
    >
      {full ? (
        <Image unoptimized src="/glavia-lockup.png" width={520} height={165} className="h-auto w-44" alt="" />
      ) : (
        <>
          <Image unoptimized src="/glavia-icon.png" width={96} height={95} className="h-8 w-auto sm:h-9" alt="" />
          <Image unoptimized src="/glavia-wordmark.png" width={300} height={76} className="h-auto w-24 sm:w-28" alt="" />
        </>
      )}
    </a>
  );
}
