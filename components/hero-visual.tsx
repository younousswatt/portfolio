import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle,_rgba(0,113,227,0.20),_transparent_65%)] blur-2xl" />
      <div className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-[var(--shadow-soft)]">
        <Image
          src="/avatars/hero-avatar.svg"
          alt="Younouss Watt portrait illustration"
          width={720}
          height={820}
          className="h-[430px] w-full rounded-[24px] object-cover sm:h-[500px]"
          priority
        />
      </div>
    </div>
  );
}
