import logoImg from '../assets/logo-D.png';
import { useLanguage } from '../hooks/useLanguage';

const LANGUAGES = ['en', 'es'];

export default function Nav() {
  const { t, language, setLanguage } = useLanguage();

  const LINKS = [
    { href: '#about', label: t.nav.about },
    { href: '#stack', label: t.nav.stack },
    { href: '#work', label: t.nav.work },
    { href: '#experience', label: t.nav.experience },
  ];

  return (
    <nav className="fixed top-5 left-1/2 z-[2000] flex max-w-[calc(100vw-40px)] -translate-x-1/2 items-center gap-7 rounded-full border border-violet-600/14 bg-white/72 py-2.75 pr-3 pl-5.5 shadow-[0_8px_30px_rgba(80,30,160,.10)] backdrop-blur-[18px]">
      <a href="#top" className="flex items-center font-display text-[15px] font-bold tracking-[-.01em] text-[#1c1430] no-underline">
        <img src={logoImg} alt="logo" className="w-6 shrink-0" />
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
      <div
        role="group"
        aria-label="Language"
        className="flex items-center gap-0.5 rounded-full border border-violet-600/20 bg-violet-600/10 p-1"
      >
        {LANGUAGES.map((lng) => (
          <button
            key={lng}
            type="button"
            onClick={() => setLanguage(lng)}
            aria-pressed={language === lng}
            className={`rounded-full px-2.75 py-1.25 text-xs font-bold tracking-[.02em] uppercase transition-colors ${
              language === lng
                ? 'bg-violet-600 text-white shadow-[0_2px_10px_rgba(124,58,237,.4)]'
                : 'text-violet-600/55 hover:text-violet-600'
            }`}
          >
            {lng}
          </button>
        ))}
      </div>
      <a
        href="#contact"
        className="rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white no-underline shadow-[0_4px_14px_rgba(124,58,237,.32)]"
      >
        {t.nav.contact}
      </a>
    </nav>
  );
}
