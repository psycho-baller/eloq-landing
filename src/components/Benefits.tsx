const benefits = [
  {
    label: "Less diagnosis",
    body: "Spend less time being told a sentence is weak and more time building the vocabulary that prevents weak sentences from recurring.",
  },
  {
    label: "Sharper writing",
    body: "Turn default wording into deliberate wording by building a vocabulary graph you can keep, revisit, and trust.",
  },
  {
    label: "Clearer thought",
    body: "More exact language makes your own thinking easier to inspect, refine, and communicate.",
  },
  {
    label: "Stronger self-expression",
    body: "Stop sounding flatter than you are. Eloq helps your writing carry more of the nuance you already feel.",
  },
  {
    label: "Better communication",
    body: "When your word choice gets more precise, people miss your point less often and your writing holds together more cleanly.",
  },
  {
    label: "Local-first trust",
    body: "Your vocabulary graph lives locally. The product is designed to stay grounded in your own accepted links rather than a cloud dashboard.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="site-section pt-10">
      <div className="site-container">
        <div className="section-heading">
          <p className="section-kicker">What Eloq Gives You</p>
          <h2 className="section-title">A way to improve your vocabulary that actually accumulates.</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((item) => (
            <article key={item.label} className="eloq-panel">
              <p className="text-xs uppercase tracking-[0.24em] text-[hsl(var(--primary))]">
                {item.label}
              </p>
              <p className="mt-4 text-lg leading-8 text-foreground/88">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
