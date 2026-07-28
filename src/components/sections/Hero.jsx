import heroImg from '../../assets/diego-hero.png';
import cvFile from '../../assets/DiegoHuarsayaCruz-CV.pdf';

const SOCIALS = [
  { label: 'Gh', href: 'https://github.com/Alaskechufles' },
  { label: 'In', href: 'https://www.linkedin.com/in/diegohuarsaya' },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="grid min-h-screen grid-cols-1 items-center gap-10 pt-35 pb-17.5 md:grid-cols-[1.02fr_minmax(0,1fr)]"
    >
      <div className="flex flex-col items-start">
        <div data-reveal className="reveal">
          <div className="mb-6.5 inline-flex items-center gap-2.25 rounded-full border border-violet-600/16 bg-violet-600/8 px-3.75 py-1.75 text-[13px] font-semibold text-violet-600">
            <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,.18)]" />
            Available for freelance
          </div>
        </div>
        <div
          data-reveal
          data-delay=".04s"
          className="reveal mb-3.5 font-mono text-sm tracking-[.16em] text-[#8a7fa3] uppercase"
        >
          Hi, I&apos;m Diego
        </div>
        <h1
          data-reveal
          data-delay=".08s"
          className="reveal mb-6 font-display text-[clamp(42px,6vw,78px)] leading-none font-bold tracking-[-.035em]"
        >
          FULL STACK
          <br />
          <span className="bg-[linear-gradient(115deg,#7c3aed,#d946ef_55%,#6366f1)] bg-clip-text text-transparent">
            DEVELOPER
          </span>
        </h1>
        <p
          data-reveal
          data-delay=".12s"
          className="reveal mb-8.5 max-w-120 text-[clamp(16px,1.6vw,19px)] leading-[1.65] text-[#5a5170]"
        >
          I build web &amp; AI products end-to-end — React interfaces, Node and Python backends, and
          LLM-powered features that actually ship.
        </p>
        <div data-reveal data-delay=".16s" className="reveal mb-8.5 flex flex-wrap gap-3">
          <a
            href="#work"
            className="rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 px-7 py-3.75 text-[15px] font-semibold text-white no-underline shadow-[0_12px_30px_rgba(124,58,237,.32)]"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-violet-600/20 bg-white px-7 py-3.75 text-[15px] font-semibold text-[#1c1430] no-underline shadow-[0_4px_14px_rgba(80,30,160,.06)] hover:bg-violet-600/5"
          >
            Hire me
          </a>
          <a
            href={cvFile}
            download="Diego-Huarsaya-CV.pdf"
            className="flex items-center gap-2 rounded-xl border border-violet-600/20 bg-white px-7 py-3.75 text-[15px] font-semibold text-[#1c1430] no-underline shadow-[0_4px_14px_rgba(80,30,160,.06)] hover:bg-violet-600/5"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v12" />
              <path d="M6.5 10.5 12 16l5.5-5.5" />
              <path d="M4 20h16" />
            </svg>
            Download CV
          </a>
        </div>
        <div data-reveal data-delay=".2s" className="reveal flex items-center gap-4.5">
          <span className="font-mono text-[11.5px] tracking-[.16em] text-[#a396bd] uppercase">Follow</span>
          <span className="h-px w-8.5 bg-violet-600/24" />
          <div className="flex gap-2.5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9.5 w-9.5 items-center justify-center rounded-[11px] border border-violet-600/16 bg-white font-display text-[13px] font-bold text-violet-600 no-underline shadow-[0_4px_12px_rgba(80,30,160,.06)] hover:bg-violet-600 hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        data-reveal
        data-delay=".1s"
        className="reveal-slow relative -mt-13 flex min-w-0 items-center justify-center self-center"
      >
        <div className="absolute bottom-0 left-1/2 aspect-[1/1.06] w-full -translate-x-1/2 rounded-[48%_52%_40%_60%/55%_46%_54%_45%] bg-[linear-gradient(165deg,#8b5cf6_0%,#a855f7_45%,#d946ef_100%)] shadow-[0_34px_70px_rgba(124,58,237,.28)]" />
        <div className="absolute top-[6%] left-[-6px] h-30 w-30 bg-[radial-gradient(rgba(124,58,237,.35)_1.6px,transparent_1.6px)] bg-[length:16px_16px]" />
        <div className="absolute right-[-4px] bottom-[16%] h-24 w-24 bg-[radial-gradient(rgba(217,70,239,.32)_1.6px,transparent_1.6px)] bg-[length:16px_16px]" />
        <div className="absolute bottom-[2%] left-1/2 aspect-[1/1.1] w-[106%] -translate-x-1/2 rounded-[48%_52%_40%_60%/55%_46%_54%_45%] border-[1.5px] border-dashed border-violet-600/22" />
        <img
          src={heroImg}
          alt="Diego Huarsaya"
          className="relative block w-full max-w-115 [filter:drop-shadow(0_22px_44px_rgba(40,15,90,.3))]"
        />
        <div className="absolute bottom-[14%] left-[-10px] flex items-center gap-2.5 rounded-[14px] border border-white/80 bg-white/90 px-3.75 py-2.75 shadow-[0_14px_32px_rgba(60,25,120,.18)] backdrop-blur-[14px]">
          <span className="font-display text-[22px] font-bold text-violet-600">4+</span>
          <span className="text-xs leading-[1.3] font-semibold text-[#5a5170]">
            years
            <br />
            experience
          </span>
        </div>
        {/* <div className="absolute top-[12%] right-[-8px] flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-3.5 py-2.5 shadow-[0_14px_32px_rgba(60,25,120,.18)] backdrop-blur-[14px]">
          <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,.2)]" />
          <span className="text-[12.5px] font-semibold whitespace-nowrap text-[#1c1430]">Open to work</span>
        </div> */}
      </div>
    </section>
  );
}
