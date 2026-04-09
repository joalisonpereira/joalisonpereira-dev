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
  return (
    <footer className="w-full border-t border-outline-variant/10 bg-[#0E0E0E]">
      <div className="mx-auto flex w-full max-w-360 flex-col items-center justify-between px-8 py-12 md:flex-row">
        <div className="mb-8 font-body font-bold text-white md:mb-0">
          <span className="text-2xl tracking-tighter">
            &lt;JP/&gt;
          </span>
        </div>
        <div className="mb-8 flex flex-wrap justify-center gap-12 md:mb-0">
          {footerLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-body text-xs tracking-widest text-neutral-600 uppercase transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>
        <p className="font-body text-xs tracking-widest text-neutral-600 uppercase">
          © 2024 Architectural Monolith. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
