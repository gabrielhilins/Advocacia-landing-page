import Image from "next/image";

interface DevelopedByProps {
  className?: string;
}

export function DevelopedBy({ className = "" }: DevelopedByProps) {
  return (
    <div className={`flex justify-center items-center gap-2 text-[10px] tracking-[0.15em] uppercase font-[family-name:var(--font-quicksand)] text-white ${className}`}>
      <span className="italic text-white/40">desenvolvido por</span>
      <a
        href="https://ggabstechdesign.com.br"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center"
      >
        <Image
          src="/Wordmark SVG.svg"
          alt="GGABS"
          width={60}
          height={20}
          className="h-5 w-auto transition-transform duration-300 ease-out group-hover:-translate-y-1"
        />
      </a>
    </div>
  );
}
