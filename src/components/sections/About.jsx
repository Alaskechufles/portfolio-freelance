import { useLanguage } from '../../hooks/useLanguage';

export default function About() {
  const { t } = useLanguage();

  const STATS = [
    { value: '4+', label: t.about.statYears },
    { value: '20+', label: t.about.statTech },
  ];

  return (
    <section id="about" className="py-22.5">
      <div data-reveal className="reveal max-w-225">
        <div className="mb-4.5 font-mono text-[13px] tracking-[.18em] text-purple-500 uppercase">
          {t.about.kicker}
        </div>
        <h2 className="mb-6.5 max-w-190 font-display text-[clamp(28px,4vw,42px)] leading-[1.12] font-bold tracking-[-.02em]">
          {t.about.heading}
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
          <p className="text-[17px] leading-[1.7] text-[#5a5170]">{t.about.paragraph1}</p>
          <p className="text-[17px] leading-[1.7] text-[#5a5170]">{t.about.paragraph2}</p>
        </div>
        <div className="mt-11 grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4.5">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-[18px] border border-violet-600/12 bg-white p-6 shadow-[0_8px_28px_rgba(80,30,160,.05)]"
            >
              <div className="font-display text-4xl leading-none font-bold text-violet-600">{s.value}</div>
              <div className="mt-1.5 text-sm text-[#8a7fa3]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
