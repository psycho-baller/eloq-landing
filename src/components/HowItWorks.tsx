const steps = [
  {
    title: "Save what you overuse",
    body: "Track the words that keep weakening your writing.",
  },
  {
    title: "Connect better alternatives",
    body: "Build your own replacement relationships, manually first.",
  },
  {
    title: "Let the graph travel",
    body: "The Mac app stays canonical. Obsidian and the browser extension read from it.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="site-section">
      <div className="site-container">
        <div className="section-heading">
          <p className="section-kicker">How It Works</p>
          <h2 className="section-title">A vocabulary graph, not another writing dashboard</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.title} className="eloq-card">
              <h3 className="text-[1.8rem] font-display leading-[1.02] text-foreground">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
