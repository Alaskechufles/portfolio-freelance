const TECH = ['RAG', 'LlamaIndex', 'Pinecone', 'FastAPI'];

export default function AiWork() {
  return (
    <section className="py-22.5">
      <div
        data-reveal
        className="reveal grid gap-8 rounded-[26px] border border-violet-600/14 bg-white p-8 shadow-[0_10px_34px_rgba(80,30,160,.06)] md:grid-cols-[1fr_auto] md:items-center md:p-12"
      >
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-600/16 bg-violet-600/8 px-3.5 py-1.5 text-[13px] font-semibold text-violet-600">
            🔒 Proprietary work
          </div>
          <h2 className="mb-4 font-display text-[clamp(24px,3.2vw,32px)] leading-[1.2] font-bold tracking-[-.02em]">
            Also engineering AI at BYU Pathway
          </h2>
          <p className="mb-6 max-w-160 text-[16px] leading-[1.7] text-[#5a5170]">
            As an AI Engineer at BYU Pathway (Idaho, USA), I build RAG pipelines, semantic search and
            vector retrieval systems running in production. The codebase and specific projects are
            proprietary, so there&apos;s no public demo or repo to link here — but I&apos;m glad to walk
            you through the architecture and approach in a conversation.
          </p>
          <div className="flex flex-wrap gap-1.75">
            {TECH.map((t) => (
              <span
                key={t}
                className="rounded-lg bg-violet-600/8 px-2.75 py-1.25 text-[12.5px] font-semibold text-[#6d3fbf]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <a
          href="#contact"
          className="rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 px-7 py-3.75 text-center text-[15px] font-semibold text-white no-underline shadow-[0_12px_30px_rgba(124,58,237,.32)]"
        >
          Let&apos;s talk
        </a>
      </div>
    </section>
  );
}
