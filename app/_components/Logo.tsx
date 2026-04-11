import Image from 'next/image';
import Link from 'next/link';

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

  return (
    <Link href={'#home'}>
      <Image src="/logo2.png" alt="<JP/>" width={px} height={px} />
    </Link>
  );
}
