import Image from "next/image";

export function Brand({ full = false }: { full?: boolean }) {
  return (
    <a
      href="#home"
      aria-label="Glavia Logistics LLP home"
      className={`brand-logo block min-w-0 max-w-full rounded-lg px-1.5 py-1 ${full ? "w-48" : "w-36 sm:w-40"}`}
    >
      <Image
        unoptimized
        src="/glavia-lockup.png"
        width={520}
        height={165}
        className="block h-auto w-full"
        alt=""
      />
    </a>
  );
}
