const painPoints = [
  {
    title: "You already know the sentence is weak",
    description:
      "The frustrating part is not detection. You can usually feel when a sentence lands vague, flat, or generic the moment you reread it.",
  },
  {
    title: "But feeling it does not give you a better vocabulary",
    description:
      "Most writing tools score, flag, or rewrite after the fact. They do not help you build the set of words you want to have on hand next time.",
  },
  {
    title: "So your real ideas keep arriving diluted",
    description:
      "The result is not just weaker prose. It is weaker communication, weaker self-expression, and people missing the point you were actually trying to make.",
  },
];

export default function Pain() {
  return (
    <section id="pain" className="site-section">
      <div className="site-container">
        <div className="section-heading">
          <p className="section-kicker">The Real Problem</p>
          <h2 className="section-title">The problem is not that you lack feedback. It is that feedback does not compound.</h2>
          <p className="section-copy">
            Eloq is built for people who are tired of tools that tell them a sentence is weak without helping them build the vocabulary that would have made it stronger in the first place.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {painPoints.map((item) => (
            <article key={item.title} className="eloq-card">
              <div className="eyebrow-rule" />
              <h3 className="text-2xl font-display leading-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
