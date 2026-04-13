import Image from 'next/image';

const sizeMap = {
  sm: 32,
  md: 48,
  lg: 72,
  xl: 96
} as const;

type LogoSize = keyof typeof sizeMap;

interface LogoProps {
  size?: LogoSize;
}

export function Logo({ size = 'md' }: LogoProps) {
  const px = sizeMap[size];

  function onClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button type="button" className="cursor-pointer" onClick={onClick}>
      <Image src="/logo2.png" alt="Joalison Pereira" width={px} height={px} />
    </button>
  );
}
