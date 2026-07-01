/**
 * Slow horizontal marquee ribbon of brand values. Uses a CSS keyframe (defined
 * inline via Tailwind arbitrary values) so it runs on the compositor thread
 * with zero JS. Duplicated content ensures a seamless loop.
 */
const WORDS = [
  "Bespoke",
  "Handcrafted",
  "Kannur, Kerala",
  "Since 2012",
  "Award Winning",
  "Edible Art",
  "By Ayisha",
];

export function Marquee() {
  const strip = (
    <div className="flex items-center gap-16 shrink-0 pr-16">
      {WORDS.map((w) => (
        <span
          key={w}
          className="font-script italic text-3xl md:text-4xl text-[var(--cream)]/85 whitespace-nowrap flex items-center gap-16"
        >
          {w}
          <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
        </span>
      ))}
    </div>
  );

  return (
    <section
      aria-label="Ayishaz Cakery values"
      className="relative py-10 overflow-hidden border-y border-[rgba(212,175,55,0.12)] bg-[var(--chocolate)]/40"
    >
      <div
        className="flex w-max animate-marquee"
        style={{ animation: "marquee 40s linear infinite" }}
      >
        {strip}
        {strip}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
