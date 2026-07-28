import { experience } from '../../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-22.5">
      <div data-reveal className="reveal mb-10.5">
        <div className="mb-4 font-mono text-[13px] tracking-[.18em] text-purple-500 uppercase">
          // experience
        </div>
        <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold tracking-[-.02em]">
          Where I&apos;ve worked
        </h2>
      </div>
      <div className="flex flex-col">
        {experience.map((e) => (
          <div
            key={`${e.company}-${e.role}`}
            data-reveal
            className="reveal grid grid-cols-[200px_1fr] gap-7 border-t border-violet-600/14 py-7 max-sm:grid-cols-1 max-sm:gap-2"
          >
            <div className="pt-1 font-mono text-sm text-[#9c90b5]">{e.period}</div>
            <div>
              <h3 className="mb-1 font-display text-xl font-semibold">{e.role}</h3>
              <div className="mb-3 flex flex-wrap items-center gap-x-2 text-[15px]">
                <span className="font-semibold text-violet-600">{e.company}</span>
                <span className="text-[#9c90b5]">·</span>
                <span className="text-[#9c90b5]">{e.location}</span>
              </div>
              <ul className="flex flex-col gap-2">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-[15px] leading-[1.65] text-[#5a5170]">
                    <span className="mt-2.25 h-1.25 w-1.25 flex-none rounded-full bg-violet-600/50" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
