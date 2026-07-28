import { stackGroups } from '../../data/portfolio';

export default function Stack() {
  return (
    <section id="stack" className="py-22.5">
      <div data-reveal className="reveal mb-10.5">
        <div className="mb-4 font-mono text-[13px] tracking-[.18em] text-purple-500 uppercase">// stack</div>
        <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold tracking-[-.02em]">
          Tools I reach for
        </h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4.5">
        {stackGroups.map((g) => (
          <div
            key={g.label}
            data-reveal
            className="reveal rounded-[18px] border border-violet-600/12 bg-white p-6 shadow-[0_8px_28px_rgba(80,30,160,.05)]"
          >
            <div className="mb-4 font-display text-[15px] font-semibold text-violet-600">{g.label}</div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((t) => (
                <span
                  key={t}
                  className="rounded-[9px] bg-violet-600/7 px-3 py-1.5 text-[13.5px] font-medium text-[#4a3d63]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
