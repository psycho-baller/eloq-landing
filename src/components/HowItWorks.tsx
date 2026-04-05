const steps = [
  {
    title: "Save what you overuse",
    body: "Capture the words and phrases that keep weakening your writing instead of waiting for another tool to flag them after the draft is done.",
  },
  {
    title: "Build the sharper side",
    body: "Add the underused words you want to reach for more often and connect them into deliberate replacement relationships you actually believe in.",
  },
  {
    title: "Export the graph everywhere else",
    body: "Accepted links become a local vocabulary graph that downstream consumers can read while you write, so the work compounds instead of disappearing.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="site-section">
      <div className="site-container">
        <div className="section-heading">
          <p className="section-kicker">How It Works</p>
          <h2 className="section-title">A vocabulary graph, not a chat bot.</h2>
          <p className="section-copy">
            Eloq separates the words you default to from the words you want to reinforce, then turns that into accepted links you can review, reuse, and carry with you.
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <article key={step.title} className="eloq-card">
                <p className="text-sm uppercase tracking-[0.24em] text-[hsl(var(--primary))]">
                  Step {index + 1}
                </p>
                <h3 className="mt-3 text-2xl font-display text-foreground">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">{step.body}</p>
              </article>
            ))}
          </div>

          <div className="eloq-panel">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
              <span>Graph Snapshot</span>
              <span className="rounded-full border border-[hsl(var(--primary))/0.4] px-3 py-1 text-[hsl(var(--primary))]">
                Local-first
              </span>
              <span className="rounded-full border border-border/80 px-3 py-1">
                AI as annotation
              </span>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-[0.85fr_auto_0.85fr] md:items-center">
              <div className="rounded-[24px] border border-border/70 bg-[rgba(180,110,105,0.09)] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[rgb(180,110,105)]">
                  overused
                </p>
                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl border border-white/5 bg-black/10 px-4 py-3 text-lg">
                    thing
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-black/10 px-4 py-3 text-lg">
                    interesting
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-black/10 px-4 py-3 text-lg">
                    good
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="rounded-full border border-[hsl(var(--primary))/0.35] bg-[hsl(var(--primary))/0.1] px-3 py-2 text-sm text-[hsl(var(--primary))]">
                  connect
                </div>
              </div>

              <div className="rounded-[24px] border border-border/70 bg-[hsl(var(--primary))/0.08] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-[hsl(var(--primary))]">
                  underused
                </p>
                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl border border-white/5 bg-black/10 px-4 py-3 text-lg">
                    constraint
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-black/10 px-4 py-3 text-lg">
                    precise
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-black/10 px-4 py-3 text-lg">
                    compelling
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[22px] border border-border/80 bg-[rgba(255,255,255,0.02)] p-5">
              <p className="text-sm text-foreground/90">
                Eloq can suggest new connections, but the product stays grounded in accepted links, practical rationale, and vocabulary you deliberately choose to keep rather than disposable one-off fixes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
