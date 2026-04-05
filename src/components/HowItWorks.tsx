const steps = [
  {
    title: "Save what you overuse",
    body: "Capture the words and phrases that keep flattening your writing.",
  },
  {
    title: "Connect stronger alternatives",
    body: "Add the vocabulary you want to reach for instead, manually first and with AI only when useful.",
  },
  {
    title: "Read the graph everywhere else",
    body: "The Mac app stays the source of truth, while the browser extension and Obsidian plugin read the accepted graph.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="site-section">
      <div className="site-container">
        <div className="section-heading">
          <p className="section-kicker">How It Works</p>
          <h2 className="section-title">Eloq works earlier in the writing process.</h2>
          <p className="section-copy">
            It is not a chat surface and it is not a scoring dashboard. It is a private graph of weak
            defaults and stronger replacements that can keep compounding over time.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="eloq-card">
              <p className="text-sm uppercase tracking-[0.24em] text-primary">
                Step {index + 1}
              </p>
              <h3 className="mt-3 text-2xl font-display text-foreground">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">{step.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-5 mini-note">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-base leading-8 text-foreground/90">
              The Mac app is where the graph is built.
            </p>
            <p className="text-base leading-8 text-muted-foreground">
              The browser extension and Obsidian plugin only read the accepted connections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
