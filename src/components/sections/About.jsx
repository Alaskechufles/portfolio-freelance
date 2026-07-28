const STATS = [
  { value: '4+', label: 'Years building' },
  { value: '20+', label: 'Technologies' },
];

export default function About() {
  return (
    <section id="about" className="py-22.5">
      <div data-reveal className="reveal max-w-225">
        <div className="mb-4.5 font-mono text-[13px] tracking-[.18em] text-purple-500 uppercase">
          // about
        </div>
        <h2 className="mb-6.5 max-w-190 font-display text-[clamp(28px,4vw,42px)] leading-[1.12] font-bold tracking-[-.02em]">
          Engineer at heart, product-minded by habit.
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
          <p className="text-[17px] leading-[1.7] text-[#5a5170]">
            I&apos;m a full stack developer with years of experience shipping production software — from
            responsive front-ends in React and Tailwind to robust APIs in Node, Laravel and FastAPI. Lately
            I&apos;ve been building AI-native features: retrieval pipelines, semantic search and LLM agents.
          </p>
          <p className="text-[17px] leading-[1.7] text-[#5a5170]">
            I care about clean architecture, fast load times and interfaces that feel effortless. I work
            equally well solo or embedded in a team — and I&apos;d rather ship something small that works
            than plan something big that doesn&apos;t.
          </p>
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
