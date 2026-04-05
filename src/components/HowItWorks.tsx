const steps = [
  {
    title: "Catch your defaults",
    body: "Save the words and phrases you keep falling back on.",
  },
  {
    title: "Link better language",
    body: "Add the words you want yourself, then let AI suggest more when useful.",
  },
  {
    title: "Build effortless recall",
    body: "Eloq brings those links back while you revise so stronger wording becomes natural.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="site-section">
      <div className="site-container">
        <div className="section-heading">
          <p className="section-kicker">How Eloq Helps</p>
          <h2 className="section-title">Eloq trains recall, not just revision</h2>
          <p className="section-copy">
            The point is not more feedback. It is making stronger language easier to reach for the
            next time you write.
          </p>
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
