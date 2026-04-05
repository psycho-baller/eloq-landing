export default function Pain() {
  return (
    <section id="pain" className="site-section">
      <div className="site-container">
        <div className="section-heading">
          <p className="section-kicker">The Core Problem</p>
          <h2 className="section-title">The thought starts precise. The sentence settles for weaker stand-ins.</h2>
          <p className="section-copy">
            Most tools intervene after the sentence is already flat. Eloq focuses on the vocabulary gap
            that keeps producing that sentence in the first place.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <article className="problem-card">
            <div className="eyebrow-rule" />
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">What You Mean</p>
            <p className="mt-4 font-display text-3xl leading-tight text-foreground">
              “The constraint is structural, not technical.”
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              The thought has shape. It has pressure. It has a specific word you actually wanted.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="compare-chip compare-chip--target">constraint</span>
              <span className="compare-chip compare-chip--target">structural</span>
              <span className="compare-chip compare-chip--target">tradeoff</span>
            </div>
          </article>

          <div className="flex justify-center">
            <div className="problem-bridge">gets flattened into</div>
          </div>

          <article className="problem-card">
            <div className="eyebrow-rule" />
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">What Lands</p>
            <p className="mt-4 font-display text-3xl leading-tight text-foreground">
              “This thing is interesting, but kind of hard.”
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              The fallback words are nearby, so the sentence reaches for them again. The meaning gets
              there diluted.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="compare-chip compare-chip--avoid">thing</span>
              <span className="compare-chip compare-chip--avoid">interesting</span>
              <span className="compare-chip compare-chip--avoid">hard</span>
            </div>
          </article>
        </div>

        <div className="mt-5 mini-note">
          <p className="text-base leading-8 text-foreground/90">
            Most software points at the right-hand side after it happens. Eloq changes the vocabulary
            bank upstream, so the draft has better words available before it goes flat.
          </p>
        </div>
      </div>
    </section>
  );
}
