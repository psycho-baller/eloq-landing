export default function Pain() {
  return (
    <section id="pain" className="site-section">
      <div className="site-container">
        <div className="section-heading">
          <p className="section-kicker">The Problem</p>
          <h2 className="section-title max-w-[11ch]">Your idea is sharper than the sentence that lands.</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <article className="problem-card">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">What You Mean</p>
            <p className="mt-4 font-display text-[2.45rem] leading-[1.02] text-foreground md:text-[2.8rem]">
              “The constraint is structural, not technical.”
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="compare-chip compare-chip--target">constraint</span>
              <span className="compare-chip compare-chip--target">structural</span>
              <span className="compare-chip compare-chip--target">tradeoff</span>
            </div>
          </article>

          <div className="flex justify-center">
            <div className="problem-bridge">becomes</div>
          </div>

          <article className="problem-card">
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">What Lands</p>
            <p className="mt-4 font-display text-[2.45rem] leading-[1.02] text-foreground md:text-[2.8rem]">
              “This thing is interesting, but kind of hard.”
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="compare-chip compare-chip--avoid">thing</span>
              <span className="compare-chip compare-chip--avoid">interesting</span>
              <span className="compare-chip compare-chip--avoid">hard</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
