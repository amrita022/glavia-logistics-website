import Image from "next/image";

export function Brand() {
  return (
    <a
      href="#home"
      aria-label="Glavia Logistics home"
      className="inline-flex shrink-0 items-center gap-2.5"
    >
      <Image src="/glavia-mark.svg" width={39} height={39} alt="" />
      <span className="flex flex-col">
        <strong className="text-[24px] leading-none font-bold tracking-[-.065em]">
          Glavia
        </strong>
        <span className="mt-1 whitespace-nowrap text-[8px] leading-none font-semibold tracking-[.3em] uppercase">
          Logistics LLP
        </span>
      </span>
    </a>
  );
}
