import { getProjects } from '../../data/portfolio';
import { useLanguage } from '../../hooks/useLanguage';

export default function Work() {
  const { t, language } = useLanguage();
  const projects = getProjects(language);

  return (
    <section id="work" className="py-22.5">
      <div data-reveal className="reveal mb-11.5 max-w-160">
        <div className="mb-4 font-mono text-[13px] tracking-[.18em] text-purple-500 uppercase">
          {t.work.kicker}
        </div>
        <h2 className="mb-4 font-display text-[clamp(28px,4vw,40px)] leading-[1.15] font-bold tracking-[-.02em]">
          {t.work.heading}
        </h2>
        <p className="text-[17px] leading-[1.65] text-[#5a5170]">{t.work.description}</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {projects.map((p) => (
          <div
            key={p.name}
            data-reveal
            className="reveal-card flex flex-col overflow-hidden rounded-[22px] border border-violet-600/12 bg-white shadow-[0_10px_34px_rgba(80,30,160,.06)] hover:border-violet-600/30 hover:shadow-[0_22px_54px_rgba(80,30,160,.14)]"
          >
            <div className="flex aspect-[16/10] flex-col gap-2.5 border-b border-violet-600/10 bg-[linear-gradient(150deg,rgba(124,58,237,.10),rgba(217,70,239,.07))] p-3.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.25 w-2.25 rounded-full bg-violet-600/28" />
                <span className="h-2.25 w-2.25 rounded-full bg-violet-600/20" />
                <span className="h-2.25 w-2.25 rounded-full bg-violet-600/14" />
              </div>
              <div className="flex flex-1 items-center justify-center overflow-hidden rounded-2.5 border border-violet-600/12 bg-[repeating-linear-gradient(45deg,rgba(124,58,237,.10)_0_12px,rgba(255,255,255,.55)_12px_24px)]">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.name} preview`}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <span className="font-mono text-[11.5px] text-[#a98fd0]">[ {p.name} mockup ]</span>
                )}
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6.5">
              <div className="flex flex-col gap-2.25">
                <h3 className="font-display text-[21px] font-bold tracking-[-.01em]">{p.name}</h3>
                <p className="text-[15px] leading-[1.6] text-[#5a5170]">{p.desc}</p>
              </div>
              <div className="flex flex-wrap gap-1.75">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg bg-violet-600/8 px-2.75 py-1.25 text-[12.5px] font-semibold text-[#6d3fbf]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-2.5 pt-2">
                <a
                target="_blank"
                  href={p.demo}
                  className="min-w-33 flex-1 rounded-[11px] bg-gradient-to-br from-violet-600 to-fuchsia-500 px-4 py-3 text-center text-sm font-semibold text-white no-underline shadow-[0_6px_18px_rgba(124,58,237,.26)]"
                >
                  {t.work.viewDemo}
                </a>
                {/* <a
                  href={p.code}
                  className="min-w-27.5 flex-1 rounded-[11px] border border-violet-600/20 bg-white px-4 py-3 text-center text-sm font-semibold text-[#1c1430] no-underline hover:bg-violet-600/5"
                >
                  View code
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
