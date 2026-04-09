import Logo from './Logo';

const footerLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/joalison-pereira/'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/joalisonpereira'
  },
  {
    label: 'Email',
    href: 'mailto:joalisonpereira@gmail.com'
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-outline-variant/10 bg-surface-container-lowest">
      <div className="mx-auto flex w-full max-w-360 flex-col items-center justify-between px-8 py-12 md:flex-row">
        <div className="mb-8 md:mb-0">
          <Logo size="lg" />
        </div>
        <div className="mb-8 flex flex-wrap justify-center gap-12 md:mb-0">
          {footerLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-body text-xs tracking-widest text-outline uppercase transition-colors hover:text-primary"
            >
              {label}
            </a>
          ))}
        </div>
        <p className="font-body text-xs tracking-widest text-outline uppercase">
          © {currentYear} - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
