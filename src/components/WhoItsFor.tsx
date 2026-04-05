const audiences = [
  "Writers revising important prose",
  "Students trying to sound more exact on the page",
  "Knowledge workers writing notes, docs, and memos",
  "People who are tired of generic rewrites and want a vocabulary they can actually keep",
];

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="site-section pt-10">
      <div className="site-container">
        <div className="eloq-panel grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="section-kicker">Who It’s For</p>
            <h2 className="section-title max-w-2xl">
              Eloq is for people who know the issue is deeper than one bad sentence.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              If your writing regularly lands weaker, vaguer, or more repetitive than you intended, Eloq gives you a structured way to build better word choice over time instead of starting from zero every draft.
            </p>
          </div>

          <div className="rounded-[28px] border border-border/80 bg-[rgba(255,255,255,0.02)] p-5">
            <ul className="space-y-4">
              {audiences.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-border/70 bg-[rgba(255,255,255,0.02)] px-4 py-4 text-base leading-7 text-foreground/88"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
