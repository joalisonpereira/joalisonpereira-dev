import Link from 'next/link';
import LangToggle from './LangToggle';

const navLinks = [
  { label: 'Trajetória', href: '#experiencia' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Habilidades', href: '#habilidades' }
];

export default function Header() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-[#131313]/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-360 items-center justify-between px-8 py-6">
        <Link
          href="/"
          className="font-headline text-2xl font-bold tracking-tighter text-white"
        >
          &lt;JP/&gt;
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-headline text-sm tracking-tighter text-neutral-500 uppercase transition-colors duration-200 hover:text-white"
            >
              {label}
            </a>
          ))}
          <LangToggle />
          <button className="bg-primary px-6 py-2 font-headline text-xs font-bold tracking-widest text-on-primary uppercase transition-transform active:scale-95">
            Contato
          </button>
        </div>
      </div>
    </nav>
  );
}
