const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
];

export default function Nav() {
  return (
    <nav className="fixed top-5 left-1/2 z-[2000] flex max-w-[calc(100vw-40px)] -translate-x-1/2 items-center gap-7 rounded-full border border-violet-600/14 bg-white/72 py-2.75 pr-3 pl-5.5 shadow-[0_8px_30px_rgba(80,30,160,.10)] backdrop-blur-[18px]">
      <a href="#top" className="flex font-display text-[15px] font-bold tracking-[-.01em] text-[#1c1430] no-underline">
        <img src="/src/assets/logo-D.png" alt="logo" className="w-6" />
        <span className="text-violet-600">.</span>
      </a>
      <div className="hidden items-center gap-5.5 md:flex">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-semibold text-[#5a5170] no-underline transition-colors hover:text-violet-600"
          >
            {link.label}
          </a>
        ))}
      </div>
      <a
        href="#contact"
        className="rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white no-underline shadow-[0_4px_14px_rgba(124,58,237,.32)]"
      >
        Contact
      </a>
    </nav>
  );
}
