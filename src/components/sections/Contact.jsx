import { useLanguage } from '../../hooks/useLanguage';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/Alaskechufles' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/diegohuarsaya' },
];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="pt-22.5 pb-30">
      <div
        data-reveal
        className="reveal rounded-[30px] bg-gradient-to-br from-violet-600 to-fuchsia-500 px-8 py-17.5 text-center shadow-[0_30px_70px_rgba(124,58,237,.3)]"
      >
        <h2 className="mb-4.5 font-display text-[clamp(30px,5vw,52px)] font-bold tracking-[-.03em] text-white">
          {t.contact.heading}
        </h2>
        <p className="mx-auto mb-9 max-w-130 text-lg leading-[1.6] text-white/85">{t.contact.description}</p>
        <a
          href="mailto:diegohuarsayacruz@gmail.com"
          className="inline-block rounded-[14px] bg-white px-9 py-4.25 text-base font-bold text-violet-600 no-underline shadow-[0_10px_30px_rgba(0,0,0,.18)]"
        >
          diegohuarsayacruz@gmail.com
        </a>
        <div className="mt-8.5 flex justify-center gap-6">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-semibold text-white/90 no-underline"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-10 text-center text-[13.5px] text-[#9c90b5]">{t.contact.footer}</div>
    </section>
  );
}
